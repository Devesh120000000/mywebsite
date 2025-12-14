/**
 * Users Management Page
 * View and manage admin users
 */

"use client"

import { useState } from "react"
import AdminHeader from "@/components/admin/header"
import AdminSidebar from "@/components/admin/sidebar"
import { Trash2, Edit2, Plus } from "lucide-react"

interface AdminUser {
  id: string
  name: string
  email: string
  role: string
  createdAt: string
}

export default function UsersPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [users, setUsers] = useState<AdminUser[]>([
    { id: "1", name: "Admin User", email: "admin@kushirax.com", role: "Admin", createdAt: "2024-01-01" },
    { id: "2", name: "Editor User", email: "editor@kushirax.com", role: "Editor", createdAt: "2024-01-15" },
  ])

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader user={{ id: "1", email: "admin@kushirax.com", name: "Admin", role: "Admin" }} onLogout={() => {}} />

      <div className="flex gap-0">
        <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-0"} p-8 pt-24`}>
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold text-primary">Users Management</h1>
                <p className="text-foreground/70 mt-2">Manage admin team members</p>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all">
                <Plus size={20} />
                Add User
              </button>
            </div>

            <div className="bg-white rounded-xl border border-border overflow-hidden">
              <table className="w-full">
                <thead className="border-b border-border bg-background">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Role</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Joined</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-border hover:bg-background/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-foreground">{user.name}</td>
                      <td className="px-6 py-4 text-foreground/70">{user.email}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-foreground/70 text-sm">{user.createdAt}</td>
                      <td className="px-6 py-4 flex gap-2">
                        <button className="p-2 hover:bg-accent/10 rounded-lg transition-colors text-accent">
                          <Edit2 size={18} />
                        </button>
                        <button className="p-2 hover:bg-destructive/10 rounded-lg transition-colors text-destructive">
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
