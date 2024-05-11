'use client'

import React, { useEffect } from 'react'
import Text from './components/dynamic_text/Text'
import MiniText from './components/dynamic_text/MiniText'
// import HackEffect from './components/laptop/HackEffect'
// import Laptop from './components/laptop/Laptop'
import Game from './components/game/Game'
import Experience from './components/Experience/Experience'
import Skill from './components/skill/Skill'

export default function Home() {
  useEffect(() => {
    const disableSpaceScroll = (event: {
      code: string
      preventDefault: () => void
    }) => {
      if (event.code === 'Space') {
        event.preventDefault() // 阻止空白键的默认行为（滚动）
      }
    }

    // 在 document 上添加键盘事件监听器
    document.addEventListener('keydown', disableSpaceScroll)

    // 组件卸载时移除事件监听器
    return () => {
      document.removeEventListener('keydown', disableSpaceScroll)
    }
  }, [])
  return (
    <main className="w-screen overflow-y-scroll bg-gray-600 text-foreground-800 2xl:h-[calc(100vh-4rem)] 2xl:snap-y 2xl:snap-mandatory">
      <div className="flex w-full flex-col bg-gray-600 px-8 xl:min-h-[calc(100vh-4rem)] xl:flex-row xl:items-center xl:justify-between xl:px-24 2xl:h-[calc(100vh-4rem)] 2xl:snap-center 2xl:px-48">
        <Text />
        <MiniText />
        <Game />
      </div>
      <div className="my-7 flex w-full items-center bg-gray-600 px-8 xl:px-24 2xl:my-0 2xl:h-[calc(100vh-4rem)] 2xl:snap-center 2xl:px-48">
        <Experience />
      </div>
      <div className="flex w-full items-center justify-center bg-gray-600 px-8 xl:px-24 2xl:h-[calc(100vh-4rem)] 2xl:snap-center 2xl:px-48">
        <Skill />
      </div>
      {/* <div className="flex h-[calc(100vh-4rem)] w-full snap-center items-center justify-center bg-gray-600 px-28">
          <Game />
        </div> */}
    </main>
  )
}
