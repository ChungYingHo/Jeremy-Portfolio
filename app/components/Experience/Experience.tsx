import React from 'react'
import Education from './Education'
import Work from './Work'

const Experience = () => {
  return (
    <div className="flex w-full flex-col gap-5 2xl:flex-row">
      <Work />
      <Education />
    </div>
  )
}

export default Experience
