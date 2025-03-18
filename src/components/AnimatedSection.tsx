
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: "100" | "200" | "300" | "400" | "500";
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-up" | "fade-in";
  id?: string;
}

export function AnimatedSection({
  children,
  className,
  delay = "100",
  animation = "fade-up",
  id,
}: AnimatedSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "animate-on-scroll",
        `delay-${delay}`,
        className
      )}
      data-animation={animation}
    >
      {children}
    </section>
  );
}
