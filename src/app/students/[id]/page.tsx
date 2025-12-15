import { SidebarProvider } from "@/components/layout/sidebar-provider"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { StudentDetailContent } from "@/components/students/student-detail-content"

export default function StudentDetailPage({ params }: { params: { id: string } }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <Sidebar />
        <div className="md:ml-64 flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <StudentDetailContent id={params.id} />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}