import Head from "next/head"
import { useCallback } from "react"
import { useEffect, useState } from "react"
import { Github, Linkedin, Twitter } from '@icons-pack/react-simple-icons'
import Particles from 'react-particles'
import { loadFull } from "tsparticles"

export default function Load() {

  const nameanimate = { name: 'transition-all translate-y-12 ease-out opacity-0 duration-1000 delay-300', name2: 'transition-all translate-y-0 ease-out opacity-100 duration-1000 delay-300' }

  const [load, setLoaded] = useState(nameanimate.name)

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  
  useEffect(() => {
    setLoaded(nameanimate.name2)
  }, [])

  return <>
    <Head>
      <link rel="icon" type="image/x-icon" href="a.png" />
      <title>Andreas Yozef</title>  
    </Head>

    <body className="bg-gray-50">
    <div className="z-10 absolute left-1 bottom-1 drop-shadow-2xl mix-blend-difference invert-[.7]">
      <h1 className={load + ` text-4xl text-stone-900`}>Andreas <span className="font-bold ">Yozef</span></h1>
      <p className={load + ` text-stone-900 `}>I make website for living 🍙, Backend dev 🎒, <br />Linux enthusiast 🐧</p>
    </div>

    <div className={load + ` z-10 absolute right-1 bottom-1 drop-shadow-2xl mix-blend-difference invert-[.7]`}>
      <span className={` text-sm drop-shadow-lg text-stone-900`}>Made with ❤️ by <b><a href="https://github.com/andreasyny">andreas </a></b></span>
    </div>

    <div>
        <Particles className="absolute top-0 left-0 w-full h-full" url="https://raw.githubusercontent.com/matteobruni/tsparticles/main/websites/particles.js.org/presets/amongUs.json" init={particlesInit} loaded={particlesLoaded} />
    </div>

    <div className=" h-screen drop-shadow-2xl mix-blend-difference invert-[.7]">
      <div className={load + ` z-10`}>
        <ul className=" text-neutral-800 ">
          <li className="inline-block p-2 "><a href="https://github.com/andreasyny"><Github size={40} /></a></li>
          <li className="inline-block p-2"><a href="https://www.linkedin.com/in/andreasyozef/"><Linkedin  size={40} /></a></li>
          {/* <li className="inline-block p-2"><a href="https://www.twitter.com/sleepyandreas"><Twitter  size={40} /></a></li> */}
        </ul>
      </div>
    </div>
    </body>
    

  </>
}
