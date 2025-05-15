import { motion } from 'framer-motion';
import { useState } from 'react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import Afan from '../../public/images/proyects/afan.png';
import Terminal from '../../public/images/proyects/terminalsur.png';
import Tecnotics from '../../public/images/proyects/tecnotics.png';
import AppsforTheWorld from '../../public/images/proyects/appsfortheworld.png';
import HemoGroup from '../../public/images/proyects/hemogroup.png';
import Construredes from '../../public/images/proyects/construredes.png';
import Vlips from '../../public/images/proyects/vlips.png';
import Rrg from '../../public/images/proyects/rrg.png';
import VerdeOrigen from '../../public/images/proyects/verdeorigen.png';
import { ExternalLink } from 'lucide-react';

// Tipos de proyectos
type ProjectCategory = 'Todos' | 'Web' | 'Mobile' | 'Desktop' | 'API';
type TechStack = string;

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  image: string;

  demo: string;
  category: ProjectCategory;
  featured?: boolean;
  date: string;
}

const projects: Project[] = [
  {
    title: 'RRG System',
    description:
      'Sistema de registro, campañas y validación de códigos QR personalizado para campañas empresariales.',
    longDescription:
      'Plataforma administrativa robusta que permite el registro de usuarios, generación de campañas con códigos únicos, validación en tiempo real, estadísticas, CRUD avanzado y flujos personalizados. Integra formularios inteligentes, autenticación segura y paneles diferenciados por roles.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'MSAL'],
    image: Rrg,

    demo: 'https://terminaldelsur.com/login',
    category: 'Web',
    featured: true,
    date: '2025',
  },
  {
    title: 'Hemogroup App',
    description: 'Sitio web institucional moderno para una empresa de tecnología médica.',
    longDescription:
      'Landing page profesional y optimizada para HemoGroup, con secciones animadas, diseño responsive, enfoque en SEO y visuales de alto impacto. Implementación de animaciones suaves, scroll dinámico y estilo sofisticado.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: HemoGroup,

    demo: 'https://hemogroup.netlify.app/',
    category: 'Web',
    featured: false,
    date: '2024',
  },
  {
    title: 'Tecnotics',
    description:
      'Landing page avanzada para una empresa de soluciones tecnológicas con enfoque comercial.',
    longDescription:
      'Desarrollo de una interfaz premium con diseño de lujo, secciones animadas, formularios integrados y estructura SEO optimizada. Uso de efectos modernos y experiencia fluida centrada en la conversión.',
    tech: ['React', 'Tailwind CSS'],
    image: Tecnotics,

    demo: 'https://tecnotics.com/',
    category: 'Web',
    featured: true,
    date: '2024',
  },
  {
    title: 'Apps for the World',
    description: 'Plataforma de presentación de soluciones digitales a nivel global.',
    longDescription:
      'Portfolio empresarial con enfoque internacional, diseño ultra moderno, múltiples secciones visuales, compatibilidad con dispositivos móviles, y una identidad de marca fuerte. Desarrollada con estándares altos de calidad visual.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: AppsforTheWorld,

    demo: 'https://appsfortheworld.com/',
    category: 'Web',
    featured: true,
    date: '2024',
  },
  {
    title: 'Construredes',
    description:
      'Sitio institucional moderno para empresa de infraestructura y telecomunicaciones.',
    longDescription:
      'Landing elegante y profesional para Construredes, con paleta de colores sobria, tipografía técnica y animaciones de entrada. Optimizada para dispositivos móviles y cargado de forma ultra rápida.',
    tech: ['React', 'Tailwind CSS'],
    image: Construredes,

    demo: 'https://construredes.netlify.app/',
    category: 'Web',
    featured: false,
    date: '2024',
  },
  {
    title: 'Vlips',
    description:
      'Sistema de gestión de videos y clips para una plataforma de entretenimiento digital.',
    longDescription:
      'Desarrollo de un sistema robusto para la gestión de videos, clips y contenido multimedia. Incluye funciones avanzadas de búsqueda, filtrado y categorización. Interfaz intuitiva y optimizada para el usuario.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: Vlips,

    demo: 'https://vlips.co/',
    category: 'Web',
    featured: false,
    date: '2024',
  },
  {
    title: 'AFAN',
    description:
      'Sistema de gestión de arrendamientos y propiedades con enfoque en la experiencia del usuario.',
    longDescription:
      'Desarrollo de una plataforma integral para la gestión de arrendamientos, propiedades y pagos. Incluye un panel administrativo, gestión de usuarios y un sistema de notificaciones. Interfaz amigable y optimizada para dispositivos móviles.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: Afan,

    demo: 'https://afan.com.co/',
    category: 'Web',
    featured: false,
    date: '2025',
  },
  {
    title: 'Terminal del Sur',
    description:
      'Sistema de gestión para una terminal de transporte con enfoque en la experiencia del usuario.',
    longDescription:
      'Desarrollo de un sistema integral para la gestión de terminales de transporte, incluyendo reservas, pagos y gestión de usuarios. Interfaz intuitiva y optimizada para dispositivos móviles.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: Terminal,

    demo: 'https://terminaldelsur.com/',
    category: 'Web',
    featured: false,
    date: '2024',
  },
  {
    title: 'Verde Origen',
    description:
      'Sistema de gestión de productos y servicios ecológicos con enfoque en la sostenibilidad.',
    longDescription:
      'Desarrollo de una plataforma para la gestión de productos ecológicos, incluyendo un sistema de reservas y pagos. Interfaz amigable y optimizada para dispositivos móviles.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: VerdeOrigen,

    demo: 'https://verdeorigen.online/buscador',
    category: 'Web',
    featured: false,
    date: '2025',
  },
];

const allTechnologies = Array.from(new Set(projects.flatMap((project) => project.tech))).sort();

const categories: ProjectCategory[] = ['Todos', 'Web', 'Mobile', 'Desktop', 'API'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('Todos');
  const [selectedTech, setSelectedTech] = useState<TechStack[]>([]);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'Todos' || project.category === selectedCategory;
    const matchesTech =
      selectedTech.length === 0 || selectedTech.every((tech) => project.tech.includes(tech));
    return matchesCategory && matchesTech;
  });

  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4 text-foreground">Mis Proyectos</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explora mi portafolio de proyectos, desde aplicaciones web hasta soluciones móviles y
          APIs.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="mb-12 space-y-6">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
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
              variant={selectedTech.includes(tech) ? 'default' : 'secondary'}
              className="cursor-pointer hover:opacity-80"
              onClick={() => {
                setSelectedTech((prev) =>
                  prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
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
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
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
                  <p className="text-sm text-muted-foreground mb-4">{project.longDescription}</p>
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
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
          <p className="text-muted-foreground">
            No se encontraron proyectos con los filtros seleccionados.
          </p>
        </motion.div>
      )}
    </>
  );
}
