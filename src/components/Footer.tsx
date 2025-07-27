import { Droplets, Mail, Phone, MapPin,  } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-foreground text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AquaReparto</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              La aplicación líder para repartidores de agua en Mendoza. 
              Simplifica tu negocio y maximiza tus ganancias.
            </p>
               {/* Product 
               <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
               */}
            
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Producto</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Características</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Precios</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Demo</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Actualizaciones</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Tutoriales</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Estado del Servicio</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-white/80">repartoappaxel@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-white/80">+54 2604278415</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-white/80">Mendoza, San Rafael</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 AquaReparto. Todos los derechos reservados.
          </p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;