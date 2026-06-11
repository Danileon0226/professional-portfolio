import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTheme } from '../../hooks/use-theme';
import { useLogo } from '../../hooks/use-logo';
import { siteConfig, mailtoLink, whatsappLink } from '../../lib/site';

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Proyectos', to: '/projects' },
  { label: 'Sobre mí', to: '/about' },
  { label: 'Estación', to: '/workstation' },
  { label: 'CV', to: '/cv' },
];

const socials = [
  { href: siteConfig.social.github, icon: Github, label: 'GitHub' },
  { href: siteConfig.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: whatsappLink, icon: FaWhatsapp, label: 'WhatsApp' },
  { href: mailtoLink, icon: Mail, label: 'Email' },
];

const Footer = () => {
  const { theme } = useTheme();
  const year = new Date().getFullYear();
  const logo = useLogo();

  return (
    <footer
      className={`mt-24 w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
        theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
      }`}
    >
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo de Daniel-Zero"
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-auto"
              />
              <span className="text-lg font-bold">Daniel León</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Desarrollador Web Full Stack. Construyo productos digitales rápidos, accesibles y
              memorables desde {siteConfig.location}.
            </p>
          </div>

          {/* Navegación */}
          <div className="md:justify-self-center">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto / Redes */}
          <div className="md:justify-self-end">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Conectemos
            </h3>
            <div className="flex gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <a
              href={mailtoLink}
              className="mt-4 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} Daniel León — Daniel-Zero. Todos los derechos reservados.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            Volver arriba
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
