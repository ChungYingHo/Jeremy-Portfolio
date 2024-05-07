import Text from './components/dynamic_text/Text'
import Laptop from './components/laptop/Laptop'
import Skill from './components/skill/Skill'

export default function Home() {
  return (
    <main className="h-[calc(100vh-4rem)] w-screen snap-y snap-mandatory overflow-y-scroll bg-default-300 text-foreground-800">
      <div>
        <div className="flex h-[calc(100vh-4rem)] w-full snap-center items-center justify-between bg-gray-600 px-52">
          <Text />
          <Laptop />
        </div>
        <div className="h-[calc(100vh-4rem)] w-full snap-center bg-gray-600 px-52">
          div2
        </div>
        <div className="flex h-[calc(100vh-4rem)] w-full snap-center items-center justify-center bg-gray-600 px-52">
          <Skill />
        </div>
      </div>
    </main>
  )
}
