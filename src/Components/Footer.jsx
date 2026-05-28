import { MdEmail } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"

export default function Footer(){

return(

<footer
className="
max-w-[1450px]
mx-auto
mt-6
mb-6
px-6
"
>

<div
className="
relative

overflow-hidden

rounded-[36px]

px-8
py-5

bg-white/30

backdrop-blur-2xl

border
border-white/40

shadow-[0_20px_80px_rgba(130,100,210,.12)]
"
>

{/* BG GLOW */}

<div
className="
absolute

left-[-120px]
top-[-80px]

w-[360px]
h-[300px]

bg-[#d8cfff]

blur-[150px]

opacity-60
"
/>

<div
className="
absolute

right-[-120px]
bottom-[-120px]

w-[320px]
h-[320px]

bg-[#9f8cf0]

blur-[150px]

opacity-20
"
/>

<div
className="
relative

z-10

grid

md:grid-cols-[360px_1fr_300px]

items-center

gap-6
"
>

{/* LEFT */}

<div
className="
relative

rounded-[32px]

overflow-hidden

px-8
py-8

bg-gradient-to-br

from-[#faf7ff]
via-[#f3eeff]
to-[#ece4ff]

border

border-white/80

shadow-[0_25px_100px_rgba(135,110,220,.22)]

hover:-translate-y-1

transition
duration-700
"
>

<div
className="
absolute

left-[-60px]
top-[-60px]

w-[240px]
h-[240px]

bg-[#bdaeff]

blur-[120px]

opacity-70

animate-pulse
"
/>

<div
className="
absolute

right-[-40px]
bottom-[-50px]

w-[180px]
h-[180px]

bg-[#e2d8ff]

blur-[100px]
"
/>

<div className="relative z-10">

<h2
className="
text-[30px]

md:text-[34px]

font-black

italic

whitespace-nowrap

bg-gradient-to-r

from-[#9178ec]
via-[#6f56b2]
to-[#3e2d68]

bg-clip-text

text-transparent
"
>

SONIYA and PAGAL

</h2>

<p
className="
mt-3

text-[#6d6191]

text-[14px]

tracking-[1px]
"
>

Freelance Web Developer

</p>

</div>

</div>
{/* IMAGE */}

<div
className="
flex
justify-center
"
>

</div>
{/* RIGHT */}

<div
className="
flex
flex-col

gap-4
"
>

<a
href="mailto:yourmail@gmail.com"

className="
group

rounded-[26px]

px-5
py-4

bg-white/14

backdrop-blur-xl

border

border-white/30

hover:bg-white/20

hover:-translate-x-2

transition
duration-500
"

>

<div
className="
flex

items-center

gap-4
"
>

<div
className="
w-12
h-12

rounded-full

bg-white/20

backdrop-blur-xl

text-[#745fbe]

flex

items-center

justify-center

group-hover:rotate-12

transition
"
>

<MdEmail size={22}/>

</div>

<div>

<p
className="
uppercase

text-[11px]

text-[#8b7cb8]
"
>

Email

</p>

<p
className="
text-[#4f4077]
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

rounded-[26px]

px-5
py-4

bg-white/14

backdrop-blur-xl

border

border-white/30

hover:bg-white/20

hover:-translate-x-2

transition
duration-500
"

>

<div
className="
flex

items-center

gap-4
"
>

<div
className="
w-12
h-12

rounded-full

bg-white/20

text-[#745fbe]

flex

items-center

justify-center

group-hover:scale-110

transition
"
>

<FaPhoneAlt size={18}/>

</div>

<div>

<p
className="
uppercase

text-[11px]

text-[#8b7cb8]
"
>

Phone

</p>

<p
className="
text-[#4f4077]
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

</footer>

)

}