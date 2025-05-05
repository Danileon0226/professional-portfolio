import React, { useEffect, useState } from 'react';
import { useTheme } from '../../hooks/use-theme';
import { Sparkles } from 'lucide-react';

const QUOTES = [
  'El único modo de hacer un gran trabajo es amar lo que haces. – Steve Jobs',
  'La creatividad es la inteligencia divirtiéndose. – Albert Einstein',
  'No cuentes los días, haz que los días cuenten. – Muhammad Ali',
  'El futuro pertenece a quienes creen en la belleza de sus sueños. – Eleanor Roosevelt',
  'Haz de tu vida un sueño, y de tu sueño una realidad. – Antoine de Saint-Exupéry',
  'La mejor manera de predecir el futuro es crearlo. – Peter Drucker',
  'No hay viento favorable para el que no sabe a dónde va. – Séneca',
  'El éxito es la suma de pequeños esfuerzos repetidos día tras día. – Robert Collier',
  'La disciplina tarde o temprano vencerá a la inteligencia. – Yukio Mishima',
  'Hazlo con pasión o no lo hagas. – Rosa Nouchette Carey',
  'El fracaso es solo la oportunidad de comenzar de nuevo con más experiencia. – Henry Ford',
  'No sueñes tu vida, vive tu sueño. – Anónimo',
  'La acción es la clave fundamental de todo éxito. – Pablo Picasso',
  'El único límite a nuestros logros de mañana está en nuestras dudas de hoy. – Franklin D. Roosevelt',
  'La vida es 10% lo que te ocurre y 90% cómo reaccionas. – Charles R. Swindoll',
  'Nunca es demasiado tarde para ser quien podrías haber sido. – George Eliot',
  'La mejor forma de predecir el futuro es inventarlo. – Alan Kay',
  'No cuentes los días, haz que los días cuenten. – Muhammad Ali',
  'El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. – Albert Schweitzer',
  'La motivación te impulsa a comenzar, el hábito te mantiene en marcha. – Jim Ryun',
  'Haz hoy lo que otros no quieren, haz mañana lo que otros no pueden. – Jerry Rice',
  'El único lugar donde el éxito viene antes que el trabajo es en el diccionario. – Vidal Sassoon',
  'La creatividad es contagiosa, pásala. – Albert Einstein',
  'No tengas miedo de renunciar a lo bueno para perseguir lo grandioso. – John D. Rockefeller',
  'La energía y la persistencia conquistan todas las cosas. – Benjamin Franklin',
  'El futuro depende de lo que hagas hoy. – Mahatma Gandhi',
  'La diferencia entre ordinario y extraordinario es ese pequeño extra. – Jimmy Johnson',
  'El único modo de hacer un gran trabajo es amar lo que haces. – Steve Jobs',
  'La mejor venganza es un éxito rotundo. – Frank Sinatra',
  'No busques los errores, busca un remedio. – Henry Ford',
];

function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour < 6) return 'noche';
  if (hour < 12) return 'amanecer';
  if (hour < 18) return 'dia';
  if (hour < 20) return 'atardecer';
  return 'noche';
}

const backgrounds: Record<string, { light: string; dark: string }> = {
  amanecer: {
    light: 'from-cyan-100 via-blue-100 to-fuchsia-100',
    dark: 'from-cyan-900 via-blue-900 to-fuchsia-900',
  },
  dia: {
    light: 'from-blue-100 via-cyan-100 to-fuchsia-100',
    dark: 'from-blue-900 via-cyan-900 to-fuchsia-900',
  },
  atardecer: {
    light: 'from-fuchsia-200 via-blue-200 to-cyan-200',
    dark: 'from-fuchsia-900 via-blue-900 to-cyan-900',
  },
  noche: {
    light: 'from-blue-200 via-fuchsia-200 to-cyan-200',
    dark: 'from-blue-950 via-fuchsia-950 to-cyan-950',
  },
};

export const InspirationWidget: React.FC = () => {
  const [quote, setQuote] = useState('');
  const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay());
  const [fade, setFade] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
    const interval = setInterval(() => {
      setTimeOfDay(getTimeOfDay());
    }, 60000); // Actualiza cada minuto
    return () => clearInterval(interval);
  }, []);

  const handleNewQuote = () => {
    setFade(false);
    setTimeout(() => {
      let newQuote = quote;
      while (newQuote === quote) {
        newQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
      }
      setQuote(newQuote);
      setFade(true);
    }, 250);
  };

  const bg = backgrounds[timeOfDay][theme === 'dark' ? 'dark' : 'light'];

  return (
    <div className="relative w-full max-w-xl mx-auto my-8 p-8 rounded-3xl shadow-2xl border-2 border-primary/30 bg-transparent">
      <div className="absolute inset-0 pointer-events-none animate-pulse opacity-20" />
      <div className="flex flex-col items-center justify-center gap-4">
        <Sparkles className="w-10 h-10 text-primary animate-bounce drop-shadow-lg" />
        <blockquote
          className={`relative z-10 text-xl md:text-2xl font-semibold text-center select-none drop-shadow-lg transition-opacity duration-500 ${
            fade ? 'opacity-100' : 'opacity-0'
          } ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}
        >
          “{quote}”
        </blockquote>
        <button
          onClick={handleNewQuote}
          className={`mt-4 px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md border flex items-center gap-2 
            bg-primary text-primary-foreground border-primary/40
            dark:bg-primary dark:text-primary-foreground dark:border-primary/40
          `}
        >
          <Sparkles className="w-5 h-5 animate-spin-slow" />
          Nueva inspiración
        </button>
      </div>
    </div>
  );
};

export default InspirationWidget;
