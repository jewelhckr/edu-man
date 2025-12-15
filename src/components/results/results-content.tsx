"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Upload } from "lucide-react"

const results = [
  { id: 1, student: "John Doe", class: "JS1-A", math: 85, english: 78, science: 82, average: 81.7 },
  { id: 2, student: "Jane Smith", class: "JS1-B", math: 92, english: 88, science: 90, average: 90 },
  { id: 3, student: "Mike Johnson", class: "JS2-A", math: 76, english: 82, science: 79, average: 79 },
]

export function ResultsContent() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Student Results</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Download className="w-5 h-5" />
            Download CSV
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            <Upload className="w-5 h-5" />
            Upload CSV
          </Button>
        </div>
      </div>

      <Card className="border-0 shadow-md p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Upload Results</h3>
        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
          <p className="text-foreground font-medium mb-2">Drag and drop CSV file or click to select</p>
          <p className="text-sm text-muted-foreground mb-4">Supported format: .csv</p>
          <Button variant="outline">Select File</Button>
        </div>
      </Card>

      <Card className="border-0 shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Student</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Class</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Math</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">English</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Science</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Average</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => (
                <tr key={result.id} className="border-b border-border hover:bg-muted transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{result.student}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{result.class}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{result.math}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{result.english}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{result.science}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-foreground">{result.average.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}