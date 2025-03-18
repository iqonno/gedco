
import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Building2, Users, Lightbulb, Target, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <>
      <Hero
        title="Sobre Nosotros"
        subtitle="CONÓCENOS"
        description="Calidad, innovación y compromiso con cada proyecto"
        image="/lovable-uploads/a2528d48-8e04-45a2-a89b-1583f033f0dc.png"
        height="medium"
        imagePosition="center"
      />
      
      <AnimatedSection className="py-20 md:py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="text-gedco-orange text-sm font-medium uppercase tracking-wider">
                Nuestra Historia
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Construyendo excelencia desde nuestra fundación
              </h2>
              <div className="space-y-4 text-gedco-dark-gray/80">
                <p>
                  Nuestra compañía, con sede en la ciudad de Barranquilla, Atlántico, está compuesta por especialistas en diversas áreas de la arquitectura y la construcción, que lo ayudarán a completar su proyecto, sin importar el tamaño de este, acompañándolo en cada paso del proceso hasta que se hayan cumplido sus requerimientos con total satisfacción.
                </p>
                <p>
                  Fundada con la visión de transformar el panorama arquitectónico y constructivo de la región, GEDCO ha crecido para convertirse en un referente en el sector, combinando innovación técnica con un profundo entendimiento de las necesidades de nuestros clientes.
                </p>
                <p>
                  A lo largo de los años, hemos consolidado un equipo multidisciplinario de profesionales altamente calificados que aportan su experiencia y conocimiento a cada proyecto que emprendemos.
                </p>
                <p>
                  Nuestro compromiso con la excelencia nos ha permitido establecer relaciones duraderas con nuestros clientes, muchos de los cuales confían en nosotros repetidamente para sus nuevos proyectos.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative z-10 rounded-sm overflow-hidden">
                <img 
                  src="/lovable-uploads/5e5aae76-c5b3-43e8-9b28-feed3d5038c5.png" 
                  alt="Historia de GEDCO" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gedco-orange/10 rounded-sm -z-0"></div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="py-20 md:py-24 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-sm overflow-hidden">
                <img 
                  src="/lovable-uploads/63589c4f-a756-41d9-aa9d-a40a0c96f57c.png" 
                  alt="Misión y Visión de GEDCO" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-gedco-orange/10 rounded-sm -z-0"></div>
            </div>
            
            <div>
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-gedco-orange rounded-sm flex items-center justify-center mr-4">
                    <Target size={20} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Misión</h3>
                </div>
                <p className="text-gedco-dark-gray/80">
                  Elaborar proyectos y obras de la más alta calidad e innovación, que satisfagan las necesidades y expectativas del usuario final; mejorando directamente su calidad de vida y confort; además de impulsar el desarrollo económico y social de las regiones en donde participamos.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-gedco-orange rounded-sm flex items-center justify-center mr-4">
                    <Lightbulb size={20} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Visión</h3>
                </div>
                <p className="text-gedco-dark-gray/80">
                  En el 2030 ser una empresa reconocida y consolidada a nivel nacional por nuestras competencias profesionales, además de brindar altos estándares de calidad e innovación en los proyectos que ejecutemos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="py-20 md:py-24 bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gedco-orange text-sm font-medium uppercase tracking-wider">
              Nuestros Valores
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Los principios que guían nuestro trabajo
            </h2>
            <p className="text-gedco-dark-gray/80">
              Estos valores fundamentales son la base de cada decisión que tomamos y cada proyecto que emprendemos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-100 hover:border-gedco-orange/30 rounded-sm hover:shadow-lg transition-all duration-300">
              <div className="h-12 w-12 bg-gedco-orange/10 rounded-sm text-gedco-orange flex items-center justify-center mb-5">
                <Building2 size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Excelencia</h3>
              <p className="text-gedco-dark-gray/80">
                Nos esforzamos por alcanzar los más altos estándares en cada aspecto de nuestro trabajo, desde el diseño inicial hasta el último detalle constructivo.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 hover:border-gedco-orange/30 rounded-sm hover:shadow-lg transition-all duration-300">
              <div className="h-12 w-12 bg-gedco-orange/10 rounded-sm text-gedco-orange flex items-center justify-center mb-5">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Compromiso</h3>
              <p className="text-gedco-dark-gray/80">
                Nos dedicamos completamente a cada proyecto, asumiendo la responsabilidad de cumplir y superar las expectativas de nuestros clientes.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 hover:border-gedco-orange/30 rounded-sm hover:shadow-lg transition-all duration-300">
              <div className="h-12 w-12 bg-gedco-orange/10 rounded-sm text-gedco-orange flex items-center justify-center mb-5">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Innovación</h3>
              <p className="text-gedco-dark-gray/80">
                Buscamos constantemente nuevas ideas, técnicas y soluciones que nos permitan ofrecer resultados excepcionales y diferenciados.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 hover:border-gedco-orange/30 rounded-sm hover:shadow-lg transition-all duration-300">
              <div className="h-12 w-12 bg-gedco-orange/10 rounded-sm text-gedco-orange flex items-center justify-center mb-5">
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
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Integridad</h3>
              <p className="text-gedco-dark-gray/80">
                Actuamos con honestidad y transparencia en todas nuestras interacciones, manteniendo altos estándares éticos en cada aspecto de nuestro negocio.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 hover:border-gedco-orange/30 rounded-sm hover:shadow-lg transition-all duration-300">
              <div className="h-12 w-12 bg-gedco-orange/10 rounded-sm text-gedco-orange flex items-center justify-center mb-5">
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
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Sostenibilidad</h3>
              <p className="text-gedco-dark-gray/80">
                Promovemos prácticas responsables con el medio ambiente, buscando soluciones que minimicen el impacto ecológico de nuestros proyectos.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 hover:border-gedco-orange/30 rounded-sm hover:shadow-lg transition-all duration-300">
              <div className="h-12 w-12 bg-gedco-orange/10 rounded-sm text-gedco-orange flex items-center justify-center mb-5">
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
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Calidad</h3>
              <p className="text-gedco-dark-gray/80">
                Nos esforzamos por lograr la máxima calidad en cada detalle, seleccionando cuidadosamente materiales y aplicando técnicas constructivas superiores.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="py-20 md:py-24 bg-gedco-orange clip-slant">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Transforma tus ideas en realidad
            </h2>
            <p className="text-white/90 mb-10">
              Estamos listos para ayudarte a materializar tu proyecto, con todo nuestro conocimiento y experiencia.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-gedco-black hover:bg-white/90"
            >
              <Link to="/contact">
                Contactar ahora <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default About;
