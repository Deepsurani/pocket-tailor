import { Link } from "react-router-dom";
import { Scissors } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
                <Scissors className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display text-xl font-semibold text-primary-foreground">
                ThreadSync
              </span>
            </Link>
            <p className="text-cream-dark/70 text-sm leading-relaxed">
              Connecting you with skilled tailors for perfect-fit clothing. 
              Quality craftsmanship, conveniently delivered.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-primary-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              <li><Link to="/tailors" className="text-cream-dark/70 hover:text-gold transition-colors text-sm">Our Tailors</Link></li>
              <li><Link to="/booking" className="text-cream-dark/70 hover:text-gold transition-colors text-sm">Book a Tailor</Link></li>
              <li><Link to="/join-as-tailor" className="text-cream-dark/70 hover:text-gold transition-colors text-sm">Join as Tailor</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif font-semibold text-primary-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-cream-dark/70 hover:text-gold transition-colors text-sm">About Us</Link></li>
              <li><Link to="/faq" className="text-cream-dark/70 hover:text-gold transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/contact" className="text-cream-dark/70 hover:text-gold transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="font-serif font-semibold text-primary-foreground mb-4">
              Account
            </h4>
            <ul className="space-y-2">
              <li><Link to="/login" className="text-cream-dark/70 hover:text-gold transition-colors text-sm">Sign In</Link></li>
              <li><Link to="/signup" className="text-cream-dark/70 hover:text-gold transition-colors text-sm">Sign Up</Link></li>
              <li><Link to="/dashboard" className="text-cream-dark/70 hover:text-gold transition-colors text-sm">Dashboard</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream-dark/60 text-sm">
            © {new Date().getFullYear()} ThreadSync. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-cream-dark/60 hover:text-gold transition-colors text-sm">Facebook</a>
            <a href="#" className="text-cream-dark/60 hover:text-gold transition-colors text-sm">Instagram</a>
            <a href="#" className="text-cream-dark/60 hover:text-gold transition-colors text-sm">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
