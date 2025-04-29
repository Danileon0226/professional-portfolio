import { motion } from "framer-motion";

import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import defaultProject from "../../public/images/default-proyect.jpg";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "AWS",
];

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma de comercio electrónico moderna y escalable con gestión de productos, carrito de compras y pagos integrados.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: defaultProject,
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
  {
    title: "CRM System",
    description:
      "Sistema de gestión de relaciones con clientes con análisis en tiempo real y automatización de procesos.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: defaultProject,
    github: "https://github.com/yourusername/crm",
    demo: "https://crm-demo.com",
  },
  {
    title: "Portfolio Website",
    description:
      "Sitio web personal moderno construido con las últimas tecnologías web.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: defaultProject,
    github: "https://github.com/yourusername/portfolio",
    demo: "https://portfolio-demo.com",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-600/20 to-blue-600/20 dark:from-primary/10 dark:via-purple-600/10 dark:to-blue-600/10 blur-3xl -z-10" />
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Desarrollador Full Stack
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creando experiencias digitales excepcionales a través del código.
            Especializado en desarrollo web moderno y soluciones escalables.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              className="hover-scale shadow-custom px-8 py-6 text-lg"
              variant="default"
              size="lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contactar
            </Button>
            <Button
              className="hover-scale shadow-custom px-8 py-6 text-lg"
              variant="outline"
              size="lg"
            >
              Ver Proyectos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Habilidades
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Badge
                  variant="secondary"
                  className="w-full text-center text-base px-4 py-2 hover-scale shadow-custom dark:bg-secondary/80 dark:text-secondary-foreground"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Proyectos Destacados
          </h2>

          <div className="grid grid-cols-3 m- ">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50 dark:bg-card/95"
              >
                <div className="relative aspect-[16/9] ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full "
                    onError={(e) => {
                      e.currentTarget.src = "/default-project.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent dark:from-black/95 dark:via-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs px-2 py-1 bg-background/80 backdrop-blur-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-10">
                  <h3 className="text-xl font-semibold mb-5  transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs px-2 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="default"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Ver Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Conectemos
          </h2>
          <div className="flex justify-center gap-6">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="hover-scale shadow-custom w-12 h-12"
                variant="outline"
                size="icon"
              >
                <Github className="h-6 w-6" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="hover-scale shadow-custom w-12 h-12"
                variant="outline"
                size="icon"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="hover-scale shadow-custom w-12 h-12"
                variant="outline"
                size="icon"
              >
                <Mail className="h-6 w-6" />
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Home;
