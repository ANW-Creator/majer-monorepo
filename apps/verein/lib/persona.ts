export type Persona = "schueler" | "student" | "lehrer" | "foerderer";

export const PERSONAS: Record<
  Persona,
  { label: string; description: string; color: string; accent: string }
> = {
  schueler: {
    label: "Schüler:in",
    description: "14–18 Jahre, neugierig auf die digitale Welt",
    color: "text-blue-500",
    accent: "#3b82f6",
  },
  student: {
    label: "Student:in",
    description: "Im Studium, will mehr als Oberflächenwissen",
    color: "text-violet-500",
    accent: "#8b5cf6",
  },
  lehrer: {
    label: "Lehrer:in",
    description: "Digitale Bildung im Unterricht verankern",
    color: "text-teal-500",
    accent: "#14b8a6",
  },
  foerderer: {
    label: "Förderer:in",
    description: "Bildungsprojekte unterstützen und ermöglichen",
    color: "text-amber-500",
    accent: "#f59e0b",
  },
};

export const PERSONA_COOKIE = "majer_persona";
export const PERSONA_SEEN_COOKIE = "majer_persona_seen";
