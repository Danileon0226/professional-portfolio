// Archivo de datos para Home

// Importaciones de imágenes y recursos
import profile from '../../public/images/CV FOTO.jpg';
import Afan from '../../public/images/proyects/afan.png';
import Terminal from '../../public/images/proyects/terminalsur.png';
import Tecnotics from '../../public/images/proyects/tecnotics.png';
import AppsforTheWorld from '../../public/images/proyects/appsfortheworld.png';
import HemoGroup from '../../public/images/proyects/hemogroup.png';
import Construredes from '../../public/images/proyects/construredes.png';
import Vlips from '../../public/images/proyects/vlips.png';
import { Calendar, Folder, Users, GitBranch } from 'lucide-react';

export const skills = [
  {
    name: 'HTML',
    icon: '/images/skills/html-5.svg',
    level: 'Avanzado' as const,
    yearsOfExperience: 3,
  },
  {
    name: 'CSS',
    icon: '/images/skills/css.svg',
    level: 'Avanzado' as const,
    yearsOfExperience: 3,
  },
  {
    name: 'JavaScript',
    icon: '/images/skills/javascript.svg',
    level: 'Avanzado' as const,
    yearsOfExperience: 3,
  },
  {
    name: 'React',
    icon: '/images/skills/react.svg',
    level: 'Avanzado' as const,
    yearsOfExperience: 3,
  },
  {
    name: 'Vite',
    icon: '/images/skills/vitejs.svg',
    level: 'Avanzado' as const,
    yearsOfExperience: 3,
  },
  {
    name: 'TypeScript',
    icon: '/images/skills/typescript.svg',
    level: 'Avanzado' as const,
    yearsOfExperience: 2,
  },
  {
    name: 'Material UI',
    icon: '/images/skills/material-ui.svg',
    level: 'Avanzado' as const,
    yearsOfExperience: 3,
  },
  {
    name: 'Shadcn UI',
    icon: '/images/skills/shadcn-ui.svg',
    level: 'Básico' as const,
    yearsOfExperience: 1,
  },
  {
    name: 'Next.js',
    icon: '/images/skills/nextjs.svg',
    level: 'Avanzado' as const,
    yearsOfExperience: 2,
  },
  {
    name: 'Jest',
    icon: '/images/skills/jest.svg',
    level: 'Avanzado' as const,
    yearsOfExperience: 2,
  },
  {
    name: 'Tailwind CSS',
    icon: '/images/skills/tailwind.svg',
    level: 'Avanzado' as const,
    yearsOfExperience: 2,
  },
  {
    name: 'PostgreSQL',
    icon: '/images/skills/postgresql.svg',
    level: 'Intermedio' as const,
    yearsOfExperience: 2,
  },
  {
    name: 'Node.js',
    icon: '/images/skills/nodejs.svg',
    level: 'Intermedio' as const,
    yearsOfExperience: 2,
  },
  {
    name: 'MongoDB',
    icon: '/images/skills/mongodb.svg',
    level: 'Intermedio' as const,
    yearsOfExperience: 1,
  },
  {
    name: 'Git',
    icon: '/images/skills/git.svg',
    level: 'Avanzado' as const,
    yearsOfExperience: 3,
  },
  {
    name: 'GitHub',
    icon: '/images/skills/github.svg',
    level: 'Avanzado' as const,
    yearsOfExperience: 3,
  },
  {
    name: 'AWS',
    icon: '/images/skills/aws.svg',
    level: 'Básico' as const,
    yearsOfExperience: 1,
  },
  {
    name: 'Vercel',
    icon: '/images/skills/vercel.svg',
    level: 'Avanzado' as const,
    yearsOfExperience: 3,
  },
  {
    name: 'ChatGPT',
    icon: '/images/skills/chatgpt.svg',
    level: 'Avanzado' as const,
    yearsOfExperience: 3,
  },
  {
    name: 'Hostinger',
    icon: '/images/skills/hostinger.svg',
    level: 'Avanzado' as const,
    yearsOfExperience: 3,
  },
];

