const cards=[

{
title:"Premium Design",
desc:"Elegant and modern interfaces crafted for brands."
},

{
title:"Fast Delivery",
desc:"Quick execution without sacrificing quality."
},

{
title:"Responsive",
desc:"Looks beautiful across desktop and mobile."
},

{
title:"React Development",
desc:"Scalable frontend built with modern practices."
}

]

export default function WhyChoose(){

return(

<section

id="why"

className="
max-w-[1450px]
mx-auto
mt-20
md:mt-30
px-6
"

>

<h2
className="
font-display
text-[42px]
sm:text-[60px]
md:text-[78px]
font-normal
text-foreground
mb-8
md:mb-16
tracking-tight
leading-none
"
>

Why Choose Us

</h2>

<div
className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-8

"
>

{

cards.map((item,index)=>(

<div

key={item.title}

className={`

group

rounded-[42px]

p-8
sm:p-10

min-h-[300px]
sm:min-h-[330px]

border

transition-all

duration-500

hover:-translate-y-4

${
index%2===0

?

"bg-[#7665a9]/18 border-[#b9aee8]"

:

"bg-[#e7e0ff]/55 border-[#ddd3ff]"
}

`}

>

<div
className="
w-16
h-16
rounded-full
bg-white/40
mb-8
"
/>

<h3
className="
font-display
text-[28px]
sm:text-[34px]
font-normal
text-foreground
"
>

{item.title}

</h3>

<p
className="
mt-4
sm:mt-6
text-muted-foreground
leading-relaxed
sm:leading-8
text-sm
sm:text-base
"
>

{item.desc}

</p>

</div>

))

}

</div>

</section>

)

}