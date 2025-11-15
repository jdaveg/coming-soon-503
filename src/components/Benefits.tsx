import { Card, CardContent } from "@/components/ui/card";
import { TreePine, Clock, TrendingUp, Users, Award, Globe } from "lucide-react";

const benefits = [
  {
    icon: TreePine,
    title: "Impacto Ambiental Positivo",
    description: "Reduce la contaminación y ayuda a preservar el planeta para futuras generaciones",
    stat: "85%",
    statLabel: "Menos residuos mal clasificados"
  },
  {
    icon: Clock,
    title: "Ahorro de Tiempo",
    description: "Elimina la necesidad de separar manualmente los residuos",
    stat: "5 min",
    statLabel: "Ahorrados por día"
  },
  {
    icon: TrendingUp,
    title: "Mayor Eficiencia",
    description: "Optimiza el proceso de reciclaje y recuperación de materiales",
    stat: "3x",
    statLabel: "Más eficiente que métodos tradicionales"
  },
  {
    icon: Users,
    title: "Fácil de Usar",
    description: "Interfaz intuitiva que toda la familia puede usar sin problemas",
    stat: "100%",
    statLabel: "Satisfacción de usuarios"
  },
  {
    icon: Award,
    title: "Tecnología Certificada",
    description: "Cumple con todas las normativas internacionales de reciclaje",
    stat: "ISO",
    statLabel: "Certificaciones internacionales"
  },
  {
    icon: Globe,
    title: "Contribución Global",
    description: "Sé parte del cambio hacia un mundo más sostenible",
    stat: "1000+",
    statLabel: "Toneladas recicladas"
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Beneficios de <span className="text-primary">Intecology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforma tu forma de reciclar y contribuye a un futuro más sostenible
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-6 space-y-6 relative">
                <div className="flex items-start justify-between">
                  <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{benefit.stat}</div>
                    <div className="text-xs text-muted-foreground">{benefit.statLabel}</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-card border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              ¿Por qué elegir Intecology?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Somos líderes en tecnología de reciclaje inteligente, combinando innovación,
              sostenibilidad y facilidad de uso en un solo producto revolucionario.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="px-6 py-3 bg-primary/10 rounded-full">
                <span className="font-semibold text-primary">✓ Garantía 5 años</span>
              </div>
              <div className="px-6 py-3 bg-primary/10 rounded-full">
                <span className="font-semibold text-primary">✓ Instalación incluida</span>
              </div>
              <div className="px-6 py-3 bg-primary/10 rounded-full">
                <span className="font-semibold text-primary">✓ Soporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
