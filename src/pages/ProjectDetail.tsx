
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProjectById } from "@/data/projects";
import { Hero } from "@/components/Hero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, Calendar, MapPin, Maximize2, User2 } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState(getProjectById(Number(id)));
  const [relatedProjects, setRelatedProjects] = useState([]);
  
  useEffect(() => {
    if (id) {
      setProject(getProjectById(Number(id)));
      
      // Get related projects (same category but not the current one)
      if (project) {
        const related = projects
          .filter(p => p.category === project.category && p.id !== project.id)
          .slice(0, 3);
        setRelatedProjects(related);
      }
    }
  }, [id, project?.category]);
  
  if (!project) {
    return (
      <div className="section-container py-20 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Proyecto no encontrado</h2>
        <p className="text-gedco-dark-gray/80 mb-6">
          El proyecto que estás buscando no existe o ha sido eliminado.
        </p>
        <Button asChild>
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Proyectos
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Hero
        title={project.name}
        subtitle={project.category}
        image={project.image}
        height="medium"
        contentPosition="left"
      >
        <p className="text-white/90 text-lg md:text-xl mb-6 max-w-2xl animate-fade-up">
          {project.description}
        </p>
        <Button 
          asChild
          className="mt-4 bg-white text-gedco-black hover:bg-white/90 animate-fade-up delay-300"
        >
          <Link to="/contact">
            Contáctanos para un proyecto similar
          </Link>
        </Button>
      </Hero>
      
      <AnimatedSection className="py-20 md:py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Detalles del Proyecto
              </h2>
              
              <div className="prose max-w-none text-gedco-dark-gray/80 mb-10">
                <p className="mb-4">
                  {project.details || project.description}
                </p>
                
                {project.services && (
                  <>
                    <h3 className="text-xl font-medium mt-8 mb-4 text-gedco-black">
                      Servicios realizados
                    </h3>
                    <ul className="space-y-2">
                      {project.services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-gedco-orange mr-2">•</span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {project.gallery && project.gallery.map((image, index) => (
                  <div key={index} className="relative group">
                    <img 
                      src={image} 
                      alt={`${project.name} - Imagen ${index + 1}`} 
                      className="w-full h-auto rounded-sm"
                    />
                    <div className="absolute inset-0 bg-gedco-black/0 group-hover:bg-gedco-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Maximize2 className="text-white h-8 w-8" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="sticky top-28">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b border-gray-200">
                  Información del Proyecto
                </h3>
                
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-gedco-orange/10 rounded-sm flex items-center justify-center mr-4">
                      <User2 size={20} className="text-gedco-orange" />
                    </div>
                    <div>
                      <p className="text-sm text-gedco-dark-gray/70">Cliente</p>
                      <p className="font-medium">{project.client || "Cliente Privado"}</p>
                    </div>
                  </div>
                  
                  {project.location && (
                    <div className="flex items-start">
                      <div className="h-10 w-10 bg-gedco-orange/10 rounded-sm flex items-center justify-center mr-4">
                        <MapPin size={20} className="text-gedco-orange" />
                      </div>
                      <div>
                        <p className="text-sm text-gedco-dark-gray/70">Ubicación</p>
                        <p className="font-medium">{project.location}</p>
                      </div>
                    </div>
                  )}
                  
                  {project.year && (
                    <div className="flex items-start">
                      <div className="h-10 w-10 bg-gedco-orange/10 rounded-sm flex items-center justify-center mr-4">
                        <Calendar size={20} className="text-gedco-orange" />
                      </div>
                      <div>
                        <p className="text-sm text-gedco-dark-gray/70">Año</p>
                        <p className="font-medium">{project.year}</p>
                      </div>
                    </div>
                  )}
                  
                  {project.area && (
                    <div className="flex items-start">
                      <div className="h-10 w-10 bg-gedco-orange/10 rounded-sm flex items-center justify-center mr-4">
                        <Maximize2 size={20} className="text-gedco-orange" />
                      </div>
                      <div>
                        <p className="text-sm text-gedco-dark-gray/70">Área</p>
                        <p className="font-medium">{project.area}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-gedco-orange/10 rounded-sm flex items-center justify-center mr-4">
                      <Building2 size={20} className="text-gedco-orange" />
                    </div>
                    <div>
                      <p className="text-sm text-gedco-dark-gray/70">Categoría</p>
                      <p className="font-medium">{project.category}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <Button 
                    asChild
                    className="w-full bg-gedco-orange hover:bg-gedco-orange/90 text-white"
                  >
                    <Link to="/contact">
                      Contactar para más información
                    </Link>
                  </Button>
                </div>
                
                <div className="mt-4">
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full border-gedco-orange/30 text-gedco-black hover:bg-gedco-orange/5"
                  >
                    <Link to="/projects">
                      <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Proyectos
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {relatedProjects.length > 0 && (
        <AnimatedSection className="py-20 md:py-24 bg-gray-50">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">
              Proyectos Relacionados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
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
      )}
    </>
  );
};

export default ProjectDetail;
