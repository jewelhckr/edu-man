"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const performanceData = [
  { month: "Jan", score: 78 },
  { month: "Feb", score: 82 },
  { month: "Mar", score: 85 },
  { month: "Apr", score: 88 },
  { month: "May", score: 91 },
]

const subjectsData = [
  { subject: "Mathematics", score: 91, grade: "A" },
  { subject: "English", score: 85, grade: "B" },
  { subject: "Science", score: 88, grade: "B+" },
  { subject: "History", score: 79, grade: "C" },
  { subject: "PE", score: 95, grade: "A+" },
]

const attendanceData = [
  { month: "Jan", percentage: 95 },
  { month: "Feb", percentage: 92 },
  { month: "Mar", percentage: 98 },
  { month: "Apr", percentage: 90 },
  { month: "May", percentage: 96 },
]

export function StudentDetailContent({ id }: { id: string }) {
  return (
    <div className="p-6 space-y-6">
      {/* Profile Header */}
      <Card className="border-0 shadow-md p-6">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 rounded-2xl bg-primary flex items-center justify-center text-3xl font-bold text-primary-foreground">
            JD
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground">John Doe</h1>
            <p className="text-sm text-muted-foreground mt-1">Student ID: STU-001234</p>
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div>
                <p className="text-xs text-muted-foreground">Class</p>
                <p className="font-semibold text-foreground">JS1-A</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Gender</p>
                <p className="font-semibold text-foreground">Male</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Date of Birth</p>
                <p className="font-semibold text-foreground">15 Jan 2009</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Status</p>
                <p className="font-semibold text-green-600">Active</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-muted">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="academics">Academics</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="fees">Fees</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card className="border-0 shadow-md p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Parent/Guardian Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-muted-foreground">Father's Name</p>
                <p className="font-semibold text-foreground">Robert Doe</p>
                <p className="text-sm text-muted-foreground mt-1">+234 801 234 5678</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Mother's Name</p>
                <p className="font-semibold text-foreground">Mary Doe</p>
                <p className="text-sm text-muted-foreground mt-1">+234 802 345 6789</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Address</p>
                <p className="font-semibold text-foreground">123 School Street, Lagos</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-semibold text-foreground">robert@example.com</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="academics" className="space-y-6">
          <Card className="border-0 shadow-md p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Academic Performance</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left px-4 py-2 text-sm font-semibold text-foreground">Subject</th>
                    <th className="text-left px-4 py-2 text-sm font-semibold text-foreground">Score</th>
                    <th className="text-left px-4 py-2 text-sm font-semibold text-foreground">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {subjectsData.map((subject) => (
                    <tr key={subject.subject} className="border-b border-border">
                      <td className="px-4 py-2 text-sm text-foreground">{subject.subject}</td>
                      <td className="px-4 py-2 text-sm font-semibold text-foreground">{subject.score}%</td>
                      <td className="px-4 py-2 text-sm">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded font-semibold">
                          {subject.grade}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="border-0 shadow-md p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Performance Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#4f46e5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </TabsContent>

        <TabsContent value="attendance" className="space-y-6">
          <Card className="border-0 shadow-md p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Attendance Rate</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Bar dataKey="percentage" fill="#4f46e5" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </TabsContent>

        <TabsContent value="fees" className="space-y-6">
          <Card className="border-0 shadow-md p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Fees Summary</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <span className="text-foreground font-medium">Tuition Fees</span>
                <span className="font-bold text-foreground">$5,000</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <span className="text-foreground font-medium">Paid Amount</span>
                <span className="font-bold text-green-600">$3,500</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                <span className="text-foreground font-medium">Outstanding</span>
                <span className="font-bold text-orange-600">$1,500</span>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}