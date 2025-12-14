/**
 * Services Management Page
 * Add, edit, and delete services
 */

"use client"

import { useState } from "react"
import AdminHeader from "@/components/admin/header"
import AdminSidebar from "@/components/admin/sidebar"
import { Plus, Trash2, Edit2 } from "lucide-react"

interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export default function ServicesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [services, setServices] = useState<Service[]>([
    { id: "1", title: "Web Development", description: "Cutting-edge web solutions", icon: "Code" },
    { id: "2", title: "AI & Automation", description: "Intelligent automation systems", icon: "Brain" },
    { id: "3", title: "Cybersecurity", description: "Enterprise security solutions", icon: "Shield" },
  ])
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [newService, setNewService] = useState({ title: "", description: "", icon: "" })

  const handleAdd = () => {
    if (newService.title && newService.description) {
      setServices([...services, { id: Date.now().toString(), ...newService }])
      setNewService({ title: "", description: "", icon: "" })
      setIsAddingNew(false)
    }
  }

  const handleDelete = (id: string) => {
    setServices(services.filter((item) => item.id !== id))
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
                <h1 className="text-4xl font-bold text-primary">Services Management</h1>
                <p className="text-foreground/70 mt-2">Manage your service offerings</p>
              </div>
              <button
                onClick={() => setIsAddingNew(true)}
                className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                <Plus size={20} />
                Add Service
              </button>
            </div>

            {isAddingNew && (
              <div className="bg-white rounded-xl border border-border p-6 space-y-4">
                <h2 className="text-xl font-bold text-primary">Add New Service</h2>
                <input
                  type="text"
                  placeholder="Service Title"
                  value={newService.title}
                  onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <textarea
                  placeholder="Service Description"
                  value={newService.description}
                  onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  rows={3}
                />
                <input
                  type="text"
                  placeholder="Icon Name"
                  value={newService.icon}
                  onChange={(e) => setNewService({ ...newService, icon: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <div className="flex gap-3">
                  <button
                    onClick={handleAdd}
                    className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Add Service
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-sm font-semibold text-accent">{service.icon.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4">{service.description}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors text-sm font-medium">
                      <Edit2 size={16} />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(service.id)}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-destructive/10 text-destructive rounded-lg hover:bg-destructive/20 transition-colors text-sm font-medium"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
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
