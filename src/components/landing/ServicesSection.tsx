import { Scissors, Edit, Shirt, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Shirt,
    title: "Custom Tailoring",
    description: "Get perfectly fitted clothes made from scratch. Choose from premium fabrics and designs.",
    price: "From $99",
    features: ["Premium Fabrics", "Personal Consultation", "Multiple Fittings"]
  },
  {
    icon: Edit,
    title: "Alterations",
    description: "Perfect fit adjustments for your existing wardrobe. Quick turnaround guaranteed.",
    price: "From $25",
    features: ["Same Week Service", "All Garment Types", "Expert Craftsmanship"]
  },
  {
    icon: Scissors,
    title: "Stitching Services",
    description: "Expert stitching for all types of garments including traditional and contemporary styles.",
    price: "From $49",
    features: ["Traditional & Modern", "Quality Thread", "Durable Finish"]
  },
  {
    icon: Sparkles,
    title: "Special Occasions",
    description: "Wedding attire, formal wear, and special event clothing made to perfection.",
    price: "From $199",
    features: ["Wedding Specialists", "Rush Orders", "VIP Service"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional tailoring services for every need and occasion
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl border border-border hover:border-gold/50 p-6 transition-all duration-300 hover:shadow-elevated flex flex-col"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-navy rounded-xl flex items-center justify-center mb-5 group-hover:bg-gradient-gold transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground group-hover:text-primary transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="pt-4 border-t border-border mt-auto">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-serif font-semibold text-foreground">
                    {service.price}
                  </span>
                  <Button variant="ghost" size="sm" className="text-gold hover:text-gold">
                    Learn More →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
