"use client"

import { Card } from "@/components/ui/card"
import { Users, BookOpen } from "lucide-react"

const classes = [
  { id: 1, name: "JS1-A", students: 45, teacher: "Prof. Anderson" },
  { id: 2, name: "JS1-B", students: 42, teacher: "Mrs. Johnson" },
  { id: 3, name: "JS2-A", students: 48, teacher: "Dr. Smith" },
  { id: 4, name: "JS2-B", students: 44, teacher: "Mr. Williams" },
  { id: 5, name: "SS1-A", students: 50, teacher: "Prof. Anderson" },
  { id: 6, name: "SS1-B", students: 46, teacher: "Dr. Smith" },
]

export function ClassesContent() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Classes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls) => (
          <Card
            key={cls.id}
            className="border-0 shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer hover:border-primary border-2"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{cls.name}</h3>
                <p className="text-sm text-muted-foreground">Class Details</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Total Students</span>
                </div>
                <span className="font-bold text-foreground">{cls.students}</span>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Class Teacher</p>
                <p className="font-semibold text-foreground">{cls.teacher}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}