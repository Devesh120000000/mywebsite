"use client"

import Link from "next/link"
import { FileText, Settings, Users, Home } from "lucide-react"

interface AdminSidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export default function AdminSidebar({ sidebarOpen, setSidebarOpen}: AdminSidebarProps){
  const menuItems = [
    { label: "Dashboard", icon: Home, href: "/admin"},
    {label: "Portfolio", icon: FileText, href: "/admin/portfolio"},
    {label: "Services", icon: Settings, href: "/admin/services" },
    {label: "User", icon: Users, href:  "/admin/users"},
  ]
  return(
    <>
    {/* Sidebar */}
    <div
     className={`fixed left-0 top-16 h-[calc(100vh-64px)] bg-white border-r border-border p-6 transition-all duration-300 z-40 ${
          sidebarOpen ? "w-64" : "-translate-x-full w-64"
        }`}
    >
      <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-accent/10 hover:text-accent transition-colors font-medium"
            >
              <item.icon size={20} />
              {item.label}
            </Link>
          ))}
        </nav>
    </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </>
  )
}