import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Link,
  CardFooter,
  Image,
  Chip
} from '@nextui-org/react'

const Page = () => {
  const portfolios = [
    {
      name: 'PLANTAE Taiwan',
      link: 'https://plantae-taiwan.vercel.app/',
      color: 'warning',
      img: '/portfolio/plantae.jpg',
      description: 'This is the brand image website of PLANTAE Taiwan.',
      tech: [
        'Nuxt3',
        'Pinia',
        'TypeScript',
        'Tailwind CSS',
        'Sass/SCSS',
        'Node.js',
        'Postgres SQL'
      ]
    }
  ]
  return (
    <main className="min-h-[calc(100vh-4rem)] w-screen overflow-y-scroll bg-gray-600 px-8 py-5 text-foreground-800 xl:px-24 2xl:px-48">
      {portfolios.map((portfolio, index) => (
        <Card key={index} className="w-full lg:w-1/2">
          <CardHeader className="flex flex-col items-start">
            <Link
              showAnchorIcon
              className="text-base"
              href={portfolio.link}
              color={
                portfolio.color as
                  | 'warning'
                  | 'foreground'
                  | 'primary'
                  | 'secondary'
                  | 'success'
                  | 'danger'
                  | undefined
              }
              isExternal
            >
              {portfolio.name}
            </Link>
            <p className="my-3 text-xs">2023.03 - now</p>
            <div className="flex flex-wrap gap-2">
              {portfolio.tech.map((tech, index) => (
                <Chip
                  key={index}
                  color="warning"
                  className="text-xs"
                  variant="shadow"
                >
                  {tech}
                </Chip>
              ))}
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Image
              alt={portfolio.name}
              className="mx-auto mt-3 w-full object-contain"
              src={portfolio.img}
            />
          </CardBody>
          <Divider />
          <CardFooter>
            <p className="mb-3">{portfolio.description}</p>
          </CardFooter>
        </Card>
      ))}
    </main>
  )
}

export default Page
