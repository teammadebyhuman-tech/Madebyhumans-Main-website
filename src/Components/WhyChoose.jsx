import { motion } from "framer-motion"
import { Sparkles, Cpu, Zap, Eye } from "lucide-react"

const cards = [
  {
    icon: <Sparkles size={24} />,
    title: "Human-First UX",
    desc: "We design for real people. No AI-generated shortcuts or generic templates—just bespoke, psychology-driven interfaces tailored to your brand's unique character."
  },
  {
    icon: <Cpu size={24} />,
    title: "Production-Ready Code",
    desc: "Engineered with React, Vite, and Tailwind CSS. We deliver clean, modular, and optimized frontend code that executes at 100 FPS and scales effortlessly."
  },
  {
    icon: <Zap size={24} />,
    title: "Fluid Interactive Motion",
    desc: "Bespoke animations and spring physics that make your application feel organic, responsive, and tactile. We turn static pages into immersive digital journeys."
  },
  {
    icon: <Eye size={24} />,
    title: "Direct Partnership",
    desc: "Zero agency bureaucracy. You collaborate directly with the engineers and designers building your project, backed by weekly builds and total transparency."
  }
]

export default function WhyChoose() {
  return (
    <motion.section
      id="why"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        max-w-[1450px]
        mx-4
        xl:mx-auto
        mt-20
        md:mt-32
        p-8
        md:p-16
        bg-white
        rounded-[40px]
        shadow-xl
        border
        border-white/50
      "
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Editorial Panel */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <p
            className="
              uppercase
              tracking-[8px]
              text-[#7b68ba]
              text-xs
              sm:text-sm
            "
          >
            WHY US
          </p>

          <h2
            className="
              font-display
              text-[38px]
              sm:text-[54px]
              lg:text-[64px]
              font-normal
              text-foreground
              mt-4
              leading-[1.1]
              tracking-tight
            "
          >
            Why brands choose us over standard agencies
          </h2>

          <p
            className="
              text-muted-foreground
              mt-6
              text-base
              sm:text-lg
              leading-relaxed
            "
          >
            We bridge the gap between human creativity and technical execution. Our philosophy is simple: build products that people love to use, backed by clean code and absolute transparency.
          </p>

          {/* Handcrafted USP Badge */}
          <div className="mt-8 p-5 rounded-[24px] bg-white/30 border border-white/30 backdrop-blur-md flex items-center gap-4 max-w-[360px] shadow-[0_10px_30px_rgba(120,95,180,.03)]">
            <div className="flex -space-x-2 shrink-0">
              <div className="w-9 h-9 rounded-full bg-[#846dd9] border-2 border-white flex items-center justify-center text-[10px] text-white font-bold shadow-sm">
                100%
              </div>
              <div className="w-9 h-9 rounded-full bg-[#5c478f] border-2 border-white flex items-center justify-center text-[10px] text-white font-bold shadow-sm">
                0%
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Handcrafted Design & Code</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">Zero pre-made templates, pure human engineering.</p>
            </div>
          </div>
        </div>

        {/* Right Cards Panel */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {cards.map((item) => (
            <div
              key={item.title}
              className="
                group
                relative
                rounded-[32px]
                p-8
                bg-gradient-to-br from-[#f7f2ff] via-[#f1ecff] to-[#ebe4ff]
                border
                border-white
                shadow-md
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-500
                overflow-hidden
              "
            >
              {/* Radial glow background on hover */}
              <div className="absolute top-[-30px] left-[-30px] w-24 h-24 bg-gradient-to-br from-[#9f8cf0]/20 to-[#7b68ba]/0 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

              {/* Icon Container */}
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white/80
                  border
                  border-white
                  flex
                  items-center
                  justify-center
                  text-[#5c478f]
                  shadow-[0_8px_20px_rgba(120,95,180,0.06)]
                  group-hover:scale-110
                  group-hover:bg-[#846dd9]
                  group-hover:text-white
                  transition-all
                  duration-500
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  font-display
                  text-[24px]
                  sm:text-[28px]
                  font-normal
                  text-foreground
                  mt-6
                  leading-tight
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-3
                  text-muted-foreground
                  text-[14px]
                  sm:text-[15px]
                  leading-relaxed
                "
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}