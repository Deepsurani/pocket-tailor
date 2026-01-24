import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Scissors, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Search,
  Clock,
  CheckCircle
} from "lucide-react";

export interface TailorShop {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  rating: number;
  reviewCount: number;
  profileImage: string;
  portfolioImages: string[];
  specialties: string[];
  services: {
    name: string;
    price: string;
  }[];
  experience: string;
  verified: boolean;
}

export const tailorShops: TailorShop[] = [
  {
    id: "1",
    name: "Elite Stitch Studio",
    address: "123 Fashion Avenue",
    city: "New York, NY",
    phone: "+1 (555) 123-4567",
    email: "contact@elitestitch.com",
    rating: 4.9,
    reviewCount: 156,
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    portfolioImages: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&h=300&fit=crop",
    ],
    specialties: ["Wedding Suits", "Formal Wear", "Alterations"],
    services: [
      { name: "Custom Suit", price: "$450+" },
      { name: "Alterations", price: "$25+" },
      { name: "Wedding Dress", price: "$800+" },
    ],
    experience: "15 years",
    verified: true,
  },
  {
    id: "2",
    name: "Modern Thread Co.",
    address: "456 Style Street",
    city: "Los Angeles, CA",
    phone: "+1 (555) 234-5678",
    email: "hello@modernthread.com",
    rating: 4.8,
    reviewCount: 98,
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    portfolioImages: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
    ],
    specialties: ["Casual Wear", "Dresses", "Contemporary"],
    services: [
      { name: "Custom Dress", price: "$200+" },
      { name: "Shirt Tailoring", price: "$80+" },
      { name: "Pants Hemming", price: "$20+" },
    ],
    experience: "8 years",
    verified: true,
  },
  {
    id: "3",
    name: "Heritage Tailors",
    address: "789 Classic Lane",
    city: "Chicago, IL",
    phone: "+1 (555) 345-6789",
    email: "info@heritagetailors.com",
    rating: 4.7,
    reviewCount: 234,
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    portfolioImages: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=400&h=300&fit=crop",
    ],
    specialties: ["Traditional", "Ethnic Wear", "Blazers"],
    services: [
      { name: "Blazer", price: "$180+" },
      { name: "Traditional Outfit", price: "$300+" },
      { name: "Jacket Repair", price: "$40+" },
    ],
    experience: "25 years",
    verified: true,
  },
  {
    id: "4",
    name: "Silk & Needle",
    address: "321 Fabric Road",
    city: "Miami, FL",
    phone: "+1 (555) 456-7890",
    email: "book@silkandneedle.com",
    rating: 4.6,
    reviewCount: 67,
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    portfolioImages: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop",
    ],
    specialties: ["Evening Gowns", "Bridal", "Luxury"],
    services: [
      { name: "Evening Gown", price: "$600+" },
      { name: "Bridal Alterations", price: "$150+" },
      { name: "Silk Dress", price: "$350+" },
    ],
    experience: "12 years",
    verified: false,
  },
  {
    id: "5",
    name: "Urban Fit Studio",
    address: "654 Metro Plaza",
    city: "Seattle, WA",
    phone: "+1 (555) 567-8901",
    email: "team@urbanfitstudio.com",
    rating: 4.8,
    reviewCount: 189,
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    portfolioImages: [
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=300&fit=crop",
    ],
    specialties: ["Streetwear", "Modern Fit", "Denim"],
    services: [
      { name: "Custom Jeans", price: "$120+" },
      { name: "Jacket Customization", price: "$90+" },
      { name: "T-Shirt Alterations", price: "$15+" },
    ],
    experience: "6 years",
    verified: true,
  },
  {
    id: "6",
    name: "Royal Threads",
    address: "987 Crown Street",
    city: "Boston, MA",
    phone: "+1 (555) 678-9012",
    email: "appointments@royalthreads.com",
    rating: 4.9,
    reviewCount: 312,
    profileImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    portfolioImages: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop",
    ],
    specialties: ["Bespoke Suits", "Executive Wear", "Premium"],
    services: [
      { name: "Bespoke Suit", price: "$1200+" },
      { name: "Executive Shirt", price: "$150+" },
      { name: "Waistcoat", price: "$200+" },
    ],
    experience: "30 years",
    verified: true,
  },
];

const Tailors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);

  const allSpecialties = [...new Set(tailorShops.flatMap(t => t.specialties))];

  const filteredTailors = tailorShops.filter(tailor => {
    const matchesSearch = 
      tailor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tailor.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tailor.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSpecialty = !selectedSpecialty || tailor.specialties.includes(selectedSpecialty);
    
    return matchesSearch && matchesSpecialty;
  });

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
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm">Sign In</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary text-center mb-4">
            Find Your Perfect Tailor
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Browse our network of verified tailors and find the perfect match for your style.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search by name, location, or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 text-base"
            />
          </div>

          {/* Specialty Filters */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <Button
              variant={selectedSpecialty === null ? "gold" : "outline"}
              size="sm"
              onClick={() => setSelectedSpecialty(null)}
            >
              All
            </Button>
            {allSpecialties.slice(0, 8).map((specialty) => (
              <Button
                key={specialty}
                variant={selectedSpecialty === specialty ? "gold" : "outline"}
                size="sm"
                onClick={() => setSelectedSpecialty(specialty)}
              >
                {specialty}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Tailors Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredTailors.length}</span> tailors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTailors.map((tailor) => (
              <Card key={tailor.id} className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow">
                {/* Portfolio Preview */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  <div className="grid grid-cols-3 h-full">
                    {tailor.portfolioImages.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${tailor.name} portfolio ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ))}
                  </div>
                  {tailor.verified && (
                    <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" />
                      Verified
                    </div>
                  )}
                </div>

                <CardContent className="p-5">
                  {/* Tailor Info */}
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={tailor.profileImage}
                      alt={tailor.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-accent/20"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg font-semibold text-primary truncate">
                        {tailor.name}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {tailor.city}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="font-medium text-sm">{tailor.rating}</span>
                        <span className="text-muted-foreground text-sm">({tailor.reviewCount} reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tailor.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  {/* Services Preview */}
                  <div className="space-y-1.5 mb-4">
                    {tailor.services.slice(0, 2).map((service) => (
                      <div key={service.name} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{service.name}</span>
                        <span className="font-medium">{service.price}</span>
                      </div>
                    ))}
                  </div>

                  {/* Experience & Contact */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {tailor.experience}
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-3.5 w-3.5" />
                      Contact
                    </div>
                  </div>

                  {/* CTA */}
                  <Link to={`/tailors/${tailor.id}`}>
                    <Button variant="gold" className="w-full">
                      View Profile
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTailors.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No tailors found matching your search.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedSpecialty(null);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
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

export default Tailors;
