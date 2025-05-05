import { motion } from 'framer-motion';
// @ts-ignore
import Particles, { initParticlesEngine } from '@tsparticles/react';
// @ts-ignore
import { loadSlim } from '@tsparticles/slim';
// @ts-ignore
import { loadTextShape } from '@tsparticles/shape-text';
import { useTheme } from '../hooks/use-theme';
import { Button } from './ui/button';
import { Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`hero ${
        theme === 'dark' ? 'hero-dark' : 'hero-light'
      } relative flex items-center justify-center min-h-[450px] sm:min-h-[600px]`}
    >
      {/* Fondo degradado suave */}
      <div className="absolute inset-0 z-0 pointer-events-none" />

      <div className="hero-content flex flex-col items-center justify-center w-full h-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text w-full flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-center">
            Desarrollador Full Stack
          </h1>
          <p className="text-lg sm:text-2xl mb-6 text-center max-w-2xl">
            Creando experiencias digitales excepcionales a través del código. Especializado en
            desarrollo web moderno y soluciones escalables.
          </p>
          <div className="flex gap-3 justify-center">
            <Button asChild variant="link" size="lg" className="px-0 py-0 min-w-0 font-semibold">
              <a href="mailto:danielalejandrosalgadoleon@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Contactar
              </a>
            </Button>
            <Button asChild variant="link" size="lg" className="px-0 py-0 min-w-0 font-semibold">
              <a href="/projects">
                Ver Proyectos
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
