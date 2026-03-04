import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Upload, CheckCircle, Star, Users, TrendingUp, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const JoinAsTailor = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    experience: "",
    specialties: "",
    about: "",
    portfolio: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Application submitted!",
        description: "We'll review your application and get back to you within 48 hours.",
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        experience: "",
        specialties: "",
        about: "",
        portfolio: "",
      });
    }, 1500);
  };

  const benefits = [
    {
      icon: Users,
      title: "Reach More Customers",
      description: "Get discovered by thousands of customers looking for skilled tailors in your area.",
    },
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Manage bookings, track orders, and scale your tailoring business effortlessly.",
    },
    {
      icon: Star,
      title: "Build Your Reputation",
      description: "Showcase your portfolio, collect reviews, and establish yourself as a top tailor.",
    },
    {
      icon: CheckCircle,
      title: "Flexible Schedule",
      description: "Set your own availability and work on your terms. Accept orders that suit you.",
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
            <Link to="/tailors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Tailors
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm">Sign In</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block text-accent font-medium uppercase tracking-wider text-sm mb-4">
            Join Our Network
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Become a <span className="text-accent">ThreadSync</span> Tailor
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our growing community of skilled tailors and connect with customers who value quality craftsmanship. Expand your reach and grow your business.
          </p>
          <Button
            variant="gold"
            size="lg"
            className="gap-2"
            onClick={() => document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-primary text-center mb-4">
            Why Join ThreadSync?
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            We provide the tools and platform you need to succeed as a modern tailor.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-primary mb-4">
              Apply to Join
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below and our team will review your application.
            </p>
          </div>

          <Card className="border-border/50 shadow-elevated">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City / Location *</Label>
                    <Input
                      id="city"
                      name="city"
                      placeholder="New York, NY"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select experience</option>
                      <option value="1-3">1 – 3 years</option>
                      <option value="3-5">3 – 5 years</option>
                      <option value="5-10">5 – 10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialties">Specialties *</Label>
                    <select
                      id="specialties"
                      name="specialties"
                      value={formData.specialties}
                      onChange={handleChange}
                      required
                      className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select specialty</option>
                      <option value="custom-tailoring">Custom Tailoring</option>
                      <option value="alterations">Alterations & Repairs</option>
                      <option value="bridal">Bridal & Occasion Wear</option>
                      <option value="mens-suits">Men's Suits & Formal</option>
                      <option value="ethnic-wear">Ethnic / Traditional Wear</option>
                      <option value="general">General Stitching</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="about">About You *</Label>
                  <Textarea
                    id="about"
                    name="about"
                    placeholder="Tell us about your skills, experience, and what makes you unique as a tailor..."
                    value={formData.about}
                    onChange={handleChange}
                    required
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio Link (optional)</Label>
                  <Input
                    id="portfolio"
                    name="portfolio"
                    type="url"
                    placeholder="https://your-portfolio.com"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="h-11"
                  />
                  <p className="text-xs text-muted-foreground">
                    Share a link to your website, Instagram, or any platform showcasing your work.
                  </p>
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Upload className="h-4 w-4" />
                      Submit Application
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By applying, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </CardContent>
          </Card>
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

export default JoinAsTailor;
