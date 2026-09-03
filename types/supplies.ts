import React from "react";

export type SupplyCategorySlug =
  | "automatizacion"
  | "control"
  | "medicion"
  | "rodamientos"
  | "electrico"
  | "operativo"
  | "especial"
  | "herramientas"
  | "epp";

export interface SupplyCategory {
  id: string;
  slug: SupplyCategorySlug;
  title: string;
  description: string;
  bulletPoints: string[];
  actionLabel: string;
  actionHref: string;
  isActive: boolean;
  icon: (props: { className?: string }) => React.JSX.Element;
}
