import { TrendingUp, Users, Star, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const monthlyData = [
  { month: "Jan", orders: 12, revenue: "₹18,000" },
  { month: "Feb", orders: 18, revenue: "₹24,500" },
  { month: "Mar", orders: 8, revenue: "₹14,500" },
];

const Reports = () => {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">View your performance reports and analytics.</p>

      {/* Key Metrics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Avg. Rating", value: "4.8", icon: Star, sub: "Based on 156 reviews" },
          { label: "Repeat Customers", value: "64%", icon: Users, sub: "Last 3 months" },
          { label: "Growth", value: "+18%", icon: TrendingUp, sub: "vs last month" },
          { label: "Avg. Delivery", value: "4.2 days", icon: Calendar, sub: "Order completion" },
        ].map((m) => (
          <Card key={m.label} className="border-border">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{m.label}</p>
                  <p className="text-2xl font-display font-bold text-foreground mt-1">{m.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{m.sub}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <m.icon className="w-5 h-5 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Monthly Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-lg">Monthly Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Month</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Orders</th>
                  <th className="text-right py-3 px-2 text-muted-foreground font-medium">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((row) => (
                  <tr key={row.month} className="border-b border-border last:border-0">
                    <td className="py-3 px-2 font-medium text-foreground">{row.month} 2026</td>
                    <td className="py-3 px-2 text-foreground">{row.orders}</td>
                    <td className="py-3 px-2 text-right font-medium text-foreground">{row.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Top Services */}
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-lg">Top Services</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { name: "Custom Suit", orders: 45, pct: 75 },
            { name: "Blouse Stitching", orders: 32, pct: 53 },
            { name: "Alteration", orders: 28, pct: 47 },
            { name: "Sherwani", orders: 15, pct: 25 },
          ].map((s) => (
            <div key={s.name}>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-foreground font-medium">{s.name}</span>
                <span className="text-muted-foreground">{s.orders} orders</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full transition-all" style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
