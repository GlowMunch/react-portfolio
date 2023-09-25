import Image from 'next/image';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  return (
    <div>
      <title>Blaine's Portfolio</title>
      <meta name="description" content="Portfolio" />
    <main className=" bg-indigo-400 px-10">
      <section className=" bg-indigo-400 min-h-screen" >
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">devolpedby</h1>
            <ul className="flex items-center" >
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
              </li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-md ml-5" href="#"> Resume </a></li>
            </ul>
        </nav>
        <div className="text-center p-10 ">
          <h2 className="text-5xl py-2 text-teal-50 font-medium"> Blaine Glasgow </h2>
          <h3 className="text-2xl py-2"> Developer </h3>
          <p className="text-md py-5 leading-8 text-gray-800">
            Full Stack Developer
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3">
          <AiFillTwitterCircle className="text-xl" />
          <AiFillLinkedin className="text-xl"/>
          <AiFillYoutube className="text-xl"/>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
          <Image src={deved} layout="fill" objectFit="cover" alt="dev-ed-wave" />
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1" >Services</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            Text here with <span className="text-red-400">highligted text.</span>
          </p>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 gap-8 px-5">

          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image src={design} width={100} height={100} style={{margin: "auto"}} />
              <h3 className="text-lg font-medium pt-8 pb-2" >Beatiful Desings</h3>
                <p className="py-2">Creating Databases</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="text-gray-800 py-1">Ruby on Rails</p>
                <p className="text-gray-800 py-1">VS Code</p>
                <p className="text-gray-800 py-1">Python</p>
                <p className="text-gray-800 py-1">Next.js and Tailwind</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image src={consulting} width={100} height={100} style={{margin: "auto"}} />
            <h3 className="text-lg font-medium pt-8 pb-2">Beatiful Desings</h3>
            <p className="py-2">
              Creating Databases
            </p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1">Ruby on Rails</p>
            <p className="text-gray-800 py-1">VS Code</p>
            <p className="text-gray-800 py-1">Python</p>
            <p className="text-gray-800 py-1">Next.js and Tailwind</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image src={code} width={100} height={100} style={{margin: "auto"}} />
            <h3 className="text-lg font-medium pt-8 pb-2">Beatiful Desings</h3>
            <p className="py-2">
              Creating Databases
            </p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1">Ruby on Rails</p>
            <p className="text-gray-800 py-1">VS Code</p>
            <p className="text-gray-800 py-1">Python</p>
            <p className="text-gray-800 py-1">Next.js and Tailwind</p>
          </div>

        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            Text here with <span className="text-red-400">highligted text.</span>
          </p>
        </div>
        <div >
          <div className="py-5"><Image src={web1} /></div>
          <div className="py-5"><Image src={web3} /></div>
          <div className="py-5"><Image src={web2} /></div>
          <div className="py-5"><Image src={web4} /></div>
          <div className="py-5"><Image src={web5} /></div>
          <div className="py-5"><Image src={web6} /></div>
        </div>
      </section>
    </main>
    </div>
  );
}
