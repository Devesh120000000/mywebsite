/**
 * Admin Dashboard
 * Main admin panel with overview and management options
 */

"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { BarChart3, Users, FileText, Settings } from "lucide-react"
import AdminSidebar from "@/components/admin/sidebar"
import AdminHeader from "@/components/admin/header"

interface User {
  id: string
  email: string
  name: string
  role: string
}

export default function AdminDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/auth/me")
        if (!response.ok) {
          router.push("/login")
          return
        }
        const data = await response.json()
        setUser(data.user)
      } catch (error) {
        console.error("[v0] Fetch user error:", error)
        router.push("/login")
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [router])

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" })
    router.push("/")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-border border-t-accent rounded-full animate-spin mx-auto" />
          <p className="text-foreground/70">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  const stats = [
    { label: "Total Projects", value: "50+", icon: FileText, color: "from-blue-500 to-cyan-500" },
    { label: "Team Members", value: "25+", icon: Users, color: "from-purple-500 to-pink-500" },
    { label: "Revenue", value: "$500K+", icon: BarChart3, color: "from-green-500 to-emerald-500" },
    { label: "Clients", value: "30+", icon: BarChart3, color: "from-orange-500 to-red-500" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader user={user} onLogout={handleLogout} />

      <div className="flex gap-0">
        {/* Sidebar */}
        <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-0"} p-8`}>
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Welcome Section */}
            <div>
              <h1 className="text-4xl font-bold text-primary">Welcome, {user?.name}</h1>
              <p className="text-foreground/70 mt-2">Manage your KushiraX content and settings</p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-all group"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <stat.icon className="text-white" size={24} />
                  </div>
                  <p className="text-foreground/70 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-primary mt-2">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-8 text-primary-foreground">
              <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link
                  href="/admin/portfolio"
                  className="p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-center font-semibold flex items-center justify-center gap-2"
                >
                  <FileText size={20} />
                  Manage Portfolio
                </Link>
                <Link
                  href="/admin/services"
                  className="p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-center font-semibold flex items-center justify-center gap-2"
                >
                  <Settings size={20} />
                  Manage Services
                </Link>
                <Link
                  href="/admin/users"
                  className="p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-center font-semibold flex items-center justify-center gap-2"
                >
                  <Users size={20} />
                  Manage Users
                </Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h2 className="text-xl font-bold text-primary mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { action: "Portfolio updated", time: "2 hours ago", status: "success" },
                  { action: "New service added", time: "5 hours ago", status: "success" },
                  { action: "Team member joined", time: "1 day ago", status: "info" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-background/50 transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-foreground">{item.action}</p>
                      <p className="text-sm text-foreground/50">{item.time}</p>
                    </div>
                    <div
                      className={`w-3 h-3 rounded-full ${item.status === "success" ? "bg-green-500" : "bg-blue-500"}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
