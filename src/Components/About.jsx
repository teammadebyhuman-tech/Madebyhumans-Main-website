export default function About(){

return(

<section
id="about"
className="
max-w-[1450px]
mx-auto
mt-32
px-6
"
>

<div
className="
relative
overflow-hidden

rounded-[50px]

bg-gradient-to-br
from-[#f3efff]
to-[#ebe3ff]

p-10
md:p-16

shadow-xl

min-h-[520px]
"
>

<p
className="
uppercase
tracking-[5px]
text-[#7a61ba]

relative
z-20
"
>

About

</p>

<h2
className="
text-[55px]
md:text-[88px]

leading-[0.9]

font-black

text-[#2c214b]

mt-4

max-w-[700px]

relative
z-20
"
>

Creating Digital

<br/>

Experiences

</h2>

<p
className="
mt-8

max-w-[560px]

text-[#645b84]

leading-9

text-lg

relative
z-20
"
>

I design and develop premium websites and
landing pages using React and Tailwind—
focused on performance, aesthetics and
creating experiences that convert.

</p>

<img
src="/about.jpeg"
alt="Developer"

className="
absolute

bottom-0
right-[-40px]

w-[200px]
md:w-[600px]

object-contain

mix-blend-multiply

opacity-95

pointer-events-none

select-none

z-10
"
/>

</div>

</section>

)

}