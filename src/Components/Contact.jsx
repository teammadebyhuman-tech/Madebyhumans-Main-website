import { MdEmail } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"

export default function Contact(){

return(

<section
id="contact"

className="
max-w-[1450px]
mx-auto

mt-10
px-6

"
>

<div
className="
relative

overflow-hidden

rounded-[50px]

bg-gradient-to-br

from-[#7664a9]
via-[#907dc8]
to-[#ddd5ff]
shadow-xl
px-10
md:px-16

py-14

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
text-[48px]
md:text-[76px]

leading-[0.95]

font-black

text-white
"
>

Ready To

<br/>

Build?

</h2>

<p
className="
mt-5

text-white/80

text-lg
"
>

Let’s create something memorable.

</p>

<div
className="
mt-10

flex

flex-col
md:flex-row

justify-center

gap-6
"
>

<a
href="mailto:yourmail@gmail.com"

className="
group

relative

overflow-hidden

rounded-[32px]

px-8
py-5

bg-white/10

backdrop-blur-2xl

border

border-white/20

shadow-[0_20px_60px_rgba(255,255,255,.08)]

hover:-translate-y-2

transition
duration-700
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

gap-5
"
>

<div
className="
w-16
h-16

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

<MdEmail size={30}/>

</div>

<div className="text-left">

<p
className="
text-white/60

uppercase

text-[12px]
"
>

Email

</p>

<p
className="
text-white

text-[18px]
"
>

yourmail@gmail.com

</p>

</div>

</div>

</a>


<a
href="tel:+919999999999"

className="
group

relative

overflow-hidden

rounded-[32px]

px-8
py-5

bg-white/10

backdrop-blur-2xl

border

border-white/20

shadow-[0_20px_60px_rgba(255,255,255,.08)]

hover:-translate-y-2

transition
duration-700
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

gap-5
"
>

<div
className="
w-16
h-16

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

<FaPhoneAlt size={22}/>

</div>

<div className="text-left">

<p
className="
text-white/60

uppercase

text-[12px]
"
>

Phone

</p>

<p
className="
text-white

text-[18px]
"
>

+91 99999 99999

</p>

</div>

</div>

</a>

</div>

</div>

</div>

</section>

)

}