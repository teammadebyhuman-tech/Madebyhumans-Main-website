import { useNavigate } from "react-router-dom"

export default function Navbar(){

const navigate=useNavigate()

const scrollTo=(id)=>{

if(window.location.pathname!=="/"){

navigate("/")

setTimeout(()=>{

const section=document.getElementById(id)

if(section){

section.scrollIntoView({

behavior:"smooth"

})

}

},300)

return

}

const section=document.getElementById(id)

if(section){

section.scrollIntoView({

behavior:"smooth"

})

}

}

return(

<header
className="
max-w-[1450px]
mx-auto
pt-5
px-6
relative
z-50
"
>

<div
className="
relative
overflow-hidden
rounded-[34px]

px-8
md:px-14

py-5

flex
flex-wrap

justify-between

items-center

gap-8

bg-white/40

backdrop-blur-xl

border
border-white

shadow-[0_30px_80px_rgba(120,95,180,.12)]
"
>

<div
className="
absolute
top-[-100px]
left-[20%]

w-[320px]
h-[250px]

bg-[#d8cfff]

blur-[100px]

rounded-full

opacity-70
"
/>

<div
className="
absolute

right-[-50px]

top-[-50px]

w-[220px]

h-[220px]

bg-[#9f8cf0]

blur-[120px]

rounded-full

opacity-30
"
/>

<h1

className="
relative
z-10

font-display
text-[38px]

not-italic

tracking-tight

cursor-pointer

bg-gradient-to-r
from-[#8a75d9]
via-[#705aa9]
to-[#43306f]

bg-clip-text

text-transparent

hover:scale-105

transition
"

onClick={()=>

scrollTo("hero")

}

>

hey.. start

</h1>

<nav
className="
relative

z-10

flex

gap-8

text-[#584b7f]

font-medium
"
>

<button

onClick={()=>

scrollTo("about")

}

className="
relative

hover:text-[#775ec5]

transition

after:absolute

after:left-0

after:-bottom-2

after:h-[2px]

after:w-0

after:bg-[#775ec5]

hover:after:w-full

after:transition-all
"
>

About

</button>

<button

onClick={()=>

scrollTo("projects")

}

className="
relative

hover:text-[#775ec5]

transition

after:absolute

after:left-0

after:-bottom-2

after:h-[2px]

after:w-0

after:bg-[#775ec5]

hover:after:w-full

after:transition-all
"
>

Projects

</button>

<button

onClick={()=>

scrollTo("contact")

}

className="
relative

hover:text-[#775ec5]

transition

after:absolute

after:left-0

after:-bottom-2

after:h-[2px]

after:w-0

after:bg-[#775ec5]

hover:after:w-full

after:transition-all
"
>

Contact

</button>

</nav>

<button

onClick={()=>

scrollTo("contact")

}

className="
relative

z-10

bg-gradient-to-r

from-[#8168d2]
to-[#5d458e]

text-white

px-8
py-4

rounded-full

hover:scale-105

hover:shadow-[0_20px_60px_rgba(115,91,170,.35)]

transition
"
>

Hire Us →

</button>

</div>

</header>

)

}