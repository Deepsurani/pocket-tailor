import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
}

const mockServices: Service[] = [
  { id: "1", name: "Custom Suit", description: "Full custom suit tailoring with premium fabric", price: "4500", duration: "7 days" },
  { id: "2", name: "Blouse Stitching", description: "Custom blouse with designer patterns", price: "1200", duration: "3 days" },
  { id: "3", name: "Alteration", description: "Garment alteration and fitting adjustments", price: "500", duration: "1 day" },
];

const CreateServices = () => {
  const [services, setServices] = useState<Service[]>(mockServices);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", description: "", price: "", duration: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.price) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }

    if (editingId) {
      setServices(prev => prev.map(s => s.id === editingId ? { ...s, ...form } : s));
      toast({ title: "Service updated successfully" });
    } else {
      setServices(prev => [...prev, { ...form, id: Date.now().toString() }]);
      toast({ title: "Service created successfully" });
    }
    resetForm();
  };

  const resetForm = () => {
    setForm({ name: "", description: "", price: "", duration: "" });
    setShowForm(false);
    setEditingId(null);
  };

  const handleEdit = (service: Service) => {
    setForm({ name: service.name, description: service.description, price: service.price, duration: service.duration });
    setEditingId(service.id);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setServices(prev => prev.filter(s => s.id !== id));
    toast({ title: "Service deleted" });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">Manage the services you offer to customers.</p>
        <Button onClick={() => { resetForm(); setShowForm(true); }} className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Plus className="w-4 h-4 mr-2" /> Add Service
        </Button>
      </div>

      {/* Form */}
      {showForm && (
        <Card className="border-accent/30">
          <CardHeader>
            <CardTitle className="font-display text-lg">{editingId ? "Edit Service" : "New Service"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Service Name *</Label>
                <Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. Custom Suit" />
              </div>
              <div className="space-y-2">
                <Label>Price (₹) *</Label>
                <Input type="number" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} placeholder="e.g. 4500" />
              </div>
              <div className="space-y-2">
                <Label>Duration</Label>
                <Input value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })} placeholder="e.g. 7 days" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label>Description</Label>
                <Textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Describe the service..." rows={3} />
              </div>
              <div className="sm:col-span-2 flex gap-3">
                <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  {editingId ? "Update" : "Create"} Service
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Services List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Card key={service.id} className="border-border">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-semibold text-foreground">{service.name}</h3>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleEdit(service)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => handleDelete(service.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="font-bold text-foreground">₹{service.price}</span>
                <span className="text-muted-foreground">{service.duration}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CreateServices;
