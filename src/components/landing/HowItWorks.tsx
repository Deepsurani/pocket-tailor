import { Shirt, Ruler, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Shirt,
    title: "Choose Your Style",
    description: "Browse our catalog or upload your own design. Select fabrics, colors, and customization options.",
    step: "01"
  },
  {
    icon: Ruler,
    title: "Share Measurements",
    description: "Use our easy measurement guide or schedule a home visit from one of our expert tailors.",
    step: "02"
  },
  {
    icon: Truck,
    title: "We Craft & Deliver",
    description: "Your garment is expertly crafted and delivered to your doorstep with free alterations.",
    step: "03"
  },
  {
    icon: CheckCircle,
    title: "Perfect Fit Guaranteed",
    description: "Not satisfied? We offer unlimited alterations until you love how it fits.",
    step: "04"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            From selection to delivery, we make custom tailoring effortless
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-[2px] bg-border -translate-x-1/2 z-0" />
              )}
              
              <div className="relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-shadow duration-300 h-full">
                {/* Step Number */}
                <span className="absolute -top-3 -right-3 bg-gradient-gold text-primary font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center shadow-gold">
                  {step.step}
                </span>
                
                {/* Icon */}
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-5 group-hover:bg-gradient-gold transition-all duration-300">
                  <step.icon className="w-7 h-7 text-navy group-hover:text-primary transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
