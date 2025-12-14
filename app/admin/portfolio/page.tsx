/**
 * Portfolio Management Page
 * Add, edit, and delete portfolio projects
 */

"use client"

import { useState } from "react"
import AdminHeader from "@/components/admin/header"
import AdminSidebar from "@/components/admin/sidebar"
import { Plus, Trash2, Edit2 } from "lucide-react"

interface PortfolioItem {
  id: string
  title: string
  description: string
  image: string
  link: string
}

export default function PortfolioPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([
    {
      id: "1",
      title: "E-commerce Platform",
      description: "Modern shopping experience",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      id: "2",
      title: "AI Analytics Dashboard",
      description: "Real-time data insights",
      image: "/placeholder.svg",
      link: "#",
    },
  ])
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [newItem, setNewItem] = useState({ title: "", description: "", image: "", link: "" })

  const handleAdd = () => {
    if (newItem.title && newItem.description) {
      setPortfolio([...portfolio, { id: Date.now().toString(), ...newItem }])
      setNewItem({ title: "", description: "", image: "", link: "" })
      setIsAddingNew(false)
    }
  }

  const handleDelete = (id: string) => {
    setPortfolio(portfolio.filter((item) => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader user={{ id: "1", email: "admin@kushirax.com", name: "Admin", role: "Admin" }} onLogout={() => {}} />

      <div className="flex gap-0">
        <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-0"} p-8 pt-24`}>
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold text-primary">Portfolio Management</h1>
                <p className="text-foreground/70 mt-2">Manage your project showcase</p>
              </div>
              <button
                onClick={() => setIsAddingNew(true)}
                className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                <Plus size={20} />
                Add Project
              </button>
            </div>

            {isAddingNew && (
              <div className="bg-white rounded-xl border border-border p-6 space-y-4">
                <h2 className="text-xl font-bold text-primary">Add New Project</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Project Title"
                    value={newItem.title}
                    onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="text"
                    placeholder="Project Link"
                    value={newItem.link}
                    onChange={(e) => setNewItem({ ...newItem, link: e.target.value })}
                    className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <textarea
                  placeholder="Project Description"
                  value={newItem.description}
                  onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  rows={3}
                />
                <div className="flex gap-3">
                  <button
                    onClick={handleAdd}
                    className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Add Project
                  </button>
                  <button
                    onClick={() => setIsAddingNew(false)}
                    className="px-6 py-2 border border-border rounded-lg font-semibold hover:bg-background transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              {portfolio.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all group"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm text-foreground/50">Project Image</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                      <p className="text-foreground/70 text-sm mt-2">{item.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors">
                        <Edit2 size={18} />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-destructive/10 text-destructive rounded-lg hover:bg-destructive/20 transition-colors"
                      >
                        <Trash2 size={18} />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
