import { Header } from '@/components/header'
import { ContactSection } from '@/components/sections/contact-section'
import { IntroductionSection } from '@/components/sections/introduction-section'
import { SkillsSection } from '@/components/sections/skills/skills-section'

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />

      <main className="flex-1">
        <IntroductionSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  )
}
