import { Header } from '@/components/header'
import { IntroductionSection } from '@/components/sections/introduction/introduction'

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />

      <main className="flex-1">
        <IntroductionSection />
      </main>
    </div>
  )
}
