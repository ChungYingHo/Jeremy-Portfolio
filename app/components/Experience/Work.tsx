import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Link,
  CardFooter,
  Image
} from '@nextui-org/react'

const Work = () => {
  const projects = [
    {
      name: 'GeoCCP Platform',
      info: 'A platform for GeoSat to manage their data',
      tech: ['TypeScript', 'Nuxt3', 'Pinia', 'Vuetify', 'Sass/SCSS']
    }
  ]
  return (
    <Card className="w-2/3" shadow="sm">
      <CardHeader>
        <h4 className="text-2xl">Experience</h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="mb-3 flex flex-col gap-3">
          <p className="text-xl font-extrabold">Geosat</p>
          <p className="text-lg">Front-End Engineer, 2023-now</p>
        </div>
        {projects.map((project, index) => {
          return (
            <Card key={index} className="w-full !bg-slate-600" shadow="sm">
              <CardHeader>
                <div>
                  <h4 className="text-xl">{project.name}</h4>
                  <div className="mt-3 flex gap-3">
                    {project.tech.map((tech, index) => (
                      <div
                        key={index}
                        className="rounded-lg bg-primary-500 p-1 text-base text-white"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <p>{project.info}</p>
              </CardBody>
            </Card>
          )
        })}
      </CardBody>
    </Card>
  )
}

export default Work
