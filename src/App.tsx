import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { ThemeProvider } from './hooks/use-theme';
import { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './components/ui/HackerMode.css';
import MouseFollower from './components/ui/MouseFollower';

function ThemeInitializer() {
  useEffect(() => {
    const theme = localStorage.getItem('portfolio-theme') || 'dark';
    document.documentElement.classList.add(theme);
  }, []);
  return null;
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <ThemeInitializer />
      <RouterProvider router={router} />
      <MouseFollower />

      {/* Botón flotante de WhatsApp ultralujoso */}
      <a
        href="https://wa.me/573117502382?text=¡Hola!%20Vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte%20para%20un%20proyecto."
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed z-50 bottom-6 right-6 backdrop-blur-2xl bg-emerald-500/60 hover:bg-emerald-400/50 text-white rounded-full p-5 flex items-center justify-center shadow-[0_8px_30px_rgba(52,211,153,0.35)] border border-white/30 ring-2 ring-emerald-300/30 transition-all duration-300 ease-in-out hover:scale-110 animate-float"
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulse interior */}
        <span className="absolute animate-ping-slow h-full w-full rounded-full bg-emerald-300 opacity-20 group-hover:opacity-30" />

        {/* Glow exterior */}
        <span className="absolute -z-10 inset-0 rounded-full bg-emerald-400 opacity-10 blur-2xl group-hover:opacity-20 transition duration-300" />

        {/* Icono */}
        <FaWhatsapp size={30} className="relative drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]" />
      </a>
    </ThemeProvider>
  );
}

export default App;
