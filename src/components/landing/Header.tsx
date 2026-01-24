import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Scissors, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
              <Scissors className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display text-xl md:text-2xl font-semibold text-foreground">
              ThreadSync
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/tailors" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Find Tailors
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              About
            </Link>
            <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              FAQ
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button variant="gold">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link to="/tailors" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Find Tailors
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                About
              </Link>
              <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                FAQ
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Link to="/login">
                  <Button variant="ghost" className="justify-start w-full">Sign In</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="gold" className="w-full">Get Started</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
