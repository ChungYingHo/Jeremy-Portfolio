import Image from 'next/image'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider
} from '@nextui-org/react'
// front end CssRelative skill icons
import scssIcon from '@/public/scss.svg'
import tailwindIcon from '@/public/tailwind.svg'
import bootstrapIcon from '@/public/bootstrap.svg'
import vuetifyIcon from '@/public/vuetify.svg'
import nextuiIcon from '@/public/nextui.svg'

const CssRelative = () => {
  return (
    <Card isBlurred className="w-full border-none !bg-slate-600 2xl:w-fit">
      <CardHeader>
        <p>CSS Frameworks and Preprocessors</p>
      </CardHeader>
      <Divider />
      <CardBody className="flex-row flex-wrap gap-5">
        {/* todo scss */}
        <Card
          shadow="sm"
          isFooterBlurred
          className="w-[calc(50%-1.25rem)] md:w-48 2xl:w-24"
        >
          <CardBody className="flex overflow-visible p-0">
            <Image
              alt="Sass/SCSS"
              className="mx-auto mt-3 w-2/3 object-contain"
              src={scssIcon}
            />
          </CardBody>
          <CardFooter className="mt-3 flex justify-center bg-white/10 text-small">
            <b>Sass/SCSS</b>
          </CardFooter>
        </Card>
        {/* todo tailwind */}
        <Card
          shadow="sm"
          isFooterBlurred
          className="w-[calc(50%-1.25rem)] md:w-48 2xl:w-24"
        >
          <CardBody className="flex overflow-visible p-0">
            <Image
              alt="Tailwind CSS"
              className="mx-auto mt-3 w-2/3 object-contain"
              src={tailwindIcon}
            />
          </CardBody>
          <CardFooter className="mt-3 flex justify-center bg-white/10 text-small">
            <b>Tailwind CSS</b>
          </CardFooter>
        </Card>
        {/* todo bootstrap */}
        <Card
          shadow="sm"
          isFooterBlurred
          className="w-[calc(50%-1.25rem)] md:w-48 2xl:w-24"
        >
          <CardBody className="flex overflow-visible p-0">
            <Image
              alt="Bootstrap"
              className="mx-auto mt-3 w-2/3 object-contain"
              src={bootstrapIcon}
            />
          </CardBody>
          <CardFooter className="mt-3 flex justify-center bg-white/10 text-small">
            <b>Bootstrap</b>
          </CardFooter>
        </Card>
        {/* todo vuetify */}
        <Card
          shadow="sm"
          isFooterBlurred
          className="w-[calc(50%-1.25rem)] md:w-48 2xl:w-24"
        >
          <CardBody className="flex overflow-visible p-0">
            <Image
              alt="Vuetify"
              className="mx-auto mt-3 w-2/3 object-contain"
              src={vuetifyIcon}
            />
          </CardBody>
          <CardFooter className="mt-3 flex justify-center bg-white/10 text-small">
            <b>Vuetify</b>
          </CardFooter>
        </Card>
        {/* todo nextui */}
        <Card
          shadow="sm"
          isFooterBlurred
          className="w-[calc(50%-1.25rem)] md:w-48 2xl:w-24"
        >
          <CardBody className="flex overflow-visible p-0">
            <Image
              alt="NextUI"
              className="mx-auto mt-3 w-2/3 object-contain"
              src={nextuiIcon}
            />
          </CardBody>
          <CardFooter className="mt-3 flex justify-center bg-white/10 text-small">
            <b>NextUI</b>
          </CardFooter>
        </Card>
      </CardBody>
    </Card>
  )
}

export default CssRelative
