import Image from 'next/image'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider
} from '@nextui-org/react'
import Basic from './Basic'
import Framework from './Framework'
import CssRelative from './CssRelative'
import BackEnd from './BackEnd'

const Skill = () => {
  return (
    <div className="w-full">
      <Card className="w-full">
        <CardHeader>
          <h2 className="2xl:text-lg">My Skills</h2>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col justify-between 2xl:flex-row">
            {/* front-end basic skill */}
            <Basic />
            {/* front framework */}
            <Framework />
          </div>
          <div className="mt-5 flex flex-col justify-between 2xl:mt-16 2xl:flex-row">
            {/* front end CssRelative skill icons */}
            <CssRelative />
            {/* backend skill */}
            <BackEnd />
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default Skill
