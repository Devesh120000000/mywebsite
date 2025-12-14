"use client"

import Link from "next/link"
import { LogOut } from "lucide-react"
import { useState } from "react"

interface User {
  id: string
  email: string
  name: string
  role: string
}

interface AdminHeaderProps {
  user: User | null
  onLogout: () => void
}

export default function AdminHeader({ user, onLogout }: AdminHeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-border z-50 flex items-center justify-between px-8">
      <Link href="/admin" className="text-xl font-bold text-primary">
      KushiraX Admin
      </Link>
      <div className="flex items-center gap-4 ">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-background transition-colors"
          >
            <div className="text-right">
              <p className="text-sm font-semibold text-foreground">{user?.name}</p>
              <p className="text-xs text-foreground/50">{user?.role}</p>
            </div>
          </button>
          
           {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg border border-border shadow-lg z-50">
              <button
                onClick={onLogout}
                className="w-full flex items-center gap-2 px-4 py-3 text-destructive hover:bg-destructive/10 rounded-lg transition-colors font-medium"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
