import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const projects = [
  {
    title: "Luxury Landing Page",
    stack: "React • Tailwind",
    img: "/project1.png",
  },
  {
    title: "Business Website",
    stack: "React • UI Design",
    img: "/project2.png",
  },
  {
    title: "Creative Portfolio",
    stack: "React • Animation",
    img: "/project3.jpg",
  },
  {
    title: "Startup Website",
    stack: "React • Framer Motion",
    img: "/project4.jpg",
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
          <div
            key={index}
            className="
              group
              rounded-[28px]
              overflow-hidden
              bg-white/50
              backdrop-blur-xl
              border
              border-white
              shadow-[0_20px_60px_rgba(120,95,180,.10)]
              hover:-translate-y-2
              transition
              duration-500
            "
          >
            <div className="relative overflow-hidden">
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

            <div className="p-6">
              <h3
                className="
                  font-display
                  text-[24px]
                  md:text-[32px]
                  font-normal
                  text-foreground
                "
              >
                {project.title}
              </h3>
              <p
                className="
                  mt-2
                  text-sm
                  sm:text-base
                  text-muted-foreground
                "
              >
                {project.stack}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}