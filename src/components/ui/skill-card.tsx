import { motion } from 'framer-motion';
import { Card } from './card';

interface SkillCardProps {
  name: string;
  icon: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
  yearsOfExperience: number;
}

const getLevelPercentage = (level: 'Básico' | 'Intermedio' | 'Avanzado') => {
  switch (level) {
    case 'Básico':
      return 33;
    case 'Intermedio':
      return 66;
    case 'Avanzado':
      return 100;
    default:
      return 0;
  }
};

export function SkillCard({ name, icon, level, yearsOfExperience }: SkillCardProps) {
  const percentage = getLevelPercentage(level);

  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
      <Card className="p-4 hover:shadow-lg transition-shadow backdrop-blur ">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 relative flex items-center justify-center">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-primary/20"
              />
              <img src={icon} alt={name} className="w-8 h-8 object-contain relative z-10" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-sm text-muted-foreground">{level}</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="h-2 w-full bg-secondary/30 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full bg-primary rounded-full"
              />
            </div>
            <p className="text-xs text-muted-foreground text-right">
              {yearsOfExperience} años de experiencia
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
