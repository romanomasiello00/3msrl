export type RoleKey = "story.lm.role" | "story.rm.role" | "story.gm.role";

export interface Contact {
  name: string;
  image: string;
  role: RoleKey;
  email?: string;
  /** International format, e.g. "+39 333 000 0000". Shown only when set. */
  phone?: string;
}

/** Company-wide line, shown first on the contact page. Add `phone` when there is one. */
export const GENERAL_CONTACT: { email: string; phone?: string } = {
  email: "administration@spiritsproject.it",
};

/** People on the contact page. Entries with neither email nor phone are hidden. */
export const TEAM: Contact[] = [
  {
    name: "Luigi Marinaro",
    image: "/email/luigi-ritratto.png",
    role: "story.lm.role",
    email: "luigi@spiritsproject.it",
  },
  {
    name: "Romano Masiello",
    image: "/email/romano-ritratto.png",
    role: "story.rm.role",
    email: "romano.masiello@spiritsproject.it",
  },
  {
    name: "Luigi Pio Marinaro",
    image: "/email/luigi-pio-marinaro-ritratto.png",
    role: "story.gm.role",
  },
];

/** `tel:` link from a display number: keeps digits and a leading +. */
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
