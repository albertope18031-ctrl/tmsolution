import React from "react";
import { SupplyCategory } from "@/types/supplies";

export const SUPPLY_CATEGORIES: SupplyCategory[] = [
  {
    id: "cat-herramientas",
    slug: "herramientas",
    title: "Herramienta Especializada",
    description: "Equipo técnico, manual, eléctrico y de corte para mantenimiento, taller y líneas de producción.",
    bulletPoints: [
      "Herramientas de impacto y rotación",
      "Abrasivos y discos de corte industrial",
      "Instrumentación de medición y torque",
    ],
    actionLabel: "Cotizar herramienta",
    actionHref: "#cotizar?cat=herramientas",
    isActive: true,
    icon: ({ className = "w-6 h-6" }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Llave inglesa y engranaje industrial */}
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        <circle cx="18" cy="6" r="1.5" />
      </svg>
    ),
  },
  {
    id: "cat-epp",
    slug: "epp",
    title: "Seguridad Industrial (EPP)",
    description: "Equipo de protección personal normado y certificado para cumplir con los estándares de la STPS y OSHA.",
    bulletPoints: [
      "Protección craneal, auditiva y respiratoria",
      "Calzado dieléctrico y guantes anticorte",
      "Arneses y líneas de vida para alturas",
    ],
    actionLabel: "Cotizar EPP",
    actionHref: "#cotizar?cat=epp",
    isActive: true,
    icon: ({ className = "w-6 h-6" }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Escudo protector y casco con cruz técnica */}
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    id: "cat-operativo",
    slug: "operativo",
    title: "Material Operativo y Soporte",
    description: "Insumos para la continuidad diaria de oficinas, áreas operativas e infraestructura general.",
    bulletPoints: [
      "Papelería corporativa e insumos de impresión",
      "Consumibles de cafetería e higiene industrial",
      "Material eléctrico básico y cableado de red",
    ],
    actionLabel: "Cotizar material operativo",
    actionHref: "#cotizar?cat=operativo",
    isActive: true,
    icon: ({ className = "w-6 h-6" }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Caja de suministros con conexión técnica */}
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: "cat-especial",
    slug: "especial",
    title: "Adquisiciones a la Medida",
    description: "Localizamos requerimientos especiales y piezas difíciles de conseguir. Desde un insumo básico hasta proyectos complejos.",
    bulletPoints: [
      "Abastecimiento bajo plano o número de parte",
      "Consolidación de órdenes de compra críticas",
      "Cotizaciones especiales sin mínimo de pedido",
    ],
    actionLabel: "Solicitar pieza especial",
    actionHref: "#cotizar?cat=especial",
    isActive: true,
    icon: ({ className = "w-6 h-6" }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Engranaje de custom sourcing con diana de precisión */}
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];
