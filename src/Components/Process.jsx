import {
  Search,
  PenTool,
  Monitor,
  CheckCircle2
} from "lucide-react"

const steps=[

{
icon:<Search/>,
title:"Research",
time:"1 Week",
desc:"We explore goals and user needs to uncover the perfect direction."
},

{
icon:<PenTool/>,
title:"Visual Design",
time:"2 Weeks",
desc:"Creating premium visuals and smooth interactions."
},

{
icon:<Monitor/>,
title:"Prototype & Test",
time:"1–2 Days",
desc:"Testing and refining until every detail feels polished."
},

{
icon:<CheckCircle2/>,
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
mt-16
md:mt-24
px-6
"
>

<div className="text-center mb-12 md:mb-20">

<p
className="
uppercase
tracking-[8px]
text-[#7b68ba]
text-xs
sm:text-sm
"
>
PROCESS
</p>

<h2
className="
font-display
mt-4
text-[38px]
sm:text-[58px]
md:text-[82px]
font-normal
leading-none
text-foreground
"
>
How We Build
</h2>

</div>

<div className="relative">

<div className="space-y-8 lg:space-y-10 flex flex-col">

{/* Row 1 */}
<div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8 lg:gap-0">

  <Card step={steps[0]} index={0} />

  <div className="lg:mt-[90px] w-full max-w-[520px]">

    <Card step={steps[1]} index={1} />

  </div>

</div>

{/* Row 2 */}
<div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8 lg:gap-0">

  <div className="lg:ml-[70px] w-full max-w-[520px]">

    <Card step={steps[2]} index={2} />

  </div>

  <div className="lg:mt-[60px] w-full max-w-[520px]">

    <Card
      step={steps[3]}
      index={3}
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
index,
isDelivery=false
}){

return(

<div
className="
group

relative

w-full
max-w-[520px]
h-auto
min-h-[220px]
lg:h-[220px]

rounded-[34px]

overflow-hidden

bg-gradient-to-br

from-[#f7f2ff]
via-[#f1ecff]
to-[#ebe4ff]

border

border-white

p-6
sm:p-8

shadow-[0_35px_100px_rgba(132,108,210,.14)]

hover:-translate-y-2
lg:hover:-translate-y-5
lg:hover:translate-x-3

transition-all

duration-700
"
>

{/* Background Number */}
<div className="absolute top-4 right-6 sm:right-10 font-display text-[72px] sm:text-[96px] font-normal text-[#846dd9]/8 select-none pointer-events-none transition-all duration-500 group-hover:scale-105 group-hover:text-[#846dd9]/12">
  0{index + 1}
</div>

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
w-[60px]
sm:w-[70px]
h-full

rounded-full

bg-gradient-to-b

from-[#846dd9]
to-[#5c478f]

text-white

flex

flex-col

items-center
justify-center
gap-4
sm:gap-6

py-4
sm:py-6

shrink-0
"
>

<div className="text-[22px] sm:text-[28px]">

{step.icon}

</div>

<div className="text-[9px] sm:text-[11px] font-bold text-white/95 tracking-wider uppercase select-none whitespace-nowrap">
  {step.time}
</div>

</div>

<div
className={`
ml-5
sm:ml-7
flex
flex-col
justify-center

${isDelivery
?
"w-[125px] xs:w-[150px] sm:w-[180px]"
:
"flex-1"
}
`}
>

<h3
className="
font-display
text-[28px]
sm:text-[36px]
font-normal
text-foreground
leading-tight
"
>

{step.title}

</h3>

<p
className="
mt-2
sm:mt-4

text-muted-foreground

text-[14px]
sm:text-[18px]

leading-relaxed
sm:leading-[1.8]
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

right-[-25px]
sm:right-[-35px]

bottom-[-20px]
sm:bottom-[-32px]

h-full

flex
items-end
pointer-events-none
"
>

<img
src="/phone.png"

alt=""

className="
w-[180px]
sm:w-[260px]
md:w-[320px]

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