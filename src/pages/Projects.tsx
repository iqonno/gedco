
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Projects = () => {
  const [category, setCategory] = useState<string>("all");
  
  const categories = [
    { value: "all", label: "Todos" },
    { value: "Diseño y Construcción", label: "Diseño y Construcción" },
    { value: "Estructura Metálica", label: "Estructura Metálica" },
    { value: "Ampliación y Construcción", label: "Ampliación" },
    { value: "Reforma y Ampliación", label: "Reforma" },
    { value: "Diseño de Interiores", label: "Interiores" },
  ];
  
  const filteredProjects = category === "all" 
    ? projects 
    : projects.filter(project => project.category === category);

  return (
    <>
      <Hero
        title="Nuestros Proyectos"
        subtitle="PORTAFOLIO"
        description="Descubre la calidad y el alcance de nuestro trabajo"
        image="/lovable-uploads/b6127048-8b7a-4404-85d7-03aa03dd79c0.png"
        height="medium"
      />
      
      <AnimatedSection className="py-20 md:py-24 bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gedco-orange text-sm font-medium uppercase tracking-wider">
              Portafolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Nuestros mejores proyectos
            </h2>
            <p className="text-gedco-dark-gray/80">
              Explora nuestra selección de proyectos destacados que muestran nuestra experiencia y capacidad para transformar ideas en realidades arquitectónicas excepcionales.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.value}
                variant={category === cat.value ? "default" : "outline"}
                className={
                  category === cat.value
                    ? "bg-gedco-orange hover:bg-gedco-orange/90 text-white"
                    : "text-gedco-dark-gray hover:text-gedco-orange hover:border-gedco-orange/30"
                }
                onClick={() => setCategory(cat.value)}
              >
                {cat.label}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
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
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gedco-dark-gray/80">
                No se encontraron proyectos en esta categoría.
              </p>
            </div>
          )}
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="py-20 md:py-24 bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gedco-orange text-sm font-medium uppercase tracking-wider">
              Preguntas Frecuentes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Información sobre nuestros proyectos
            </h2>
            <p className="text-gedco-dark-gray/80">
              Respuestas a las preguntas más comunes sobre nuestro proceso de trabajo, plazos y servicios.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            <div className="py-6">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-medium text-gedco-black">¿Cuál es el tiempo promedio de ejecución de un proyecto?</h3>
                <ChevronDown className="h-5 w-5 text-gedco-orange" />
              </div>
              <div className="mt-3">
                <p className="text-gedco-dark-gray/80">
                  El tiempo de ejecución varía según la complejidad y escala del proyecto. Para proyectos residenciales pequeños, el tiempo promedio es de 3 a 6 meses, mientras que para proyectos comerciales o de mayor envergadura puede extenderse de 8 a 18 meses. Durante la fase de planificación, establecemos un cronograma detallado y realista.
                </p>
              </div>
            </div>
            
            <div className="py-6">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-medium text-gedco-black">¿Cómo garantizan la calidad de sus proyectos?</h3>
                <ChevronDown className="h-5 w-5 text-gedco-orange" />
              </div>
              <div className="mt-3">
                <p className="text-gedco-dark-gray/80">
                  Implementamos un riguroso sistema de control de calidad en todas las fases del proyecto. Esto incluye supervisión continua por profesionales experimentados, selección cuidadosa de materiales, cumplimiento estricto de normas técnicas y evaluaciones periódicas. Además, trabajamos únicamente con contratistas y proveedores confiables y de comprobada trayectoria.
                </p>
              </div>
            </div>
            
            <div className="py-6">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-medium text-gedco-black">¿Ofrecen servicios de mantenimiento post-construcción?</h3>
                <ChevronDown className="h-5 w-5 text-gedco-orange" />
              </div>
              <div className="mt-3">
                <p className="text-gedco-dark-gray/80">
                  Sí, ofrecemos servicios de mantenimiento preventivo y correctivo para preservar el valor y la funcionalidad de su propiedad. Desarrollamos planes personalizados según las necesidades específicas de cada edificación, realizando inspecciones regulares, identificando potenciales problemas antes de que se agraven y ejecutando reparaciones necesarias con mínima interrupción para los ocupantes.
                </p>
              </div>
            </div>
            
            <div className="py-6">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-medium text-gedco-black">¿Trabajan con presupuestos limitados?</h3>
                <ChevronDown className="h-5 w-5 text-gedco-orange" />
              </div>
              <div className="mt-3">
                <p className="text-gedco-dark-gray/80">
                  Nos adaptamos a diferentes rangos presupuestarios, trabajando estrechamente con nuestros clientes para optimizar recursos sin comprometer la calidad. Analizamos diferentes alternativas de materiales y sistemas constructivos que se ajusten a sus posibilidades económicas, siempre manteniendo los estándares de calidad que nos caracterizan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default Projects;
