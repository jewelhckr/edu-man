"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Mail, Phone } from "lucide-react"

const teachers = [
  { id: 1, name: "Prof. Anderson", subject: "Mathematics", phone: "+234 801 234 5678", status: "Active" },
  { id: 2, name: "Dr. Smith", subject: "English", phone: "+234 802 345 6789", status: "Active" },
  { id: 3, name: "Mrs. Johnson", subject: "Science", phone: "+234 803 456 7890", status: "Active" },
  { id: 4, name: "Mr. Williams", subject: "History", phone: "+234 804 567 8901", status: "Inactive" },
]

export function TeachersContent() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Teachers</h1>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
          <Plus className="w-5 h-5" />
          Add Teacher
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <Card key={teacher.id} className="border-0 shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mb-2">
                  {teacher.name[0]}
                </div>
                <h3 className="font-bold text-foreground text-lg">{teacher.name}</h3>
                <p className="text-sm text-primary font-medium">{teacher.subject}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  teacher.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
              >
                {teacher.status}
              </span>
            </div>
            <div className="space-y-2 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                {teacher.phone}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                {teacher.name.toLowerCase().replace(" ", ".")}@school.edu
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}