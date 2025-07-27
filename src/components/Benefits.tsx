import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calculator, BarChart3, Shield, Smartphone, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Benefits = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.2 });

  const benefits = [
    {
      icon: Clock,
      title: "Ahorro de Tiempo",
      description: "Elimina el tedioso proceso de anotar manualmente cada entrega. Registra automáticamente todos tus repartos.",
      color: "text-accent"
    },
    {
      icon: Calculator,
      title: "Control Contable",
      description: "Mantén un registro detallado de tus ingresos, gastos y ganancias. Conoce exactamente tu estado financiero.",
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "Reportes Inteligentes",
      description: "Obtén reportes detallados de tu rendimiento diario, semanal y mensual para optimizar tu negocio.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Datos Seguros",
      description: "Toda tu información está protegida con los más altos estándares de seguridad y respaldo automático.",
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Fácil de Usar",
      description: "Interfaz intuitiva diseñada específicamente para repartidores. Aprende a usarla en minutos.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Soporte 24/7",
      description: "Nuestro equipo de soporte está disponible cuando lo necesites para resolver cualquier duda.",
      color: "text-primary"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'animate-scroll-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            ¿Por qué elegir
            <span className="bg-gradient-hero bg-clip-text text-transparent"> AquaReparto</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo nuestra aplicación puede transformar la forma en que gestionas tu negocio de reparto de agua.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            cardsVisible ? 'animate-scroll-slide-up' : 'opacity-0 translate-y-12'
          }`}
        >
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm ${
                cardsVisible ? `animate-scroll-scale` : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className={`w-12 h-12 ${benefit.color.replace('text-', 'bg-')}/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className={`mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
            statsVisible ? 'animate-scroll-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Reducción en tiempo de registro</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">$150M</div>
            <div className="text-muted-foreground">Promedio de ahorro mensual</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">3 min</div>
            <div className="text-muted-foreground">Tiempo de configuración</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <div className="text-muted-foreground">Precisión contable</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;