import { useState } from "react";
import { Eye, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockOrders = [
  { id: "ORD-001", customer: "Rahul Sharma", service: "Custom Suit", date: "2026-03-01", status: "in_progress", amount: "₹4,500", phone: "9876543210" },
  { id: "ORD-002", customer: "Priya Patel", service: "Blouse Stitching", date: "2026-03-03", status: "pending", amount: "₹1,200", phone: "9876543211" },
  { id: "ORD-003", customer: "Amit Kumar", service: "Alteration", date: "2026-02-28", status: "completed", amount: "₹800", phone: "9876543212" },
  { id: "ORD-004", customer: "Sneha Reddy", service: "Lehenga", date: "2026-03-05", status: "pending", amount: "₹8,000", phone: "9876543213" },
  { id: "ORD-005", customer: "Vikram Singh", service: "Sherwani", date: "2026-02-25", status: "completed", amount: "₹6,500", phone: "9876543214" },
];

const statusConfig: Record<string, { label: string; icon: typeof Clock; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  pending: { label: "Pending", icon: AlertCircle, variant: "outline" },
  in_progress: { label: "In Progress", icon: Clock, variant: "secondary" },
  completed: { label: "Completed", icon: CheckCircle, variant: "default" },
};

const OrdersBooking = () => {
  const [filter, setFilter] = useState("all");

  const filteredOrders = filter === "all" ? mockOrders : mockOrders.filter(o => o.status === filter);

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">View and manage customer orders and bookings.</p>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {["all", "pending", "in_progress", "completed"].map((f) => (
          <Button
            key={f}
            variant={filter === f ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(f)}
            className={filter === f ? "bg-accent text-accent-foreground" : ""}
          >
            {f === "all" ? "All" : f === "in_progress" ? "In Progress" : f.charAt(0).toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </div>

      {/* Orders */}
      <div className="space-y-3">
        {filteredOrders.map((order) => {
          const config = statusConfig[order.status];
          return (
            <Card key={order.id} className="border-border">
              <CardContent className="p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display font-semibold text-foreground">{order.id}</span>
                      <Badge variant={config.variant}>{config.label}</Badge>
                    </div>
                    <p className="text-sm text-foreground">{order.customer} — <span className="text-muted-foreground">{order.service}</span></p>
                    <p className="text-xs text-muted-foreground mt-1">Booked: {order.date} · Phone: {order.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-display font-bold text-foreground">{order.amount}</span>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-1" /> View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredOrders.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">No orders found for this filter.</div>
      )}
    </div>
  );
};

export default OrdersBooking;
