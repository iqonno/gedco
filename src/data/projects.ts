
export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  location?: string;
  details?: string;
  client?: string;
  year?: string;
  area?: string;
  services?: string[];
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Koombea",
    description: "Elaboración de diseño arquitectónico y ejecución de la construcción.",
    image: "/lovable-uploads/f61069bb-4b0b-4c99-be05-f3bf6278cf59.png",
    category: "Diseño y Construcción",
    location: "Cl. 85 #53-14, Barranquilla",
    details: "DEMOLICIÓN DE VIVIENDA EXISTENTE (680m2) PARA PROYECTO NUEVO (1.666M2) CON 3 PISOS: SÓTANO, SEMISOTANO, ÁREA COMERCIAL Y ÁREA CORPORATIVA. Elaboración de estudios de suelos, diseño arquitectónico y especificaciones técnicas, diseño hidrosanitario, diseños eléctricos, diseño estructural, tramite de licencia, presupuestos, programación y construcción del proyecto.",
    client: "Koombea",
    year: "2019",
    area: "1.666 m²",
    services: [
      "Estudios de suelos",
      "Diseño arquitectónico",
      "Diseño hidrosanitario",
      "Diseño eléctrico",
      "Diseño estructural",
      "Trámite de licencia",
      "Presupuesto",
      "Programación",
      "Construcción"
    ],
    gallery: ["/lovable-uploads/f61069bb-4b0b-4c99-be05-f3bf6278cf59.png"]
  },
  {
    id: 2,
    name: "British International School",
    description: "Ampliación del 3er piso, construcción de salón escolar & baños preescolares, sala de profesores.",
    image: "/lovable-uploads/2646ba7a-6f2f-4afc-8bb8-711aa6001aed.png",
    category: "Ampliación y Construcción",
    year: "2020",
    client: "British International School",
    area: "450 m²",
    services: [
      "Diseño arquitectónico",
      "Diseño estructural",
      "Construcción"
    ]
  },
  {
    id: 3,
    name: "Colegio Británico Internacional",
    description: "CANCHA DEPORTIVA Y PLAZA DE ESPARCIMIENTO (DISEÑO Y EJECUCIÓN)",
    image: "/lovable-uploads/73acf21a-2750-4253-b92a-386545936754.png",
    category: "Diseño y Construcción",
    year: "2020",
    client: "Colegio Británico Internacional",
    area: "600 m²",
    services: [
      "Diseño arquitectónico",
      "Diseño de paisajismo",
      "Construcción"
    ]
  },
  {
    id: 4,
    name: "Colegio Británico Internacional",
    description: "ESTRUCTURA METÁLICA CANCHA DEPORTIVA: PRESUPUESTO Y EJECUCIÓN DE OBRA.",
    image: "/lovable-uploads/dd5b857f-869b-4181-8f62-dee8ca786bb9.png",
    category: "Estructura Metálica",
    year: "2021",
    client: "Colegio Británico Internacional",
    services: [
      "Diseño estructural",
      "Presupuesto",
      "Construcción de estructura metálica"
    ]
  },
  {
    id: 5,
    name: "Premium Place",
    description: "Diseño arquitectónico, diseño estructural y construcción del proyecto.",
    image: "/lovable-uploads/b6127048-8b7a-4404-85d7-03aa03dd79c0.png",
    category: "Diseño y Construcción",
    year: "2018",
    client: "Premium Place",
    services: [
      "Diseño arquitectónico",
      "Diseño estructural",
      "Construcción"
    ]
  },
  {
    id: 6,
    name: "Locales comerciales",
    description: "Diseño arquitectónico, diseño estructural y construcción del proyecto.",
    image: "/lovable-uploads/1963d752-59ba-48fb-9ba9-f014e55148e2.png",
    category: "Locales Comerciales",
    year: "2019",
    services: [
      "Diseño arquitectónico",
      "Diseño estructural",
      "Construcción"
    ]
  },
  {
    id: 7,
    name: "Cubicus Coworking",
    description: "Desarrollo de oficinas y espacios flexibles. Diseño de interiores, y construcción del proyecto.",
    image: "/lovable-uploads/ff484436-2d61-47d5-998a-8fdab87e56c3.png",
    category: "Diseño de Interiores",
    year: "2020",
    client: "Cubicus",
    services: [
      "Diseño de interiores",
      "Construcción"
    ]
  },
  {
    id: 8,
    name: "HOTEL MAJESTIC",
    description: "REFORMA SALON SOCIAL & AMPLIACION PISCINA.",
    image: "/lovable-uploads/785b8f12-5e36-4910-a59c-03349c851671.png",
    category: "Reforma y Ampliación",
    year: "2018",
    client: "Hotel Majestic",
    services: [
      "Diseño arquitectónico",
      "Reforma",
      "Ampliación"
    ]
  },
  {
    id: 9,
    name: "JUSTO Y BUENO (JUAN DE ACOSTA)",
    description: "Local comercial de 270 m2, en estructura metálica. Tiempo de entrega 1 mes y 20 días",
    image: "/lovable-uploads/1f39f230-026a-43a3-bf38-d3f70cbb7737.png",
    category: "Estructura Metálica",
    year: "2019",
    client: "Justo y Bueno",
    area: "270 m²",
    services: [
      "Estructura metálica",
      "Construcción"
    ]
  },
  {
    id: 10,
    name: "CIUDADELA LA PAZ",
    description: "Construcción de 608 apartamentos en torres de 4 pisos.",
    image: "/lovable-uploads/5e5aae76-c5b3-43e8-9b28-feed3d5038c5.png",
    category: "Construcción Residencial",
    year: "2017",
    client: "Ciudadela La Paz",
    area: "38.000 m²",
    services: [
      "Construcción de torres",
      "Diseño arquitectónico",
      "Diseño estructural"
    ]
  }
];

export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};
