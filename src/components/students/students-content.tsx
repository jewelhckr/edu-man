"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const students = [
  { id: 1, name: "John Doe", class: "JS1", gender: "Male", status: "Active" },
  { id: 2, name: "Jane Smith", class: "JS2", gender: "Female", status: "Active" },
  { id: 3, name: "Mike Johnson", class: "SS1", gender: "Male", status: "Active" },
  { id: 4, name: "Sarah Williams", class: "JS1", gender: "Female", status: "Inactive" },
  { id: 5, name: "Alex Brown", class: "SS2", gender: "Male", status: "Active" },
]

export function StudentsContent() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.class.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Students</h1>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
          <Plus className="w-5 h-5" />
          Add Student
        </Button>
      </div>

      <Card className="border-0 shadow-md p-4">
        <div className="flex items-center gap-2 bg-input px-4 py-2 rounded-lg">
          <Search className="w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search students or class..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-0 bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>
      </Card>

      <Card className="border-0 shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Name</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Class</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Gender</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Status</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="border-b border-border hover:bg-muted transition-colors">
                  <td className="px-6 py-4 text-sm text-foreground font-medium">{student.name}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{student.class}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{student.gender}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        student.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <Link href={`/students/${student.id}`}>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}