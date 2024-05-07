'use client'

import React, { useEffect, useState } from 'react'

const Game: React.FC = () => {
  const [score, setScore] = useState(0)

  const jump = () => {
    setDinoBottom('100px')
    setTimeout(() => {
      setDinoBottom('0')
    }, 300)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === 32) {
        jump()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setObstacles((obstacles) => {
        const newObstacles = obstacles.map((obstacle) => {
          const newPosition = obstacle.position - 1
          if (newPosition < -10) {
            setScore((score) => score + 1)
            return { position: 100 }
          } else {
            return { position: newPosition }
          }
        })
        return newObstacles
      })
    }, 20)

    return () => clearInterval(intervalId)
  }, [])

  const [dinoBottom, setDinoBottom] = useState('0')
  const [obstacles, setObstacles] = useState([{ position: 100 }])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#f7f7f7',
        position: 'relative',
        fontFamily: 'Arial, sans-serif',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: '#666',
          position: 'absolute',
          bottom: dinoBottom,
          left: '50px',
          transition: 'bottom 0.1s'
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          fontSize: '24px'
        }}
      >
        Score: {score}
      </div>
      {obstacles.map((obstacle, index) => (
        <div
          key={index}
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#333',
            position: 'absolute',
            bottom: 0,
            right: `${obstacle.position}%`,
            transition: 'right 2s linear'
          }}
        ></div>
      ))}
    </div>
  )
}

export default Game
