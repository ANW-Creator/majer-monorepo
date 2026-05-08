"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import type { Persona } from "@/lib/persona";
import { PERSONA_COOKIE, PERSONA_SEEN_COOKIE } from "@/lib/persona";

interface PersonaContextValue {
  persona: Persona | null;
  setPersona: (p: Persona) => void;
  showModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const PersonaContext = createContext<PersonaContextValue | null>(null);

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Strict`;
}

export function PersonaProvider({ children }: { children: React.ReactNode }) {
  const [persona, setPersonaState] = useState<Persona | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const saved = getCookie(PERSONA_COOKIE) as Persona | null;
    const seen = getCookie(PERSONA_SEEN_COOKIE);
    if (saved) {
      setPersonaState(saved);
    } else if (!seen) {
      setShowModal(true);
    }
  }, []);

  const setPersona = useCallback((p: Persona) => {
    setPersonaState(p);
    setCookie(PERSONA_COOKIE, p);
    setCookie(PERSONA_SEEN_COOKIE, "1");
    setShowModal(false);
  }, []);

  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => {
    setCookie(PERSONA_SEEN_COOKIE, "1");
    setShowModal(false);
  }, []);

  return (
    <PersonaContext.Provider
      value={{ persona, setPersona, showModal, openModal, closeModal }}
    >
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  const ctx = useContext(PersonaContext);
  if (!ctx) throw new Error("usePersona must be used within PersonaProvider");
  return ctx;
}
