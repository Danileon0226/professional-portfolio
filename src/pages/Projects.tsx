import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

// Tipos de proyectos
type ProjectCategory = "Todos" | "Web" | "Mobile" | "Desktop" | "API";
type TechStack = string;

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  category: ProjectCategory;
  featured?: boolean;
  date: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma de comercio electrónico moderna y escalable con gestión de productos, carrito de compras y pagos integrados.",
    longDescription:
      "Una plataforma completa de comercio electrónico que incluye gestión de inventario, sistema de pagos, panel de administración, análisis de ventas y más. Desarrollada con las últimas tecnologías y mejores prácticas.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: "/images/default-proyect.jpg",
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com",
    category: "Web",
    featured: true,
    date: "2024",
  },
  {
    title: "CRM System",
    description:
      "Sistema de gestión de relaciones con clientes con análisis en tiempo real y automatización de procesos.",
    longDescription:
      "CRM empresarial con funciones avanzadas de seguimiento de clientes, automatización de marketing, análisis de datos y generación de informes personalizados.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: "/images/default-proyect.jpg",
    github: "https://github.com/yourusername/crm",
    demo: "https://crm-demo.com",
    category: "Web",
    featured: true,
    date: "2023",
  },
  {
    title: "Mobile Fitness App",
    description:
      "Aplicación móvil para seguimiento de ejercicios y nutrición con planes personalizados.",
    longDescription:
      "Aplicación fitness completa con seguimiento de rutinas, planes de nutrición, integración con dispositivos wearables y comunidad social.",
    tech: ["React Native", "Firebase", "Redux", "Node.js"],
    image: "/images/default-proyect.jpg",
    github: "https://github.com/yourusername/fitness-app",
    demo: "https://fitness-demo.com",
    category: "Mobile",
    date: "2023",
  },
];

const allTechnologies = Array.from(
  new Set(projects.flatMap((project) => project.tech))
).sort();

const categories: ProjectCategory[] = [
  "Todos",
  "Web",
  "Mobile",
  "Desktop",
  "API",
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("Todos");
  const [selectedTech, setSelectedTech] = useState<TechStack[]>([]);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "Todos" || project.category === selectedCategory;
    const matchesTech =
      selectedTech.length === 0 ||
      selectedTech.every((tech) => project.tech.includes(tech));
    return matchesCategory && matchesTech;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Breadcrumbs />

      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Mis Proyectos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora mi portafolio de proyectos, desde aplicaciones web hasta
            soluciones móviles y APIs.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Tech Stack Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {allTechnologies.map((tech) => (
              <Badge
                key={tech}
                variant={selectedTech.includes(tech) ? "default" : "secondary"}
                className="cursor-pointer hover:opacity-80"
                onClick={() => {
                  setSelectedTech((prev) =>
                    prev.includes(tech)
                      ? prev.filter((t) => t !== tech)
                      : [...prev, tech]
                  );
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full flex flex-col hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <Badge className="absolute top-2 right-2 bg-primary/90 backdrop-blur-sm">
                      Destacado
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="outline">{project.date}</Badge>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.longDescription && (
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.longDescription}
                    </p>
                  )}
                  <div className="flex gap-3 mt-auto">
                    <Button variant="default" className="flex-1" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">
              No se encontraron proyectos con los filtros seleccionados.
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
}
