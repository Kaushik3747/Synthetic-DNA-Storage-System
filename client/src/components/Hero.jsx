import { TypeAnimation } from "react-type-animation";

import DNAAnimation from "./DNAAnimation";

export default function Hero(){

return(

<section className="min-h-screen bg-slate-950 flex flex-col lg:flex-row items-center justify-between px-10">

<div className="lg:w-1/2">

<h1 className="text-6xl font-bold text-white">

Synthetic

<span className="text-cyan-400">

 DNA

</span>

 Storage

</h1>

<div className="mt-8 text-2xl text-gray-300">

<TypeAnimation

sequence={[

"Encode Digital Data",

2000,

"Store Information in DNA",

2000,

"Future of Data Storage",

2000

]}

repeat={Infinity}

/>

</div>

<p className="mt-8 text-lg text-gray-400">

Store files using synthetic DNA with secure encoding,
decoding and cloud management powered by MERN.

</p>

<div className="mt-10 flex gap-6">

<button className="bg-cyan-500 px-8 py-3 rounded-lg">

Get Started

</button>

<button className="border border-cyan-400 px-8 py-3 rounded-lg">

Github

</button>

</div>

</div>

<div className="lg:w-1/2">

<DNAAnimation/>

</div>

</section>

)

}