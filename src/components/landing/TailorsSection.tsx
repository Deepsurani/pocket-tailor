import { Star, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const tailors = [
  {
    name: "Maria Santos",
    specialty: "Wedding & Formal Wear",
    location: "Downtown",
    rating: 4.9,
    reviews: 234,
    experience: "15+ years",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "James Chen",
    specialty: "Men's Suits & Blazers",
    location: "Midtown",
    rating: 4.8,
    reviews: 189,
    experience: "12+ years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Fatima Al-Hassan",
    specialty: "Traditional & Modern Fusion",
    location: "East Side",
    rating: 5.0,
    reviews: 312,
    experience: "20+ years",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Robert Williams",
    specialty: "Alterations Specialist",
    location: "West End",
    rating: 4.9,
    reviews: 156,
    experience: "8+ years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  }
];

const TailorsSection = () => {
  return (
    <section id="tailors" className="py-20 md:py-32 bg-navy">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">
            Meet Our Experts
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground">
            Featured Tailors
          </h2>
          <p className="text-cream-dark/80 text-lg">
            Skilled artisans ready to bring your vision to life
          </p>
        </div>

        {/* Tailors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tailors.map((tailor) => (
            <div
              key={tailor.name}
              className="group bg-navy-light/50 backdrop-blur-sm rounded-2xl border border-cream/10 overflow-hidden hover:border-gold/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tailor.image}
                  alt={tailor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
                
                {/* Experience Badge */}
                <div className="absolute top-3 right-3 bg-gold/90 backdrop-blur-sm text-primary text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  {tailor.experience}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-serif font-semibold text-primary-foreground mb-1">
                  {tailor.name}
                </h3>
                <p className="text-cream-dark/70 text-sm mb-3">
                  {tailor.specialty}
                </p>

                {/* Location & Rating */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-cream-dark/60">
                    <MapPin className="w-3.5 h-3.5" />
                    {tailor.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                    <span className="text-primary-foreground font-medium">{tailor.rating}</span>
                    <span className="text-cream-dark/60">({tailor.reviews})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="gold" size="lg">
            View All Tailors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TailorsSection;
