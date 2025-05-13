"use client"

import { useState } from "react"
import { Menu, Heart, ShoppingCart } from "lucide-react"

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <nav className="flex items-center text-white justify-between px-5 py-3 shadow-md bg-[#1B1B1B] sticky top-0 z-50">

      <div className="text-xl font-bold">Unicflo</div>
      <div className="flex items-center gap-4">
        <Heart className="w-6 h-6 cursor-pointer" />
        <ShoppingCart className="w-6 h-6 cursor-pointer" />
        <Menu
          className="w-7 h-7 cursor-pointer md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>

      {sidebarOpen && (
        <div className="absolute right-0 top-full bg-white shadow-lg p-4 w-48 md:hidden">
          <p>Sidebar content (links, categories...)</p>
        </div>
      )}
    </nav>
  )
}
