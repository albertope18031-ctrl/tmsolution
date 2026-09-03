export interface QuoteFormData {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  category:
    | "automatizacion"
    | "control"
    | "medicion"
    | "rodamientos"
    | "electrico"
    | "operativo"
    | "especial"
    | "general"
    | "herramientas"
    | "epp"
    | "";
  details: string;
}

export interface QuoteSubmissionResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    createdAt: string;
  };
}
