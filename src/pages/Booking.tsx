import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Scissors, ArrowLeft, CalendarIcon, Clock, User, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { tailorShops } from "./Tailors";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
];

const services = [
  { id: "custom-suit", name: "Custom Suit", duration: "90 min", price: "$450+" },
  { id: "alterations", name: "Alterations", duration: "30 min", price: "$25+" },
  { id: "custom-dress", name: "Custom Dress", duration: "60 min", price: "$200+" },
  { id: "shirt-tailoring", name: "Shirt Tailoring", duration: "45 min", price: "$80+" },
  { id: "pants-hemming", name: "Pants Hemming", duration: "20 min", price: "$20+" },
  { id: "wedding-dress", name: "Wedding Dress", duration: "120 min", price: "$800+" },
];

const Booking = () => {
  const [searchParams] = useSearchParams();
  const preselectedTailorId = searchParams.get("tailor");
  
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTailor, setSelectedTailor] = useState(preselectedTailorId || "");
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const { toast } = useToast();

  const selectedTailorData = tailorShops.find(t => t.id === selectedTailor);
  const selectedServiceData = services.find(s => s.id === selectedService);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const canProceedStep1 = selectedTailor && selectedService;
  const canProceedStep2 = selectedDate && selectedTime;
  const canProceedStep3 = formData.name && formData.email && formData.phone;

  const handleSubmit = async () => {
    setIsLoading(true);
    
    // Simulate booking submission
    setTimeout(() => {
      setIsLoading(false);
      setIsBooked(true);
      toast({
        title: "Booking Confirmed!",
        description: "You will receive a confirmation email shortly.",
      });
    }, 1500);
  };

  if (isBooked) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Scissors className="h-6 w-6 text-accent" />
              <span className="font-display text-xl font-bold text-primary">ThreadSync</span>
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16 max-w-lg text-center">
          <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-accent" />
          </div>
          <h1 className="font-display text-3xl font-bold text-primary mb-4">Booking Confirmed!</h1>
          <p className="text-muted-foreground mb-8">
            Your appointment with <strong>{selectedTailorData?.name}</strong> has been scheduled for{" "}
            <strong>{selectedDate?.toLocaleDateString()}</strong> at <strong>{selectedTime}</strong>.
          </p>
          <Card className="border-border/50 text-left mb-8">
            <CardContent className="p-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Service</span>
                <span className="font-medium">{selectedServiceData?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duration</span>
                <span className="font-medium">{selectedServiceData?.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Price</span>
                <span className="font-medium text-accent">{selectedServiceData?.price}</span>
              </div>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground mb-6">
            A confirmation email has been sent to <strong>{formData.email}</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/dashboard">
              <Button variant="gold">Go to Dashboard</Button>
            </Link>
            <Link to="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Scissors className="h-6 w-6 text-accent" />
            <span className="font-display text-xl font-bold text-primary">ThreadSync</span>
          </Link>
          <Link to="/tailors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Browse Tailors
          </Link>
        </div>
      </header>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <button
          onClick={() => step > 1 ? setStep(step - 1) : window.history.back()}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {step > 1 ? "Previous Step" : "Back"}
        </button>
      </div>

      <div className="container mx-auto px-4 pb-16 max-w-4xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-2">
          Book an Appointment
        </h1>
        <p className="text-muted-foreground text-center mb-8">
          Schedule your tailoring session in just a few steps
        </p>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm ${
                  step >= s
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div className={`w-16 h-1 mx-2 rounded ${step > s ? "bg-accent" : "bg-muted"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Select Tailor & Service */}
        {step === 1 && (
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-accent" />
                  Select Tailor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={selectedTailor} onValueChange={setSelectedTailor}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Choose a tailor" />
                  </SelectTrigger>
                  <SelectContent>
                    {tailorShops.map((tailor) => (
                      <SelectItem key={tailor.id} value={tailor.id}>
                        <div className="flex items-center gap-2">
                          <span>{tailor.name}</span>
                          <span className="text-muted-foreground text-sm">({tailor.city})</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {selectedTailorData && (
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <img
                        src={selectedTailorData.profileImage}
                        alt={selectedTailorData.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium">{selectedTailorData.name}</p>
                        <p className="text-sm text-muted-foreground">{selectedTailorData.city}</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scissors className="h-5 w-5 text-accent" />
                  Select Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`w-full p-4 rounded-lg border text-left transition-all ${
                      selectedService === service.id
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{service.name}</p>
                        <p className="text-sm text-muted-foreground">{service.duration}</p>
                      </div>
                      <span className="text-accent font-semibold">{service.price}</span>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            <div className="md:col-span-2 flex justify-end">
              <Button
                variant="gold"
                size="lg"
                disabled={!canProceedStep1}
                onClick={() => setStep(2)}
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Select Date & Time */}
        {step === 2 && (
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-accent" />
                  Select Date
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  Select Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                        selectedTime === time
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-border hover:border-accent/50"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="md:col-span-2 flex justify-between">
              <Button variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button
                variant="gold"
                size="lg"
                disabled={!canProceedStep2}
                onClick={() => setStep(3)}
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Details */}
        {step === 3 && (
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Your Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Any special requests or measurements..."
                    value={formData.notes}
                    onChange={handleChange}
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Tailor</span>
                    <span className="font-medium">{selectedTailorData?.name}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Service</span>
                    <span className="font-medium">{selectedServiceData?.name}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Date</span>
                    <span className="font-medium">{selectedDate?.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Time</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{selectedServiceData?.duration}</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="font-semibold">Estimated Price</span>
                    <span className="font-bold text-accent text-lg">{selectedServiceData?.price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="md:col-span-2 flex justify-between">
              <Button variant="outline" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button
                variant="gold"
                size="lg"
                disabled={!canProceedStep3 || isLoading}
                onClick={handleSubmit}
              >
                {isLoading ? "Confirming..." : "Confirm Booking"}
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ThreadSync. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Booking;
