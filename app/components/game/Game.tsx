'use client'

import React, { useEffect, useState, useRef } from 'react'
import { Button } from '@nextui-org/react'

const Game = () => {
  const [isJumping, setIsJumping] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [cactusPassed, setCactusPassed] = useState(0)
  const dinoRef = useRef(null)
  const cactusRef = useRef(null)
  const cactusCounted = useRef(false)

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
  }, [gameStarted, isJumping, gameOver])

  return (
    <div className="relative h-[200px] w-[600px] border-b-2">
      {!gameStarted && !gameOver && (
        <>
          <Button
            onClick={startGame}
            color="warning"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            Start Game
          </Button>
          <div className="relative top-[130px] h-[70px] w-[70px] bg-[url('../public/dinosaur.png')] bg-[length:auto_70px]"></div>
          <div className="animate-castusDisplay relative left-[580px] top-[88px] h-[40px] w-[20px] bg-[url('../public/cactus.png')] bg-[length:20px_40px]"></div>
        </>
      )}
      {gameOver && (
        <>
          <Button
            onClick={restartGame}
            color="danger"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            Try Again
          </Button>
          <div className="relative top-[130px] h-[70px] w-[70px] bg-[url('../public/dinosaur.png')] bg-[length:auto_70px]"></div>
          <div className="animate-castusDisplay relative left-[580px] top-[88px] h-[40px] w-[20px] bg-[url('../public/cactus.png')] bg-[length:20px_40px]"></div>
        </>
      )}
      <div
        ref={dinoRef}
        className={`relative top-[130px] h-[70px] w-[70px] bg-[url('../public/dinosaur.png')] bg-[length:auto_70px] ${isJumping ? 'animate-jump' : ''} ${!gameStarted ? 'hidden' : ''}`}
      ></div>
      <div
        ref={cactusRef}
        className={`animate-cactus relative left-[580px] top-[88px] h-[40px] w-[20px] bg-[url('../public/cactus.png')] bg-[length:20px_40px] ${!gameStarted ? 'hidden' : ''}`}
      ></div>
      {gameStarted && (
        <div className="absolute right-0 top-0 m-4 text-lg">
          Cactus Jumped: {cactusPassed}
        </div>
      )}
    </div>
  )
}

export default Game
