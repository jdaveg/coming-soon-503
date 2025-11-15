import { Card, CardContent } from "@/components/ui/card";
import { Brain, ScanLine, Zap, BarChart3, Shield, Smartphone } from "lucide-react";
import aiTech from "@/assets/ai-technology.jpg";

const technologies = [
  {
    icon: Brain,
    title: "Inteligencia Artificial Avanzada",
    description: "Redes neuronales entrenadas para reconocer miles de objetos diferentes"
  },
  {
    icon: ScanLine,
    title: "Identificación de Materiales",
    description: "Análisis instantáneo del tipo de material mediante sensores ópticos y AI"
  },
  {
    icon: Zap,
    title: "Clasificación Automática",
    description: "Sistema mecánico que dirige cada residuo al compartimento correcto"
  },
  {
    icon: BarChart3,
    title: "Evaluación de Estado",
    description: "Determina la calidad y estado de conservación de los materiales"
  },
  {
    icon: Shield,
    title: "Clasificación de Botellas",
    description: "Reconocimiento específico de tipos de botellas plásticas y de vidrio"
  },
  {
    icon: Smartphone,
    title: "App Móvil Integrada",
    description: "Monitoreo en tiempo real y estadísticas de reciclaje desde tu smartphone"
  }
];

const Technology = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
              🤖 Tecnología de Vanguardia
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Inteligencia Artificial <span className="text-primary">Aplicada al Reciclaje</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desarrollamos aplicaciones avanzadas para la identificación y clasificación de materiales,
            objetos y análisis de estado en tiempo real
          </p>
        </div>

        {/* Hero tech image */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"></div>
          <img
            src={aiTech}
            alt="Tecnología AI de clasificación"
            className="relative rounded-2xl shadow-2xl w-full max-w-4xl mx-auto"
          />
        </div>

        {/* Technologies grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
            >
              <CardContent className="p-6 space-y-4">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <tech.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{tech.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech specs */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border">
          <h3 className="text-2xl font-bold mb-8 text-center">Especificaciones Técnicas</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-border/50">
                <span className="font-medium">Sensores</span>
                <span className="text-muted-foreground">Cámara HD + Infrarrojo + Peso</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border/50">
                <span className="font-medium">Procesador</span>
                <span className="text-muted-foreground">ARM Cortex-A72 Quad-core</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border/50">
                <span className="font-medium">Conectividad</span>
                <span className="text-muted-foreground">WiFi 6, Bluetooth 5.0, 4G</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-border/50">
                <span className="font-medium">Precisión AI</span>
                <span className="text-muted-foreground">99.5% de exactitud</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border/50">
                <span className="font-medium">Velocidad</span>
                <span className="text-muted-foreground">2 segundos por objeto</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border/50">
                <span className="font-medium">Base de Datos</span>
                <span className="text-muted-foreground">+10,000 objetos reconocidos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
