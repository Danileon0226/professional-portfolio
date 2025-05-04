import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import Particles, { initParticlesEngine } from '@tsparticles/react';
// @ts-ignore
import { loadSlim } from '@tsparticles/slim';
// @ts-ignore
import { loadTextShape } from '@tsparticles/shape-text';
import { useTheme } from '../hooks/use-theme';

const Hero = () => {
  const { theme } = useTheme();
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadTextShape(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <section
      className={`hero ${
        theme === 'dark' ? 'hero-dark' : 'hero-light'
      } relative flex items-center justify-center min-h-[450px] sm:min-h-[600px]`}
    >
      {/* Fondo degradado suave */}
      <div className="absolute inset-0 z-0 pointer-events-none" />
      {init && (
        <Particles
          id="tsparticles-hero"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: { enable: false },
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            particles: {
              number: { value: 100, density: { enable: true } },
              color: {
                value: [
                  '#00fff7',
                  '#a21caf',
                  '#38bdf8',
                  '#fff',
                  '#7c3aed',
                  '#00ffae',
                  '#ff00ea',
                  '#ffe600',
                ],
                animation: {
                  enable: true,
                  speed: 60,
                  sync: false,
                },
              },
              shape: { type: ['circle', 'hexagon', 'triangle'] },
              opacity: {
                value: { min: 0.5, max: 0.9 },
                animation: { enable: true, speed: 1.2, sync: false },
              },
              size: {
                value: { min: 2, max: 9 },
                animation: { enable: true, speed: 2.5, sync: false },
              },
              links: {
                enable: true,
                color: '#fff',
                distance: 150,
                opacity: 0.22,
                width: 1.7,
                triangles: { enable: true, color: '#00fff7', opacity: 0.09 },
              },
              move: {
                enable: true,
                speed: { min: 0.7, max: 2.2 },
                direction: 'none',
                random: true,
                straight: false,
                outModes: { default: 'out' },
                attract: { enable: true },
                path: {
                  enable: true,
                  options: {
                    noise: {
                      enable: true,
                      delay: { min: 0, max: 0.5 },
                      factor: { min: 1, max: 3 },
                    },
                  },
                },
              },
              twinkle: {
                particles: {
                  enable: true,
                  frequency: 0.18,
                  opacity: 1,
                  color: '#fff',
                },
                lines: {
                  enable: true,
                  frequency: 0.07,
                  opacity: 0.8,
                  color: '#00fff7',
                },
              },
              shadow: {
                enable: true,
                color: '#00fff7',
                blur: 6,
                offset: { x: 0, y: 0 },
              },
            },
            detectRetina: true,
            interactivity: {
              events: {
                onHover: { enable: true, mode: ['bubble', 'repulse', 'grab', 'attract'] },
                onClick: { enable: true, mode: ['push', 'repulse'] },
              },
              modes: {
                repulse: { distance: 140, duration: 0.5 },
                bubble: {
                  distance: 160,
                  size: 14,
                  duration: 0.6,
                  opacity: 1,
                  color: '#00fff7',
                },
                grab: {
                  distance: 200,
                  links: { opacity: 0.7 },
                },
                attract: {
                  distance: 180,
                  duration: 0.4,
                  factor: 2,
                },
                push: { quantity: 5 },
              },
            },
          }}
          className="absolute inset-0 w-full h-full z-0"
        />
      )}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <a href="mailto:danielalejandrosalgadoleon@gmail.com" className="btn-primary">
              Contactar
            </a>
            <a href="/projects" className="btn-secondary">
              Ver Proyectos
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
