
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle, Clock, TrendingUp, Users, ArrowRight } from "lucide-react";

interface PersuasiveModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const PersuasiveModal = ({ isOpen, onOpenChange }: PersuasiveModalProps) => {
  const handleWhatsAppContact = () => {
    window.open('https://wa.link/vp4sav', '_blank');
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-primary bg-clip-text text-transparent">
            ¡Hola compañero repartidor! 👋
          </DialogTitle>
          <DialogDescription className="text-center text-base mt-2">
            Permíteme contarte algo que está cambiando la vida de cientos de repartidores como nosotros
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Personal Message */}
          <div className="bg-accent/10 rounded-lg p-4 border-l-4 border-primary">
            <p className="text-foreground leading-relaxed">
              <strong>Hermano, sé exactamente lo que sientes...</strong> Levantarte antes del amanecer, cargar el camión, 
              anotar cada entrega en papelitos que se pierden, hacer cuentas en la cabeza, y al final del día 
              preguntarte: <em>"¿Realmente gané lo que debería?"</em>
            </p>
          </div>

          {/* Problems Section */}
          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-destructive" />
              Los problemas que todos enfrentamos:
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-destructive mr-2">•</span>
                <span>Perder tiempo anotando cada entrega a mano</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-2">•</span>
                <span>No saber exactamente cuánto ganamos hasta el final del día</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-2">•</span>
                <span>Rutas desorganizadas que nos hacen gastar más gasolina</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-2">•</span>
                <span>Cuentas pendientes que se nos olvidan cobrar</span>
              </li>
            </ul>
          </div>

          {/* Solution Section */}
          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-primary" />
              Lo que cambia con nuestra app:
            </h3>
            <div className="grid gap-3">
              <div className="flex items-start bg-primary/10 rounded-lg p-3">
                <TrendingUp className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Ganas más dinero</p>
                  <p className="text-xs text-muted-foreground">Rutas optimizadas = menos gasolina, más entregas por día</p>
                </div>
              </div>
              <div className="flex items-start bg-primary/10 rounded-lg p-3">
                <Clock className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Ahorras horas de trabajo</p>
                  <p className="text-xs text-muted-foreground">Se acabó el papeleo, todo automático en tu celular</p>
                </div>
              </div>
              <div className="flex items-start bg-primary/10 rounded-lg p-3">
                <Users className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Control total de tu negocio</p>
                  <p className="text-xs text-muted-foreground">Sabes exactamente cuánto ganas en tiempo real</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-secondary/20 rounded-lg p-4 border">
            <p className="text-sm italic mb-2">
              "Antes tardaba 2 horas organizando cuentas al final del día. Ahora todo está listo automáticamente. 
              He aumentado mis ganancias 35% solo por la optimización de rutas."
            </p>
            <p className="text-xs text-muted-foreground font-medium">- Carlos M., repartidor hace 8 años</p>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-primary/10 rounded-lg p-4 text-center border border-primary/20">
            <h4 className="font-semibold mb-2">🚀 Acceso Exclusivo y Gratuito</h4>
            <p className="text-sm text-muted-foreground mb-4">
              No es para todos. Solo trabajamos con repartidores comprometidos que quieren crecer. 
              <strong> El acceso es limitado y personalizado.</strong>
            </p>
            <p className="text-xs text-muted-foreground">
              ✓ Sin costos ocultos &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Configuración personalizada &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Soporte directo
            </p>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-col gap-3">
          <Button 
            onClick={handleWhatsAppContact} 
            className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            size="lg"
          >
            Sí, quiero transformar mi negocio
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={() => onOpenChange(false)}
            className="w-full text-muted-foreground hover:text-foreground"
          >
            Tal vez más tarde
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PersuasiveModal;