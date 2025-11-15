import { useEffect, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: Stat[] = [
  { value: 95, suffix: "%", label: "Mejora en Reciclaje" },
  { value: 2500, suffix: "+", label: "Toneladas Procesadas" },
  { value: 78, suffix: "%", label: "Reducción de Contaminación" },
  { value: 5000, suffix: "+", label: "Usuarios Satisfechos" }
];

const Stats = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("stats-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const durations = stats.map(stat => {
      return stat.value > 1000 ? 2000 : 1500;
    });

    const intervals = stats.map((stat, index) => {
      const duration = durations[index];
      const steps = 60;
      const increment = stat.value / steps;
      const stepDuration = duration / steps;
      let currentCount = 0;

      return setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.value) {
          currentCount = stat.value;
          clearInterval(intervals[index]);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(currentCount);
          return newCounts;
        });
      }, stepDuration);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, [isVisible]);

  return (
    <section 
      id="stats-section"
      className="py-24 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Impacto en Números
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Resultados reales que demuestran nuestro compromiso con el medio ambiente
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center space-y-2 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold text-white">
                {stat.prefix}
                {counts[index].toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-lg text-white/90 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional context */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-white text-lg">
              "Cada caneca Intecology instalada contribuye a un futuro más limpio y sostenible.
              Juntos hemos procesado miles de toneladas de residuos correctamente clasificados."
            </p>
            <p className="text-white/80 mt-4 font-medium">
              — Equipo Intecology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
