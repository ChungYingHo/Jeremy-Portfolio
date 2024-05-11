'use client'

import { useEffect, useState } from 'react'

const FirstText = () => {
  return (
    <p className="relative mr-2 flex h-[5rem] items-center whitespace-nowrap text-5xl font-black text-cyan-300 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:animate-typewriter before:border-l-2 before:border-yellow-300 before:bg-gray-600 before:content-['']">
      a Web Developer.
    </p>
  )
}

const SecondText = () => {
  return (
    <p className="relative mr-2 flex h-[5rem] items-center whitespace-nowrap text-5xl font-black text-cyan-300 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:animate-typewriter before:border-l-2 before:border-yellow-300 before:bg-gray-600 before:content-['']">
      a Blogger.
    </p>
  )
}

export default function Text() {
  const [showFirstText, setText] = useState(true)
  useEffect(() => {
    const interval = setInterval(() => {
      setText((showFirstText) => !showFirstText)
    }, 4000)
    return () => clearInterval(interval)
  }, [showFirstText])

  return (
    <div className="mt-5 hidden md:block xl:mt-0">
      <p className="mb-7 whitespace-nowrap text-xl text-cyan-200 xl:mb-10">
        Hi, my name is
      </p>
      <p className="mb-3 text-5xl font-bold text-slate-300 xl:mb-5">
        Chung-Ying, Ho.
      </p>
      <div className="relative flex items-center gap-5 overflow-hidden">
        <p className="whitespace-nowrap text-5xl font-bold text-slate-400">
          I am{' '}
        </p>
        <div className="relative">
          {showFirstText ? <FirstText /> : <SecondText />}
        </div>
      </div>
    </div>
  )
}
