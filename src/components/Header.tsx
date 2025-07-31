import { Button } from "@/components/ui/button";
import { Droplets, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className=" top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">AquaReparto</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#beneficios" className="text-foreground hover:text-primary transition-colors">
              Beneficios
            </a>
            <a href="#caracteristicas" className="text-foreground hover:text-primary transition-colors">
              Características
            </a>
            <a href="#testimonios" className="text-foreground hover:text-primary transition-colors">
              Testimonios
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={()=>{navigate('/login')}} >
              Tengo Cuenta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#beneficios" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Beneficios
              </a>
              <a 
                href="#caracteristicas" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Características
              </a>
              <a 
                href="#testimonios" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonios
              </a>
              <a 
                href="#contacto" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <Button  onClick={()=>{navigate('/login')}} variant="hero" className="w-full mt-4">
                Comenzar Ahora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;