import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { SkillCard } from '../components/ui/skill-card';
import { SectionHeading } from '../components/ui/section-heading';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Mail, FileText, Calendar, Github, Linkedin, Lightbulb, Users, GraduationCap, ShieldCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { skills, experiences } from './homeData';
import { siteConfig, mailtoLink, whatsappLink } from '../lib/site';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovación',
    description: 'Busco soluciones creativas y actuales para cada reto tecnológico.',
  },
  {
    icon: Users,
    title: 'Colaboración',
    description: 'Creo en el trabajo en equipo y la comunicación efectiva para lograr resultados.',
  },
  {
    icon: GraduationCap,
    title: 'Aprendizaje continuo',
    description: 'Me mantengo actualizado para ofrecer siempre lo mejor a clientes y equipos.',
  },
  {
    icon: ShieldCheck,
    title: 'Calidad',
    description: 'Cuido cada detalle y aplico buenas prácticas para entregar productos robustos.',
  },
];

const About = () => {
  return (
    <>
      {/* Presentación */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-24 sm:mb-32"
      >
        <Card className="mx-auto max-w-4xl overflow-hidden glass p-0">
          <CardContent className="flex flex-col items-center gap-8 p-6 sm:p-10 md:flex-row">
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary to-emerald-400 opacity-70 blur-md" />
              <img
                src="/images/CV FOTO.jpg"
                alt="Daniel León, desarrollador Full Stack"
                loading="lazy"
                className="relative h-44 w-44 rounded-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="eyebrow">Sobre mí</span>
              <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
                Hola, soy <span className="text-gradient-brand">Daniel</span>
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Desarrollador Full Stack apasionado por la tecnología y la innovación. Me especializo
                en crear soluciones digitales modernas y escalables con React, TypeScript, Next.js y
                Node.js. Disfruto trabajar en equipo, aprender y enfrentar retos que me hagan crecer.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                <Button asChild className="gap-2">
                  <a href="/cv">
                    <FileText className="h-4 w-4" />
                    Ver CV completo
                  </a>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <a href={mailtoLink}>
                    <Mail className="h-4 w-4" />
                    Escríbeme
                  </a>
                </Button>
              </div>
              <div className="mt-5 flex justify-center gap-3 md:justify-start">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Valores */}
      <section className="mb-24 sm:mb-32">
        <SectionHeading eyebrow="Principios" title="Mis valores" />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl glass p-6 transition-transform hover:-translate-y-1.5"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Habilidades */}
      <section className="mb-24 sm:mb-32">
        <SectionHeading eyebrow="Stack" title="Habilidades técnicas" />
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </section>

      {/* Experiencia */}
      <section className="mb-24 sm:mb-32">
        <SectionHeading eyebrow="Trayectoria" title="Experiencia profesional" />
        <div className="mx-auto max-w-3xl space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="relative overflow-hidden border-l-4 border-primary glass p-0">
                <CardContent className="p-6">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <h4 className="mb-3 text-primary">{exp.company}</h4>
                  <p className="mb-4 text-muted-foreground">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl glass p-8 text-center sm:p-12"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
          <h2 className="section-title">¿Trabajamos juntos?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Estoy abierto a nuevas oportunidades, colaboraciones y proyectos interesantes.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2 shadow-glow">
              <a href={mailtoLink}>
                <Mail className="h-5 w-5" />
                Enviar email
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="h-5 w-5" />
                WhatsApp directo
              </a>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
