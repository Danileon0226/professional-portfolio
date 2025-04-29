import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./routes";
import { ThemeProvider } from "./hooks/use-theme";
import { useEffect } from "react";

function AppRoutes() {
  return useRoutes(routes);
}

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
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
