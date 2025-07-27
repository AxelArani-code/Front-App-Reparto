import  { useState } from "react";

import { ArrowRight, Clock, Calculator, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import PersuasiveModal from "./PersuasiveModal";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="inicio" className="pt-20 pb-16 lg:pt-28 lg:pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Revoluciona tu
              <span className="bg-gradient-hero bg-clip-text text-transparent"> reparto de agua</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ahorra tiempo, organiza tu contabilidad y maximiza tus ganancias con nuestra aplicación 
              diseñada especialmente para repartidores de agua.
            </p>
            
            {/* Access Note */}
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-8">
              <p className="text-sm text-foreground">
                <span className="font-semibold">🚀 Acceso Exclusivo:</span> Contáctanos por WhatsApp para recibir tu acceso gratuito personalizado y comenzar a revolucionar tu reparto hoy mismo.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm font-medium">Ahorra Tiempo</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Calculator className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Control Contable</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm font-medium">Más Ganancias</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => setIsModalOpen(true)}
              >
                Solicitar Acceso Gratuito
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setIsModalOpen(true)}
              >
                Ver Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t">
              <p className="text-sm text-muted-foreground mb-3">Confiado por más de 50+ repartidores</p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-xs text-muted-foreground">Satisfacción</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-xs text-muted-foreground">Soporte</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-xs text-muted-foreground">Usuarios</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Gestión de reparto de agua"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
      
      <PersuasiveModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
};

export default Hero;