"use client"

import { Card } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Users, TrendingUp, Calendar, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

const attendanceData = [
  { month: "Jan", attendance: 85 },
  { month: "Feb", attendance: 88 },
  { month: "Mar", attendance: 92 },
  { month: "Apr", attendance: 90 },
  { month: "May", attendance: 94 },
  { month: "Jun", attendance: 91 },
]

const performanceData = [
  { name: "A", value: 35 },
  { name: "B", value: 45 },
  { name: "C", value: 15 },
  { name: "D", value: 5 },
]

const COLORS = ["#4f46e5", "#3b82f6", "#1e40af", "#1e3a8a"]

const kpiData = [
  { title: "Total Students", value: "1,234", icon: Users, color: "bg-blue-100 text-blue-600" },
  { title: "Total Teachers", value: "87", icon: TrendingUp, color: "bg-purple-100 text-purple-600" },
  { title: "Attendance Rate", value: "91%", icon: Calendar, color: "bg-green-100 text-green-600" },
  { title: "Pending Fees", value: "$24,500", icon: DollarSign, color: "bg-orange-100 text-orange-600" },
]

const recentActivities = [
  { id: 1, student: "John Doe", action: "Enrolled in JS1", date: "2 hours ago" },
  { id: 2, student: "Jane Smith", action: "Submitted assignment", date: "4 hours ago" },
  { id: 3, student: "Mike Johnson", action: "Paid tuition fees", date: "6 hours ago" },
  { id: 4, student: "Sarah Williams", action: "Absent today", date: "8 hours ago" },
]

export function DashboardContent() {
  return (
    <div className="p-6 space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi) => {
          const Icon = kpi.icon
          return (
            <Card key={kpi.title} className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{kpi.title}</p>
                  <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${kpi.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 border-0 shadow-md">
          <h3 className="text-lg font-semibold text-foreground mb-4">Attendance Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Line type="monotone" dataKey="attendance" stroke="#4f46e5" strokeWidth={2} dot={{ fill: "#4f46e5" }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 border-0 shadow-md">
          <h3 className="text-lg font-semibold text-foreground mb-4">Student Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={performanceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {performanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card className="border-0 shadow-md">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Recent Activities</h3>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Student</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Action</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentActivities.map((activity) => (
                <tr key={activity.id} className="border-b border-border hover:bg-muted transition-colors">
                  <td className="px-6 py-4 text-sm text-foreground">{activity.student}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{activity.action}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{activity.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}