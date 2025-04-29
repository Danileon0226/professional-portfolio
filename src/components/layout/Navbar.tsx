import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { ThemeToggle } from "../ui/theme-toggle";
import { useTheme } from "../../hooks/use-theme";
import logo from "../../../public/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "PROYECTOS", href: "/projects" },
  { label: "SOBRE MÍ", href: "/about" },
];

const Navbar = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mb-8 ${
        theme === "dark" ? "border-gray-800" : "border-gray-200"
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/">
            <img
              src={logo}
              alt="Logo de Daniel-Zero, desarrollador web"
              width={110}
              height={110}
              loading="lazy"
              className="max-h-12 w-auto sm:max-h-14 transition-all duration-300"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="relative"
            >
              {item.href.startsWith("/") ? (
                <Link
                  to={item.href}
                  className={`text-sm font-semibold tracking-wide transition-colors px-2 py-1 focus:outline-none focus-visible:ring-2 rounded hover:text-primary ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-foreground/70"
                  }`}
                >
                  {item.label}
                  {location.pathname === item.href && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded"
                    />
                  )}
                </Link>
              ) : (
                <button
                  className="text-sm font-semibold tracking-wide transition-colors px-2 py-1 hover:text-primary text-foreground/70 focus:outline-none focus-visible:ring-2 rounded"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus-visible:ring-2"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 shadow-lg flex items-center gap-2 px-5 py-2 text-base font-bold"
            asChild
          >
            <Link to="/contact" aria-label="Ir a contacto">
              <span>CONTACTO</span>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay para bloquear interacción con el fondo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              aria-hidden="true"
            />
            {/* Menú hamburguesa */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 z-50 bg-white dark:bg-neutral-900 flex flex-col md:hidden h-screen overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b ">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <img
                    src={logo}
                    alt="Logo de Daniel-Zero"
                    width={90}
                    height={90}
                    className="max-h-10 w-auto"
                  />
                </Link>
                <button
                  className="p-2 rounded focus:outline-none focus-visible:ring-2"
                  aria-label="Cerrar menú"
                  onClick={() => setMenuOpen(false)}
                >
                  <X size={28} />
                </button>
              </div>
              <nav className="flex flex-col gap-6 px-8 py-8">
                {navItems.map((item) =>
                  item.href.startsWith("/") ? (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`text-lg font-semibold tracking-wide transition-colors px-2 py-2 rounded focus:outline-none focus-visible:ring-2 ${
                        location.pathname === item.href
                          ? "text-primary bg-primary/10"
                          : "text-foreground/80 hover:bg-accent"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.label}
                      className="text-lg font-semibold tracking-wide transition-colors px-2 py-2 rounded text-foreground/80 hover:bg-accent focus:outline-none focus-visible:ring-2"
                      onClick={() => handleNavClick(item.href)}
                    >
                      {item.label}
                    </button>
                  )
                )}
                <Button
                  className="mt-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 shadow-lg flex items-center gap-2 px-5 py-2 text-base font-bold"
                  asChild
                >
                  <Link
                    to="/contact"
                    aria-label="Ir a contacto"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>CONTACTO</span>
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </Button>
                <div className="mt-4">
                  <ThemeToggle />
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
