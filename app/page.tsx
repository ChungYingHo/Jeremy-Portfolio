import Text from './components/dynamic_text/Text'

export default function Home() {
  return (
    <main className="bg-default-300 text-foreground-800 h-[calc(100vh-4rem)] w-screen snap-y snap-mandatory overflow-y-scroll">
      <div>
        <div className="flex h-[calc(100vh-4rem)] w-full snap-center items-center bg-gray-600 pl-52">
          <Text />
        </div>
        <div className="h-[calc(100vh-4rem)] w-full snap-center">div2</div>
        <div className="h-[calc(100vh-4rem)] w-full snap-center">div3</div>
      </div>
    </main>
  )
}
