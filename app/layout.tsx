import type { Metadata, Viewport } from "next";
import { WhatsAppWidget } from "@/components/Floating/WhatsAppWidget";
import "./globals.css";

export const metadata: Metadata = {
  title: "TM SOLUTION | Suministros Industriales y Corporativos",
  description: "Especialistas en refacciones, herramientas técnicas, seguridad industrial (EPP) y abastecimiento a la medida en Hermosillo y todo México.",
  keywords: ["suministros industriales", "TM Solution", "marcas industriales", "cotización", "seguridad industrial", "EPP", "Hermosillo", "Sonora"],
  authors: [{ name: "TM SOLUTION" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F2D59",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F4F6F9] text-[#1F242E] font-sans selection:bg-[#0F2D59] selection:text-white antialiased relative">
        {children}
        {/* Capa Asíncrona Flotante de WhatsApp */}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
