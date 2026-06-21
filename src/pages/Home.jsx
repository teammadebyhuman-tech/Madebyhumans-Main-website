import Hero from "../Components/Hero"
import About from "../Components/About"
import Process from "../Components/Process"
import WhyChoose from "../Components/WhyChoose"
import Projects from "../Components/Projects"
import Contact from "../Components/Contact"

import { Helmet } from 'react-helmet-async';

export default function Home(){

return(

<>
<Helmet>
  <title>MadeByHuman | Premium Web Design & Development Agency</title>
  <meta name="description" content="We design and build high-converting, visually stunning websites and digital experiences. Elevate your brand with MadeByHuman." />
  <link rel="canonical" href="https://madebyhuman.tech/" />
</Helmet>

<Hero/>

<About/>
<Process/>

<WhyChoose/>

<Projects/>
<Contact/>

</>

)

}