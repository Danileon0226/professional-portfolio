import { motion } from 'framer-motion';
import { Mail, ArrowRight, Calendar, FileText, ExternalLink, Quote } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import Hero from '../components/Hero';
import InspirationWidget from '../components/ui/InspirationWidget';
import { SkillCard } from '../components/ui/skill-card';
import { SectionHeading } from '../components/ui/section-heading';
import { CountUp } from '../components/ui/count-up';
import { Card, CardContent } from '../components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';
import { skills, experiences, projects, testimonials, stats } from './homeData';
import profile from '../../public/images/CV FOTO.jpg';
import { siteConfig, mailtoLink, whatsappLink } from '../lib/site';

const Home = () => {
  return (
    <>
      <Hero />

      {/* About */}
      <section id="sobre-mi" className="mb-24 scroll-mt-24 sm:mb-32">
        <SectionHeading eyebrow="Sobre mí" title="Quién hay detrás del código" />
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <Card className="mx-auto max-w-4xl overflow-hidden glass p-0">
            <CardContent className="flex flex-col items-center gap-8 p-6 sm:p-10 md:flex-row">
              <div className="relative shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary to-emerald-400 opacity-70 blur-md" />
                <img
                  src={profile}
                  alt="Daniel León, desarrollador Full Stack"
                  loading="lazy"
                  className="relative h-36 w-36 rounded-full object-cover sm:h-44 sm:w-44"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Soy <strong className="text-foreground">Daniel León</strong>, desarrollador Full
                  Stack con más de {siteConfig.yearsOfExperience} años creando soluciones digitales
                  modernas. Me apasiona el detalle, el rendimiento y construir interfaces que la
                  gente disfrute usar — desde el primer pixel hasta el despliegue.
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
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <InspirationWidget />

      {/* Stats */}
      <section className="mb-24 sm:mb-32">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 rounded-3xl glass p-6 sm:gap-6 sm:p-10 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="text-center"
            >
              <div className="mx-auto mb-3 inline-flex rounded-2xl bg-primary/10 p-3">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-extrabold tracking-tight text-gradient-brand sm:text-4xl">
                <CountUp end={stat.value} suffix="+" />
              </div>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experiencia" className="mb-24 scroll-mt-24 sm:mb-32">
        <SectionHeading
          eyebrow="Trayectoria"
          title="Experiencia profesional"
          description="Empresas y equipos donde he aportado mi trabajo."
        />
        <div className="relative mx-auto max-w-3xl">
          {/* Línea del timeline */}
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-primary/60 to-transparent sm:left-1/2" />
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative pl-12 sm:pl-0"
              >
                <span className="absolute left-[9px] top-6 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20 sm:left-1/2 sm:-translate-x-1/2" />
                <div
                  className={`sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-10' : 'sm:ml-auto sm:pl-10'}`}
                >
                  <Card className="glass p-0">
                    <CardContent className="p-5 sm:p-6">
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.period}
                      </div>
                      <h3 className="text-lg font-semibold">{exp.position}</h3>
                      <h4 className="mb-2 text-primary">{exp.company}</h4>
                      <p className="mb-4 text-sm text-muted-foreground">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="habilidades" className="mb-24 scroll-mt-24 sm:mb-32">
        <SectionHeading
          eyebrow="Stack"
          title="Habilidades técnicas"
          description="Tecnologías que uso para llevar ideas a producción."
        />
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="proyectos" className="mb-24 scroll-mt-24 overflow-x-hidden sm:mb-32">
        <SectionHeading
          eyebrow="Portafolio"
          title="Proyectos destacados"
          description="Una selección de productos que he construido para clientes reales."
        />
        <Carousel opts={{ align: 'start', loop: true }} className="mx-auto w-full max-w-6xl px-6 sm:px-4">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group h-full overflow-hidden rounded-2xl glass transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`Captura del proyecto ${project.title}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = '/images/default-proyect.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-background/80 text-[11px] backdrop-blur"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="mb-4 mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <Button variant="outline" size="sm" asChild className="w-full gap-2">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Ver demo
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="!left-2 !h-9 !w-9 sm:!left-4" />
          <CarouselNext className="!right-2 !h-9 !w-9 sm:!right-4" />
        </Carousel>

        <div className="mt-10 text-center">
          <Button asChild variant="ghost" className="group gap-2">
            <a href="/projects">
              Ver todos los proyectos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="mb-24 overflow-x-hidden sm:mb-32">
        <SectionHeading eyebrow="Recomendaciones" title="Lo que dicen de mi trabajo" />
        <Carousel
          opts={{ align: 'center', loop: true, dragFree: true }}
          className="mx-auto w-full max-w-5xl px-4 sm:px-0"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full glass p-0">
                  <CardContent className="flex h-full flex-col p-6">
                    <Quote className="mb-4 h-8 w-8 text-primary/40" />
                    <p className="flex-1 text-sm italic text-muted-foreground">
                      {testimonial.content}
                    </p>
                    <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        loading="lazy"
                        className="h-11 w-11 rounded-full border-2 border-primary/40 object-cover"
                      />
                      <div>
                        <h4 className="text-sm font-semibold">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="!left-2 !h-9 !w-9 sm:!left-4" />
          <CarouselNext className="!right-2 !h-9 !w-9 sm:!right-4" />
        </Carousel>
      </section>

      {/* Contact CTA */}
      <section id="contacto" className="scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl glass p-8 text-center sm:p-14"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
          <span className="eyebrow">Hablemos</span>
          <h2 className="section-title mt-4">¿Tienes un proyecto en mente?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Estoy disponible para colaborar en nuevos retos. Cuéntame tu idea y construyámosla
            juntos.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2 shadow-glow">
              <a href={mailtoLink}>
                <Mail className="h-5 w-5" />
                Enviar mensaje
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

export default Home;
