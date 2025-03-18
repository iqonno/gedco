
import { Hero } from "@/components/Hero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <>
      <Hero
        title="Nuestros Servicios"
        subtitle="SERVICIOS"
        description="Soluciones integrales para tus proyectos arquitectónicos y de construcción"
        image="/lovable-uploads/dd5b857f-869b-4181-8f62-dee8ca786bb9.png"
        height="medium"
      />
      
      <AnimatedSection className="py-20 md:py-24 bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gedco-orange text-sm font-medium uppercase tracking-wider">
              Servicios Profesionales
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Nuestras soluciones integrales
            </h2>
            <p className="text-gedco-dark-gray/80">
              Ofrecemos un amplio rango de servicios especializados en arquitectura, diseño y construcción para satisfacer todas tus necesidades.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="py-20 md:py-24 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gedco-orange text-sm font-medium uppercase tracking-wider">
                Nuestro Proceso
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Cómo trabajamos
              </h2>
              <p className="text-gedco-dark-gray/80 mb-8">
                Nuestro enfoque se centra en la colaboración estrecha con el cliente, la planificación meticulosa y la ejecución precisa para garantizar resultados excepcionales.
              </p>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="mr-6">
                    <div className="h-12 w-12 rounded-full bg-gedco-orange flex items-center justify-center text-white text-xl font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-3">Consulta Inicial</h3>
                    <p className="text-gedco-dark-gray/80">
                      Nos reunimos para entender tus necesidades, expectativas y visión del proyecto. Esta etapa es fundamental para establecer objetivos claros y realistas.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-6">
                    <div className="h-12 w-12 rounded-full bg-gedco-orange flex items-center justify-center text-white text-xl font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-3">Diseño y Planificación</h3>
                    <p className="text-gedco-dark-gray/80">
                      Desarrollamos conceptos y propuestas que se alineen con tus objetivos. Refinamos estos diseños con tu retroalimentación hasta lograr la solución perfecta.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-6">
                    <div className="h-12 w-12 rounded-full bg-gedco-orange flex items-center justify-center text-white text-xl font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-3">Presupuesto y Cronograma</h3>
                    <p className="text-gedco-dark-gray/80">
                      Elaboramos un presupuesto detallado y un cronograma realista, considerando todos los aspectos del proyecto para evitar sorpresas durante la ejecución.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-6">
                    <div className="h-12 w-12 rounded-full bg-gedco-orange flex items-center justify-center text-white text-xl font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-3">Ejecución y Supervisión</h3>
                    <p className="text-gedco-dark-gray/80">
                      Implementamos el proyecto con un equipo altamente calificado, supervisando cada etapa para garantizar la calidad y el cumplimiento de los estándares establecidos.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-6">
                    <div className="h-12 w-12 rounded-full bg-gedco-orange flex items-center justify-center text-white text-xl font-bold">
                      5
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-3">Entrega y Seguimiento</h3>
                    <p className="text-gedco-dark-gray/80">
                      Realizamos una entrega formal del proyecto, proporcionando toda la documentación necesaria y ofreciendo servicios de seguimiento para asegurar tu satisfacción a largo plazo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-sm overflow-hidden">
                <img 
                  src="/lovable-uploads/63589c4f-a756-41d9-aa9d-a40a0c96f57c.png" 
                  alt="Nuestro proceso de trabajo" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gedco-orange/10 rounded-sm -z-0"></div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="py-20 md:py-24 bg-gedco-black clip-slant">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-gedco-orange text-sm font-medium uppercase tracking-wider">
              Empieza Tu Proyecto
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-white">
              ¿Listo para materializar tus ideas?
            </h2>
            <p className="text-white/80 mb-10">
              Contáctanos hoy mismo para discutir cómo podemos ayudarte a hacer realidad tu proyecto con la más alta calidad y profesionalismo.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-gedco-orange hover:bg-gedco-orange/90 text-white"
            >
              <Link to="/contact">
                Solicitar cotización <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default Services;
