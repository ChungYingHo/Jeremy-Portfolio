import React from 'react'

const Laptop = () => {
  return (
    <div className="relative h-72 w-[28rem] overflow-hidden rounded-lg bg-gray-800 shadow-lg">
      {/* Screen Content */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <h1 className="text-lg font-bold text-white">Computer Screen</h1>
      </div>

      {/* Webcam */}
      <div className="absolute right-0 top-0 z-10 mr-2 mt-2 h-4 w-4 rounded-full bg-gray-700"></div>

      {/* Bottom Bar */}
      <div className="absolute left-0 top-0 flex h-8 w-full items-center bg-gray-900 px-4">
        <div className="mr-2 h-2 w-2 rounded-full bg-red-500"></div>
        <div className="mr-2 h-2 w-2 rounded-full bg-yellow-500"></div>
        <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
      </div>
    </div>
  )
}

export default Laptop
