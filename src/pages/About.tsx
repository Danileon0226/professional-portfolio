import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { SkillCard } from '../components/ui/skill-card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Mail, Download, User, Calendar } from 'lucide-react';

const skills = [
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

const experiences = [
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

const values = [
  {
    title: 'Innovación',
    description: 'Siempre busco soluciones creativas y actuales para cada reto tecnológico.',
  },
  {
    title: 'Colaboración',
    description:
      'Creo en el trabajo en equipo y la comunicación efectiva para lograr grandes resultados.',
  },
  {
    title: 'Aprendizaje continuo',
    description:
      'Me mantengo actualizado y en constante formación para ofrecer lo mejor a mis clientes y equipos.',
  },
  {
    title: 'Calidad',
    description:
      'Cuido cada detalle y aplico buenas prácticas para entregar productos robustos y escalables.',
  },
];

const About = () => {
  return (
    <>
      {/* Hero/Presentación */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <Card className="max-w-4xl mx-auto shadow-xl border-0 bg-gradient-to-br from-background via-purple-50/60 to-blue-50/40 dark:from-background dark:via-purple-900/30 dark:to-blue-900/20">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-primary/30"
              >
                <img
                  src="/images/CV FOTO.jpg"
                  alt="Foto de perfil"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground dark:text-white">
                  Sobre Mí
                </h1>
                <p className="text-lg mb-4">
                  ¡Hola! Soy Daniel-Zero, desarrollador Full Stack apasionado por la tecnología y la
                  innovación. Me especializo en crear soluciones digitales modernas y escalables,
                  con experiencia en React, TypeScript, Node.js y más. Disfruto trabajar en equipo,
                  aprender nuevas tecnologías y enfrentar retos que me permitan crecer
                  profesionalmente.
                </p>
                <div className="flex gap-4 flex-wrap mb-4">
                  <Button asChild variant="outline" className="gap-2">
                    <a href="/cv">
                      <User className="w-4 h-4" />
                      Ver CV Completo
                    </a>
                  </Button>
                  <Button asChild variant="default" className="gap-2">
                    <a href="/cv.pdf" download>
                      <Download className="w-4 h-4" />
                      Descargar CV
                    </a>
                  </Button>
                </div>
                <ul className="list-disc pl-5 text-muted-foreground mb-2">
                  <li>+4 años de experiencia en desarrollo web</li>
                  <li>Enfoque en frontend moderno y backend escalable</li>
                  <li>Apasionado por la formación continua y la colaboración</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Valores personales */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <h2 className="text-3xl font-bold mb-12 text-center text-foreground dark:text-white">
          Mis Valores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl shadow-md p-6 border border-border/30"
            >
              <h3 className="font-semibold text-xl mb-2 text-primary">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Habilidades técnicas */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <h2 className="text-3xl font-bold mb-12 text-center text-foreground dark:text-white">
          Habilidades Técnicas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </motion.section>

      {/* Experiencia profesional */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <h2 className="text-3xl font-bold mb-12 text-center text-foreground dark:text-white">
          Experiencia Profesional
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden border-l-4 border-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{exp.position}</h3>
                  <h4 className="text-lg text-primary mb-4">{exp.company}</h4>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
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
      </motion.section>

      {/* Contacto directo */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground dark:text-white">
          ¿Te gustaría trabajar conmigo?
        </h2>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <p className="text-lg mb-8 text-center">
              Estoy siempre abierto a nuevas oportunidades, colaboraciones y proyectos interesantes.
              ¡No dudes en escribirme!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild variant="default" size="lg" className="flex-1">
                <a href="mailto:daniel.salgado.dev@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar Email
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="flex-1">
                <a
                  href="https://wa.me/573117502382?text=¡Hola!%20Vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte%20para%20un%20proyecto."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  WhatsApp Directo
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </>
  );
};

export default About;
