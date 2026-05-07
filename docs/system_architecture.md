# MAJER System Architecture

> **Version:** 1.0 — 2026-05-07
> **Status:** Initiales Deployment (nova-tive.com). Domain-Ziel: digitale-bildung.de (Kauf ausstehend).
> **Update-Regel:** Dieses Dokument wird nur bei Architektur-Entscheidungen aktualisiert (nicht bei Code-Änderungen).

---

## 1. Service-Topologie

```
Internet
    │
    ▼
┌─────────────────────────────────┐
│         Cloudflare              │
│  DNS-Proxy + DDoS-Schutz        │
│  nova-tive.com (heute)          │
│  digitale-bildung.de (Ziel)     │
└────────────────┬────────────────┘
                 │ HTTPS :443 (Cloudflare terminiert SSL nach außen)
                 │ HTTP  :80  (Redirect → HTTPS via Traefik)
                 ▼
┌─────────────────────────────────────────────────────────────┐
│              Hostinger VPS (Ubuntu 22.04, EU-Region)        │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                  Traefik v3                          │   │
│  │  Reverse-Proxy + Let's Encrypt ACME                 │   │
│  │  Port 80 (HTTP) + 443 (HTTPS) + 8081 (Dashboard)   │   │
│  └──────┬─────────────┬──────────────┬─────────────────┘   │
│         │             │              │                      │
│         ▼             ▼              ▼                      │
│  ┌────────────┐ ┌──────────┐ ┌─────────────┐              │
│  │  Verein    │ │  Nova    │ │    n8n      │              │
│  │  Next.js   │ │  Next.js │ │ Automation  │              │
│  │ :3001      │ │ :3002    │ │ :5678       │              │
│  └────────────┘ └──────────┘ └──────┬──────┘              │
│                                     │                       │
│  ┌────────────────────────────────────────────────────┐    │
│  │              majer_internal (Docker Network)       │    │
│  │                                                    │    │
│  │  ┌─────────────┐  ┌──────────┐  ┌─────────────┐  │    │
│  │  │ Pocketbase  │  │PostgreSQL│  │   Portainer  │  │    │
│  │  │ :8090       │  │ :5432    │  │   :9000      │  │    │
│  │  │ NUR intern  │  │ intern   │  │ CF Access    │  │    │
│  │  └─────────────┘  └──────────┘  └─────────────┘  │    │
│  │                                                    │    │
│  │  ┌─────────────┐                                   │    │
│  │  │ Uptime Kuma │                                   │    │
│  │  │ :3201       │                                   │    │
│  │  └─────────────┘                                   │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

**Admin-Zugang (Cloudflare Access geschützt):**
```
Browser → Cloudflare Access (SSO) → traefik.nova-tive.com → Traefik Dashboard :8081
Browser → Cloudflare Access (SSO) → portainer.nova-tive.com → Portainer :9000
```

**Pocketbase Admin ist niemals öffentlich erreichbar:**
```
SSH-Tunnel: ssh -L 8090:127.0.0.1:8090 user@vps-ip
Browser → localhost:8090/_/
```

---

## 2. Domain-Routing

| Host | Ziel-Service | Aktuell | Ziel (nach Domain-Kauf) |
|---|---|---|---|
| `verein.nova-tive.com` | apps/verein Next.js :3001 | aktiv | → `verein.digitale-bildung.de` |
| `nova.nova-tive.com` | apps/nova Next.js :3002 | aktiv | → `nova.digitale-bildung.de` |
| `n8n.nova-tive.com` | n8n :5678 | aktiv | → `n8n.digitale-bildung.de` |
| `traefik.nova-tive.com` | Traefik Dashboard :8081 | via CF Access | → `traefik.digitale-bildung.de` |
| `portainer.nova-tive.com` | Portainer :9000 | via CF Access | → `portainer.digitale-bildung.de` |
| `status.nova-tive.com` | Uptime Kuma :3201 | aktiv | → `status.digitale-bildung.de` |

**Domain-Wechsel-Prozedur** (wenn digitale-bildung.de registriert):
1. Cloudflare: A-Record für digitale-bildung.de → VPS-IP
2. Traefik-Labels in `infra/docker-compose.yml` updaten (`nova-tive.com` → `digitale-bildung.de`)
3. `docker compose up -d` → Traefik holt neue Let's Encrypt Zertifikate automatisch

---

## 3. Trust Boundaries & Datenflüsse

```
┌─────────────────────────────────────────────────┐
│                  TRUST BOUNDARY                  │
│                                                  │
│  apps/verein  ──────────────────►  Pocketbase   │
│  (Vereinsplattform)   Auth-Token    (Vereins-DB) │
│                                     Source of    │
│                                      Truth       │
│                                                  │
│  apps/nova    ──── API-Bridge ────►  Pocketbase  │
│  (Nova OS)      packages/shared     (nur über    │
│                 ApiClient           definierte   │
│                                     Endpoints)   │
│                                                  │
│  n8n Workflows ──── Webhook ──────► apps/verein  │
│  (Automation)       /api/nova/      (Agenten-    │
│                     webhook         Ergebnisse)  │
│                                                  │
└─────────────────────────────────────────────────┘
```

**Regeln:**
- `apps/verein` und `apps/nova` kommunizieren **niemals direkt** miteinander.
- Geteilte Typen/Logik fließt **ausschließlich über `packages/`**.
- Nova greift auf Vereinsdaten **nur über die API-Bridge** in `packages/shared` zu.
- Pocketbase ist die **einzige Daten-Source of Truth** — kein paralleles Schreiben in andere DBs für Vereinsdaten.
- `postgres` dient ausschließlich n8n als interner State-Storage.

---

## 4. Authentifizierungskonzept

### Endnutzer (Vereinsmitglieder)
```
Browser → POST /api/auth/login → Next.js → Pocketbase Auth
Pocketbase → JWT Token → Next.js → httpOnly Cookie (Secure, SameSite=Strict)
Next.js Middleware → Cookie prüfen → Route Guard
```

### Admin-Bereiche (Traefik Dashboard, Portainer, n8n, PB-Admin)
```
Browser → Cloudflare Access (Google SSO / Email OTP) → Admin-Interface
```
- Cloudflare Access Policy: Nur heinrichmajer2005@gmail.com (und weitere Admins)
- Kein direkter Zugang ohne Cloudflare Access
- PB-Admin: Zusätzlich nur per SSH-Tunnel erreichbar (nicht mal via Traefik)

---

## 5. Port-Referenztabelle (kanonisch)

| Service | Interner Port | Externe Erreichbarkeit | Anmerkung |
|---|---|---|---|
| Verein Next.js | **3001** | via Traefik | Dev: localhost:3001 |
| Nova Next.js | **3002** | via Traefik | Dev: localhost:3002 |
| n8n | **5678** | via Traefik + Auth | Webhook-Endpoints öffentlich |
| Pocketbase Admin | **8090** | **NIEMALS öffentlich** | Nur SSH-Tunnel oder intern |
| Portainer | **9000** | via Cloudflare Access | Admin only |
| Uptime Kuma | **3201** | via Traefik | ⚠️ Auf VPS von 3001 migrieren! |
| Traefik Dashboard | **8081** | via Cloudflare Access | Admin only |
| PostgreSQL | **5432** | intern only | n8n State-Storage |
| Traefik HTTP | **80** | öffentlich | Redirect → HTTPS |
| Traefik HTTPS | **443** | öffentlich | TLS termination |

---

## 6. Backup-Routine

### Pocketbase-Datenbank
```
Täglich 02:00 UTC (n8n Cron):
  1. PB HTTP API → POST /_/api/backups (erzeugt .zip Snapshot)
  2. n8n lädt Snapshot via SCP/API ab
  3. Upload → Cloudflare R2 (verschlüsselt, AES-256)
  4. Retention: 30 Tage täglich, 12 Monate monatlich
  5. n8n sendet Erfolg/Fehler → Telegram Bot
