export interface QuoteFormData {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  category: "herramientas" | "epp" | "operativo" | "especial" | "general" | "";
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
