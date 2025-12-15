import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { StudentsContent } from "@/components/students/students-content"

export default function StudentsPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="md:ml-64 flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <StudentsContent />
        </main>
      </div>
    </div>
  )
}