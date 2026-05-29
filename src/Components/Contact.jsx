import { Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact(){

return(

<motion.section
id="contact"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.8, ease: "easeOut" }}

className="
max-w-[1450px]
mx-auto

mt-12
md:mt-20
px-6

"
>

<div
className="
relative

overflow-hidden

rounded-[36px]
sm:rounded-[50px]

bg-gradient-to-br

from-[#7664a9]
via-[#907dc8]
to-[#ddd5ff]
px-6
sm:px-10
md:px-16

py-10
md:py-14

shadow-[0_30px_80px_rgba(105,82,170,.18)]
"
>

{/* glow */}

<div
className="
absolute

left-[-120px]
top-[-120px]

w-[320px]
h-[320px]

bg-[#e2dbff]

blur-[160px]

opacity-30
"
/>

<div
className="
absolute

right-[-100px]
bottom-[-100px]

w-[280px]
h-[280px]

bg-[#b8a7ff]

blur-[140px]

opacity-30
"
/>

<div
className="
relative
z-10

text-center
"
>

<h2
className="
font-display
text-[38px]
sm:text-[54px]
md:text-[76px]

leading-[0.95]

font-normal

text-white
"
>

Ready To

<br/>

Build?

</h2>

<p
className="
mt-4
md:mt-5

text-white/80

text-base
sm:text-lg
"
>

Let’s create something memorable.

</p>

<div
className="
mt-8
md:mt-10

flex

flex-col
md:flex-row

justify-center

gap-4
md:gap-6
"
>

<a
href="mailto:team.madebyhuman@gmail.com"

className="
group

relative

overflow-hidden

rounded-[24px]
sm:rounded-[32px]

px-6
sm:px-8
py-4
sm:py-5

bg-white/10

backdrop-blur-2xl

border

border-white/20

shadow-[0_20px_60px_rgba(255,255,255,.08)]

hover:-translate-y-1

transition
duration-500
"
>

<div
className="
absolute

left-[-30px]
top-[-40px]

w-[150px]
h-[150px]

bg-white/20

blur-[90px]
"
/>

<div
className="
relative

flex

items-center

gap-4
sm:gap-5
"
>

<div
className="
w-12
h-12
sm:w-16
sm:h-16

rounded-full

bg-white/12

backdrop-blur-xl

border

border-white/20

text-white

flex

items-center

justify-center

group-hover:rotate-12

transition
"
>

<Mail className="w-5 h-5 sm:w-[30px] sm:h-[30px]" />

</div>

<div className="text-left">

<p
className="
text-white/60

uppercase

text-[10px]
sm:text-[12px]
"
>

Email

</p>

<p
className="
text-white

text-sm
sm:text-base
md:text-[18px]
"
>

team.madebyhuman@gmail.com

</p>

</div>

</div>

</a>


<a
href="https://www.linkedin.com/in/yadavkishan10/"
target="_blank"
rel="noopener noreferrer"

className="
group

relative

overflow-hidden

rounded-[24px]
sm:rounded-[32px]

px-6
sm:px-8
py-4
sm:py-5

bg-white/10

backdrop-blur-2xl

border

border-white/20

shadow-[0_20px_60px_rgba(255,255,255,.08)]

hover:-translate-y-1

transition
duration-500
"
>

<div
className="
absolute

right-[-30px]
bottom-[-40px]

w-[150px]
h-[150px]

bg-[#ddd1ff]

blur-[90px]
"
/>

<div
className="
relative

flex

items-center

gap-4
sm:gap-5
"
>

<div
className="
w-12
h-12
sm:w-16
sm:h-16

rounded-full

bg-white/12

backdrop-blur-xl

border

border-white/20

text-white

flex

items-center

justify-center

group-hover:scale-110

transition
"
>

<svg className="w-4 h-4 sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
  <rect width="4" height="12" x="2" y="9" />
  <circle cx="4" cy="4" r="2" />
</svg>

</div>

<div className="text-left">

<p
className="
text-white/60

uppercase

text-[10px]
sm:text-[12px]
"
>

LinkedIn

</p>

<p
className="
text-white

text-sm
sm:text-base
md:text-[18px]
"
>

yadavkishan10

</p>

</div>

</div>

</a>

</div>

</div>

</div>

</motion.section>

)

}