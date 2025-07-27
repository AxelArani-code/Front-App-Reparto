import { Card, CardContent } from "@/components/ui/card";

import { MapPin, DollarSign, Zap, Settings } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Features = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });

  const features = [
    {
      icon: MapPin,
      title: "Gestión de Rutas",
      description: "Organiza y optimiza tus rutas de entrega para maximizar la eficiencia diaria."
    },
    {
      icon: DollarSign,
      title: "Control Financiero",
      description: "Seguimiento completo de ingresos, gastos y utilidades en tiempo real."
    },
   
    {
      icon: Zap,
      title: "Registro Rápido",
      description: "Registra entregas en segundos con nuestra interfaz súper intuitiva."
    },
    {
      icon: Settings,
      title: "Personalización Total",
      description: "Adapta la aplicación a tu forma específica de trabajar y preferencias."
    }
  ];

  return (
    <section id="caracteristicas" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features List */}
          <div 
            ref={contentRef}
            className={`transition-all duration-1000 ${
              contentVisible ? 'animate-scroll-slide-left' : 'opacity-0 translate-x-12'
            }`}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Características
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Poderosas</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Todo lo que necesitas para gestionar tu negocio de reparto de manera profesional y eficiente.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className={`border-l-4 border-l-primary bg-card/50 hover:bg-card transition-all duration-500 ${
                    contentVisible ? 'animate-scroll-fade-in' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            
          </div>

          {/* App Preview */}
          <div 
            ref={imageRef}
            className={`relative transition-all duration-1000 ${
              imageVisible ? 'animate-scroll-slide-right' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative z-10 max-w-sm mx-auto">
              <img 
                src={appMockup} 
                alt="Interfaz de la aplicación AquaReparto"
                className="w-full h-auto rounded-3xl shadow-elegant"
              />
            </div>
            
            

            {/* Background Decorations */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent/10 rounded-full"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-primary/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;