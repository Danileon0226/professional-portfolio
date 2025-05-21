import { useTheme } from '../../hooks/use-theme';
import { useLogo } from '../../hooks/use-logo';

const Footer = () => {
  const { theme } = useTheme();
  const year = new Date().getFullYear();

  const logo = useLogo();

  return (
    <footer
      className={`w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-8 ${
        theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
      }`}
    >
      <div className="container flex flex-col md:flex-row items-center justify-between py-6 gap-4">
        {/* Logo y nombre */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo de Daniel-Zero, desarrollador web"
            width={50}
            height={50}
            loading="lazy"
            className="rounded-md shadow-sm"
          />
          <span className="font-semibold text-lg text-foreground">Daniel-Zero</span>
        </div>
        {/* Enlaces rápidos */}
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <a href="/projects" className="hover:text-foreground transition-colors">
            Proyectos
          </a>
          <a href="#experience" className="hover:text-foreground transition-colors">
            Experiencia
          </a>
          <a href="#blog" className="hover:text-foreground transition-colors">
            Blog
          </a>
          <a href="#about" className="hover:text-foreground transition-colors">
            Sobre mí
          </a>
        </nav>
        {/* Derechos y año */}
        <div className="text-xs text-muted-foreground text-center md:text-right">
          © {year} Daniel-Zero. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
