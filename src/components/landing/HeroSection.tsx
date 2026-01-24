import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-tailor.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream to-cream-dark" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 opacity-0 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-sm font-medium text-foreground">
                Trusted by 10,000+ customers
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Tailoring in
              <span className="block text-gradient-gold">Your Pocket</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Connect with skilled local tailors for custom-made clothes, 
              alterations, and stitching services. Quality craftsmanship, 
              delivered to your doorstep.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Find a Tailor
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Join as a Tailor
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="space-y-1">
                <p className="text-3xl font-serif font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Expert Tailors</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-serif font-bold text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground">Orders Completed</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-serif font-bold text-foreground">4.9</p>
                <p className="text-sm text-muted-foreground">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative opacity-0 animate-fade-up stagger-2">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Professional tailor measuring fine fabric"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-elevated animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Quality Assured</p>
                  <p className="text-sm text-muted-foreground">Satisfaction Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
