import Text from './components/dynamic_text/Text'

export default function Home() {
  return (
    <main className="bg-default-300 text-foreground-800 h-[calc(100vh-4rem)] w-screen snap-y snap-mandatory overflow-y-scroll">
      <div>
        <div className="h-[calc(100vh-4rem)] w-full snap-center bg-inherit">
          <Text />
        </div>
        <div className="h-[calc(100vh-4rem)] w-full snap-center">div2</div>
        <div className="h-[calc(100vh-4rem)] w-full snap-center">div3</div>
      </div>
    </main>
  )
}
