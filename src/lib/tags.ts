export interface Tag {
  slug: string;
  label: string;
  /** Warm Morandi brown, tuned to sit alongside the site's cream/wood palette. */
  color: string;
}

export const BLOG_TAGS: readonly Tag[] = [
  { slug: "learning", label: "Learning Notes", color: "#bfa58a" },
  { slug: "research", label: "Research", color: "#8d7b68" },
  { slug: "design", label: "Art & Design", color: "#c7a18b" },
  { slug: "life", label: "Life", color: "#a3a380" },
];

export const PROJECT_TAGS: readonly Tag[] = [
  { slug: "research", label: "Research", color: "#8d7b68" },
  { slug: "design", label: "Art & Design", color: "#c7a18b" },
  { slug: "tech", label: "Tech", color: "#a98467" },
];
