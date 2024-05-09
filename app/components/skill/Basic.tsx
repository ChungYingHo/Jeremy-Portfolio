import Image from 'next/image'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider
} from '@nextui-org/react'
// front end basic skill icons
import htmlIcon from '@/public/html.svg'
import cssIcon from '@/public/css.svg'
import jsIcon from '@/public/javascript.svg'
import tsIcon from '@/public/typescript.svg'

const Basic = () => {
  return (
    <Card isBlurred className="w-fit border-none !bg-slate-600">
      <CardHeader>
        <p>Front-End Basic</p>
      </CardHeader>
      <Divider />
      <CardBody className="flex-row gap-5">
        {/* todo html */}
        <Card shadow="sm" isFooterBlurred className="desktop-3xl:w-28 w-24">
          <CardBody className="flex overflow-visible p-0">
            <Image
              alt="HTML"
              className="mx-auto mt-3 w-2/3 object-contain"
              src={htmlIcon}
            />
          </CardBody>
          <CardFooter className="mt-3 flex justify-center bg-white/10 text-small">
            <b>HTML</b>
          </CardFooter>
        </Card>
        {/* todo css */}
        <Card shadow="sm" isFooterBlurred className="desktop-3xl:w-28 w-24">
          <CardBody className="flex overflow-visible p-0">
            <Image
              alt="CSS"
              className="mx-auto mt-3 w-2/3 object-contain"
              src={cssIcon}
            />
          </CardBody>
          <CardFooter className="mt-3 flex justify-center bg-white/10 text-small">
            <b>CSS</b>
          </CardFooter>
        </Card>
        {/* todo js */}
        <Card shadow="sm" isFooterBlurred className="desktop-3xl:w-28 w-24">
          <CardBody className="flex overflow-visible p-0">
            <Image
              alt="JavaScript"
              className="mx-auto mt-3 w-2/3 object-contain"
              src={jsIcon}
            />
          </CardBody>
          <CardFooter className="mt-3 flex justify-center bg-white/10 text-small">
            <b>JavaScript</b>
          </CardFooter>
        </Card>
        {/* todo ts */}
        <Card shadow="sm" isFooterBlurred className="desktop-3xl:w-28 w-24">
          <CardBody className="flex overflow-visible p-0">
            <Image
              alt="TypeScript"
              className="mx-auto mt-3 w-2/3 object-contain"
              src={tsIcon}
            />
          </CardBody>
          <CardFooter className="mt-3 flex justify-center bg-white/10 text-small">
            <b>TypeScript</b>
          </CardFooter>
        </Card>
      </CardBody>
    </Card>
  )
}

export default Basic
