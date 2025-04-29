import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ThemeToggle } from "../ui/theme-toggle";
import { useTheme } from "../../hooks/use-theme";
import logo from "../../../public/images/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { theme } = useTheme();
  const location = useLocation();

  const navItems = [
    { label: "PROYECTOS", href: "/projects" },
    { label: "EXPERIENCIA", href: "#experience" },
    { label: "BLOG", href: "#blog" },
    { label: "SOBRE MÍ", href: "/about" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mb-8 ${
        theme === "dark" ? "border-gray-800" : "border-gray-200"
      }`}
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
            />
          </Link>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.href.startsWith("/") ? (
                <Link
                  to={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-foreground/80 ${
                    location.pathname === item.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  className="text-sm font-medium tracking-wide transition-colors hover:text-foreground/80 text-foreground/60"
                  onClick={() => {
                    document
                      .querySelector(item.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {item.label}
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600">
            CONTACTO
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
