
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/about" },
    { name: "Proyectos", path: "/projects" },
    { name: "Servicios", path: "/services" },
    { name: "Contacto", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="section-container flex items-center justify-between">
        <Link to="/" className="relative z-10">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/logo.jpeg" 
              alt="Gedco Logo" 
              className="h-10 w-auto" 
            />
            <span className={cn(
              "ml-2 text-lg font-medium transition-colors",
              isScrolled ? "text-gedco-black" : "text-white"
            )}>
              GEDCO
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-all duration-200 relative",
                isScrolled ? "text-gedco-black" : "text-white",
                isActive(link.path)
                  ? "opacity-100 after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-gedco-orange"
                  : "opacity-80 hover:opacity-100"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className={cn(
              "py-2 px-4 rounded-sm text-sm font-medium transition-all duration-200",
              isScrolled 
                ? "bg-gedco-orange text-white hover:bg-gedco-orange/90" 
                : "bg-white text-gedco-black hover:bg-white/90"
            )}
          >
            Cotizar
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-10 p-2"
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? (
            <X className={isScrolled ? "text-gedco-black" : "text-white"} size={24} />
          ) : (
            <Menu className={isScrolled ? "text-gedco-black" : "text-white"} size={24} />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 z-[5] bg-gedco-black/95 flex flex-col justify-center items-center transition-all duration-300 md:hidden",
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-xl font-medium text-white/80 hover:text-white transition-colors",
                  isActive(link.path) && "text-gedco-orange"
                )}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 py-2 px-6 bg-gedco-orange text-white rounded-sm text-lg font-medium hover:bg-gedco-orange/90 transition-colors"
              onClick={closeMenu}
            >
              Cotizar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
