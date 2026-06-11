/**
 * Configuración central del sitio.
 * Cambia SITE_URL aquí cuando tengas tu dominio propio y todo el SEO
 * (canonical, Open Graph, JSON-LD, sitemap) quedará alineado.
 */

export const siteConfig = {
  // URL de producción provisional (alias estable de Vercel).
  // 👉 Reemplázala por tu dominio propio cuando lo tengas, p.ej. 'https://daniel-zero.dev'
  url: 'https://professional-portfolio-git-main-danis-projects-b2ee6899.vercel.app',

  name: 'Daniel León',
  fullName: 'Daniel Alejandro Salgado León',
  handle: 'Daniel-Zero',
  role: 'Desarrollador Web Full Stack',
  tagline: 'Frontend & Full Stack Engineer',
  location: 'Medellín, Colombia',
  yearsOfExperience: 4,

  description:
    'Daniel León (Daniel-Zero) es desarrollador web Full Stack en Medellín, Colombia. Especialista en React, Next.js, TypeScript y Node.js, creando interfaces modernas, rápidas y escalables.',

  keywords: [
    'Daniel León',
    'Daniel-Zero',
    'Daniel Salgado',
    'desarrollador web',
    'desarrollador full stack',
    'frontend developer',
    'React developer',
    'Next.js',
    'TypeScript',
    'Node.js',
    'desarrollador Medellín',
    'desarrollador Colombia',
    'portafolio',
    'programador',
  ],

  // Imagen para Open Graph / Twitter (debe existir en /public)
  ogImage: '/images/ZERODARK.png',

  contact: {
    email: 'danielalejandrosalgadoleon@gmail.com',
    phone: '+573117502382',
    whatsapp: '573117502382',
    whatsappMessage:
      '¡Hola Daniel! Vi tu portafolio y me gustaría contactarte para un proyecto.',
  },

  social: {
    github: 'https://github.com/Danileon0226',
    linkedin: 'https://linkedin.com/in/daniel-alejandro-salgado-leon',
  },
} as const;

export const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
  siteConfig.contact.whatsappMessage,
)}`;

export const mailtoLink = `mailto:${siteConfig.contact.email}`;
