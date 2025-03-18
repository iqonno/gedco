
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  children?: ReactNode;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
  imagePosition?: "center" | "top" | "bottom";
  overlay?: boolean;
  height?: "full" | "large" | "medium" | "small";
  contentPosition?: "center" | "left" | "right";
}

export function Hero({
  title,
  subtitle,
  description,
  image,
  children,
  ctaText = "Cotizar Proyecto",
  ctaLink = "/contact",
  className,
  imagePosition = "center",
  overlay = true,
  height = "large",
  contentPosition = "center",
}: HeroProps) {
  const heightClasses = {
    full: "min-h-screen",
    large: "min-h-[80vh]",
    medium: "min-h-[60vh]",
    small: "min-h-[40vh]",
  };

  const positionClasses = {
    center: "items-center text-center",
    left: "items-start text-left",
    right: "items-end text-right",
  };

  const bgPosition = {
    center: "bg-center",
    top: "bg-top",
    bottom: "bg-bottom",
  };

  return (
    <div
      className={cn(
        "relative w-full flex flex-col justify-center",
        heightClasses[height],
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-no-repeat",
          bgPosition[imagePosition]
        )}
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {overlay && (
        <div className="absolute inset-0 bg-gedco-black/50" />
      )}
      
      <div className="section-container relative z-10 flex flex-col justify-center py-12">
        <div
          className={cn(
            "max-w-3xl mx-auto flex flex-col",
            positionClasses[contentPosition]
          )}
        >
          {subtitle && (
            <span className="text-gedco-orange font-medium uppercase tracking-wider text-sm mb-2 animate-fade-down">
              {subtitle}
            </span>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-up">
            {title}
          </h1>
          
          {description && (
            <p className="text-white/90 text-lg md:text-xl mb-6 max-w-2xl animate-fade-up">
              {description}
            </p>
          )}
          
          {children || (
            <div className="flex flex-wrap gap-4 mt-2 animate-fade-up delay-300">
              <Button 
                asChild
                size="lg" 
                className="bg-gedco-orange hover:bg-gedco-orange/90 text-white border-none"
              >
                <Link to={ctaLink}>
                  {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
