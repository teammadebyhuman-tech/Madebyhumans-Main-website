export default function Hero() {

const handleScroll = () => {

const section=document.getElementById("contact")

if(section){

section.scrollIntoView({

behavior:"smooth"

})

}

}

return(

<section
id="hero"

className="
max-w-[1450px]
mx-auto
px-6
pt-4
"
>

<div
className="
relative

overflow-hidden

rounded-[55px]

h-[760px]

bg-[#efecfa]

shadow-[0_40px_120px_rgba(110,90,170,.12)]
"
>

{/* Glow */}

<div
className="
absolute

bottom-[100px]

left-1/2

-translate-x-1/2

w-[1200px]

h-[500px]

bg-[#cfc6ff]

opacity-50

blur-[180px]

rounded-full
"
/>







{/* TEXT */}

<div
className="
absolute

top-[45px]

left-1/2

-translate-x-1/2

text-center

w-full

px-10

z-20
"
>

<p
className="
uppercase

tracking-[8px]

text-[#7465a5]

font-medium
"
>

CREATIVE DEVELOPER

</p>

<h1
className="
mt-5

text-[72px]
md:text-[96px]

leading-[0.9]

font-black

text-[#221445]
"
>

Bold Ideas That

<br/>

Start With Vision.

</h1>

<p
className="
mt-6

max-w-[720px]

mx-auto

text-[20px]

leading-[1.8]

text-[#6c648b]
"
>

We help modern brands craft digital stories
that inspire action and drive results.

</p>

</div>







{/* BUTTON */}

<div
className="
absolute

left-1/2

top-[430px]

-translate-x-1/2

z-40
"
>

<div
className="
absolute

inset-0

scale-[1.3]

bg-white

opacity-40

blur-[35px]

rounded-full
"
/>

<button

onClick={handleScroll}

className="
relative

z-50

bg-gradient-to-r

from-[#8168d2]
to-[#5d458e]

text-white

px-10
py-5

rounded-full

font-medium

cursor-pointer

hover:scale-105
hover:-translate-y-1

transition-all
duration-500

animate-[float_3s_ease-in-out_infinite]

shadow-[0_20px_70px_rgba(129,104,210,.35)]
"
>

Get In Touch ↗

</button>

</div>







{/* IMAGE */}

<img

src="/hero.png"

alt="Hero"

className="
absolute

bottom-[-100px]

left-[41.5%]

-translate-x-1/2

w-[1500px]

max-w-none

object-contain

opacity-95

mix-blend-screen

z-30

pointer-events-none
"
/>







<style>

{`

@keyframes float{

0%,100%{
transform:
translateY(0px);
}

50%{
transform:
translateY(-8px);
}

}

`}

</style>

</div>

</section>

)

}