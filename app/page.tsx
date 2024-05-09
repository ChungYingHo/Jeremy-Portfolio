'use client'

import React, { useEffect } from 'react'
import Text from './components/dynamic_text/Text'
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
    <main className="h-[calc(100vh-4rem)] w-screen snap-y snap-mandatory overflow-y-scroll bg-default-300 text-foreground-800">
      <div className="flex h-[calc(100vh-4rem)] w-full snap-center items-center justify-between bg-gray-600 px-28 lg:px-72">
        <Text />
        <Game />
      </div>
      <div className="flex h-[calc(100vh-4rem)] w-full snap-center items-center bg-gray-600 px-28 lg:px-72">
        <Experience />
      </div>
      <div className="flex h-[calc(100vh-4rem)] w-full snap-center items-center justify-center bg-gray-600 px-28 lg:px-72">
        <Skill />
      </div>
      {/* <div className="flex h-[calc(100vh-4rem)] w-full snap-center items-center justify-center bg-gray-600 px-28">
          <Game />
        </div> */}
    </main>
  )
}
