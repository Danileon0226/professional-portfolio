import { motion } from "framer-motion";

import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Mail,
  Github,
  ArrowRight,
  Calendar,
  Download,
  User,
  Folder,
  Users,
  GitBranch,
} from "lucide-react";
import profile from "../../public/images/CV FOTO.jpg";
import Navbar from "@/components/layout/Navbar";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import defaultProject from "../../public/images/default-proyect.jpg";
import { SkillCard } from "../components/ui/skill-card";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Footer from "../components/layout/Footer";

const skills = [
  {
    name: "React",
    icon: "/images/skills/react.svg",
    level: "Avanzado" as const,
    yearsOfExperience: 3,
  },
  {
    name: "TypeScript",
    icon: "/images/skills/typescript.svg",
    level: "Avanzado" as const,
    yearsOfExperience: 2,
  },
  {
    name: "Node.js",
    icon: "/images/skills/nodejs.svg",
    level: "Intermedio" as const,
    yearsOfExperience: 2,
  },
  {
    name: "Next.js",
    icon: "/images/skills/nextjs.svg",
    level: "Avanzado" as const,
    yearsOfExperience: 2,
  },
  {
    name: "Tailwind CSS",
    icon: "/images/skills/tailwind.svg",
    level: "Avanzado" as const,
    yearsOfExperience: 2,
  },
  {
    name: "PostgreSQL",
    icon: "/images/skills/postgresql.svg",
    level: "Intermedio" as const,
    yearsOfExperience: 2,
  },
  {
    name: "MongoDB",
    icon: "/images/skills/mongodb.svg",
    level: "Intermedio" as const,
    yearsOfExperience: 1,
  },
  {
    name: "AWS",
    icon: "/images/skills/aws.svg",
    level: "Básico" as const,
    yearsOfExperience: 1,
  },
];

