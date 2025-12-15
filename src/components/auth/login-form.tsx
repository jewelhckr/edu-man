"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { BookOpen } from "lucide-react"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate login
    setTimeout(() => {
      window.location.href = "/dashboard"
    }, 500)
  }

  return (
    <Card className="p-8 shadow-2xl border-0">
      <div className="flex flex-col items-center gap-2 mb-8">
        <div className="bg-primary p-3 rounded-2xl">
          <BookOpen className="w-8 h-8 text-primary-foreground" />
        </div>
        <h1 className="text-3xl font-bold text-foreground">Edu-Man</h1>
        <p className="text-sm text-muted-foreground">School Management System</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
          <Input
            type="email"
            placeholder="admin@school.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Password</label>
          <Input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </Button>
      </form>

      <div className="mt-6 pt-6 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">Demo credentials available on request</p>
      </div>
    </Card>
  )
}