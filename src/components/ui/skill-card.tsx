import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  icon: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
  yearsOfExperience: number;
}

const LEVEL_META: Record<SkillCardProps['level'], { pct: number; chip: string }> = {
  Básico: { pct: 40, chip: 'bg-amber-500/15 text-amber-500 border-amber-500/30' },
  Intermedio: { pct: 70, chip: 'bg-sky-500/15 text-sky-500 border-sky-500/30' },
  Avanzado: { pct: 100, chip: 'bg-primary/15 text-primary border-primary/30' },
};

export function SkillCard({ name, icon, level, yearsOfExperience }: SkillCardProps) {
  const { pct, chip } = LEVEL_META[level];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl glass p-5 transition-shadow hover:shadow-glow"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />

      <div className="flex items-center gap-4">
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background/40">
          <img src={icon} alt={name} loading="lazy" className="h-7 w-7 object-contain" />
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold">{name}</h3>
          <span
            className={`mt-1 inline-flex rounded-full border px-2 py-0.5 text-[11px] font-semibold ${chip}`}
          >
            {level}
          </span>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary/40">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${pct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-primary to-fuchsia-500"
          />
        </div>
        <p className="text-right text-xs text-muted-foreground">
          {yearsOfExperience} {yearsOfExperience === 1 ? 'año' : 'años'} de experiencia
        </p>
      </div>
    </motion.div>
  );
}
