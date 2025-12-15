import { SidebarProvider } from "@/components/layout/sidebar-provider"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { TeachersContent } from "@/components/teachers/teachers-content"

export default function TeachersPage() {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <Sidebar />
        <div className="md:ml-64 flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <TeachersContent />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}