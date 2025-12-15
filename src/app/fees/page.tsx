import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { FeesContent } from "@/components/fees/fees-content"

export default function FeesPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="md:ml-64 flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <FeesContent />
        </main>
      </div>
    </div>
  )
}
