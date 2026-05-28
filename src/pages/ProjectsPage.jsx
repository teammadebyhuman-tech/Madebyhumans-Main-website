import { useNavigate } from "react-router-dom"

export default function ProjectsPage(){

const navigate=useNavigate()

return(

<div
className="
max-w-[1450px]
mx-auto

px-6
py-20

relative
"
>

<button

onClick={()=>
navigate("/")
}

className="
group

sticky
top-6

z-50

flex
items-center
gap-3

w-fit

mb-14

bg-white/40

backdrop-blur-xl

border
border-white

rounded-full

px-6
py-3

shadow-[0_20px_60px_rgba(120,95,180,.10)]

hover:shadow-[0_30px_80px_rgba(120,95,180,.18)]

hover:translate-x-1

transition-all
duration-500
"
>

<div
className="
w-10
h-10

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

←

</div>

<div>

<p
className="
text-[13px]

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

text-[#43306f]
"
>

Back To Home

</p>

</div>

</button>







<h1
className="
font-display
text-[52px]
md:text-[72px]

leading-[0.9]

font-normal

text-foreground
"
>

All Projects

</h1>

<p
className="
mt-6

max-w-[550px]

text-[18px]

leading-8

text-muted-foreground
"
>

Explore selected work, creative concepts,
premium websites and upcoming case studies.

</p>

</div>

)

}