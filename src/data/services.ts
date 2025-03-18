
import {
  Building2,
  Compass,
  LayoutDashboard,
  Brush,
  Ruler,
  Container,
  Briefcase,
  Home,
  Wallpaper,
  LineChart,
  HardHat,
  CalendarRange,
  FileText,
  ClipboardCheck,
} from "lucide-react";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: any;
  longDescription?: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Consultoría integral de proyectos",
    description: "Asesoramiento completo para la planificación, desarrollo y ejecución de proyectos arquitectónicos y de construcción.",
    icon: Briefcase,
    longDescription: "Ofrecemos servicios de consultoría integral para guiar su proyecto desde la concepción hasta la finalización. Nuestro equipo multidisciplinario evalúa la viabilidad, establece objetivos claros, identifica riesgos y oportunidades, y desarrolla estrategias para maximizar el valor de su inversión. Garantizamos que su proyecto cumpla con todas las regulaciones y se ejecute de manera eficiente."
  },
  {
    id: 2,
    title: "Diseño arquitectónico",
    description: "Creación de propuestas arquitectónicas innovadoras y funcionales que satisfacen las necesidades del cliente.",
    icon: Compass,
    longDescription: "Creamos diseños arquitectónicos que combinan estética, funcionalidad y sostenibilidad. Nuestro proceso de diseño se centra en entender las necesidades específicas de cada cliente, el contexto del sitio y los requisitos técnicos. Utilizamos herramientas avanzadas de modelado 3D y visualización para comunicar claramente nuestra visión y facilitar la toma de decisiones informadas."
  },
  {
    id: 3,
    title: "Diseño de interiores",
    description: "Diseño de espacios interiores que combinan estética, funcionalidad y coherencia con el concepto arquitectónico del proyecto.",
    icon: LayoutDashboard,
    longDescription: "Transformamos espacios interiores en ambientes funcionales y estéticamente atractivos. Seleccionamos cuidadosamente materiales, colores, iluminación y mobiliario para crear espacios que reflejen la identidad de nuestros clientes y optimicen el flujo y la funcionalidad. Nos especializamos en espacios residenciales, comerciales y corporativos, siempre buscando el equilibrio perfecto entre diseño y practicidad."
  },
  {
    id: 4,
    title: "Renderización de proyectos arquitectónicos",
    description: "Visualización hiperrealista de proyectos arquitectónicos para una mejor comprensión espacial antes de su construcción.",
    icon: Wallpaper,
    longDescription: "Generamos imágenes fotorrealistas que permiten visualizar el proyecto antes de su construcción. Nuestros renders capturan con precisión materiales, luces, sombras y texturas, facilitando la toma de decisiones y ayudando a comercializar proyectos inmobiliarios. Utilizamos software especializado y técnicas avanzadas para lograr un nivel excepcional de realismo y detalle."
  },
  {
    id: 5,
    title: "Diseño y cálculo de estructuras",
    description: "Planificación y cálculo estructural para garantizar la seguridad, estabilidad y durabilidad de las edificaciones.",
    icon: Ruler,
    longDescription: "Realizamos análisis y diseño estructural para garantizar que los edificios sean seguros, estables y duraderos. Nuestros ingenieros estructurales utilizan software avanzado para modelar y calcular diversas soluciones estructurales, optimizando el uso de materiales y costos sin comprometer la seguridad. Trabajamos con estructuras de concreto, acero, madera y sistemas mixtos, adaptándonos a las necesidades específicas de cada proyecto."
  },
  {
    id: 6,
    title: "Presupuesto de obras",
    description: "Elaboración detallada de presupuestos para obras, incluyendo materiales, mano de obra y tiempos de ejecución.",
    icon: LineChart,
    longDescription: "Desarrollamos presupuestos detallados y precisos que incluyen todos los aspectos del proyecto: materiales, mano de obra, equipos, gastos generales y utilidad. Nuestros presupuestos permiten una planificación financiera adecuada y sirven como herramienta para el control de costos durante la ejecución de la obra. Utilizamos bases de datos actualizadas de precios y rendimientos para garantizar cifras realistas."
  },
  {
    id: 7,
    title: "Programación y control de obras",
    description: "Planificación detallada de tiempos y recursos para la ejecución eficiente de proyectos constructivos.",
    icon: CalendarRange,
    longDescription: "Elaboramos cronogramas detallados que optimizan tiempos, recursos y secuencias constructivas. Durante la ejecución, monitoreamos constantemente el avance, identificamos desviaciones y aplicamos medidas correctivas oportunas. Utilizamos metodologías como Ruta Crítica y herramientas como MS Project o Primavera para una gestión eficiente, garantizando la entrega en tiempo y dentro del presupuesto."
  },
  {
    id: 8,
    title: "Interventoría de obras",
    description: "Supervisión técnica para asegurar que la ejecución de las obras cumpla con los diseños, especificaciones y normativas.",
    icon: ClipboardCheck,
    longDescription: "Realizamos supervisión y control exhaustivo durante la ejecución de obras para asegurar el cumplimiento de diseños, especificaciones técnicas, normativas y estándares de calidad. Nuestro equipo verifica la correcta ejecución de cada etapa constructiva, revisa materiales, supervisa pruebas y ensayos, y garantiza el cumplimiento de plazos y presupuestos, representando los intereses del cliente."
  },
  {
    id: 9,
    title: "Construcción de obras civiles",
    description: "Ejecución completa de proyectos constructivos con altos estándares de calidad, seguridad y cumplimiento de plazos.",
    icon: Building2,
    longDescription: "Ejecutamos proyectos constructivos con los más altos estándares de calidad y seguridad. Nuestros servicios incluyen instalaciones hidráulicas y eléctricas, estructuras en concreto y metálicas, mampostería, acabados, pavimentos, piscinas, movimientos de tierra y cimentaciones profundas. Contamos con personal calificado, equipos modernos y rigurosos sistemas de control de calidad para garantizar resultados excepcionales."
  },
  {
    id: 10,
    title: "Remodelaciones",
    description: "Renovación y actualización de espacios existentes para mejorar su funcionalidad, estética y valor.",
    icon: Brush,
    longDescription: "Transformamos espacios existentes para adaptarlos a nuevas necesidades o tendencias. Nuestro enfoque abarca desde pequeñas actualizaciones estéticas hasta renovaciones completas, siempre maximizando el potencial del espacio y respetando la estructura original cuando es necesario. Trabajamos con precisión en espacios ocupados, minimizando interrupciones y garantizando un proceso ordenado y limpio."
  },
  {
    id: 11,
    title: "Mantenimiento de infraestructura",
    description: "Servicios periódicos de mantenimiento preventivo y correctivo para preservar el buen estado y funcionamiento de edificaciones.",
    icon: HardHat,
    longDescription: "Ofrecemos servicios de mantenimiento preventivo y correctivo para preservar el valor y la funcionalidad de su propiedad. Desarrollamos planes personalizados según las necesidades específicas de cada edificación, realizando inspecciones regulares, identificando potenciales problemas antes de que se agraven y ejecutando reparaciones necesarias con mínima interrupción para los ocupantes."
  },
  {
    id: 12,
    title: "Trámites en licencias de construcción",
    description: "Gestión completa de permisos y licencias necesarias para la ejecución legal de proyectos constructivos.",
    icon: FileText,
    longDescription: "Gestionamos todos los trámites y permisos necesarios para su proyecto constructivo, desde licencias de construcción hasta permisos ambientales y conexiones de servicios públicos. Nuestro equipo conoce a fondo los requisitos legales y técnicos de las diferentes entidades, agilizando el proceso y evitando retrasos. Nos encargamos de toda la documentación, presentaciones y seguimiento hasta la obtención de las aprobaciones."
  }
];

export const getServiceById = (id: number): Service | undefined => {
  return services.find(service => service.id === id);
};
