import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { ClassesContent } from "@/components/classes/classes-content"

export default function ClassesPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="md:ml-64 flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <ClassesContent />
        </main>
      </div>
    </div>
  )
}
