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
      name: 'Cloud computing platform',
      info: 'This platform is used for drone image processing, layer stacking, map measurement, and subsequent analysis requirements.',
      tech: [
        'TypeScript',
        'Nuxt3',
        'Pinia',
        'Vuetify',
        'Sass/SCSS',
        'OpenLayers',
        'Cesium'
      ]
    },
    {
      name: 'Unmanned aerial vehicle (UAV) pilot training platform',
      info: 'This platform provides information on UAV pilot training, exam details, and online simulated exams.',
      tech: ['Nuxt3', 'Pinia', 'Vuetify', 'Sass/SCSS']
    },
    {
      name: 'Road excavation system',
      info: 'This system assists pipeline units in applying for road excavation and facilitates public agency reviews.',
      tech: ['Vue2', 'Vuex', 'Vue Router', 'Vuetify']
    }
  ]
  return (
    <Card className="desktop-3xl:w-2/3 w-7/12" shadow="sm">
      <CardHeader>
        <h4 className="desktop-3xl:text-2xl text-lg">Experience</h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="mb-3 flex items-end gap-3">
          <p className="desktop-3xl:text-xl font-extrabold">
            GEOSAT Aerospace & Technology
          </p>
          <p className="desktop-3xl:text-base text-xs">
            Front-End Engineer, 2023-now
          </p>
        </div>
        {projects.map((project, index) => {
          return (
            <Card key={index} className="mb-5 w-full !bg-slate-600" shadow="sm">
              <CardHeader>
                <div>
                  <h4 className="text-base">{project.name}</h4>
                  <div className="mt-1 flex gap-3">
                    {project.tech.map((tech, index) => (
                      <div
                        key={index}
                        className="rounded-lg bg-primary-500 px-2 py-1 text-xs text-white"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="desktop-3xl:text-base text-sm">{project.info}</p>
              </CardBody>
            </Card>
          )
        })}
      </CardBody>
    </Card>
  )
}

export default Work
