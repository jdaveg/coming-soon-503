import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Recycle, Wine, Cog } from "lucide-react";
import smartBin from "@/assets/smart-bin.jpg";

const features = [
  {
    icon: Leaf,
    title: "Orgánicos",
    description: "Residuos biodegradables como restos de comida y plantas",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-950/30"
  },
  {
    icon: Recycle,
    title: "Plásticos",
    description: "Botellas, envases y todo tipo de materiales plásticos",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/30"
  },
  {
    icon: Wine,
    title: "Vidrios",
    description: "Botellas de vidrio, frascos y cristalería",
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/30"
  },
  {
    icon: Cog,
    title: "Latas de Aluminio",
    description: "Latas de bebidas y envases metálicos",
    color: "text-slate-600 dark:text-slate-400",
    bgColor: "bg-slate-50 dark:bg-slate-950/30"
  }
];

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">4 Compartimentos</span> Inteligentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Separación automática y precisa de diferentes tipos de residuos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"></div>
            <img
              src={smartBin}
              alt="Caneca inteligente con 4 compartimentos"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`${feature.bgColor} w-14 h-14 rounded-xl flex items-center justify-center`}>
                    <feature.icon className={`h-7 w-7 ${feature.color}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <div className="bg-card border rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">99.5%</div>
              <p className="text-muted-foreground">Precisión de Clasificación</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">2s</div>
              <p className="text-muted-foreground">Tiempo de Respuesta</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">200L</div>
              <p className="text-muted-foreground">Capacidad Total</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
