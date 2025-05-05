import React, { useEffect, useState } from 'react';
import { useTheme } from '../../hooks/use-theme';
import { Sparkles } from 'lucide-react';

const QUOTES = [
  {
    text: 'El único modo de hacer un gran trabajo es amar lo que haces.',
    author: 'Steve Jobs',
  },
  {
    text: 'La creatividad es la inteligencia divirtiéndose.',
    author: 'Albert Einstein',
  },
  {
    text: 'No cuentes los días, haz que los días cuenten.',
    author: 'Muhammad Ali',
  },
  {
    text: 'El futuro pertenece a quienes creen en la belleza de sus sueños.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'Haz de tu vida un sueño, y de tu sueño una realidad.',
    author: 'Antoine de Saint-Exupéry',
  },
  {
    text: 'La mejor manera de predecir el futuro es crearlo.',
    author: 'Peter Drucker',
  },
  {
    text: 'No hay viento favorable para el que no sabe a dónde va.',
    author: 'Séneca',
  },
  {
    text: 'El éxito es la suma de pequeños esfuerzos repetidos día tras día.',
    author: 'Robert Collier',
  },
  {
    text: 'La disciplina tarde o temprano vencerá a la inteligencia.',
    author: 'Yukio Mishima',
  },
  {
    text: 'Hazlo con pasión o no lo hagas.',
    author: 'Rosa Nouchette Carey',
  },
  {
    text: 'El fracaso es solo la oportunidad de comenzar de nuevo con más experiencia.',
    author: 'Henry Ford',
  },
  {
    text: 'No sueñes tu vida, vive tu sueño.',
    author: 'Anónimo',
  },
  {
    text: 'La acción es la clave fundamental de todo éxito.',
    author: 'Pablo Picasso',
  },
  {
    text: 'La vida es 10% lo que te ocurre y 90% cómo reaccionas.',
    author: 'Charles R. Swindoll',
  },
  {
    text: 'Nunca es demasiado tarde para ser quien podrías haber sido.',
    author: 'George Eliot',
  },
  {
    text: 'La mejor forma de predecir el futuro es inventarlo.',
    author: 'Alan Kay',
  },
  {
    text: 'El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.',
    author: 'Albert Schweitzer',
  },
  {
    text: 'La motivación te impulsa a comenzar, el hábito te mantiene en marcha.',
    author: 'Jim Ryun',
  },
  {
    text: 'Haz hoy lo que otros no quieren, haz mañana lo que otros no pueden.',
    author: 'Jerry Rice',
  },
  {
    text: 'El único lugar donde el éxito viene antes que el trabajo es en el diccionario.',
    author: 'Vidal Sassoon',
  },
  {
    text: 'La creatividad es contagiosa, pásala.',
    author: 'Albert Einstein',
  },
  {
    text: 'No tengas miedo de renunciar a lo bueno para perseguir lo grandioso.',
    author: 'John D. Rockefeller',
  },
  {
    text: 'La energía y la persistencia conquistan todas las cosas.',
    author: 'Benjamin Franklin',
  },
  {
    text: 'El futuro depende de lo que hagas hoy.',
    author: 'Mahatma Gandhi',
  },
  {
    text: 'La diferencia entre ordinario y extraordinario es ese pequeño extra.',
    author: 'Jimmy Johnson',
  },
  {
    text: 'La mejor venganza es un éxito rotundo.',
    author: 'Frank Sinatra',
  },
  {
    text: 'No busques los errores, busca un remedio.',
    author: 'Henry Ford',
  },
];

export const InspirationWidget: React.FC = () => {
  const [quote, setQuote] = useState(QUOTES[0]);
  const [fade, setFade] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
  }, []);

  const handleNewQuote = () => {
    setFade(false);
    setTimeout(() => {
      let newQuote = quote;
      while (newQuote.text === quote.text) {
        newQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
      }
      setQuote(newQuote);
      setFade(true);
    }, 250);
  };

  // Gradiente animado según tema
  const gradient =
    theme === 'dark'
      ? 'bg-gradient-to-br from-[#232526] via-[#414345] to-[#232526]'
      : 'bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f8fafc]';

  return (
    <div
      className={`relative w-full max-w-xl mx-auto my-8 p-8 rounded-3xl shadow-2xl border-2 border-primary/30 ${gradient} overflow-hidden`}
    >
      <div className="absolute inset-0 pointer-events-none animate-gradient-move opacity-30 z-0" />
      <div className="flex flex-col items-center justify-center gap-4 relative z-10">
        <Sparkles className="w-10 h-10 text-primary animate-bounce drop-shadow-lg" />
        <blockquote
          className={`relative z-10 text-2xl md:text-3xl font-semibold text-center select-none drop-shadow-lg transition-opacity duration-700 ${
            fade ? 'opacity-100 animate-fade-in' : 'opacity-0'
          } ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}
        >
          “{quote.text}”
        </blockquote>
        <span
          className={`block text-base md:text-lg text-primary font-bold mb-2 animate-fade-in-slow`}
        >
          — {quote.author}
        </span>
        <button
          onClick={handleNewQuote}
          className={`mt-4 px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md border flex items-center gap-2 bg-primary text-primary-foreground border-primary/40 dark:bg-primary dark:text-primary-foreground dark:border-primary/40 animate-bounce-once`}
        >
          <Sparkles className="w-5 h-5 animate-spin-slow" />
          Nueva inspiración
        </button>
      </div>
      <style>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 8s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.7s;
        }
        @keyframes fade-in-slow {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-slow {
          animation: fade-in-slow 1.2s;
        }
        @keyframes bounce-once {
          0% { transform: scale(1); }
          30% { transform: scale(1.12); }
          60% { transform: scale(0.97); }
          100% { transform: scale(1); }
        }
        .animate-bounce-once:active {
          animation: bounce-once 0.4s;
        }
      `}</style>
    </div>
  );
};

export default InspirationWidget;
