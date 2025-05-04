import { useEffect, useState, useCallback } from 'react';
// @ts-ignore
import Particles, { initParticlesEngine } from '@tsparticles/react';
// @ts-ignore
import { loadSlim } from '@tsparticles/slim';

interface ParticlesBgProps {
  quantity?: number;
  opacity?: number;
  zIndex?: string;
  style?: React.CSSProperties;
}

const ParticlesBg = ({ quantity = 60, opacity = 0.7, zIndex = '-1', style }: ParticlesBgProps) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: any) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex,
        ...style,
      }}
    >
      {init && (
        <Particles
          id="tsparticles-bg"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: { enable: false },
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            particles: {
              number: { value: quantity, density: { enable: true } },
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
                value: opacity,
                animation: { enable: true, speed: 1.2, sync: false },
              },
              size: {
                value: { min: 2, max: 7 },
                animation: { enable: true, speed: 2, sync: false },
              },
              links: {
                enable: true,
                color: '#fff',
                distance: 120,
                opacity: 0.18,
                width: 1.1,
                triangles: { enable: true, color: '#00fff7', opacity: 0.07 },
              },
              move: {
                enable: true,
                speed: { min: 0.5, max: 1.5 },
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
                      factor: { min: 1, max: 2 },
                    },
                  },
                },
              },
              twinkle: {
                particles: {
                  enable: true,
                  frequency: 0.12,
                  opacity: 1,
                  color: '#fff',
                },
                lines: {
                  enable: true,
                  frequency: 0.04,
                  opacity: 0.7,
                  color: '#00fff7',
                },
              },
              shadow: {
                enable: true,
                color: '#00fff7',
                blur: 4,
                offset: { x: 0, y: 0 },
              },
            },
            detectRetina: true,
            interactivity: {
              events: {
                onHover: { enable: false },
                onClick: { enable: false },
              },
            },
          }}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />
      )}
    </div>
  );
};

export default ParticlesBg;
