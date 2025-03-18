
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gedco-black text-white">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/lovable-uploads/logo.jpeg"
                alt="Gedco Logo"
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-medium">GEDCO</span>
            </Link>
            <p className="text-white/70 mb-6 text-sm">
              Diseñamos y construimos con calidad e innovación, elevando cada proyecto a su máximo potencial.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gedco-orange transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gedco-orange transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gedco-orange transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-gedco-orange transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-gedco-orange transition-colors text-sm">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/70 hover:text-gedco-orange transition-colors text-sm">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-gedco-orange transition-colors text-sm">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-gedco-orange transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-white/70 hover:text-gedco-orange transition-colors text-sm">
                Diseño arquitectónico
              </li>
              <li className="text-white/70 hover:text-gedco-orange transition-colors text-sm">
                Diseño de interiores
              </li>
              <li className="text-white/70 hover:text-gedco-orange transition-colors text-sm">
                Consultoría integral de proyectos
              </li>
              <li className="text-white/70 hover:text-gedco-orange transition-colors text-sm">
                Construcción de obras civiles
              </li>
              <li className="text-white/70 hover:text-gedco-orange transition-colors text-sm">
                Remodelaciones
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-gedco-orange shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Cr 48 # 75 - 92, Barranquilla, Atlántico
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-gedco-orange shrink-0" />
                <a 
                  href="tel:+573008368821" 
                  className="text-white/70 hover:text-gedco-orange transition-colors text-sm"
                >
                  +57 300 8368821
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-gedco-orange shrink-0" />
                <a 
                  href="mailto:alvinprieto@gmail.com" 
                  className="text-white/70 hover:text-gedco-orange transition-colors text-sm"
                >
                  alvinprieto@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} GEDCO. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Términos y Condiciones
            </Link>
            <Link to="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
