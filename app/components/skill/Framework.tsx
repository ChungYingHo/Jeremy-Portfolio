import Image from 'next/image'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider
} from '@nextui-org/react'
// front end framework skill icons
import reactIcon from '@/public/react.svg'
import nextIcon from '@/public/next.svg'
import vueIcon from '@/public/vue.svg'
import nuxtIcon from '@/public/nuxt.svg'
import piniaIcon from '@/public/pinia.svg'

const Framework = () => {
  return (
    <Card isBlurred className="w-fit border-none !bg-slate-600">
      <CardHeader>
        <p>Front-End Framework</p>
      </CardHeader>
      <Divider />
      <CardBody className="flex-row gap-5">
        {/* todo html */}
        <Card shadow="sm" isFooterBlurred className="w-28">
          <CardBody className="flex overflow-visible p-0">
            <Image
              alt="React"
              className="mx-auto mt-3 w-2/3 object-contain"
              src={reactIcon}
            />
          </CardBody>
          <CardFooter className="mt-3 flex justify-center bg-white/10 text-small">
            <b>React</b>
          </CardFooter>
        </Card>
        {/* todo next */}
        <Card shadow="sm" isFooterBlurred className="w-28">
          <CardBody className="flex items-center overflow-visible p-0">
            <Image
              alt="Next"
              className="mx-auto mt-3 w-2/3 object-contain"
              src={nextIcon}
            />
          </CardBody>
          <CardFooter className="mt-3 flex justify-center bg-white/10 text-small">
            <b>Next</b>
          </CardFooter>
        </Card>
        {/* todo vue */}
        <Card shadow="sm" isFooterBlurred className="w-28">
          <CardBody className="flex overflow-visible p-0">
            <Image
              alt="Vue"
              className="mx-auto mt-3 w-2/3 object-contain"
              src={vueIcon}
            />
          </CardBody>
          <CardFooter className="mt-3 flex justify-center bg-white/10 text-small">
            <b>Vue</b>
          </CardFooter>
        </Card>
        {/* todo nuxt */}
        <Card shadow="sm" isFooterBlurred className="w-28">
          <CardBody className="flex overflow-visible p-0">
            <Image
              alt="Nuxt"
              className="mx-auto mt-3 w-2/3 object-contain"
              src={nuxtIcon}
            />
          </CardBody>
          <CardFooter className="mt-3 flex justify-center bg-white/10 text-small">
            <b>Nuxt</b>
          </CardFooter>
        </Card>
        {/* todo pinia */}
        <Card shadow="sm" isFooterBlurred className="w-28">
          <CardBody className="flex overflow-visible p-0">
            <Image
              alt="Pinia"
              className="mx-auto mt-3 w-1/2 object-contain"
              src={piniaIcon}
            />
          </CardBody>
          <CardFooter className="mt-3 flex justify-center bg-white/10 text-small">
            <b>Pinia</b>
          </CardFooter>
        </Card>
      </CardBody>
    </Card>
  )
}

export default Framework
