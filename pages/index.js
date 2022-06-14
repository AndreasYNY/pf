import Head from "next/head"
import { useState } from "react"

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
    
    <div onLoad={loading()} className="bg-slate-800 h-screen grid place-items-center">
      <h1 className={load + ` text-slate-50 text-4xl`}>Andreas <span className="font-bold ">Yozef</span></h1>
    </div>

    
  </>  
}
