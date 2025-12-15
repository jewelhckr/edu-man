"use client"

import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const feesData = [
  { month: "Jan", paid: 45000, pending: 8000 },
  { month: "Feb", paid: 52000, pending: 5000 },
  { month: "Mar", paid: 48000, pending: 9000 },
  { month: "Apr", paid: 61000, pending: 4000 },
  { month: "May", paid: 55000, pending: 6000 },
]

const studentFees = [
  { id: 1, student: "John Doe", total: 5000, paid: 3500, outstanding: 1500, status: "Partial" },
  { id: 2, student: "Jane Smith", total: 5000, paid: 5000, outstanding: 0, status: "Paid" },
  { id: 3, student: "Mike Johnson", total: 5000, paid: 0, outstanding: 5000, status: "Pending" },
  { id: 4, student: "Sarah Williams", total: 5000, paid: 2500, outstanding: 2500, status: "Partial" },
]

const transactions = [
  { id: 1, student: "Jane Smith", amount: 5000, date: "2024-11-20", method: "Bank Transfer" },
  { id: 2, student: "Sarah Williams", amount: 2500, date: "2024-11-18", method: "Cash" },
  { id: 3, student: "John Doe", amount: 1500, date: "2024-11-15", method: "Card" },
]

export function FeesContent() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Fees Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-md p-6">
          <p className="text-sm text-muted-foreground mb-1">Total Fees</p>
          <p className="text-3xl font-bold text-foreground">$261,000</p>
        </Card>
        <Card className="border-0 shadow-md p-6">
          <p className="text-sm text-muted-foreground mb-1">Total Paid</p>
          <p className="text-3xl font-bold text-green-600">$213,000</p>
        </Card>
        <Card className="border-0 shadow-md p-6">
          <p className="text-sm text-muted-foreground mb-1">Outstanding</p>
          <p className="text-3xl font-bold text-orange-600">$48,000</p>
        </Card>
      </div>

      <Card className="border-0 shadow-md p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Monthly Collection</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={feesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Bar dataKey="paid" fill="#22c55e" />
            <Bar dataKey="pending" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card className="border-0 shadow-md overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">Student Payment Status</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Student</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Total</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Paid</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Outstanding</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {studentFees.map((fee) => (
                <tr key={fee.id} className="border-b border-border hover:bg-muted transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{fee.student}</td>
                  <td className="px-6 py-4 text-sm text-foreground">${fee.total}</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-semibold">${fee.paid}</td>
                  <td className="px-6 py-4 text-sm text-orange-600 font-semibold">${fee.outstanding}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        fee.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : fee.status === "Partial"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {fee.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="border-0 shadow-md overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">Recent Transactions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Student</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Amount</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Date</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Method</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-border hover:bg-muted transition-colors">
                  <td className="px-6 py-4 text-sm text-foreground">{transaction.student}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-green-600">${transaction.amount}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{transaction.date}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{transaction.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}