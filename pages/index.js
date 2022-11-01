import Head from "next/head"
import { useEffect, useState } from "react"
import { Github, Linkedin, Twitter } from '@icons-pack/react-simple-icons'

export default function Load() {

  const nameanimate = { name: 'transition-all translate-y-12 ease-out opacity-0 duration-1000 delay-300', name2: 'transition-all translate-y-0 ease-out opacity-100 duration-1000 delay-300' }

  
  const [muted, setMuted] = useState(true)
  const [load, setLoaded] = useState(nameanimate.name)

  useEffect(() => {
    // handles mute
    if (muted) {
      document.getElementById("vid").muted = true
      document.getElementById("vol").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 m-1">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
    </svg>`
    }else{
      document.getElementById("vid").muted = false
      document.getElementById("vol").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-7 h-7 m-1">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
    </svg>    
    `
    }

    // hacky way to do it, it works tho
    document.getElementById("inputVol").value = document.getElementById("vid").volume
    setLoaded(nameanimate.name2)
  }, [muted, nameanimate.name2])

  return <>
    <Head>
      <link rel="icon" type="image/x-icon" href="a.png" />
      <title>Andreas Yozef</title>  
    </Head>
    <div className="z-10 absolute left-1 bottom-1 drop-shadow-2xl">
      <h1 className={load + ` text-neutral-800 text-4xl`}>Andreas <span className="font-bold ">Yozef</span></h1>
      <p className={load + ` text-neutral-800`}>I make website for living 🍙, Backend dev 🎒, <br />Linux enthusiast 🐧</p>
    </div>

    <div className="z-10 absolute right-1 bottom-1 text-neutral-800 drop-shadow-2xl">
      <span className={load + ` text-sm drop-shadow-lg`}>Made with ❤️ by <b><a href="https://github.com/andreasyny">andreas </a></b></span>
    </div>

    

    <div className="z-10 absolute right-0 top-0 text-slate-50 opacity-25 hover:opacity-100 ">
      <div className="bg-slate-800">
        <ul>
          <li className="inline-block"><a id="vol" className="" href="#" onClick={(e) =>{
            setMuted(!muted)
          }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>     
        </a>
          </li>
          {/* this volume needs to be revamp, the volume need to be synced with a variable */}
          <li className="inline-block"><input type="range" name="volume" id="inputVol" min="0.1" max="1" step="0.1" onChange={e=>{
            // setVolume(e.target.value)
            document.getElementById("vid").volume = e.target.value
          }} /></li>
          <li><a className="pl-1" href="http://www.youtube.com/watch?v=_B3ed2Z2qgs"><ins>"Out-sourced" video</ins></a></li>
        </ul>
      </div>
      {/* <span className={load + ` text-sm`} ><a href="https://www.youtube.com/watch?v=_B3ed2Z2qgs">Video</a></span> */}
    </div>

    <video id="vid" className="z-0 absolute h-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-sm" src="assets/flowers_mountains_and_funerals_abuse.mp4" autoPlay loop muted></video>

    <div className=" h-screen drop-shadow-2xl">
      <div className={load + ` z-10`}>
        <ul className=" text-neutral-800">
          <li className="inline-block p-2"><a href="https://github.com/andreasyny"><Github color='black' size={40} /></a></li>
          <li className="inline-block p-2"><a href="https://www.linkedin.com/in/andreasyozef/"><Linkedin color="black" size={40} /></a></li>
          <li className="inline-block p-2"><a href="https://www.twitter.com/sleepyandreas"><Twitter color="black" size={40} /></a></li>
        </ul>
      </div>
    </div>

  </>
}