```

### n8n Workflows
```
Bei jedem Workflow-Save (n8n Webhook):
  1. Export-API → JSON-Datei
  2. Automatischer git commit in infra/n8n/*.json
  3. git push → GitHub (als Backup und Version History)
```

### Uploads / Static Assets
```
Cloudflare R2 Bucket (Primärspeicher) → automatisch georepliziert
Kein separates Backup nötig solange R2 genutzt wird
```

### Recovery-Prozedur
```
1. Neuer VPS aufsetzen (Hostinger: <30min mit bestehendem Ubuntu-Image)
2. git clone majer-monorepo
3. cp .env.example .env && .env editieren (Werte aus passwortgesichertem Tresor)
4. docker compose -f infra/docker-compose.yml up -d
5. Pocketbase: letzten Backup-Snapshot von R2 herunterladen
6. pb_data/ mit Snapshot-Inhalt befüllen → PB neu starten
7. Ziel-Recovery-Zeit (RTO): < 2 Stunden
```

---

## 7. DSGVO-relevante Datenflüsse

| Datenkategorie | Speicherort | Retention | Rechtsgrundlage |
|---|---|---|---|
| Mitgliedsdaten (Name, E-Mail) | Pocketbase (Hostinger VPS, EU) | Bis Löschantrag + 10 Jahre (Buchführung) | Art. 6 Abs. 1 b DSGVO (Vertragserfüllung) |
| Aktivitätslogs | Pocketbase | 90 Tage | Art. 6 Abs. 1 f DSGVO (berechtigtes Interesse) |
| n8n Workflow-Logs | PostgreSQL (intern) | 30 Tage | Art. 6 Abs. 1 f DSGVO |
| Uploads/Bilder | Cloudflare R2 | Bis Löschantrag | Art. 6 Abs. 1 b DSGVO |

**Offene DSGVO-Aufgaben:**
- [ ] AVV mit Hostinger einholen (vor Produktiv-Go-Live)
- [ ] AVV mit Cloudflare prüfen (Data Processing Addendum)
- [ ] Datenschutzerklärung für verein.digitale-bildung.de verfassen
- [ ] Verarbeitungsverzeichnis (Art. 30 DSGVO) anlegen
