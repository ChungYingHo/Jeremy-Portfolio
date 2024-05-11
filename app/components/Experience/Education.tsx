import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Link,
  CardFooter,
  Image
} from '@nextui-org/react'

const Education = () => {
  const certifications = [
    {
      name: 'Meta Front-End Developer',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/FFURV7RSYVSZ',
      color: 'success',
      mechanism: 'Meta, Coursera'
    },
    {
      name: 'Meta Back-End Developer',
      link: '#',
      color: 'warning',
      mechanism: 'Meta, Coursera (In Progress)'
    },
    {
      name: 'Python for Everybody',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/2VCBF9HGQBPD',
      color: 'success',
      mechanism: 'Coursera'
    },
    {
      name: 'Full Stack Web Dev',
      link: 'https://lighthouse.alphacamp.co/certificates/e3ddc657-fff1-4418-a2a3-26410aba4c76',
      color: 'success',
      mechanism: 'ALPHA Camp'
    },
    {
      name: 'Google Data Analytics',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/HXFUNXNGK2L5',
      color: 'success',
      mechanism: 'Google, Coursera'
    }
  ]

  return (
    <Card className="w-full 2xl:w-[45%]" shadow="sm">
      <CardHeader>
        <h4 className="desktop-3xl:text-2xl text-lg">
          Education and Certifications
        </h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="desktop-3xl:text-xl mb-3 font-extrabold">
          Highest Education
        </p>
        {/* todo education card */}
        <Card isBlurred className="w-full border-none !bg-slate-600 2xl:mb-3">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={50}
              radius="full"
              src="/ntu.png"
              width={50}
            />
            <div className="flex flex-col">
              <p className="text-base">National Taiwan University</p>
              <p className="my-1 text-sm">Master degree of Agronomy</p>
              <p className="text-xs text-default-500">2020.09-2022.07</p>
            </div>
          </CardHeader>
        </Card>
        <Divider />
        <p className="desktop-3xl:text-xl my-3 font-extrabold">
          Professional Certifications
        </p>
        {/* todo certification card */}
        <div className="desktop-3xl:flex-col flex flex-wrap justify-between">
          {certifications.map((certification, index) => (
            <Card
              key={index}
              isBlurred
              className="mb-5 w-full border-none !bg-slate-600 2xl:mb-3 2xl:w-[calc(50%-10px)]"
            >
              <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                  <Link
                    color={
                      certification.color as
                        | 'success'
                        | 'warning'
                        | 'foreground'
                        | 'primary'
                        | 'secondary'
                        | 'danger'
                        | undefined
                    }
                    href={certification.link}
                    showAnchorIcon
                    className="text-base"
                    isExternal
                  >
                    {certification.name}
                  </Link>
                  <p className="text-sm text-default-500">
                    {certification.mechanism}
                  </p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

export default Education
