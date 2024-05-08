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
      name: 'ALPHA Camp Full Stack Web Development Program',
      link: 'https://lighthouse.alphacamp.co/certificates/e3ddc657-fff1-4418-a2a3-26410aba4c76',
      color: 'success',
      mechanism: 'ALPHA Camp'
    },
    {
      name: 'Meta Front-End Developer',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/FFURV7RSYVSZ',
      color: 'success',
      mechanism: 'Meta, Coursera'
    },
    {
      name: 'Python for Everybody',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/2VCBF9HGQBPD',
      color: 'success',
      mechanism: 'Coursera'
    },
    {
      name: 'Meta Back-End Developer (In Progress)',
      link: '#',
      color: 'warning',
      mechanism: 'Meta, Coursera'
    },
    {
      name: 'Google Data Analytics',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/HXFUNXNGK2L5',
      color: 'success',
      mechanism: 'Google, Coursera'
    }
  ]

  return (
    <Card className="w-1/2" shadow="sm">
      <CardHeader>
        <h4 className="text-2xl">Education and Certifications</h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="mb-3 text-xl">Highest Education</p>
        {/* todo education card */}
        <Card isBlurred className="mb-5 w-full border-none !bg-slate-600">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">National Taiwan University</p>
              <p className="text-small text-default-500">2020.09-2022.07</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Master degree of Agronomy.</p>
          </CardBody>
        </Card>
        <Divider />
        <p className="my-3 text-xl">Professional Certifications</p>
        {/* todo certification card */}
        <div className="flex flex-wrap justify-between">
          {certifications.map((certification, index) => (
            <Card
              key={index}
              isBlurred
              className="mb-3 w-[calc(50%-10px)] border-none !bg-slate-600"
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
                    target="_blank"
                  >
                    {certification.name}
                  </Link>
                  <p className="text-small text-default-500">
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
