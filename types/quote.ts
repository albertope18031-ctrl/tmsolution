export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  details: string;
  company?: string;
  category?: string;
}

export interface QuoteSubmissionResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    createdAt: string;
  };
}
