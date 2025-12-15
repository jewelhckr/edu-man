"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const attendanceData = [
  { name: "Mon", present: 85, absent: 8, late: 2 },
  { name: "Tue", present: 88, absent: 7, late: 0 },
  { name: "Wed", present: 82, absent: 10, late: 3 },
  { name: "Thu", present: 90, absent: 5, late: 0 },
  { name: "Fri", present: 84, absent: 9, late: 2 },
]

const students = [
  { id: 1, name: "John Doe", present: true },
  { id: 2, name: "Jane Smith", present: true },
  { id: 3, name: "Mike Johnson", present: false },
  { id: 4, name: "Sarah Williams", present: true },
  { id: 5, name: "Alex Brown", present: true },
]

export function AttendanceContent() {
  const [selectedClass, setSelectedClass] = useState("JS1-A")
  const [attendance, setAttendance] = useState(
    students.reduce(
      (acc, student) => ({
        ...acc,
        [student.id]: student.present,
      }),
      {} as Record<number, boolean>,
    ),
  )

  const toggleAttendance = (id: number) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const presentCount = Object.values(attendance).filter(Boolean).length
  const absentCount = students.length - presentCount

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Attendance Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-0 shadow-md p-6">
          <label className="block text-sm font-medium text-foreground mb-2">Date</label>
          <Input type="date" className="w-full" />
        </Card>
        <Card className="border-0 shadow-md p-6">
          <label className="block text-sm font-medium text-foreground mb-2">Class</label>
          <select 
          title="classname"
            value={selectedClass} 
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg text-foreground bg-background"
          >
            <option>JS1-A</option>
            <option>JS1-B</option>
            <option>JS2-A</option>
          </select>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-md p-6">
          <p className="text-sm text-muted-foreground mb-1">Present</p>
          <p className="text-3xl font-bold text-green-600">{presentCount}</p>
        </Card>
        <Card className="border-0 shadow-md p-6">
          <p className="text-sm text-muted-foreground mb-1">Absent</p>
          <p className="text-3xl font-bold text-red-600">{absentCount}</p>
        </Card>
        <Card className="border-0 shadow-md p-6">
          <p className="text-sm text-muted-foreground mb-1">Rate</p>
          <p className="text-3xl font-bold text-blue-600">{Math.round((presentCount / students.length) * 100)}%</p>
        </Card>
      </div>

      <Card className="border-0 shadow-md p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Mark Attendance</h3>
        <div className="space-y-2">
          {students.map((student) => (
            <div key={student.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <span className="text-foreground font-medium">{student.name}</span>
              <button
                onClick={() => toggleAttendance(student.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  attendance[student.id] ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
              >
                {attendance[student.id] ? "Present" : "Absent"}
              </button>
            </div>
          ))}
        </div>
        <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">Save Attendance</Button>
      </Card>

      <Card className="border-0 shadow-md p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Weekly Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Bar dataKey="present" fill="#22c55e" />
            <Bar dataKey="absent" fill="#ef4444" />
            <Bar dataKey="late" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}