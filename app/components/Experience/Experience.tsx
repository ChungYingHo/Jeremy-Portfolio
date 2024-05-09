import React from 'react'
import Education from './Education'
import Work from './Work'

const Experience = () => {
  return (
    <div className="flex w-full gap-5">
      <Work />
      <Education />
    </div>
  )
}

export default Experience
