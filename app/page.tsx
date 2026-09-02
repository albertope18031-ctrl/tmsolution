import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { SuppliesSection } from "@/components/Supplies/SuppliesSection";
import { AboutSection } from "@/components/About/AboutSection";
import { BrandsSection } from "@/components/Brands/BrandsSection";
import { PhilosophySection } from "@/components/Philosophy/PhilosophySection";
import { MidPageBanner } from "@/components/Conversion/MidPageBanner";
import { QuoteSection } from "@/components/Quote/QuoteSection";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Módulo 1: Cabecera Fija Responsiva */}
      <Header />

      {/* Contenido Principal con Todos los Módulos Integrados */}
      <main className="flex-1">
        {/* Módulo 2: Hero Section (Above the Fold) con id="inicio" */}
        <Hero />

        {/* Módulo 3: Matriz de Suministros y Alcance (Feature Cards) con id="suministros" */}
        <SuppliesSection />

        {/* Módulo 4A: Bloque Institucional («¿Quiénes somos?») con id="nosotros" */}
        <AboutSection />

        {/* Módulo 4B: Muro de Marcas (Brand Trust Grid) con id="marcas" */}
        <BrandsSection />

        {/* Módulo 5A: Filosofía Corporativa («Lo que nos distingue») con id="mision-vision" */}
        <PhilosophySection />

        {/* Módulo 5B: Franja Intermedia de Conversión (Lead Capture Banner) */}
        <MidPageBanner />

        {/* Módulo 6A: Formulario de Cotización Parametrizado con id="cotizar" */}
        <QuoteSection />
      </main>

      {/* Módulo 6C: Pie de Página Institucional */}
      <Footer />
    </div>
  );
}
