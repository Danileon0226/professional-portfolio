import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HackerMode.css';
import cmdIcon from '../../../public/images/command-line.png';

const BANNER_ZERO = [
  ' ███████╗███████╗██████╗   ██████╗ ',
  ' ███████╗███████╗██████╗   ██████╗ ',
  ' ╚══███╔╝██╔════╝██╔══██╗ ██╔═══██╗',
  '   ███╔╝ █████╗  ██████╔╝ ██║   ██║',
  '  ███╔╝  ██╔══╝  ██╔══██╗ ██║   ██║',
  ' ███████╗███████╗██║  ██║ ╚██████╔╝',
  ' ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═════╝ ',
];

const QUOTES = [
  '“El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora.”',
  '“La creatividad es la inteligencia divirtiéndose.” – Albert Einstein',
  '“No cuentes los días, haz que los días cuenten.” – Muhammad Ali',
  '“El éxito es la suma de pequeños esfuerzos repetidos día tras día.”',
  '“Hazlo con pasión o no lo hagas.”',
];

const RANDOMS = [
  'Dato: El primer bug informático fue una polilla real encontrada en un computador en 1947.',
  '¿Sabías que el logo de React está inspirado en un átomo?',
  'ZERO: ¡El nombre más hacker de todos!',
  'Dato: El primer sitio web fue info.cern.ch, creado por Tim Berners-Lee en 1991.',
  'Curiosidad: El color verde terminal se usaba porque los fósforos verdes eran más baratos.',
];

const FILES = {
  about:
    'Sobre mí: Soy Daniel Salgado, desarrollador apasionado por la tecnología y la innovación.',
  projects:
    'Proyectos: Afan, Terminal del Sur, Apps for the World, TecnoTics, HemoGroup, Construredes...',
  skills: 'Habilidades: React, TypeScript, Node.js, CSS, Tailwind, Material UI, Next.js, ...',
  contact: 'Contacto: daniel@example.com | LinkedIn: /in/danielsalgado',
};

const PROMPT = 'C:\\Users\\Zero>';

function getRandomQuote() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}
function getRandomFact() {
  return RANDOMS[Math.floor(Math.random() * RANDOMS.length)];
}
function getRandomChar() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
  return chars[Math.floor(Math.random() * chars.length)];
}

// Sonidos retro
const keySound = typeof Audio !== 'undefined' ? new Audio('/images/sounds/keypress.wav') : null;
const enterSound = typeof Audio !== 'undefined' ? new Audio('/images/sounds/enterkey.wav') : null;
const errorSound = typeof Audio !== 'undefined' ? new Audio('/images/sounds/error.wav') : null;

