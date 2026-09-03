"use client";

import React, { useState, useEffect } from "react";
import { QuoteFormData } from "@/types/quote";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: "",
    phone: "",
    email: "",
    details: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
    referenceId?: string;
  }>({ type: null, text: "" });

  // 1. Cerrar con tecla ESC y bloquear scroll de la página al abrir
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage({ type: null, text: "" });

    // Validar teléfono de 10 dígitos numéricos
    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, "");
    if (!/^[0-9]{10}$/.test(cleanPhone)) {
      setStatusMessage({
        type: "error",
        text: "Por favor ingresa un número telefónico de 10 dígitos numéricos (ej. 6621124124).",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/cotizar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: cleanPhone,
          email: formData.email,
          details: formData.details,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatusMessage({
          type: "success",
          text: result.message,
          referenceId: result.data?.id,
        });
        // Reset form
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          details: "",
        });
      } else {
        setStatusMessage({
          type: "error",
          text: result.message || "No fue posible procesar tu solicitud. Por favor intenta de nuevo.",
        });
      }
    } catch (err) {
      console.error("Error submitting quote:", err);
      setStatusMessage({
        type: "error",
        text: "Error de conexión. Por favor verifica tu red o contáctanos directamente por WhatsApp.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-sm animate-backdrop-in"
      onClick={onClose}
    >
      {/* Contenedor de la Ventana Emergente con Animación Fluida */}
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8 animate-modal-in max-h-[90vh] overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de Cierre ("X") */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar ventana modal"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2D59]"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Encabezado del Modal */}
        <div className="pr-8 mb-6">
          <h3
            id="modal-title"
            className="text-xl sm:text-2xl font-bold font-montserrat text-[#0F2D59] leading-tight"
          >
            Solicitud de Cotización
          </h3>
          <p className="text-xs sm:text-sm text-[#5A6578] mt-1.5">
            Completa tus datos y nuestro equipo técnico te responderá a la brevedad.
          </p>
        </div>

        {/* Alerta de Estado (Éxito o Error) */}
        {statusMessage.type && (
          <div
            className={`p-4 rounded-xl mb-6 text-sm flex items-start gap-3 ${
              statusMessage.type === "success"
                ? "bg-green-50 border border-green-200 text-green-900"
                : "bg-red-50 border border-red-200 text-red-900"
            }`}
            role="alert"
          >
            <div className="w-5 h-5 flex-shrink-0 mt-0.5">
              {statusMessage.type === "success" ? (
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div>
              <p className="font-medium">{statusMessage.text}</p>
              {statusMessage.referenceId && (
                <p className="text-xs text-green-700 mt-1 font-mono">
                  Folio de seguimiento: <strong>{statusMessage.referenceId}</strong>
                </p>
              )}
            </div>
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* Fila 1: Nombre completo */}
          <div>
            <label htmlFor="modal-fullName" className="block text-xs sm:text-sm font-semibold text-[#1F242E] mb-1.5">
              Nombre completo <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="modal-fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#1F242E] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0F2D59] focus:border-transparent transition-all"
            />
          </div>

          {/* Fila 2: Teléfono y Correo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="modal-phone" className="block text-xs sm:text-sm font-semibold text-[#1F242E] mb-1.5">
                Teléfono / WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="modal-phone"
                name="phone"
                required
                pattern="[0-9]{10}"
                maxLength={10}
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#1F242E] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0F2D59] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="modal-email" className="block text-xs sm:text-sm font-semibold text-[#1F242E] mb-1.5">
                Correo electrónico <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="modal-email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#1F242E] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0F2D59] focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Fila 3: Detalle de la Solicitud */}
          <div>
            <label htmlFor="modal-details" className="block text-xs sm:text-sm font-semibold text-[#1F242E] mb-1.5">
              Detalle de la solicitud o número de parte <span className="text-red-500">*</span>
            </label>
            <textarea
              id="modal-details"
              name="details"
              required
              rows={4}
              value={formData.details}
              onChange={handleChange}
              placeholder="Describe marcas, códigos de producto, volúmenes requeridos o especificaciones técnicas..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#1F242E] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0F2D59] focus:border-transparent transition-all resize-y"
            />
          </div>

          {/* Botón de Envío */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full min-h-[48px] sm:min-h-[52px] bg-[#0F2D59] hover:bg-[#0A1F3D] active:bg-[#061426] disabled:bg-gray-400 text-white font-semibold text-[15px] sm:text-[16px] rounded-lg shadow-[0_4px_14px_rgba(15,45,89,0.2)] hover:shadow-[0_6px_20px_rgba(15,45,89,0.28)] transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2D59]"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Procesando Solicitud...</span>
                </>
              ) : (
                <span>Enviar</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
