import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeProvider } from "./hooks/use-theme";
import { useEffect } from "react";

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
    </ThemeProvider>
  );
}

export default App;
