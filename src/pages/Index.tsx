import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Mail } from "lucide-react";
import illustration from "@/assets/503-illustration.jpg";

const Index = () => {
  useEffect(() => {
    document.title = "503 - Servicio Temporalmente no Disponible";
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="max-w-4xl w-full relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Illustration */}
          <div className="relative w-full max-w-2xl mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl -z-10 animate-pulse-slow"></div>
            <img 
              src={illustration} 
              alt="Servicio en mantenimiento" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          {/* Status Code */}
          <div className="space-y-2">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              503
            </h1>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>

          {/* Message */}
          <div className="space-y-4 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Servicio Temporalmente no Disponible
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Estamos realizando mejoras en nuestro sistema para ofrecerte una mejor experiencia. 
              Volveremos pronto.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              onClick={handleRefresh}
              size="lg"
              className="group min-w-[200px] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <RefreshCw className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
              Reintentar
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="min-w-[200px]"
              asChild
            >
              <a href="mailto:contacto@tudominio.com">
                <Mail className="mr-2 h-5 w-5" />
                Contactar
              </a>
            </Button>
          </div>

          {/* Footer Info */}
          <div className="pt-12 text-sm text-muted-foreground">
            <p>Gracias por tu paciencia</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--foreground) / 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground) / 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
};

export default Index;
