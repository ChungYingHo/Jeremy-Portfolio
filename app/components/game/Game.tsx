'use client'

import React, { useEffect, useState, useRef } from 'react'
import { Button } from '@nextui-org/react'

const Game = () => {
  const [isJumping, setIsJumping] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [cactusPassed, setCactusPassed] = useState(0)
  const [isRestart, setIsRestart] = useState(false)
  const dinoRef = useRef(null)
  const cactusRef = useRef(null)
  const cactusCounted = useRef(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const jump = () => {
    if (!isJumping) {
      setIsJumping(true)
      setTimeout(() => {
        setIsJumping(false)
      }, 300)
    }
  }

  const startGame = () => {
    setGameStarted(true)
    setGameOver(false)
    setCactusPassed(0)
    cactusCounted.current = false
  }

  const restartGame = () => {
    setGameStarted(false)
    setGameOver(false)
    setCactusPassed(0)
    setIsJumping(false)
    cactusCounted.current = false
    setTimeout(startGame, 100) // 延遲啟動遊戲，避免立即碰撞
    setIsRestart(true)
  }

  useEffect(() => {
    if (gameStarted && !gameOver) {
      const checkCollision = setInterval(() => {
        const dino = dinoRef.current
        const cactus = cactusRef.current

        if (dino && cactus) {
          const dinoTop = parseInt(
            window.getComputedStyle(dino).getPropertyValue('top')
          )
          const cactusLeft = parseInt(
            window.getComputedStyle(cactus).getPropertyValue('left')
          )

          if (cactusLeft > 0 && cactusLeft < 70 && dinoTop >= 130) {
            setGameOver(true)
            setGameStarted(false)
          } else if (cactusLeft < 0 && !cactusCounted.current) {
            setCactusPassed((prev) => prev + 1)
            cactusCounted.current = true
          } else if (cactusLeft > 70) {
            cactusCounted.current = false
          }
        }
      }, 10)

      return () => clearInterval(checkCollision)
    }
  }, [gameStarted, gameOver])

  useEffect(() => {
    const handleKeyDown = (event: { code: string }) => {
      if (event.code === 'Space' && gameStarted && !gameOver) {
        jump()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [gameStarted, isJumping, gameOver, jump])

  return (
    <div className="relative flex h-[400px] w-[640px] items-end justify-center rounded-xl border-1 border-gray-900 bg-lime-100 shadow-lg">
      {/* Webcam */}
      <div className="absolute right-0 top-0 z-10 mr-2 mt-2 h-4 w-4 rounded-full bg-gray-700"></div>

      {/* top Bar */}
      <div className="absolute left-0 top-0 flex h-8 w-full items-center rounded-t-md bg-gray-900 px-4">
        <div className="mr-2 h-2 w-2 rounded-full bg-red-500"></div>
        <div className="mr-2 h-2 w-2 rounded-full bg-yellow-500"></div>
        <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
      </div>
      <div className="relative h-[200px] w-[600px]">
        {!gameStarted && !gameOver && !isRestart && (
          <>
            <Button
              onClick={startGame}
              color="warning"
              className="absolute left-1/2 top-0 -translate-x-1/2"
            >
              Start Game
            </Button>
            <div className="relative top-[130px] h-[70px] w-[70px] bg-[url('../public/dinosaur.png')] bg-[length:auto_70px]"></div>
            <div className="relative left-[580px] top-[88px] h-[40px] w-[20px] animate-castusDisplay bg-[url('../public/cactus.png')] bg-[length:20px_40px]"></div>
          </>
        )}
        {gameOver && (
          <>
            <div className="absolute left-1/2 top-0 flex -translate-x-1/2 flex-col items-center gap-1">
              <Button onClick={restartGame} color="danger">
                Try Again
              </Button>
              <p>Total score: {cactusPassed}</p>
            </div>

            <div className="relative top-[130px] h-[70px] w-[70px] bg-[url('../public/dinosaur.png')] bg-[length:auto_70px]"></div>
            <div className="relative left-[580px] top-[88px] h-[40px] w-[20px] animate-castusDisplay bg-[url('../public/cactus.png')] bg-[length:20px_40px]"></div>
          </>
        )}
        <div
          ref={dinoRef}
          className={`relative top-[130px] h-[70px] w-[70px] bg-[url('../public/dinosaur.png')] bg-[length:auto_70px] ${isJumping ? 'animate-jump' : ''} ${!gameStarted ? 'hidden' : ''}`}
        ></div>
        <div
          ref={cactusRef}
          className={`relative left-[580px] top-[88px] h-[40px] w-[20px] animate-cactus bg-[url('../public/cactus.png')] bg-[length:20px_40px] ${!gameStarted ? 'hidden' : ''}`}
        ></div>
        {gameStarted && (
          <div className="absolute right-0 top-0 m-4 text-lg">
            Cactus Jumped: {cactusPassed}
          </div>
        )}
      </div>
    </div>
  )
}

export default Game
