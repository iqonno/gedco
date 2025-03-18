
import { Hero } from "@/components/Hero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Hero
        title="Contacto"
        subtitle="CONTÁCTANOS"
        description="Estamos listos para ayudarte con tu próximo proyecto"
        image="/lovable-uploads/f61069bb-4b0b-4c99-be05-f3bf6278cf59.png"
        height="small"
      />
      
      <AnimatedSection className="py-20 md:py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-gedco-orange text-sm font-medium uppercase tracking-wider">
                Contáctanos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                ¿Listo para comenzar tu proyecto?
              </h2>
              <p className="text-gedco-dark-gray/80 mb-10">
                Ponte en contacto con nosotros para discutir los detalles de tu proyecto y cómo podemos ayudarte.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-gedco-orange/10 rounded-sm flex items-center justify-center text-gedco-orange mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Dirección</h3>
                    <p className="text-gedco-dark-gray/80">
                      Cr 48 # 75 - 92, Barranquilla, Atlántico
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-gedco-orange/10 rounded-sm flex items-center justify-center text-gedco-orange mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Teléfono</h3>
                    <p className="text-gedco-dark-gray/80">
                      <a 
                        href="tel:+573008368821" 
                        className="hover:text-gedco-orange transition-colors"
                      >
                        +57 300 8368821
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-gedco-orange/10 rounded-sm flex items-center justify-center text-gedco-orange mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Correo Electrónico</h3>
                    <p className="text-gedco-dark-gray/80">
                      <a 
                        href="mailto:alvinprieto@gmail.com" 
                        className="hover:text-gedco-orange transition-colors"
                      >
                        alvinprieto@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-gedco-orange/10 rounded-sm flex items-center justify-center text-gedco-orange mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Horario de Atención</h3>
                    <p className="text-gedco-dark-gray/80">
                      Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                      Sábados: 8:00 AM - 12:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-sm overflow-hidden h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d933.5365415071564!2d-74.80885725875332!3d10.998187867464493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d0a310e8827%3A0xd9b2fc51bbe7f30c!2sCra.%2048%20%23%2075-92%2C%20Nte.%20Centro%20Historico%2C%20Barranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses-419!2sco!4v1742314296493!5m2!1ses-419!2sco" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: "500px" }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de GEDCO"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="py-20 md:py-24 bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gedco-orange text-sm font-medium uppercase tracking-wider">
              Redes Sociales
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Síguenos en redes sociales
            </h2>
            <p className="text-gedco-dark-gray/80">
              Mantente actualizado con nuestros últimos proyectos, novedades y consejos sobre arquitectura y construcción.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-16 w-16 rounded-full bg-gedco-orange flex items-center justify-center text-white hover:bg-gedco-orange/90 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-16 w-16 rounded-full bg-gedco-orange flex items-center justify-center text-white hover:bg-gedco-orange/90 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-16 w-16 rounded-full bg-gedco-orange flex items-center justify-center text-white hover:bg-gedco-orange/90 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            
            <a 
              href="https://wa.me/573008368821" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-16 w-16 rounded-full bg-gedco-orange flex items-center justify-center text-white hover:bg-gedco-orange/90 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default Contact;
