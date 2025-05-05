import React, { useEffect, useState } from 'react';
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
    }, 200);
  };

  return (
    <div className="w-full max-w-xl mx-auto my-12 flex flex-col items-center justify-center p-0 bg-transparent">
      <Sparkles className="w-8 h-8 text-primary mb-4" />
      <blockquote
        className={`text-xl md:text-2xl font-medium text-center select-none transition-opacity duration-500 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ maxWidth: 600 }}
      >
        “{quote.text}”
      </blockquote>
      <span className="block text-base md:text-lg text-primary font-semibold mb-4 mt-2">
        — {quote.author}
      </span>
      <button
        onClick={handleNewQuote}
        className="text-primary text-sm underline underline-offset-4 font-medium bg-transparent border-none p-0 m- transition-colors"
        style={{ boxShadow: 'none', border: 'none' }}
      >
        <span className="inline-flex items-center gap-1">
          <Sparkles className="w-4 h-4" />
          Nueva inspiración
        </span>
      </button>
    </div>
  );
};

export default InspirationWidget;
