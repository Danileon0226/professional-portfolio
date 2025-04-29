import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeProvider } from "./hooks/use-theme";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

// Componente para inicializar el tema
function ThemeInitializer() {
  useEffect(() => {
    // Asegurarse de que el tema inicial se aplique inmediatamente
    const theme = localStorage.getItem("portfolio-theme") || "dark";
    document.documentElement.classList.add(theme);
  }, []);
  return null;
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <ThemeInitializer />
      <RouterProvider router={router} />
      {/* Botón flotante de WhatsApp global */}
      <a
        href="https://wa.me/573117502382?text=¡Hola!%20Vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte%20para%20un%20proyecto."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </ThemeProvider>
  );
}

export default App;
