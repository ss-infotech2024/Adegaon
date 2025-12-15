import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Search, Facebook, Youtube, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { path: "/", label: "गृहपृष्ठ" },
  { path: "/about", label: "आमच्याबद्दल" },
  { path: "/projects", label: "प्रकल्प" },
  { path: "/schemes", label: "योजना" },
  { path: "/documents", label: "दस्तऐवज" },
  { path: "/gallery", label: "गॅलरी" },
  { path: "/gramsabha", label: "ग्रामसभा" },
  { path: "/news", label: "बातम्या" },
  { path: "/contact", label: "संपर्क" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      {/* Top Bar */}
      <div className="bg-maroon-dark py-2 px-4">
        <div className="container flex items-center justify-between text-primary-foreground text-sm">
          <span className="hidden md:block">स्वागत आहे! अडेगांव ग्रामपंचायत अधिकृत वेबसाईट</span>

        </div>
      </div>

      {/* Main Header */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-maroon-dark">अ</span>
            </div>
            <div className="text-primary-foreground">
              <h1 className="text-lg md:text-xl font-bold">ग्रामपंचायत अडेगांव</h1>
              <p className="text-xs md:text-sm opacity-80">तालुका हिंगणा, जिल्हा नागपूर</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link text-primary-foreground ${location.pathname === item.path ? "text-gold after:w-full" : ""
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center gap-2">

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-primary-foreground hover:text-gold hover:bg-maroon-dark"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-maroon-dark border-t border-maroon-light/20 animate-fade-in">
          <div className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 rounded-lg text-primary-foreground transition-colors ${location.pathname === item.path
                  ? "bg-gold text-maroon-dark font-semibold"
                  : "hover:bg-primary"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
