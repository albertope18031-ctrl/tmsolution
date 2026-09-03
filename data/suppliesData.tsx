import React from "react";
import { SupplyCategory } from "@/types/supplies";

export const SUPPLY_CATEGORIES: SupplyCategory[] = [
  {
    id: "cat-automatizacion",
    slug: "automatizacion",
    title: "Automatización",
    description: "Tecnología de automatización y control programable para líneas de producción y procesos continuos de alta precisión.",
    bulletPoints: [
      "Controladores lógicos programables (PLCs) y pantallas HMI",
      "Servomotores de alta respuesta y servodrives industriales",
      "Variadores de frecuencia (VFD) y sensores de proximidad/ópticos",
    ],
    actionLabel: "Cotizar automatización",
    actionHref: "#cotizar?cat=automatizacion",
    isActive: true,
    icon: ({ className = "w-7 h-7" }) => (
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
        {/* Microchip / PLC procesador con pistas lógicas */}
        <rect x="4" y="4" width="16" height="16" rx="2.5" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
      </svg>
    ),
  },
  {
    id: "cat-control",
    slug: "control",
    title: "Control Industrial",
    description: "Equipos de maniobra, arranque suave y envolventes certificadas para tableros de potencia y control de motores.",
    bulletPoints: [
      "Contactores magnéticos y relevadores térmicos de sobrecarga",
      "Arrancadores suaves y botoneras industriales de mando",
      "Gabinetes certificados NEMA / IP y accesorios de montaje",
    ],
    actionLabel: "Cotizar control industrial",
    actionHref: "#cotizar?cat=control",
    isActive: true,
    icon: ({ className = "w-7 h-7" }) => (
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
        {/* Gabinete de control con interruptores y conmutadores */}
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 8h10" />
        <path d="M7 12h10" />
        <path d="M7 16h5" />
        <circle cx="16" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "cat-medicion",
    slug: "medicion",
    title: "Medición y Energía",
    description: "Instrumentación analítica, monitoreo de redes eléctricas y transmisores para optimización y control energético.",
    bulletPoints: [
      "Analizadores de redes y monitoreo de factor de potencia",
      "Multímetros industriales y pinzas amperimétricas certificadas",
      "Transformadores de corriente y transmisores de presión/flujo",
    ],
    actionLabel: "Cotizar medición",
    actionHref: "#cotizar?cat=medicion",
    isActive: true,
    icon: ({ className = "w-7 h-7" }) => (
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
        {/* Indicador analógico y multímetro de cuadrante */}
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <circle cx="12" cy="12" r="7" />
        <path d="M12 12l3.5-3.5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "cat-rodamientos",
    slug: "rodamientos",
    title: "Rodamientos Industriales",
    description: "Soluciones de rodadura, fricción reducida y soporte mecánico de alta exigencia para maquinaria pesada y rotativa.",
    bulletPoints: [
      "Baleros de bolas rígidos, de empuje y rodamientos cónicos",
      "Chumaceras de brida y de pie con sellado para servicio pesado",
      "Distribución de marcas líderes como SKF, Timken, FAG y NSK",
    ],
    actionLabel: "Cotizar rodamientos",
    actionHref: "#cotizar?cat=rodamientos",
    isActive: true,
    icon: ({ className = "w-7 h-7" }) => (
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
        {/* Rodamiento de bolas concéntrico */}
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="5" r="1.5" fill="currentColor" />
        <circle cx="12" cy="19" r="1.5" fill="currentColor" />
        <circle cx="5" cy="12" r="1.5" fill="currentColor" />
        <circle cx="19" cy="12" r="1.5" fill="currentColor" />
        <circle cx="7.05" cy="7.05" r="1.5" fill="currentColor" />
        <circle cx="16.95" cy="16.95" r="1.5" fill="currentColor" />
        <circle cx="7.05" cy="16.95" r="1.5" fill="currentColor" />
        <circle cx="16.95" cy="7.05" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "cat-electrico",
    slug: "electrico",
    title: "Material Eléctrico",
    description: "Conducción, distribución y protección eléctrica de uso rudo para instalaciones industriales y subestaciones.",
    bulletPoints: [
      "Cable de cobre de uso rudo e industrial (THW-LS, XHHW, uso rudo)",
      "Canalizaciones, tubería conduit galvanizada y charolas porta-cables",
      "Centros de carga, interruptores termomagnéticos y desconectadores",
    ],
    actionLabel: "Cotizar material eléctrico",
    actionHref: "#cotizar?cat=electrico",
    isActive: true,
    icon: ({ className = "w-7 h-7" }) => (
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
        {/* Relámpago de energía eléctrica de alta potencia */}
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