export const experiences = [
  {
    company: 'Periferia It Group',
    position: 'Software Engineer Front',
    period: '2024 - Presente',
    description: 'Desarrollo de aplicaciones web modernas utilizando React y TypeScript.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    company: 'TecnoTics',
    position: 'Full Stack Developer',
    period: '2023 - 2024',
    description: 'Desarrollo full stack de aplicaciones web y móviles.',
    technologies: ['Node.js', 'React Native', 'PostgreSQL', 'AWS'],
  },
  {
    company: 'Crystal S.A.S',
    position: 'Desarrollador Web',
    period: '2022 - 2023',
    description: 'Desarrollo full stack de aplicaciones web y móviles.',
    technologies: ['Node.js', 'React Native', '.NET', 'AWS'],
  },
];

export const projects = [
  {
    title: 'AFAN',
    description: 'Afan existe para devolverle la paz y el control a quienes viven en arriendo. ',
    tech: ['React', 'TypeScript', 'Tailwind'],
    image: Afan,
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://afan.com.co/',
  },
  {
    title: 'Terminal del Sur',
    description:
      'Pagina web para la terminal del sur, la cual es un centro comercial y de transporte en Medellin.',
    tech: ['React', 'Material UI', 'Vite', 'MongoDB'],
    image: Terminal,
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://terminaldelsur.com/',
  },
  {
    title: 'Apps for the World',
    description:
      'Pagina web de la empresa Apps for the World, la cual es una empresa que se encarga de crear aplicaciones para la web.',
    tech: ['React', 'Jsx', 'Vite'],
    image: AppsforTheWorld,
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://appsfortheworld.com/',
  },
  {
    title: 'TecnoTics',
    description:
      'Sistema de gestión de relaciones con clientes con análisis en tiempo real y automatización de procesos.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: Tecnotics,
    github: 'https://github.com/yourusername/crm',
    demo: 'https://www.tecnotics.com/quienes-somos',
  },
  {
    title: 'HemoGroup',
    description: 'Sitio web personal moderno constuido para la empresa HemoGroup.',
    tech: ['React', 'Material UI', 'Framer Motion'],
    image: HemoGroup,
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://hemogroup.tecnotics.co/',
  },
  {
    title: 'Construredes',
    description: 'Sitio web personal moderno construido con las últimas tecnologías web.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    image: Construredes,
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://portfolio-demo.com',
  },
  {
    title: 'VLIPS',
    description: 'Sitio web personal moderno construido con las últimas tecnologías web.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    image: Vlips,
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://vlips.co/',
  },
];

export const testimonials = [
  {
    name: 'Juan Sebastian Restrepo Nieto',
    position: 'Frontend Developer, Crystal S.A.S',
    content:
      'Durante el tiempo como aprendiz en Crystal SAS se vio un crecimiento profesional y personal exponencial. También se evidenció una gran pasión por las tecnologías, algo supremamente importante hoy en día en un mundo tan cambiante. ',
    avatar: profile,
  },
  {
    name: 'Karen Torres Archbold',
    position: 'Frontend Developer, Periferia IT Group',
    content:
      'Es un gran desarrollador, siempre está dispuesto a aprender y ayudar a los demás. Tiene una gran capacidad para resolver problemas y es muy proactivo.',
    avatar: profile,
  },
  {
    name: 'Cristian Camilo Arango',
    position: 'Frontend Developer, Periferia IT Group',
    content:
      'Es un gran desarrollador, siempre está dispuesto a aprender y ayudar a los demás. Tiene una gran capacidad para resolver problemas y es muy proactivo.',
    avatar: profile,
  },
];

export const stats = [
  {
    value: 4,
    label: 'Años de Experiencia',
    icon: Calendar,
  },
  {
    value: 50,
    label: 'Proyectos Completados',
    icon: Folder,
  },
  {
    value: 20,
    label: 'Clientes Satisfechos',
    icon: Users,
  },
  {
    value: 100,
    label: 'Commits por Semana',
    icon: GitBranch,
  },
];
