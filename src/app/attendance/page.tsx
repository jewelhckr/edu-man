import { SidebarProvider } from "@/components/layout/sidebar-provider"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { AttendanceContent } from "@/components/attendance/attendance-content"

export default function AttendancePage() {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <Sidebar />
        <div className="md:ml-64 flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <AttendanceContent />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}