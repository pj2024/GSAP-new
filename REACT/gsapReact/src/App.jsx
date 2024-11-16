import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const App = () => {
  
  // useGSAP(()=>{
  //     gsap.to('.box',{
  //       x:800,
  //       duration: 1,
  //       delay:1,
  //       repeat:-1,
  //       yoyo: true
  //     })
  // })

  const gsapRef = useRef()

  useGSAP(()=>{
    gsap.to(gsapRef.current,{
        x:800,
        duration: 1,
        delay:1,
        repeat:-1,
        yoyo: true
    })
  })

  return (
    <main className='w-full h-screen bg-[#212121] text-[#f1f1f1] p-4'>
        <div ref={gsapRef} className='box w-[300px] h-[300px] rounded-lg bg-red-500'></div>
    </main>
  )
}

export default App