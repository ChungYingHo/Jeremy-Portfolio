import React from 'react'
import { Card, CardHeader, CardBody, Divider, Link } from '@nextui-org/react'

const Experience = () => {
  return (
    <div>
      <div>
        <Card
          isBlurred
          className="max-w-[610px] border-none bg-background/60"
          shadow="sm"
        >
          <CardHeader>
            <h4 className="text-2xl">Education and Certifications</h4>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>National Taiwan University</p>
            <Link
              href="https://lighthouse.alphacamp.co/certificates/e3ddc657-fff1-4418-a2a3-26410aba4c76"
              color="warning"
              target="_blank"
            >
              ALPHA Camp Full Stack Web Development Program
            </Link>
            <Link
              href="https://www.coursera.org/account/accomplishments/specialization/certificate/FFURV7RSYVSZ"
              color="warning"
              target="_blank"
            >
              Meta Front-End Developer
            </Link>
            <Link
              href="https://www.coursera.org/account/accomplishments/specialization/certificate/2VCBF9HGQBPD"
              color="warning"
              target="_blank"
            >
              Python for Everybody
            </Link>
            <Link href="#" color="danger">
              Meta Back-End Developer
            </Link>
            <Link
              href="https://www.coursera.org/account/accomplishments/specialization/certificate/HXFUNXNGK2L5"
              color="warning"
              target="_blank"
            >
              Google Data Analytics
            </Link>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Experience
