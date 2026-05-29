import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function HireUs(){
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#f5f1ff] flex items-center justify-center p-6 relative">
      {/* Sticky Back Button */}
      <button
        onClick={() => navigate("/")}
        className="group absolute top-6 left-6 flex items-center gap-3 liquid-glass bg-purple-900/5 rounded-full px-5 py-2.5 hover:shadow-[0_20px_50px_rgba(129,104,210,0.15)] hover:translate-x-0.5 hover:bg-purple-900/10 transition-all duration-500 cursor-pointer"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#8168d2] to-[#5d458e] flex items-center justify-center text-white group-hover:-translate-x-1 transition duration-300">
          <ArrowLeft size={16} />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[2px] text-[#8b80a8] text-left">
            Navigation
          </p>
          <p className="font-semibold text-xs text-[#43306f]">
            Back To Home
          </p>
        </div>
      </button>

      <div className="bg-white/60 backdrop-blur-xl rounded-[40px] p-8 sm:p-16 text-center max-w-lg w-full border border-white shadow-[0_30px_80px_rgba(120,95,180,0.1)]">
        <h1 className="font-display text-[42px] sm:text-[72px] font-normal text-foreground leading-none">
          Hire Us
        </h1>
        
        <p className="mt-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
          Need a premium website, high-converting landing page, or custom React application? Let's discuss your project goals.
        </p>
        
        <a
          href="mailto:team.madebyhuman@gmail.com"
          className="inline-block text-center mt-8 w-full sm:w-auto liquid-glass bg-purple-900/5 text-[#5d458e] hover:bg-purple-900/10 font-bold px-10 py-4.5 rounded-full hover:scale-105 hover:-translate-y-0.5 transition-all duration-500 cursor-pointer shadow-[0_20px_70px_rgba(129,104,210,0.15)]"
        >
          Book Project
        </a>
      </div>
    </div>
  )
}