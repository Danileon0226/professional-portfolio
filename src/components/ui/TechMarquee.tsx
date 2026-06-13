const TECH = [
  { name: 'React', icon: '/images/skills/react.svg' },
  { name: 'Next.js', icon: '/images/skills/nextjs.svg' },
  { name: 'TypeScript', icon: '/images/skills/typescript.svg' },
  { name: 'JavaScript', icon: '/images/skills/javascript.svg' },
  { name: 'Tailwind CSS', icon: '/images/skills/tailwind.svg' },
  { name: 'Node.js', icon: '/images/skills/nodejs.svg' },
  { name: 'Vite', icon: '/images/skills/vitejs.svg' },
  { name: 'PostgreSQL', icon: '/images/skills/postgresql.svg' },
  { name: 'MongoDB', icon: '/images/skills/mongodb.svg' },
  { name: 'Material UI', icon: '/images/skills/material-ui.svg' },
  { name: 'Jest', icon: '/images/skills/jest.svg' },
  { name: 'AWS', icon: '/images/skills/aws.svg' },
  { name: 'Vercel', icon: '/images/skills/vercel.svg' },
  { name: 'Git', icon: '/images/skills/git.svg' },
];

const Chip = ({ name, icon }: { name: string; icon: string }) => (
  <div className="flex shrink-0 items-center gap-2.5 rounded-full border border-white/10 bg-card px-4 py-2 backdrop-blur-xl">
    <img src={icon} alt="" aria-hidden="true" className="h-5 w-5" loading="lazy" />
    <span className="whitespace-nowrap text-sm font-medium text-foreground/80">{name}</span>
  </div>
);

/**
 * Cinta infinita con el stack tecnológico. Duplica el contenido y lo desplaza
 * con la animación `marquee` (translateX -50%) para un loop sin costuras.
 */
const TechMarquee = () => {
  return (
    <div className="group relative w-full overflow-hidden py-2 mask-fade-x">
      <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
        {[...TECH, ...TECH].map((t, i) => (
          <Chip key={`${t.name}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
