import { useNavigate } from "react-router-dom"

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

<section

id="projects"

className="
max-w-[1400px]
mx-auto
mt-20
px-6
"

>

<div
className="
flex
flex-col
md:flex-row
justify-between
gap-6
mb-10

"
>

<div>

<p
className="
uppercase
tracking-[4px]
text-[#6f5ea0]
"
>

Selected Work

</p>

<h2
className="
font-display
text-[40px]
md:text-[64px]
leading-[0.9]
font-normal
text-foreground
"
>

Featured

<br/>

Projects

</h2>

</div>

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

<div className="relative">

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
text-muted-foreground
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
liquid-glass
bg-purple-900/5
text-[#5d458e]
font-bold
px-10
py-4
rounded-full
hover:scale-105
hover:-translate-y-0.5
hover:bg-purple-900/10
transition-all
duration-500
cursor-pointer
shadow-[0_20px_70px_rgba(129,104,210,.12)]
"
>

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

</button>

</div>

</section>

)

}