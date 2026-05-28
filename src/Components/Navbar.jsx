import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Menu, X, Infinity as InfinityIcon } from "lucide-react"

export default function Navbar() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    setMenuOpen(false)
    if (window.location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        const section = document.getElementById(id)
        if (section) {
          section.scrollIntoView({ behavior: "smooth" })
        }
      }, 300)
      return
    }
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="max-w-[1450px] mx-auto pt-5 px-6 relative z-50">
      <div className="relative overflow-hidden rounded-[34px] px-6 md:px-14 py-4 md:py-5 flex justify-between items-center bg-white/40 backdrop-blur-xl border border-white shadow-[0_30px_80px_rgba(120,95,180,.12)]">
        {/* Glow Effects */}
        <div className="absolute top-[-100px] left-[20%] w-[320px] h-[250px] bg-[#d8cfff] blur-[100px] rounded-full opacity-70 pointer-events-none" />
        <div className="absolute right-[-50px] top-[-50px] w-[220px] h-[220px] bg-[#9f8cf0] blur-[120px] rounded-full opacity-30 pointer-events-none" />

        {/* Logo */}
        <div
          className="relative z-10 flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollTo("hero")}
        >
          <InfinityIcon className="text-[#705aa9] group-hover:scale-110 transition duration-300" size={28} strokeWidth={1.5} />
          <h1 className="font-display text-[26px] md:text-[34px] not-italic tracking-tight bg-gradient-to-r from-[#8a75d9] via-[#705aa9] to-[#43306f] bg-clip-text text-transparent hover:scale-105 transition duration-300">
            hey.. start
          </h1>
        </div>

        {/* Desktop Nav Links */}
        <nav className="relative z-10 hidden md:flex gap-8 text-[#584b7f] font-medium">
          <button
            onClick={() => scrollTo("about")}
            className="relative hover:text-[#775ec5] transition after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#775ec5] hover:after:w-full after:transition-all cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="relative hover:text-[#775ec5] transition after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#775ec5] hover:after:w-full after:transition-all cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="relative hover:text-[#775ec5] transition after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#775ec5] hover:after:w-full after:transition-all cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("contact")}
            className="relative z-10 liquid-glass bg-purple-900/10 text-[#43306f] font-bold px-8 py-4 rounded-full hover:scale-105 hover:-translate-y-0.5 hover:bg-purple-900/20 transition-all duration-500 cursor-pointer shadow-[0_20px_70px_rgba(129,104,210,.12)]"
          >
            Hire Us →
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-10 md:hidden liquid-glass bg-purple-900/10 text-[#43306f] hover:bg-purple-900/20 p-2.5 rounded-xl cursor-pointer transition-colors"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-[74px] left-6 right-6 z-40 md:hidden bg-white/95 backdrop-blur-2xl border border-white/60 rounded-3xl p-6 flex flex-col gap-4 shadow-[0_20px_60px_rgba(120,95,180,0.15)] animate-[slideDown_0.3s_ease-out]">
          <nav className="flex flex-col gap-1">
            <button
              onClick={() => scrollTo("about")}
              className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-[#584b7f] hover:bg-purple-900/5 hover:text-[#775ec5] font-medium text-left transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("projects")}
              className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-[#584b7f] hover:bg-purple-900/5 hover:text-[#775ec5] font-medium text-left transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-[#584b7f] hover:bg-purple-900/5 hover:text-[#775ec5] font-medium text-left transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>
          
          <div className="pt-3 border-t border-purple-900/10 flex flex-col gap-2">
            <button
              onClick={() => scrollTo("contact")}
              className="w-full text-center liquid-glass bg-purple-900/12 text-[#3e2d68] font-bold py-3.5 rounded-full hover:bg-purple-900/20 transition-all duration-300 shadow-[0_10px_30px_rgba(129,104,210,0.12)] cursor-pointer"
            >
              Hire Us →
            </button>
          </div>
        </div>
      )}
    </header>
  )
}