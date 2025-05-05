import { useEffect, useState, useCallback } from 'react';
// @ts-ignore
import Particles, { initParticlesEngine } from '@tsparticles/react';
// @ts-ignore
import { loadSlim } from '@tsparticles/slim';

interface ParticlesBgProps {
  style?: React.CSSProperties;
}

const ParticlesBg = ({ style }: ParticlesBgProps) => {
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
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -100,
        ...style,
      }}
    >
      {init && (
        <Particles
          id="tsparticles-bg"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: { enable: true },
            background: { color: { value: 'transparent' } },
            fpsLimit: 90,
            particles: {
              number: { value: 80, density: { enable: true } },
              color: {
                value: '#39FF14',
                animation: {
                  enable: true,
                  speed: 0.5,
                },
              },
              shape: { type: ['polygon', 'triangle'] },
              opacity: {
                value: 0.25,
                animation: { enable: true, speed: 0.3, sync: true },
              },
              size: {
                value: { min: 1, max: 7 },
                animation: { enable: true, speed: 0.5, sync: true },
              },
              links: {
                enable: true,
                color: '#39FF14',
                distance: 200,
                opacity: 0.11,
                width: 0.6,
                triangles: { enable: true, color: '#39FF14', opacity: 0.09 },
              },
              move: {
                enable: true,
                speed: { min: 0.15, max: 0.45 },
                direction: 'none',
                random: false,
                straight: false,
                outModes: { default: 'out' },
                attract: { enable: false },
                path: { enable: false },
              },
              twinkle: {
                particles: {
                  enable: true,
                  frequency: 0.04,
                  opacity: 0.5,
                  color: '#fff',
                },
                lines: {
                  enable: false,
                },
              },
              shadow: {
                enable: true,
                color: '#39FF14',
                blur: 16,
                offset: { x: 0, y: 0 },
              },
            },
            detectRetina: true,
            interactivity: {
              events: {
                onHover: { enable: true, mode: ['grab'] },
                onClick: { enable: false },
              },
              modes: {
                grab: {
                  distance: 160,
                  links: { opacity: 0.18 },
                },
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
