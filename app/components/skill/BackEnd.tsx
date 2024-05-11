import Image from 'next/image'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider
} from '@nextui-org/react'
// front end Backend skill icons
import nodejsIcon from '@/public/nodejs.svg'
import pythonIcon from '@/public/python.svg'
import postgresqlIcon from '@/public/sql-postgres.svg'
import mysqlIcon from '@/public/sql-mysql.svg'

const Backend = () => {
  return (
    <Card
      isBlurred
      className="mt-5 w-full border-none !bg-slate-600 2xl:mt-0 2xl:w-fit"
    >
      <CardHeader>
        <p>Front-End Backend</p>
      </CardHeader>
      <Divider />
      <CardBody className="flex-row flex-wrap gap-5">
        {/* todo nodejs */}
        <Card
          shadow="sm"
          isFooterBlurred
          className="w-[calc(50%-1.25rem)] md:w-48 2xl:w-24"
        >
          <CardBody className="flex overflow-visible p-0">
            <Image
              alt="Nodejs"
              className="mx-auto mt-3 w-2/3 object-contain"
              src={nodejsIcon}
            />
          </CardBody>
          <CardFooter className="mt-3 flex justify-center bg-white/10 text-small">
            <b>Node.js</b>
          </CardFooter>
        </Card>
        {/* todo python */}
        <Card
          shadow="sm"
          isFooterBlurred
          className="w-[calc(50%-1.25rem)] md:w-48 2xl:w-24"
        >
          <CardBody className="flex items-center overflow-visible p-0">
            <Image
              alt="Python"
              className="mx-auto mt-3 w-2/3 object-contain"
              src={pythonIcon}
            />
          </CardBody>
          <CardFooter className="mt-3 flex justify-center bg-white/10 text-small">
            <b>Python</b>
          </CardFooter>
        </Card>
        {/* todo postgresql */}
        <Card
          shadow="sm"
          isFooterBlurred
          className="w-[calc(50%-1.25rem)] md:w-48 2xl:w-24"
        >
          <CardBody className="flex overflow-visible p-0">
            <Image
              alt="Postgresql"
              className="mx-auto mt-3 w-2/3 object-contain"
              src={postgresqlIcon}
            />
          </CardBody>
          <CardFooter className="mt-3 flex justify-center bg-white/10 text-small">
            <b>Postgresql</b>
          </CardFooter>
        </Card>
        {/* todo mysql */}
        <Card
          shadow="sm"
          isFooterBlurred
          className="w-[calc(50%-1.25rem)] md:w-48 2xl:w-24"
        >
          <CardBody className="flex overflow-visible p-0">
            <Image
              alt="Mysql"
              className="mx-auto mt-3 w-2/3 object-contain"
              src={mysqlIcon}
            />
          </CardBody>
          <CardFooter className="mt-3 flex justify-center bg-white/10 text-small">
            <b>Mysql</b>
          </CardFooter>
        </Card>
      </CardBody>
    </Card>
  )
}

export default Backend
