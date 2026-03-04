import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Upload, CheckCircle, Star, Users, TrendingUp, ArrowRight, ImagePlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Footer from "@/components/landing/Footer";

const JoinAsTailor = () => {
  const [formData, setFormData] = useState({
    shopName: "",
    shopContactNo: "",
    address: "",
    cityId: "",
    areaId: "",
    adharCard: "",
  });
  const [files, setFiles] = useState<{
    addressProof: File | null;
    shopPhoto: File | null;
    ownerPhoto: File | null;
    shopLogo: File | null;
    shopBannerPhoto: File | null;
  }>({
    addressProof: null,
    shopPhoto: null,
    ownerPhoto: null,
    shopLogo: null,
    shopBannerPhoto: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (field: keyof typeof files) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFiles({ ...files, [field]: e.target.files[0] });
    }
  };

  const uploadFile = async (file: File, folder: string): Promise<string | null> => {
    const ext = file.name.split(".").pop();
    const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
    const { error } = await supabase.storage.from("tailor-uploads").upload(fileName, file);
    if (error) {
      console.error("Upload error:", error);
      return null;
    }
    const { data } = supabase.storage.from("tailor-uploads").getPublicUrl(fileName);
    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Upload files
      const [addressProofUrl, shopPhotoUrl, ownerPhotoUrl, shopLogoUrl, shopBannerUrl] = await Promise.all([
        files.addressProof ? uploadFile(files.addressProof, "address-proof") : Promise.resolve(null),
        files.shopPhoto ? uploadFile(files.shopPhoto, "shop-photos") : Promise.resolve(null),
        files.ownerPhoto ? uploadFile(files.ownerPhoto, "owner-photos") : Promise.resolve(null),
        files.shopLogo ? uploadFile(files.shopLogo, "shop-logos") : Promise.resolve(null),
        files.shopBannerPhoto ? uploadFile(files.shopBannerPhoto, "shop-banners") : Promise.resolve(null),
      ]);

      const { error } = await (supabase.from as any)("TailorTbl").insert({
        ShopName: formData.shopName,
        ShopContactNo: formData.shopContactNo,
        Address: formData.address,
        CityId: formData.cityId || null,
        AreaId: formData.areaId || null,
        AdharCard: formData.adharCard || null,
        AddressProof: addressProofUrl,
        ShopPhoto: shopPhotoUrl,
        OwnerPhoto: ownerPhotoUrl,
        ShopLogo: shopLogoUrl,
        ShopBanarPhoto: shopBannerUrl,
      });

      if (error) throw error;

      toast({
        title: "Application submitted!",
        description: "We'll review your application and get back to you within 48 hours.",
      });

      setFormData({ shopName: "", shopContactNo: "", address: "", cityId: "", areaId: "", adharCard: "" });
      setFiles({ addressProof: null, shopPhoto: null, ownerPhoto: null, shopLogo: null, shopBannerPhoto: null });
    } catch (err: any) {
      toast({
        title: "Submission failed",
        description: err.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    { icon: Users, title: "Reach More Customers", description: "Get discovered by thousands of customers looking for skilled tailors." },
    { icon: TrendingUp, title: "Grow Your Business", description: "Manage bookings, track orders, and scale your business effortlessly." },
    { icon: Star, title: "Build Your Reputation", description: "Showcase your portfolio, collect reviews, and build trust." },
    { icon: CheckCircle, title: "Flexible Schedule", description: "Set your own availability and accept orders on your terms." },
  ];

  const FileUploadField = ({ label, field, required = false }: { label: string; field: keyof typeof files; required?: boolean }) => (
    <div className="space-y-2">
      <Label>{label} {required && "*"}</Label>
      <label className="flex items-center gap-3 px-4 py-3 rounded-lg border border-input bg-background cursor-pointer hover:border-accent transition-colors">
        <ImagePlus className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        <span className="text-sm text-muted-foreground truncate">
          {files[field] ? files[field]!.name : "Choose file..."}
        </span>
        <input type="file" accept="image/*" className="hidden" onChange={handleFileChange(field)} />
      </label>
    </div>
  );

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
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link to="/tailors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Tailors</Link>
            <Link to="/login"><Button variant="outline" size="sm">Sign In</Button></Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block text-accent font-medium uppercase tracking-wider text-sm mb-4">Join Our Network</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Become a <span className="text-accent">ThreadSync</span> Tailor
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Register your shop and connect with customers who value quality craftsmanship.
          </p>
          <Button variant="gold" size="lg" className="gap-2" onClick={() => document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })}>
            Register Now <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-primary text-center mb-4">Why Join ThreadSync?</h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">We provide the tools and platform you need to succeed.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <Card key={i} className="border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <b.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="application-form" className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-primary mb-4">Register Your Shop</h2>
            <p className="text-muted-foreground">Fill out the details below and our team will verify your application.</p>
          </div>

          <Card className="border-border/50 shadow-elevated">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Shop Info */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="shopName">Shop Name *</Label>
                    <Input id="shopName" name="shopName" placeholder="Your shop name" value={formData.shopName} onChange={handleChange} required className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="shopContactNo">Shop Contact No. *</Label>
                    <Input id="shopContactNo" name="shopContactNo" type="tel" placeholder="+91 98765 43210" value={formData.shopContactNo} onChange={handleChange} required className="h-11" />
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <Label htmlFor="address">Full Address *</Label>
                  <Input id="address" name="address" placeholder="Shop address" value={formData.address} onChange={handleChange} required className="h-11" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cityId">City</Label>
                    <Input id="cityId" name="cityId" placeholder="City" value={formData.cityId} onChange={handleChange} className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="areaId">Area</Label>
                    <Input id="areaId" name="areaId" placeholder="Area / Locality" value={formData.areaId} onChange={handleChange} className="h-11" />
                  </div>
                </div>

                {/* Identity */}
                <div className="space-y-2">
                  <Label htmlFor="adharCard">Aadhar Card Number</Label>
                  <Input id="adharCard" name="adharCard" placeholder="XXXX XXXX XXXX" value={formData.adharCard} onChange={handleChange} className="h-11" maxLength={14} />
                </div>

                {/* File Uploads */}
                <div className="pt-2">
                  <p className="text-sm font-medium text-foreground mb-3">Upload Documents & Photos</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FileUploadField label="Address Proof" field="addressProof" />
                    <FileUploadField label="Owner Photo" field="ownerPhoto" />
                    <FileUploadField label="Shop Photo" field="shopPhoto" />
                    <FileUploadField label="Shop Logo" field="shopLogo" />
                  </div>
                  <div className="mt-4">
                    <FileUploadField label="Shop Banner Photo" field="shopBannerPhoto" />
                  </div>
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full gap-2" disabled={isLoading}>
                  {isLoading ? "Submitting..." : <><Upload className="h-4 w-4" /> Submit Application</>}
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
