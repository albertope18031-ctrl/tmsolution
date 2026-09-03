"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { QuoteModal } from "@/components/Quote/QuoteModal";

interface QuoteModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType>({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const QuoteModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Escuchar clics globales en enlaces o botones destinados a cotizar
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button");
      if (!target) return;

      const href = target.getAttribute("href");
      const hasModalAttr = target.getAttribute("data-open-modal") === "quote";

      // Si el enlace apunta a #cotizar o tiene data-open-modal="quote", abrir modal
      if (hasModalAttr || href === "#cotizar") {
        e.preventDefault();
        openModal();
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  return (
    <QuoteModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
      <QuoteModal isOpen={isModalOpen} onClose={closeModal} />
    </QuoteModalContext.Provider>
  );
};

export const useQuoteModal = () => useContext(QuoteModalContext);
