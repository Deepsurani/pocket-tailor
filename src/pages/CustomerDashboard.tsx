import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { 
  User, 
  Package, 
  ShoppingBag, 
  Ruler, 
  Home,
  Plus,
  Clock,
  CheckCircle,
  Truck,
  Scissors,
  ChevronRight
} from "lucide-react";

// Mock data
const mockOrders = [
  {
    id: "ORD-001",
    service: "Custom Suit",
    tailor: "Ahmed Hassan",
    status: "in_progress",
    date: "2024-01-15",
    estimatedDelivery: "2024-01-28",
    price: 450,
  },
  {
    id: "ORD-002",
    service: "Shirt Alteration",
    tailor: "Sara Ali",
    status: "completed",
    date: "2024-01-10",
    estimatedDelivery: "2024-01-14",
    price: 35,
  },
  {
    id: "ORD-003",
    service: "Traditional Dress",
    tailor: "Fatima Khan",
    status: "pending",
    date: "2024-01-18",
    estimatedDelivery: "2024-02-01",
    price: 280,
  },
];

const mockFabrics = [
  { id: 1, name: "Premium Cotton", price: 45, color: "White", image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=200" },
  { id: 2, name: "Italian Wool", price: 120, color: "Navy Blue", image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=200" },
  { id: 3, name: "Silk Blend", price: 85, color: "Cream", image: "https://images.unsplash.com/photo-1528459105426-b9548367069b?w=200" },
  { id: 4, name: "Linen", price: 55, color: "Beige", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200" },
  { id: 5, name: "Cashmere", price: 200, color: "Charcoal", image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=200" },
  { id: 6, name: "Tweed", price: 95, color: "Brown", image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=200" },
];

const savedMeasurements = {
  chest: "40",
  waist: "32",
  hips: "38",
  shoulders: "18",
  sleeveLength: "25",
  inseam: "32",
  neck: "15.5",
  height: "5'10\"",
};

const getStatusBadge = (status: string) => {
  const styles = {
    pending: "bg-accent/20 text-accent-foreground border-accent/30",
    in_progress: "bg-primary/10 text-primary border-primary/20",
    completed: "bg-primary/20 text-primary border-primary/30",
    delivered: "bg-secondary text-secondary-foreground border-border",
  };
  const labels = {
    pending: "Pending",
    in_progress: "In Progress",
    completed: "Completed",
    delivered: "Delivered",
  };
  return (
    <Badge variant="outline" className={styles[status as keyof typeof styles]}>
      {labels[status as keyof typeof labels]}
    </Badge>
  );
};

const getStatusIcon = (status: string) => {
  const icons = {
    pending: <Clock className="h-5 w-5 text-accent" />,
    in_progress: <Scissors className="h-5 w-5 text-primary" />,
    completed: <CheckCircle className="h-5 w-5 text-primary" />,
    delivered: <Truck className="h-5 w-5 text-muted-foreground" />,
  };
  return icons[status as keyof typeof icons];
};

const CustomerDashboard = () => {
  const [selectedFabric, setSelectedFabric] = useState<number | null>(null);
  const [measurements, setMeasurements] = useState(savedMeasurements);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-navy flex items-center justify-center">
                <Scissors className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold font-serif text-primary">Pocket Tailor</span>
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </Button>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-serif text-primary mb-2">Welcome back, John</h1>
          <p className="text-muted-foreground">Manage your orders, measurements, and preferences</p>
        </div>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="orders" className="gap-2">
              <Package className="h-4 w-4" />
              <span className="hidden sm:inline">My Orders</span>
            </TabsTrigger>
            <TabsTrigger value="new-order" className="gap-2">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">New Order</span>
            </TabsTrigger>
            <TabsTrigger value="fabrics" className="gap-2">
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Fabrics</span>
            </TabsTrigger>
            <TabsTrigger value="measurements" className="gap-2">
              <Ruler className="h-4 w-4" />
              <span className="hidden sm:inline">Measurements</span>
            </TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold font-serif">Your Orders</h2>
              <Button variant="gold" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Order
              </Button>
            </div>
            
            <div className="grid gap-4">
              {mockOrders.map((order) => (
                <Card key={order.id} className="hover:shadow-elevated transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-secondary">
                          {getStatusIcon(order.status)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{order.service}</h3>
                            {getStatusBadge(order.status)}
                          </div>
                          <p className="text-sm text-muted-foreground">Order #{order.id}</p>
                          <p className="text-sm text-muted-foreground">Tailor: {order.tailor}</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <p className="text-lg font-semibold text-primary">${order.price}</p>
                        <p className="text-sm text-muted-foreground">
                          Est. Delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}
                        </p>
                        <Button variant="outline" size="sm">
                          View Details
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* New Order Tab */}
          <TabsContent value="new-order" className="space-y-6">
            <h2 className="text-2xl font-semibold font-serif">Place New Order</h2>
            
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Service Details</CardTitle>
                  <CardDescription>Select the type of service you need</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="custom-suit">Custom Suit</SelectItem>
                        <SelectItem value="custom-shirt">Custom Shirt</SelectItem>
                        <SelectItem value="traditional">Traditional Dress</SelectItem>
                        <SelectItem value="alteration">Alteration</SelectItem>
                        <SelectItem value="repair">Repair & Stitching</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tailor">Preferred Tailor</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a tailor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ahmed">Ahmed Hassan - ★ 4.9</SelectItem>
                        <SelectItem value="sara">Sara Ali - ★ 4.8</SelectItem>
                        <SelectItem value="fatima">Fatima Khan - ★ 4.7</SelectItem>
                        <SelectItem value="any">Any Available Tailor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fabric">Selected Fabric</Label>
                    <Input 
                      id="fabric" 
                      value={selectedFabric ? mockFabrics.find(f => f.id === selectedFabric)?.name : ""} 
                      placeholder="Select from Fabrics tab" 
                      readOnly 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Special Instructions</Label>
                    <Textarea 
                      id="notes" 
                      placeholder="Any specific requirements or preferences..."
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pickup & Delivery</CardTitle>
                  <CardDescription>Schedule your pickup and delivery</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickup-date">Preferred Pickup Date</Label>
                    <Input type="date" id="pickup-date" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pickup-time">Preferred Time Slot</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                        <SelectItem value="evening">Evening (4 PM - 8 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Pickup/Delivery Address</Label>
                    <Textarea 
                      id="address" 
                      placeholder="Enter your full address..."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Contact Number</Label>
                    <Input type="tel" id="phone" placeholder="+1 (555) 000-0000" />
                  </div>

                  <Button variant="gold" className="w-full mt-4" size="lg">
                    Place Order
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Fabrics Tab */}
          <TabsContent value="fabrics" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold font-serif">Fabric Collection</h2>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Fabrics</SelectItem>
                  <SelectItem value="cotton">Cotton</SelectItem>
                  <SelectItem value="wool">Wool</SelectItem>
                  <SelectItem value="silk">Silk</SelectItem>
                  <SelectItem value="linen">Linen</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {mockFabrics.map((fabric) => (
                <Card 
                  key={fabric.id} 
                  className={`cursor-pointer transition-all hover:shadow-elevated ${
                    selectedFabric === fabric.id ? 'ring-2 ring-accent shadow-gold' : ''
                  }`}
                  onClick={() => setSelectedFabric(fabric.id)}
                >
                  <CardContent className="p-0">
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img 
                        src={fabric.image} 
                        alt={fabric.name}
                        className="w-full h-full object-cover"
                      />
                      {selectedFabric === fabric.id && (
                        <div className="absolute top-2 right-2">
                          <CheckCircle className="h-6 w-6 text-accent fill-white" />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{fabric.name}</h3>
                        <Badge variant="secondary">{fabric.color}</Badge>
                      </div>
                      <p className="text-lg font-bold text-primary">${fabric.price}/yard</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Measurements Tab */}
          <TabsContent value="measurements" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold font-serif">Your Measurements</h2>
              <Button variant="outline">
                <Ruler className="h-4 w-4 mr-2" />
                Measurement Guide
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Saved Measurements</CardTitle>
                <CardDescription>
                  Keep your measurements updated for accurate tailoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-2">
                    <Label htmlFor="chest">Chest (inches)</Label>
                    <Input 
                      id="chest" 
                      value={measurements.chest}
                      onChange={(e) => setMeasurements({...measurements, chest: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="waist">Waist (inches)</Label>
                    <Input 
                      id="waist" 
                      value={measurements.waist}
                      onChange={(e) => setMeasurements({...measurements, waist: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hips">Hips (inches)</Label>
                    <Input 
                      id="hips" 
                      value={measurements.hips}
                      onChange={(e) => setMeasurements({...measurements, hips: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="shoulders">Shoulders (inches)</Label>
                    <Input 
                      id="shoulders" 
                      value={measurements.shoulders}
                      onChange={(e) => setMeasurements({...measurements, shoulders: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sleeveLength">Sleeve Length (inches)</Label>
                    <Input 
                      id="sleeveLength" 
                      value={measurements.sleeveLength}
                      onChange={(e) => setMeasurements({...measurements, sleeveLength: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inseam">Inseam (inches)</Label>
                    <Input 
                      id="inseam" 
                      value={measurements.inseam}
                      onChange={(e) => setMeasurements({...measurements, inseam: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="neck">Neck (inches)</Label>
                    <Input 
                      id="neck" 
                      value={measurements.neck}
                      onChange={(e) => setMeasurements({...measurements, neck: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height</Label>
                    <Input 
                      id="height" 
                      value={measurements.height}
                      onChange={(e) => setMeasurements({...measurements, height: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <Button variant="gold">
                    Save Measurements
                  </Button>
                  <Button variant="outline">
                    Reset to Saved
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default CustomerDashboard;
