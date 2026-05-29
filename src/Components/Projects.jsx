import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const projects=[

{
title:"Luxury Landing Page",
stack:"React • Tailwind",
img:"/project1.png",
},

{
title:"Business Website",
stack:"React • UI Design",
img:"/project2.png",
},

{
title:"Creative Portfolio",
stack:"React • Animation",
img:"/project3.jpg",
},

{
title:"Startup Website",
stack:"React • Framer Motion",
img:"/project4.jpg",
}

]

export default function Projects(){

const navigate=useNavigate()

return(

<motion.section

id="projects"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.8, ease: "easeOut" }}

className="
max-w-[1400px]
mx-auto
mt-20
px-6
"

>

<div className="text-center mb-10 md:mb-14">

<h2
className="
font-display
text-[38px]
sm:text-[58px]
md:text-[82px]
leading-none
font-normal
text-foreground
"
>

Featured Projects

</h2>

</div>



<div
className="
grid
grid-cols-1
md:grid-cols-2
gap-5
"
>

{

projects.map((project,index)=>(

<div
key={index}
className="
group
relative
rounded-[28px]
overflow-hidden
flex
flex-col
shadow-[0_20px_60px_rgba(120,95,180,.10)]
hover:-translate-y-2
transition
duration-500
"
>

<div className="relative z-10 overflow-hidden rounded-t-[28px]">

<img

src={project.img}

alt={project.title}

className="
w-full

h-[220px]
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

<div className="p-6 relative z-10 w-full liquid-glass rounded-b-[28px] text-left">

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

</div>

))

}

</div>







<div
className="
flex
justify-center
mt-10
"
>

<button

onClick={()=>
navigate("/project")
}

className="
group
relative
overflow-hidden
rounded-[24px]
sm:rounded-[32px]
px-10
py-5
bg-white/10
backdrop-blur-2xl
border
border-white/20
shadow-[0_20px_60px_rgba(120,95,180,0.15)]
text-[#5d458e]
font-bold
hover:-translate-y-1
hover:bg-white/20
transition
duration-500
cursor-pointer
"
>

{/* Glow overlay to match Contact page button aesthetic */}
<div
className="
absolute
right-[-30px]
bottom-[-40px]
w-[150px]
h-[150px]
bg-[#ddd1ff]/70
blur-[90px]
pointer-events-none
"
/>

<span className="relative z-10">
View More Projects

<span
className="
inline-block
ml-2
group-hover:translate-x-2
transition
"
>
→
</span>
</span>

</button>

</div>

</motion.section>

)

}