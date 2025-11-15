import { useEffect } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Technology from "@/components/Technology";
import Benefits from "@/components/Benefits";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Intecology - Canecas Inteligentes con IA para Reciclaje Automático";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Technology />
      <Benefits />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