const experiences = [
  {
    company: "Periferia It Group",
    position: "Software Engineer Front",
    period: "2024 - Presente",
    description:
      "Desarrollo de aplicaciones web modernas utilizando React y TypeScript.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    company: "TecnoTics",
    position: "Full Stack Developer",
    period: "2023 - 2024",
    description: "Desarrollo full stack de aplicaciones web y móviles.",
    technologies: ["Node.js", "React Native", "PostgreSQL", "AWS"],
  },
  {
    company: "Crystal S.A.S",
    position: "Desarrollador Web",
    period: "2022 - 2023",
    description: "Desarrollo full stack de aplicaciones web y móviles.",
    technologies: ["Node.js", "React Native", ".NET", "AWS"],
  },
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
    title: "E-commerce Platform",
    description:
      "Plataforma de comercio electrónico moderna y escalable con gestión de productos, carrito de compras y pagos integrados.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: defaultProject,
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
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

const testimonials = [
  {
    name: "Ana García",
    position: "CEO, TechStart",
    content: "Un desarrollador excepcional con gran atención al detalle.",
    avatar: profile,
  },
  {
    name: "Carlos Ruiz",
    position: "CTO, InnovaSoft",
    content: "Excelente capacidad para resolver problemas complejos.",
    avatar: profile,
  },
  {
    name: "Carlos Ruiz",
    position: "CTO, InnovaSoft",
    content: "Excelente capacidad para resolver problemas complejos.",
    avatar: profile,
  },
  {
    name: "Carlos Ruiz",
    position: "CTO, InnovaSoft",
    content: "Excelente capacidad para resolver problemas complejos.",
    avatar: profile,
  },
];

const stats = [
  {
    value: 4,
    label: "Años de Experiencia",
    icon: Calendar,
  },
  {
    value: 50,
    label: "Proyectos Completados",
    icon: Folder,
  },
  {
    value: 20,
    label: "Clientes Satisfechos",
    icon: Users,
  },
  {
    value: 100,
    label: "Commits por Semana",
    icon: GitBranch,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Breadcrumbs />
      <main className="container mx-auto px-2 sm:px-4 md:px-6 py-10 sm:py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-purple-600/30 to-blue-600/40 dark:bg-gradient-custom blur-[100px] -z-10" />
          <motion.h1
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-foreground dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Desarrollador Full Stack
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-gray-200 max-w-3xl mx-auto mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creando experiencias digitales excepcionales a través del código.
            Especializado en desarrollo web moderno y soluciones escalables.
          </motion.p>
          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              className="hover-scale shadow-custom px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
              variant="default"
              size="lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contactar
            </Button>
            <Button
              className="hover-scale shadow-custom px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
              variant="outline"
              size="lg"
            >
              Ver Proyectos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-foreground dark:text-white">
            Sobre Mí
          </h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-4 sm:p-8">
              <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center justify-center">
                <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden">
                  <img
                    src={profile}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 w-full">
                  <p className="text-base sm:text-lg mb-4">
                    Desarrollador Full Stack apasionado por crear soluciones
                    digitales innovadoras. Con más de 4 años de experiencia en
                    el desarrollo web moderno.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                    <Button
                      variant="outline"
                      className="gap-2 w-full sm:w-auto"
                    >
                      <User className="w-4 h-4" />
                      Ver CV Completo
                    </Button>
                    <Button
                      variant="default"
                      className="gap-2 w-full sm:w-auto"
                    >
                      <Download className="w-4 h-4" />
                      Descargar CV
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Skills Section with new SkillCard component */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-foreground dark:text-white">
            Habilidades Técnicas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {skills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          className="mb-16 sm:mb-24 py-10 sm:py-16 bg-primary/5 dark:bg-primary/10 rounded-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-0 sm:px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <motion.h3
                    className="text-2xl sm:text-4xl font-bold mb-2 text-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {stat.value}+
                    </motion.span>
                  </motion.h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-foreground dark:text-white">
            Experiencia Profesional
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-8 px-2 sm:px-0">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-4">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                    {exp.position}
                  </h3>
                  <h4 className="text-base sm:text-lg text-primary mb-2 sm:mb-4">
                    {exp.company}
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base mb-2 sm:mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 sm:mb-24 relative"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-16 text-center text-foreground dark:text-white">
            Proyectos Destacados
          </h2>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto px-2 sm:px-4"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem
                  key={project.title}
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50 dark:bg-card/95 h-full"
                  >
                    <div className="relative aspect-[16/9]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full max-w-full"
                        onError={(e) => {
                          e.currentTarget.src = "/default-project.jpg";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-transparent dark:from-black/95 dark:via-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-0 right-0 p-2 sm:p-4 transform translate-y-full group-hover:translate-y-4 transition-transform duration-300">
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

                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-foreground dark:text-white">
            Testimonios
          </h2>
          <Carousel
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              dragFree: true,
              duration: 25,
            }}
            className="w-full max-w-5xl mx-auto px-2 sm:px-0"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 lg:basis-1/3 pl-0 md:pl-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Card className="relative">
                      <CardContent className="p-4 sm:p-6">
                        <div className="mb-4 sm:mb-6">
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 20,
                              delay: 0.1 + index * 0.1,
                            }}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-primary"
                          >
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        </div>
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.3 + index * 0.1,
                          }}
                          className="text-muted-foreground italic text-sm sm:text-base mb-2 sm:mb-4"
                        >
                          "{testimonial.content}"
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.4 + index * 0.1,
                          }}
                        >
                          <h4 className="font-semibold text-sm sm:text-base">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {testimonial.position}
                          </p>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.section>

        {/* Contact Section (existing but enhanced) */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-10 sm:mt-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-foreground dark:text-white">
            ¿Listo para Colaborar?
          </h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-4 sm:p-8">
              <p className="text-base sm:text-lg mb-6 sm:mb-8">
                Estoy siempre interesado en nuevos proyectos y oportunidades de
                colaboración. ¡No dudes en contactarme!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 w-full">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    className="hover-scale shadow-custom w-full sm:w-auto"
                    variant="default"
                    size="lg"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Enviar Mensaje
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    className="hover-scale shadow-custom w-full sm:w-auto"
                    variant="outline"
                    size="lg"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Agendar Reunión
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
