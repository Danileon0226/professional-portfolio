/**
 * Configuración central del sitio — Zero Agency.
 * Cambia SITE_URL aquí cuando conectes el dominio propio y todo el SEO
 * (canonical, Open Graph, JSON-LD, sitemap) quedará alineado.
 */

import {
  Code2,
  Layout,
  Smartphone,
  ShoppingCart,
  Search,
  Sparkles,
} from 'lucide-react';

export const siteConfig = {
  // URL de producción provisional (alias estable de Vercel de este despliegue).
  // 👉 Conecta tu dominio (p. ej. https://www.zeroagency.com.co) y actualízala aquí.
  url: 'https://professional-portfolio-git-main-danis-projects-b2ee6899.vercel.app',
  brandUrl: 'https://www.zeroagency.com.co',

  name: 'Zero Agency',
  founder: 'Daniel Alejandro Salgado León',
  founderShort: 'Daniel León',
  role: 'Agencia de Desarrollo de Software & Diseño Web',
  tagline: 'Arquitectura digital de alto rendimiento',
  location: 'Colombia',
  city: 'Abejorral, Antioquia',
  yearsOfExperience: 4,

  description:
    'Zero Agency — Software a medida, diseño web de alto rendimiento, apps y e-commerce. Arquitectura digital para empresas y emprendedores en toda Colombia.',

  keywords: [
    'Zero Agency',
    'agencia de software',
    'agencia de desarrollo web',
    'diseño web',
    'software a medida',
    'desarrollo de aplicaciones',
    'e-commerce',
    'React',
    'Next.js',
    'TypeScript',
    'agencia digital Colombia',
    'desarrollo web Medellín',
    'Daniel León',
  ],

  // Imagen para Open Graph / Twitter (logo local de marca, existe en /public)
  ogImage: '/images/ZERODARK.png',

  contact: {
    email: 'principal.zeroagency@gmail.com',
    phone: '+573117502382',
    whatsapp: '573117502382',
    whatsappMessage:
      '¡Hola Zero Agency! Vi su portafolio y me gustaría hablar sobre un proyecto.',
  },

  social: {
    instagram: 'https://instagram.com/zero.agencycol',
    linkedin: 'https://www.linkedin.com/in/zero-agency-10653b384/',
    github: 'https://github.com/Danileon0226',
  },
} as const;

export const services = [
  {
    icon: Code2,
    title: 'Software a medida',
    description:
      'Plataformas, paneles y sistemas internos diseñados a tu medida, escalables y mantenibles.',
  },
  {
    icon: Layout,
    title: 'Diseño & desarrollo web',
    description:
      'Sitios y landing pages de alto rendimiento, con animaciones impecables y enfoque en conversión.',
  },
  {
    icon: Smartphone,
    title: 'Aplicaciones móviles',
    description:
      'Apps multiplataforma rápidas y nativas en sensación, listas para crecer con tu negocio.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description:
      'Tiendas online optimizadas, con pasarelas de pago y una experiencia de compra fluida.',
  },
  {
    icon: Search,
    title: 'SEO & posicionamiento',
    description:
      'Estructura técnica, metadatos y datos estructurados para que te encuentren en Google.',
  },
  {
    icon: Sparkles,
    title: 'Branding & motion',
    description:
      'Identidad visual y experiencias animadas (GSAP) que hacen memorable tu marca.',
  },
];

export const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
  siteConfig.contact.whatsappMessage,
)}`;

export const mailtoLink = `mailto:${siteConfig.contact.email}`;
