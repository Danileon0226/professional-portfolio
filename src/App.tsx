import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from './routes';
import { ThemeProvider } from './hooks/use-theme';
import { themes } from './lib/themes';
import { Card } from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';

function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
