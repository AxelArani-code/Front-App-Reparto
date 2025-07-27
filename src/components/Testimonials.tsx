import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import testimonialPerson from "@/assets/testimonial-person.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import testimonialPerson2 from "@/assets/restimonio-personal-2.jpeg";
import testimonialPerson3 from "@/assets/testimonio-personal-3.jpeg";
const Testimonials = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });


  const testimonials = [
    {
      name: "Carlos Rodríguez",
      role: "Repartidor - Mendoza",
      image: testimonialPerson,
      rating: 5,
      text: "AquaReparto cambió completamente mi negocio. Antes perdía horas anotando entregas, ahora todo es automático. Mi productividad aumentó 40% y mis clientes están más satisfechos."
    },
    {
      name: "María González",
      role: "Empresaria - Mendoza",
      image: testimonialPerson2,
      rating: 4,
      text: "La función de control contable es increíble. Ahora sé exactamente cuánto gano cada día y puedo planificar mejor mi negocio. Es como tener un contador personal."
    },
    {
      name: "José Herrera",
      role: "Repartidor - San Luis",
      image: testimonialPerson3,
      rating: 5,
      text: "Muy fácil de usar y el soporte es excelente. En una semana ya había recuperado la inversión solo por el tiempo que ahorro. 100% recomendado."
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'animate-scroll-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Lo que dicen nuestros
            <span className="bg-gradient-hero bg-clip-text text-transparent"> clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Más de 500 repartidores ya han transformado su negocio con AquaReparto.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className={`grid lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            cardsVisible ? 'animate-scroll-slide-up' : 'opacity-0 translate-y-12'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 ${
                cardsVisible ? 'animate-scroll-scale' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-8 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Profile */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof 
        
        <div 
          ref={proofRef}
          className={`mt-16 text-center transition-all duration-1000 ${
            proofVisible ? 'animate-scroll-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-card/50 rounded-full px-6 py-3 backdrop-blur-sm">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <img 
                  key={i}
                  src={testimonialPerson} 
                  alt="Usuario"
                  className="w-8 h-8 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">50+</span> repartidores confían en nosotros
            </span>
          </div>
        </div>
        */}
        
      </div>
    </section>
  );
};

export default Testimonials;