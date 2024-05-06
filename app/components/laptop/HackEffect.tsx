'use client'

import React, { useEffect, useRef } from 'react'

interface MatrixProps {
  width: number
  height: number
  wordColor?: string
  fontSize?: number
  speed?: number
}

const Matrix: React.FC<MatrixProps> = ({
  width,
  height,
  wordColor = '#2dd4bf',
  fontSize = 16,
  speed = 0.1
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const W = width
    const H = height
    const words =
      "0123456789qwertyuiopasdfghjklzxcvbnm,./;'[]QWERTYUIOP{}ASDFGHJHJKL:ZXCVBBNM<>?"
    const wordsArr = words.split('')
    const columns = Math.floor(W / fontSize)
    const drops: number[] = Array.from({ length: columns }, () => 1)

    const draw = () => {
      ctx.fillStyle = `rgba(0, 0, 0, ${speed})`
      ctx.fillRect(0, 0, W, H)
      ctx.fillStyle = wordColor
      ctx.font = `${fontSize}px Arial`

      for (let i = 0; i < drops.length; i++) {
        const text = wordsArr[Math.floor(Math.random() * wordsArr.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > H && Math.random() > 0.98) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)

    return () => clearInterval(interval)
  }, [width, height, wordColor, fontSize, speed])

  return <canvas ref={canvasRef} width={width} height={height} />
}

export default Matrix
