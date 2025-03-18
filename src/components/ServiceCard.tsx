
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  className,
}: ServiceCardProps) {
  return (
    <div 
      className={cn(
        "group p-6 bg-white border border-border hover:border-gedco-orange/30 hover:shadow-lg transition-all duration-300 rounded-sm",
        className
      )}
    >
      <div className="h-12 w-12 flex items-center justify-center bg-gedco-orange/10 rounded-sm text-gedco-orange mb-5 group-hover:bg-gedco-orange group-hover:text-white transition-all duration-300">
        <Icon size={24} />
      </div>
      
      <h3 className="text-lg font-medium text-gedco-black mb-3 group-hover:text-gedco-orange transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gedco-dark-gray/80 text-sm">
        {description}
      </p>
    </div>
  );
}
