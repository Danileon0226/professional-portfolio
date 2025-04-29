import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeToggle } from '../ui/theme-toggle';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">
          Portfolio
        </Link>
        
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Inicio
          </Link>
          <Link
            to="/proyectos"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Proyectos
          </Link>
          <Link
            to="/sobre-mi"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Sobre Mí
          </Link>
          <Link
            to="/contacto"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Contacto
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 