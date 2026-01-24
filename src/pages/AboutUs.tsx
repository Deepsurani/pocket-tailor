import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Scissors, Users, Award, Heart, MapPin, ArrowRight } from "lucide-react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "We partner only with skilled tailors who demonstrate exceptional attention to detail and commitment to excellence.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We ensure a seamless experience from measurement to final fitting.",
    },
    {
      icon: Heart,
      title: "Passion for Fashion",
      description: "We believe everyone deserves clothing that fits perfectly and makes them feel confident.",
    },
    {
      icon: MapPin,
      title: "Local Community",
      description: "We support local artisans and tailors, helping preserve traditional craftsmanship in modern times.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Scissors className="h-6 w-6 text-accent" />
            <span className="font-display text-xl font-bold text-primary">ThreadSync</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm">Sign In</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
            About ThreadSync
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connecting you with skilled tailors to create perfectly fitted clothing that reflects your unique style.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ThreadSync was born from a simple frustration: finding a skilled tailor shouldn't be so difficult. 
                  In an age of fast fashion and off-the-rack clothing, we believe there's still immense value in 
                  custom-tailored garments.
                </p>
                <p>
                  Founded in 2024, we set out to bridge the gap between customers seeking quality tailoring and 
                  skilled artisans looking to grow their craft. Our platform makes it easy to discover, compare, 
                  and book appointments with verified tailors in your area.
                </p>
                <p>
                  Today, we've helped thousands of customers find their perfect tailor, and we're just getting started. 
                  Our mission is to make bespoke tailoring accessible to everyone.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop"
                  alt="Tailor at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-90">Verified Tailors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-primary text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-background rounded-xl p-6 shadow-sm border border-border/50">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-primary text-center mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            The passionate people behind ThreadSync working to revolutionize the tailoring industry.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-accent/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Ready to Find Your Perfect Tailor?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join thousands of satisfied customers who've discovered the joy of perfectly fitted clothing.
          </p>
          <Link to="/signup">
            <Button variant="gold" size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ThreadSync. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
