import { useNavigate } from "react-router-dom"
import { ArrowLeft, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Cellquestindia.com",
    stack: "React • UI Design",
    img: "/project_cellquest.png",
    link: "https://cellquestindia.com/",
  },
  {
    title: "Future and AI",
    stack: "React • Landing Page",
    img: "/project_futureandai.png",
    link: "https://www.futureandai.in/",
  },
  {
    title: "APES Community",
    stack: "React • Community UI",
    img: "/project_apes.png",
    link: "https://apes.lla.in/",
  },
  {
    title: "Viral Monk",
    stack: "React • Video Creation",
    img: "/project_viralmonk.png",
    link: "https://viralmonk.futureandai.in/",
  }
]

export default function ProjectsPage() {
  const navigate = useNavigate()

  return (
    <div
      className="
        max-w-[1450px]
        mx-auto
        px-6
        py-12
        md:py-20
        relative
      "
    >
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="
          group
          sticky
          top-6
          z-50
          flex
          items-center
          gap-3
          w-fit
          mb-10
          md:mb-14
          liquid-glass
          bg-purple-900/5
          rounded-full
          px-5
          py-2.5
          hover:shadow-[0_30px_80px_rgba(129,104,210,.25)]
          hover:translate-x-1
          hover:bg-purple-900/10
          transition-all
          duration-500
          cursor-pointer
        "
      >
        <div
          className="
            w-8
            h-8
            rounded-full
            bg-gradient-to-r
            from-[#8168d2]
            to-[#5d458e]
            flex
            items-center
            justify-center
            text-white
            group-hover:-translate-x-1
            transition
          "
        >
          <ArrowLeft size={16} />
        </div>
        <div className="text-left">
          <p
            className="
              text-[10px]
              uppercase
              tracking-[2px]
              text-[#8b80a8]
            "
          >
            Navigation
          </p>
          <p
            className="
              font-semibold
              text-xs
              text-[#43306f]
            "
          >
            Back To Home
          </p>
        </div>
      </button>

      {/* Header Info */}
      <div className="mb-10 md:mb-16">
        <h1
          className="
            font-display
            text-[42px]
            md:text-[72px]
            leading-none
            font-normal
            text-foreground
          "
        >
          All Projects
        </h1>
        <p
          className="
            mt-4
            md:mt-6
            max-w-[550px]
            text-base
            md:text-[18px]
            leading-relaxed
            md:leading-8
            text-muted-foreground
          "
        >
          Explore selected work, creative concepts, premium websites and upcoming case studies.
        </p>
      </div>

      {/* Projects Grid */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          lg:gap-8
        "
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              relative
              rounded-[28px]
              overflow-hidden
              flex
              flex-col
              shadow-[0_20px_60px_rgba(120,95,180,0.10)]
              hover:-translate-y-2
              transition
              duration-500
            "
          >
            <div className="relative overflow-hidden z-10 rounded-t-[28px]">
              <img
                src={project.img}
                alt={project.title}
                className="
                  w-full
                  h-[200px]
                  sm:h-[260px]
                  md:h-[300px]
                  object-cover
                  group-hover:scale-105
                  transition
                  duration-700
                "
              />
            </div>

            {/* Glassmorphic glow overlay matching our buttons */}
            <div className="absolute right-[-40px] bottom-[-40px] w-[180px] h-[180px] bg-[#ddd5ff]/70 blur-[90px] pointer-events-none z-0" />

            <div className="p-6 relative z-10 w-full liquid-glass rounded-b-[28px] flex items-center justify-between text-left">
              <div>
                <h3
                  className="
                    font-display
                    text-[20px]
                    md:text-[26px]
                    font-normal
                    text-[#43306f]
                    leading-tight
                  "
                >
                  {project.title}
                </h3>
                <p
                  className="
                    mt-2
                    text-[#7b68ba]
                    text-xs
                    md:text-sm
                    font-medium
                  "
                >
                  {project.stack}
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-[#f1ecff] border border-white/60 flex items-center justify-center text-[#5c478f] group-hover:-rotate-45 group-hover:bg-[#846dd9] group-hover:text-white group-hover:shadow-lg transition-all duration-500 shadow-sm ml-4">
                <ArrowRight size={20} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}