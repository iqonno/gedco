
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  className?: string;
  category?: string;
}

export function ProjectCard({
  id,
  title,
  description,
  image,
  className,
  category,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/projects/${id}`}
      className={cn(
        "group relative overflow-hidden block rounded-sm",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="aspect-square md:aspect-[4/3] lg:aspect-[4/3] bg-cover bg-center w-full h-full transition-transform duration-700 ease-out transform"
        style={{ 
          backgroundImage: `url(${image})`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-gedco-black/90 via-gedco-black/30 to-transparent opacity-90 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col transform transition-transform duration-300 ease-out">
          <div className="mb-2 flex justify-between items-center">
            <span className="text-xs uppercase tracking-wider text-gedco-orange font-medium">
              {category || "Arquitectura"}
            </span>
            <span 
              className={cn(
                "h-9 w-9 rounded-full bg-white flex items-center justify-center transition-all duration-300 ease-out",
                isHovered ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
            >
              <ArrowUpRight size={16} className="text-gedco-black" />
            </span>
          </div>
          
          <h3 className="text-white text-xl font-medium mb-1">
            {title}
          </h3>
          
          <p 
            className={cn(
              "text-white/80 text-sm max-w-md transition-all duration-300 ease-out",
              isHovered ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            {description.length > 100 ? `${description.substring(0, 100)}...` : description}
          </p>
        </div>
      </div>
    </Link>
  );
}
