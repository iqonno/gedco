
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { ArrowRight, Building2, CheckCircle2, Compass, LayoutDashboard } from "lucide-react";

const Index = () => {
  const featuredProjects = projects.slice(0, 3);
  const featuredServices = services.slice(0, 3);
  const statsRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroImage = document.querySelector('.hero-image') as HTMLElement;
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Gerencia, Diseño y Construcción"
        subtitle="GEDCO"
        description="Diseñamos y construimos con calidad e innovación, elevando cada proyecto a su máximo potencial."
        image="/lovable-uploads/f61069bb-4b0b-4c99-be05-f3bf6278cf59.png"
        ctaText="Solicitar Cotización"
        ctaLink="/contact"
        height="full"
        contentPosition="center"
      />
      
      {/* About Section */}
      <AnimatedSection className="py-20 md:py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gedco-orange text-sm font-medium uppercase tracking-wider">
                Acerca de nosotros
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Elevando la arquitectura y construcción en Barranquilla
              </h2>
              <p className="text-gedco-dark-gray/80 mb-6">
                Nuestra compañía, con sede en la ciudad de Barranquilla, Atlántico, está compuesta por especialistas en diversas áreas de la arquitectura y la construcción que lo ayudarán a completar su proyecto, sin importar el tamaño de este.
              </p>
              <p className="text-gedco-dark-gray/80 mb-8">
                Te acompañamos en cada paso del proceso hasta que se hayan cumplido tus requerimientos con total satisfacción.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  className="bg-gedco-orange hover:bg-gedco-orange/90 text-white border-none"
                >
                  <Link to="/about">
                    Conócenos <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-gedco-orange text-gedco-orange hover:bg-gedco-orange/5"
                >
                  <Link to="/projects">
                    Ver Proyectos
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-sm overflow-hidden">
                <img 
                  src="/lovable-uploads/a2528d48-8e04-45a2-a89b-1583f033f0dc.png" 
                  alt="Equipo GEDCO" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gedco-orange/10 rounded-sm -z-0"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-gedco-orange/10 rounded-sm -z-0"></div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Services Section */}
      <AnimatedSection className="py-20 md:py-24 bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gedco-orange text-sm font-medium uppercase tracking-wider">
              Nuestros Servicios
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Soluciones integrales en arquitectura y construcción
            </h2>
            <p className="text-gedco-dark-gray/80">
              Ofrecemos una amplia gama de servicios para asegurar el éxito de tu proyecto, desde la planificación inicial hasta la entrega final.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              asChild
              variant="outline" 
              className="border-gedco-orange text-gedco-orange hover:bg-gedco-orange/5"
            >
              <Link to="/services">
                Ver todos los servicios <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Projects Section */}
      <AnimatedSection className="py-20 md:py-24 bg-white">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="mb-6 md:mb-0">
              <span className="text-gedco-orange text-sm font-medium uppercase tracking-wider">
                Nuestros Proyectos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Proyectos destacados
              </h2>
              <p className="text-gedco-dark-gray/80 max-w-2xl">
                Descubre nuestros mejores proyectos que demuestran nuestro compromiso con la calidad, la innovación y la excelencia.
              </p>
            </div>
            <Button 
              asChild
              className="md:self-end bg-gedco-orange hover:bg-gedco-orange/90 text-white"
            >
              <Link to="/projects">
                Ver todos los proyectos
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.name}
                description={project.description}
                image={project.image}
                category={project.category}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* Stats Section */}
      <AnimatedSection 
        className="py-20 md:py-24 bg-gedco-black clip-slant"
        id="stats-section"
      >
        <div className="section-container" ref={statsRef}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gedco-orange text-sm font-medium uppercase tracking-wider">
              Por qué elegirnos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-white">
              Excelencia en cada detalle
            </h2>
            <p className="text-white/70">
              Contamos con la experiencia y el conocimiento para llevar tu proyecto al siguiente nivel, cumpliendo y superando tus expectativas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 text-center">
              <div className="h-16 w-16 bg-gedco-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 size={32} className="text-gedco-orange" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">+50</div>
              <p className="text-white/70">Proyectos Completados</p>
            </div>
            
            <div className="p-6 text-center">
              <div className="h-16 w-16 bg-gedco-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} className="text-gedco-orange" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <p className="text-white/70">Satisfacción del Cliente</p>
            </div>
            
            <div className="p-6 text-center">
              <div className="h-16 w-16 bg-gedco-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass size={32} className="text-gedco-orange" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">+10</div>
              <p className="text-white/70">Años de Experiencia</p>
            </div>
            
            <div className="p-6 text-center">
              <div className="h-16 w-16 bg-gedco-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <LayoutDashboard size={32} className="text-gedco-orange" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">+12</div>
              <p className="text-white/70">Servicios Especializados</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* CTA Section */}
      <AnimatedSection className="py-20 md:py-24 bg-white">
        <div className="section-container">
          <div className="bg-gedco-orange/10 p-8 md:p-12 lg:p-16 rounded-sm flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                ¿Listo para comenzar tu proyecto?
              </h2>
              <p className="text-gedco-dark-gray/80 mb-0">
                Contáctanos hoy mismo para discutir tus ideas y cómo podemos ayudarte a hacerlas realidad.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                className="bg-gedco-orange hover:bg-gedco-orange/90 text-white border-none"
              >
                <Link to="/contact">
                  Solicitar cotización <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-gedco-orange text-gedco-orange hover:bg-gedco-orange/5"
              >
                <Link to="/about">
                  Conocer más
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default Index;
