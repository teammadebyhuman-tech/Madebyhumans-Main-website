import {
FiSearch,
FiPenTool,
FiMonitor,
FiCheckCircle
} from "react-icons/fi"

const steps=[

{
icon:<FiSearch/>,
title:"Research",
time:"1 Week",
desc:"We explore goals and user needs to uncover the perfect direction."
},

{
icon:<FiPenTool/>,
title:"Visual Design",
time:"2 Weeks",
desc:"Creating premium visuals and smooth interactions."
},

{
icon:<FiMonitor/>,
title:"Prototype & Test",
time:"1–2 Days",
desc:"Testing and refining until every detail feels polished."
},

{
icon:<FiCheckCircle/>,
title:"Final Delivery",
time:"1–2 Days",
desc:"Delivering polished experiences ready for launch."
}

]

export default function Process(){

return(

<section
className="
max-w-[1450px]
mx-auto
mt-24
px-6
"
>

<div className="text-center mb-20">

<p
className="
uppercase
tracking-[8px]
text-[#7b68ba]
"
>
PROCESS
</p>

<h2
className="
mt-4
text-[58px]
md:text-[82px]
font-black
text-[#2b214c]
"
>
How We Build
</h2>

</div>

<div className="relative">

{/* ARROWS */}

<div className="hidden lg:block">

<div className="absolute left-[42%] top-[120px]">

<div className="w-[180px] border-t border-dashed border-[#baa8ff]"/>

<div className="absolute right-0 h-[90px] border-r border-dashed border-[#baa8ff]"/>

<div className="absolute right-[-6px] bottom-[-90px] text-[#8b72dd]">
↓
</div>

</div>

<div className="absolute left-[40%] top-[360px]">

<div className="h-[120px] border-l border-dashed border-[#baa8ff]"/>

<div className="w-[240px] border-t border-dashed border-[#baa8ff]"/>

<div className="absolute right-[-6px] bottom-[-6px] text-[#8b72dd]">
→
</div>

</div>

<div className="absolute right-[24%] bottom-[180px]">

<div className="w-[220px] border-t border-dashed border-[#baa8ff]"/>

<div className="absolute right-0 h-[90px] border-r border-dashed border-[#baa8ff]"/>

<div className="absolute right-[-6px] bottom-[-90px] text-[#8b72dd]">
↓
</div>

</div>

</div>





<div className="space-y-10">

<div className="flex justify-between">

<Card step={steps[0]}/>

<div className="mt-[90px]">

<Card step={steps[1]}/>

</div>

</div>





<div className="flex justify-between">

<div className="ml-[70px]">

<Card step={steps[2]}/>

</div>

<div className="mt-[60px]">

<Card
step={steps[3]}
isDelivery
/>

</div>

</div>

</div>

</div>

</section>

)

}






function Card({
step,
isDelivery=false
}){

return(

<div
className="
group

relative

w-[520px]
h-[220px]

rounded-[34px]

overflow-hidden

bg-gradient-to-br

from-[#f7f2ff]
via-[#f1ecff]
to-[#ebe4ff]

border

border-white

p-8

shadow-[0_35px_100px_rgba(132,108,210,.14)]

hover:-translate-y-5
hover:translate-x-3

transition-all

duration-700
"
>

<div
className="
absolute

top-[-50px]
right-[-50px]

w-[220px]
h-[220px]

bg-[#d9ceff]

blur-[120px]

opacity-0

group-hover:opacity-70

transition
"
/>

<div
className="
relative

z-20

flex

h-full
"
>

{/* BAR */}

<div
className="
w-[70px]
h-full

rounded-full

bg-gradient-to-b

from-[#846dd9]
to-[#5c478f]

text-white

flex

flex-col

justify-between

items-center

py-6

shrink-0
"
>

<div className="text-[24px]">

{step.icon}

</div>

<div
className="
text-[12px]

[writing-mode:vertical-rl]
"
>

{step.time}

</div>

</div>





<div
className={`
ml-7

${isDelivery
?
"w-[180px]"
:
"flex-1"
}
`}
>

<h3
className="
text-[34px]
font-black
text-[#2b214c]
"
>

{step.title}

</h3>

<p
className="
mt-5

text-[#6c648a]

leading-[1.8]
"
>

{step.desc}

</p>

</div>





{

isDelivery && (

<div
className="
absolute

right-[-35px]

bottom-[-32px]

h-full

flex
items-end
"
>

<img
src="/phone.png"

alt=""

className="
w-[320px]

object-contain

animate-[float_6s_ease-in-out_infinite]

mix-blend-darken

drop-shadow-[0_20px_60px_rgba(110,90,220,.18)]
"
/>

</div>

)

}

</div>

</div>

)

}