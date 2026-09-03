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

      {/* Contenido Principal con Todos los Módulos Reordenados */}
      <main className="flex-1">
        {/* 2. Portada (Hero Section) con id="inicio" */}
        <Hero />

        {/* 3. Catálogo y Líneas de Suministro (Carrusel/Slider) con id="suministros" */}
        <SuppliesSection />

        {/* 4. ¿Quiénes Somos? (Trayectoria y Respaldo) con id="nosotros" */}
        <AboutSection />

        {/* 5. Ecosistema de Proveedores (Marcas Aliadas) con id="marcas" */}
        <BrandsSection />

        {/* 6. Bloque: «¿Por qué con TM SOLUTION?» con id="por-que-tm" */}
        <QuoteSection />

        {/* 7. Franja de Conversión («¡PONTE EN CONTACTO CON NOSOTROS!» con botón "Contáctanos") */}
        <MidPageBanner />

        {/* 8. Bloque: «Misión y Visión» con id="mision-vision" */}
        <PhilosophySection />
      </main>

      {/* 9. Pie de Página Institucional (Footer) */}
      <Footer />
    </div>
  );
}
