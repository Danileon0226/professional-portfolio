'use client';

import { motion } from 'framer-motion';
import { Monitor, Keyboard, Mouse, Cpu, Smartphone, Code, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const setup = [
  {
    name: 'Acer Aspire 5',
    description: 'Portátil ligero y potente para desarrollo en movimiento.',

    icon: Cpu,
    tags: ['16GB RAM', '500GB SSD', 'windows 11'],
  },
  {
    name: 'Monitor Samsung Ips 24"',
    description: 'Espacio increíble para multitarea y diseño responsive.',
    icon: Monitor,
    tags: ['1920x1080', 'IPS', '75Hz'],
  },
  {
    name: 'Mars Gaming MGP1',
    description: 'Teclado mecánico inalámbrico con switches brown.',
    icon: Keyboard,
    tags: ['Bluetooth', 'RGB', 'Hot-swappable'],
  },
  {
    name: 'Onikuma K1',
    description: 'Productividad suprema con múltiples botones programables.',
    icon: Mouse,
    tags: ['Onikuma', 'Silencioso', 'USB-C'],
  },
  {
    name: 'iPhone 12 Pro',
    description: 'Para pruebas móviles y gestión de proyectos desde cualquier lugar.',
    icon: Smartphone,
    tags: ['iOS 18.5', 'Safari Dev', 'Remote Debugging'],
  },
  {
    name: 'Entorno de Desarrollo',
    description: 'VSCode + Zsh + Figma + Notion + Warp Terminal.',
    icon: Code,
    tags: ['Prettier', 'Tailwind', 'Typescript'],
  },
];

const MiEstacionDeTrabajo = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <section className="text-center mb-16">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-bold text-foreground dark:text-white mb-4"
        >
          Mi Estación de Trabajo
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          Herramientas que utilizo diariamente para desarrollar proyectos de alto nivel.
        </motion.p>
      </section>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {setup.map((item) => (
          <motion.div
            key={item.name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card/80 backdrop-blur border border-border/30 shadow-xl hover:shadow-2xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-16">
        <Button asChild size="lg" className="gap-2">
          <a href="/">
            Explorar Portafolio
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </motion.main>
  );
};

export default MiEstacionDeTrabajo;
