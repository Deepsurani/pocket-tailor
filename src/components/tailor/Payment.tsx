import { IndianRupee, ArrowUpRight, ArrowDownRight, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const transactions = [
  { id: "TXN-001", customer: "Rahul Sharma", type: "credit", amount: "₹4,500", date: "2026-03-01", method: "UPI" },
  { id: "TXN-002", customer: "Priya Patel", type: "credit", amount: "₹1,200", date: "2026-03-03", method: "Cash" },
  { id: "TXN-003", customer: "Platform Fee", type: "debit", amount: "₹570", date: "2026-03-05", method: "Auto" },
  { id: "TXN-004", customer: "Amit Kumar", type: "credit", amount: "₹800", date: "2026-02-28", method: "Card" },
  { id: "TXN-005", customer: "Sneha Reddy", type: "credit", amount: "₹8,000", date: "2026-03-05", method: "UPI" },
];

const Payment = () => {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">Track your earnings and payment history.</p>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="border-border">
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <IndianRupee className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Earnings</p>
                <p className="text-xl font-display font-bold text-foreground">₹24,500</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending Payout</p>
                <p className="text-xl font-display font-bold text-foreground">₹9,200</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <ArrowDownRight className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Platform Fees</p>
                <p className="text-xl font-display font-bold text-foreground">₹1,470</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transactions */}
      <Card>
        <CardHeader>
          <CardTitle className="font-display text-lg">Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">ID</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Description</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Date</th>
                  <th className="text-left py-3 px-2 text-muted-foreground font-medium">Method</th>
                  <th className="text-right py-3 px-2 text-muted-foreground font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn) => (
                  <tr key={txn.id} className="border-b border-border last:border-0">
                    <td className="py-3 px-2 font-medium text-foreground">{txn.id}</td>
                    <td className="py-3 px-2 text-foreground flex items-center gap-1.5">
                      {txn.type === "credit" ? (
                        <ArrowUpRight className="w-4 h-4 text-green-500" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 text-red-500" />
                      )}
                      {txn.customer}
                    </td>
                    <td className="py-3 px-2 text-muted-foreground">{txn.date}</td>
                    <td className="py-3 px-2 text-muted-foreground">{txn.method}</td>
                    <td className={`py-3 px-2 text-right font-medium ${txn.type === "credit" ? "text-green-600" : "text-red-600"}`}>
                      {txn.type === "credit" ? "+" : "-"}{txn.amount}
                    </td>
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

export default Payment;
