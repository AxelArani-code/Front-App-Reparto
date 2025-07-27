import  { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Smartphone, Download, Zap } from "lucide-react";
import PersuasiveModal from "./PersuasiveModal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-20">
      <div 
        ref={ctaRef}
        className={`container mx-auto px-4 lg:px-8 transition-all duration-1000 ${
          ctaVisible ? 'animate-scroll-fade-in' : 'opacity-0 translate-y-12'
        }`}
      >
        <Card className="relative overflow-hidden border-0 bg-gradient-hero shadow-elegant">
          <CardContent className="p-12 lg:p-16 text-center">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-20 translate-y-20"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                ¿Listo para transformar tu negocio?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Únete a cientos de repartidores que ya han revolucionado su forma de trabajar. 
                Contáctanos por WhatsApp para recibir tu acceso personalizado.
              </p>
              
              {/* WhatsApp Contact Info */}
              <div className="bg-white/10 border border-white/20 rounded-lg p-4 mb-8 max-w-lg mx-auto">
                <p className="text-white/90 text-sm">
                  <span className="font-semibold">📱 Proceso simple:</span> Te contactamos en minutos, configuramos tu cuenta personalizada y ¡listo para usar!
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center justify-center space-x-3 text-white">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Setup en 3 minutos</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-white">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Download className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Sin instalación compleja</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-white">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Resultados inmediatos</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-glow group px-8 py-6 text-lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Solicitar Acceso por WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Agendar Demo
                </Button>
              </div>

              {/* Play Store Download */}
              <div className="border-t border-white/20 pt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Descarga nuestra app móvil</h3>
                <div className="flex justify-center">
                  <a 
                    href="#" 
                    className="inline-flex items-center bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors group"
                  >
                    <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-300">Descargar en</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 text-white/80 text-sm">
                ✓ Sin tarjeta de crédito requerida &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Cancelación en cualquier momento &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Soporte 24/7
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <PersuasiveModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
};

export default CTA;