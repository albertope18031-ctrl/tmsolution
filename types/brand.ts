export type BrandCategory = "epp" | "herramienta" | "oficina";

export interface Brand {
  id: string;
  name: string;
  category: BrandCategory;
  logoUrl?: string;
  websiteUrl?: string;
  tagline?: string;
  isActive: boolean;
  sortOrder: number;
}
