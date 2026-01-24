import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Scissors, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  ArrowLeft,
  Calendar
} from "lucide-react";
import { tailorShops } from "./Tailors";

const TailorDetail = () => {
  const { id } = useParams();
  const tailor = tailorShops.find(t => t.id === id);

  if (!tailor) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-primary mb-4">Tailor Not Found</h1>
          <Link to="/tailors">
            <Button variant="outline">Back to Tailors</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Scissors className="h-6 w-6 text-accent" />
            <span className="font-display text-xl font-bold text-primary">ThreadSync</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link to="/tailors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              All Tailors
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm">Sign In</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Link to="/tailors" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Tailors
        </Link>
      </div>

      {/* Portfolio Gallery */}
      <section className="container mx-auto px-4 mb-8">
        <div className="grid grid-cols-3 gap-2 rounded-xl overflow-hidden h-64 md:h-96">
          {tailor.portfolioImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${tailor.name} portfolio ${idx + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
            />
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tailor Header */}
            <div className="flex items-start gap-4">
              <img
                src={tailor.profileImage}
                alt={tailor.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-accent/20"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="font-display text-2xl md:text-3xl font-bold text-primary">
                    {tailor.name}
                  </h1>
                  {tailor.verified && (
                    <Badge className="bg-accent text-accent-foreground">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {tailor.address}, {tailor.city}
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                    <span className="font-semibold">{tailor.rating}</span>
                    <span className="text-muted-foreground">({tailor.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {tailor.experience} experience
                  </div>
                </div>
              </div>
            </div>

            {/* Specialties */}
            <div>
              <h2 className="font-display text-xl font-semibold text-primary mb-4">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {tailor.specialties.map((specialty) => (
                  <Badge key={specialty} variant="secondary" className="text-sm py-1.5 px-3">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Services & Pricing */}
            <div>
              <h2 className="font-display text-xl font-semibold text-primary mb-4">Services & Pricing</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {tailor.services.map((service) => (
                  <Card key={service.name} className="border-border/50">
                    <CardContent className="p-4 flex justify-between items-center">
                      <span className="font-medium">{service.name}</span>
                      <span className="text-accent font-semibold">{service.price}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div>
              <h2 className="font-display text-xl font-semibold text-primary mb-4">Customer Reviews</h2>
              <div className="space-y-4">
                {[
                  { name: "Sarah M.", rating: 5, comment: "Absolutely fantastic work! My suit fits perfectly.", date: "2 weeks ago" },
                  { name: "John D.", rating: 5, comment: "Professional service and quick turnaround. Highly recommend!", date: "1 month ago" },
                  { name: "Emily R.", rating: 4, comment: "Great alterations on my wedding dress. Very happy with the result.", date: "2 months ago" },
                ].map((review, idx) => (
                  <Card key={idx} className="border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{review.name}</span>
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{review.comment}</p>
                      <p className="text-xs text-muted-foreground mt-2">{review.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking */}
          <div className="lg:col-span-1">
            <Card className="border-border/50 sticky top-24">
              <CardContent className="p-6 space-y-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                  <p className="font-display text-3xl font-bold text-primary">
                    {tailor.services[0]?.price}
                  </p>
                </div>

                <Link to={`/booking?tailor=${tailor.id}`}>
                  <Button variant="gold" size="lg" className="w-full gap-2">
                    <Calendar className="h-4 w-4" />
                    Book Appointment
                  </Button>
                </Link>

                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="text-sm font-medium">{tailor.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm font-medium">{tailor.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Address</p>
                      <p className="text-sm font-medium">{tailor.address}</p>
                      <p className="text-sm text-muted-foreground">{tailor.city}</p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
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

export default TailorDetail;
