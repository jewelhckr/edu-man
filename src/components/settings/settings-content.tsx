"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SettingsContent() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Settings</h1>

      <Tabs defaultValue="school" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-muted">
          <TabsTrigger value="school">School Profile</TabsTrigger>
          <TabsTrigger value="session">Term & Session</TabsTrigger>
          <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
        </TabsList>

        <TabsContent value="school" className="space-y-6">
          <Card className="border-0 shadow-md p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">School Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">School Name</label>
                <Input defaultValue="Pinnacle Educational Institute" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">School Email</label>
                <Input type="email" defaultValue="admin@pinnacle.edu" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <Input defaultValue="+234 701 234 5678" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Address</label>
                <Input defaultValue="123 Education Boulevard, Lagos, Nigeria" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Save Changes</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="session" className="space-y-6">
          <Card className="border-0 shadow-md p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">Academic Session</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Current Session</label>
                <Input defaultValue="2023/2024" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Current Term</label>
                <select title="term" className="w-full px-4 py-2 border border-border rounded-lg text-foreground bg-background">
                  <option>First Term</option>
                  <option>Second Term</option>
                  <option>Third Term</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Session Start Date</label>
                <Input type="date" defaultValue="2023-09-01" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Session End Date</label>
                <Input type="date" defaultValue="2024-07-31" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Update Session</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="roles" className="space-y-6">
          <Card className="border-0 shadow-md overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">User Roles & Permissions</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Role</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">View Students</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Edit Grades</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Manage Fees</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">System Admin</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { role: "Administrator", view: true, edit: true, fees: true, admin: true },
                    { role: "Teacher", view: true, edit: true, fees: false, admin: false },
                    { role: "Accountant", view: true, edit: false, fees: true, admin: false },
                    { role: "Principal", view: true, edit: true, fees: true, admin: true },
                  ].map((row) => (
                    <tr key={row.role} className="border-b border-border hover:bg-muted">
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{row.role}</td>
                      <td className="px-6 py-4 text-sm text-center">
                        <input title="view" type="checkbox" defaultChecked={row.view} />
                      </td>
                      <td className="px-6 py-4 text-sm text-center">
                        <input title="edit" type="checkbox" defaultChecked={row.edit} />
                      </td>
                      <td className="px-6 py-4 text-sm text-center">
                        <input title="fees" type="checkbox" defaultChecked={row.fees} />
                      </td>
                      <td className="px-6 py-4 text-sm text-center">
                        <input title="admin" type="checkbox" defaultChecked={row.admin} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}