import { Header } from '@/components/header'
import { ContactSection } from '@/components/sections/contact-section'
import { IntroductionSection } from '@/components/sections/introduction-section'
import { ProjectsSection } from '@/components/sections/project-section'

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />

      <main className="flex-1">
        <IntroductionSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}
