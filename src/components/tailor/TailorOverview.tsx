import { Scissors, ShoppingBag, CreditCard, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { label: "Total Services", value: "12", icon: Scissors, change: "+2 this month" },
  { label: "Active Orders", value: "8", icon: ShoppingBag, change: "3 pending" },
  { label: "Revenue", value: "₹24,500", icon: CreditCard, change: "+18% vs last month" },
  { label: "Completed", value: "156", icon: TrendingUp, change: "All time" },
];

const recentOrders = [
  { id: "ORD-001", customer: "Rahul Sharma", service: "Custom Suit", status: "In Progress", amount: "₹4,500" },
  { id: "ORD-002", customer: "Priya Patel", service: "Blouse Stitching", status: "Pending", amount: "₹1,200" },
  { id: "ORD-003", customer: "Amit Kumar", service: "Alteration", status: "Completed", amount: "₹800" },
];

const TailorOverview = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-border">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-display font-bold text-foreground mt-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-lg">Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Order ID</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Customer</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Service</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Status</th>
                  <th className="text-right py-3 px-2 text-muted-foreground font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border last:border-0">
                    <td className="py-3 px-2 font-medium text-foreground">{order.id}</td>
                    <td className="py-3 px-2 text-foreground">{order.customer}</td>
                    <td className="py-3 px-2 text-muted-foreground">{order.service}</td>
                    <td className="py-3 px-2">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                        order.status === "Completed" ? "bg-green-100 text-green-700" :
                        order.status === "In Progress" ? "bg-blue-100 text-blue-700" :
                        "bg-yellow-100 text-yellow-700"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-right font-medium text-foreground">{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TailorOverview;
