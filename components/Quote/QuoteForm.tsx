"use client";

import React, { useState, useEffect } from "react";
import { QuoteFormData } from "@/types/quote";

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: "",
    phone: "",
    email: "",
    details: "",
  });

  const [optionalCategory, setOptionalCategory] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
    referenceId?: string;
  }>({ type: null, text: "" });

  // Captura opcional de categoría desde URL/hash para adjuntar al requerimiento
  useEffect(() => {
    const parseCategoryFromUrl = () => {
      if (typeof window === "undefined") return;

      const urlParams = new URLSearchParams(window.location.search);
      let cat = urlParams.get("cat");

      if (!cat && window.location.hash.includes("?cat=")) {
        const hashQuery = window.location.hash.split("?cat=")[1];
        if (hashQuery) {
          cat = hashQuery.split("&")[0];
        }
      }

      if (cat) {
        setOptionalCategory(cat);
      }
    };

    parseCategoryFromUrl();
    window.addEventListener("hashchange", parseCategoryFromUrl);
    return () => window.removeEventListener("hashchange", parseCategoryFromUrl);
  }, []);

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
          category: optionalCategory || undefined,
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
    <div className="bg-white border border-[#E2E8F0] rounded-2xl shadow-[0_12px_32px_rgba(15,45,89,0.08)] p-6 sm:p-9 text-left">
      <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-[#0F2D59] mb-2">
        Solicitud de Cotización
      </h3>
      <p className="text-xs sm:text-sm text-[#5A6578] mb-6">
        Los campos marcados con asterisco (<span className="text-red-500 font-bold">*</span>) son obligatorios para cotizar.
      </p>

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
        {/* Fila 1: Nombre completo (ancho completo) */}
        <div>
          <label htmlFor="fullName" className="block text-xs sm:text-sm font-semibold text-[#1F242E] mb-1.5">
            Nombre completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#1F242E] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0F2D59] focus:border-transparent transition-all"
          />
        </div>

        {/* Fila 2: Teléfono / WhatsApp y Correo electrónico (2 cols en PC / 1 col en móvil) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-[#1F242E] mb-1.5">
              Teléfono / WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
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
            <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-[#1F242E] mb-1.5">
              Correo electrónico <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#1F242E] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0F2D59] focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Fila 3: Detalle de la solicitud o número de parte (ancho completo) */}
        <div>
          <label htmlFor="details" className="block text-xs sm:text-sm font-semibold text-[#1F242E] mb-1.5">
            Detalle de la solicitud o número de parte <span className="text-red-500">*</span>
          </label>
          <textarea
            id="details"
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
  );
};
