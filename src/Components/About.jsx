export default function About(){

return(

<section
id="about"
className="
max-w-[1450px]
mx-auto
mt-20
md:mt-32
px-6
"
>

<div
className="
relative
overflow-hidden

rounded-[40px]
md:rounded-[50px]

bg-gradient-to-br
from-[#f3efff]
to-[#ebe3ff]

p-8
md:p-16

shadow-xl

flex
flex-col
justify-between
lg:block
min-h-fit
lg:min-h-[520px]
"
>

<div>
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
font-display
text-[38px]
sm:text-[55px]
md:text-[88px]

leading-[0.95]

font-normal

text-foreground

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
mt-6
md:mt-8

max-w-[560px]

text-muted-foreground

leading-relaxed
md:leading-9

text-base
md:text-lg

relative
z-20
"
>

I design and develop premium websites and
landing pages using React and Tailwind—
focused on performance, aesthetics and
creating experiences that convert.

</p>
</div>

<img
src="/about.jpeg"
alt="Developer"

className="
relative
mt-8
mx-auto
lg:absolute

lg:bottom-0
lg:right-[-40px]

w-full
max-w-[320px]
sm:max-w-[400px]
lg:max-w-[600px]
lg:w-[600px]

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