import Head from "next/head"
import { useState } from "react"
import { SimpleIcon } from "simple-icons"

export default function Load() {

  const nameanimate = {name: 'transition-all translate-y-12 ease-out opacity-0 duration-1000 delay-300', name2: 'transition-all translate-y-0 ease-out opacity-100 duration-1000 delay-300'}

  const [load, setLoaded] = useState(nameanimate.name)
  function loading(params) {
    setTimeout(() => {
      setLoaded(nameanimate.name2)
    }, 100);
  }

  return <>
    <Head>
      <link rel="icon" type="image/x-icon" href="a.png"/>
      <title>Andreas Yozef</title>
    </Head>
    
    <div onLoad={loading()} className="absolute left-1 bottom-1">
      <h1 className={load + ` text-slate-50 text-4xl`}>Andreas <span className="font-bold ">Yozef</span></h1>
      <p className={load + ` text-slate-50`}>I make website for living 🍙, Backend dev 🎒, <br />Linux enthusiast 🐧</p>
      {/* <ul>
        <li><a href="">test</a></li>
      </ul> */}
    </div>

    <div className="absolute right-1 bottom-1">
      <span className={load + ` text-slate-50`}>Made with ❤️ by <b><a href="https://github.com/andreasyny">andreasyny</a></b></span>
    </div>

    <div className="bg-slate-800 h-screen"></div>
  </>  
}
