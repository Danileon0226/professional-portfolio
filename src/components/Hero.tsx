import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Github, Linkedin, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from './ui/button';
import { siteConfig, mailtoLink, whatsappLink } from '../lib/site';

const ROLES = [
  'Full Stack Developer',
  'Especialista en React & Next.js',
  'Frontend Engineer',
  'Creador de experiencias web',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative -mt-4 flex min-h-[88vh] items-center justify-center overflow-hidden py-16">
      {/* Fondo: aurora + grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute left-1/2 top-1/4 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] animate-aurora-drift" />
        <div className="absolute right-[8%] top-[12%] h-72 w-72 rounded-full bg-emerald-400/20 blur-[100px] animate-aurora-drift" />
        <div className="absolute bottom-0 left-[6%] h-72 w-72 rounded-full bg-teal-400/10 blur-[100px] animate-aurora-drift" />
      </div>

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        {/* Disponibilidad */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-primary" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Disponible para nuevos proyectos
        </motion.div>

        {/* Titular */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 text-balance text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl"
        >
          Hola, soy <span className="text-gradient-brand">Daniel León</span>
        </motion.h1>

        {/* Rol rotativo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 flex h-9 items-center justify-center overflow-hidden text-xl font-semibold text-muted-foreground sm:text-2xl"
        >
          <motion.span
            key={roleIndex}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {ROLES[roleIndex]}
          </motion.span>
        </motion.div>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          Construyo experiencias digitales excepcionales con código limpio y diseño impecable.
          Especializado en <strong className="text-foreground">React</strong>,{' '}
          <strong className="text-foreground">Next.js</strong> y{' '}
          <strong className="text-foreground">TypeScript</strong>, transformo ideas en productos
          rápidos, accesibles y escalables.
        </motion.p>

        {/* Ubicación */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground"
        >
          <MapPin className="h-4 w-4 text-primary" />
          {siteConfig.location}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="group w-full gap-2 shadow-glow sm:w-auto">
            <a href="/projects">
              Ver proyectos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full gap-2 sm:w-auto">
            <a href={mailtoLink}>
              <Mail className="h-4 w-4" />
              Contactar
            </a>
          </Button>
        </motion.div>

        {/* Redes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 flex items-center gap-3"
        >
          {[
            { href: siteConfig.social.github, icon: Github, label: 'GitHub' },
            { href: siteConfig.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
            { href: whatsappLink, icon: FaWhatsapp, label: 'WhatsApp' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.a
        href="#sobre-mi"
        aria-label="Desplázate hacia abajo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground sm:flex"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-current p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-1.5 w-1.5 rounded-full bg-current"
          />
        </span>
      </motion.a>
    </section>
  );
};

export default Hero;