export default function HackerMode({ onExit }: { onExit: () => void }) {
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [matrix, setMatrix] = useState(false);
  const [matrixLines, setMatrixLines] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const matrixInterval = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    printBanner(() => {
      printAnimated(
        'Bienvenido al Modo Hacker ZERO. Escribe "help" para ver los comandos disponibles.',
        false,
      );
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
    terminalRef.current?.scrollTo({ top: terminalRef.current.scrollHeight, behavior: 'smooth' });
  }, [history, isTyping, matrixLines]);

  useEffect(() => {
    if (matrix) {
      matrixInterval.current = setInterval(() => {
        setMatrixLines((prev) => {
          const cols = 40 + Math.floor(Math.random() * 20);
          const line = Array.from({ length: cols }, getRandomChar).join('');
          return prev.length > 20 ? [...prev.slice(1), line] : [...prev, line];
        });
      }, 80);
    } else {
      setMatrixLines([]);
      if (matrixInterval.current) clearInterval(matrixInterval.current);
    }
    return () => {
      if (matrixInterval.current) clearInterval(matrixInterval.current);
    };
  }, [matrix]);

  function printBanner(cb?: () => void) {
    setIsTyping(true);
    let i = 0;
    function typeLine() {
      setHistory((prev) => [
        ...prev,
        (<span className="hacker-banner-glow">{BANNER_ZERO[i]}</span>) as any,
      ]);
      i++;
      if (i < BANNER_ZERO.length) {
        setTimeout(typeLine, 80);
      } else {
        setIsTyping(false);
        if (cb) cb();
      }
    }
    setHistory([]);
    typeLine();
  }

  function printAnimated(text: string, isBanner = false, cb?: () => void) {
    setIsTyping(true);
    let i = 0;
    const speed = isBanner ? 2 : 10;
    let line = '';
    function type() {
      line += text[i];
      setHistory((prev) => {
        const newPrev = [...prev];
        if (typeof newPrev[newPrev.length - 1] === 'string') {
          newPrev[newPrev.length - 1] = line;
        } else {
          newPrev.push(line);
        }
        return newPrev;
      });
      i++;
      if (i < text.length) {
        setTimeout(type, speed);
      } else {
        setIsTyping(false);
        if (cb) cb();
      }
    }
    setHistory((prev) => [...prev, '']);
    type();
  }

  function playKeySound() {
    if (keySound) {
      keySound.currentTime = 0;
      keySound.play();
    }
  }
  function playEnterSound() {
    if (enterSound) {
      enterSound.currentTime = 0;
      enterSound.play();
    }
  }
  function playErrorSound() {
    if (errorSound) {
      errorSound.currentTime = 0;
      errorSound.play();
    }
  }

  function handleCommand(cmd: string) {
    if (!cmd) return;
    setHistory((prev) => [...prev, `${PROMPT} ${cmd}`]);
    const [main, ...args] = cmd.split(' ');
    switch (main) {
      case 'help':
        printAnimated(
          'Comandos: help, goto [page], ls, cat [file], theme [dark|light], zero, quote, random, matrix, clear, exit',
        );
        playEnterSound();
        break;
      case 'goto': {
        const page = args[0];
        if (['about', 'projects', 'contact', ''].includes(page)) {
          printAnimated(`Navegando a /${page || ''} ...`, false, () => {
            navigate(page === '' ? '/' : `/${page}`);
          });
          playEnterSound();
        } else {
          printAnimated('Página no encontrada. Usa: about, projects, contact.');
          playErrorSound();
        }
        break;
      }
      case 'ls':
        printAnimated('about  projects  skills  contact');
        playEnterSound();
        break;
      case 'cat': {
        const file = args[0];
        if (file && FILES[file as keyof typeof FILES]) {
          printAnimated(FILES[file as keyof typeof FILES]);
          playEnterSound();
        } else {
          printAnimated('Archivo no encontrado. Usa: about, projects, skills, contact');
          playErrorSound();
        }
        break;
      }
      case 'theme': {
        const theme = args[0];
        if (theme === 'dark' || theme === 'light') {
          document.documentElement.classList.remove('dark', 'light');
          document.documentElement.classList.add(theme);
          localStorage.setItem('portfolio-theme', theme);
          printAnimated(`Tema cambiado a ${theme}`);
          playEnterSound();
        } else {
          printAnimated('Usa: theme dark | theme light');
          playErrorSound();
        }
        break;
      }
      case 'zero':
        printBanner();
        playEnterSound();
        break;
      case 'quote':
        printAnimated(getRandomQuote());
        playEnterSound();
        break;
      case 'random':
        printAnimated(getRandomFact());
        playEnterSound();
        break;
      case 'matrix':
        setMatrix(true);
        playEnterSound();
        break;
      case 'clear':
        setHistory([]);
        setMatrix(false);
        playEnterSound();
        break;
      case 'exit':
        onExit();
        playEnterSound();
        break;
      default:
        printAnimated(`Comando no reconocido: ${cmd}`);
        playErrorSound();
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isTyping && e.key.length === 1) playKeySound();
    if (e.key === 'Enter' && !isTyping) {
      handleCommand(input.trim());
      setInput('');
    }
  };

  return (
    <div className="cmd-mode-overlay animate-hacker-fade-in">
      <div className="cmd-terminal" ref={terminalRef}>
        {/* Barra de título tipo Windows */}
        <div className="cmd-title-bar">
          <img src={cmdIcon} alt="cmd" className="cmd-icon" />
          <span className="cmd-title">C:\\Windows\\System32\\cmd.exe</span>
          <div className="cmd-title-btns">
            <span className="cmd-btn cmd-min" />
            <span className="cmd-btn cmd-max" />
            <span className="cmd-btn cmd-close" onClick={onExit} />
          </div>
        </div>
        <div className="cmd-content-area">
          {matrix ? (
            <div className="matrix-effect">
              {matrixLines.map((line, idx) => (
                <div key={idx} className="matrix-line">
                  {line}
                </div>
              ))}
            </div>
          ) : (
            history.map((line, idx) => (
              <div
                key={idx}
                className={typeof line === 'string' ? 'cmd-line' : 'cmd-line hacker-banner-glow'}
              >
                {line}
              </div>
            ))
          )}
          <div className="cmd-input-line">
            <span className="cmd-prompt">{PROMPT}</span>
            <input
              ref={inputRef}
              className="cmd-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck={false}
              disabled={isTyping}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
