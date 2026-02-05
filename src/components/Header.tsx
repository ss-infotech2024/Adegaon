import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Search, Facebook, Youtube, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import your logo image
import logoImage from "/logo.png"; // Update this path to your actual logo file
// If you don't have a logo.png file, you can use a public URL:
// const logoImage = "https://example.com/your-logo.png";

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
        <div className="container flex flex-col md:flex-row md:items-center justify-between text-primary-foreground text-sm">
          <span className="text-center md:text-left mb-1 md:mb-0">
            स्वागत आहे! अडेगांव ग्रामपंचायत अधिकृत वेबसाईट
          </span>
          <div className="flex justify-center md:justify-end gap-3">
            <a href="#" className="hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-gold transition-colors" aria-label="Youtube">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Image */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold/30 flex items-center justify-center bg-white">
              <img 
                src={logoImage} 
                alt="अडेगांव ग्रामपंचायत लोगो" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-2xl font-bold text-maroon-dark">अ</span>`;
                  }
                }}
              />
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
              className="hidden md:flex text-primary-foreground hover:text-gold hover:bg-maroon-dark"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-primary-foreground hover:text-gold hover:bg-maroon-dark"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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