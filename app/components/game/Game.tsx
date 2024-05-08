'use client'

import React, { useEffect, useState, useRef } from 'react'

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
    <div className="relative m-auto h-[200px] w-[600px] border-1">
      {!gameStarted && !gameOver && (
        <button
          onClick={startGame}
          className="absolute left-2 top-2 bg-blue-500 p-2 text-white"
        >
          Start Game
        </button>
      )}
      {gameOver && (
        <button
          onClick={restartGame}
          className="absolute left-2 top-2 bg-red-500 p-2 text-white"
        >
          Try Again
        </button>
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
          Cacti Jumped: {cactusPassed}
        </div>
      )}
    </div>
  )
}

export default Game
