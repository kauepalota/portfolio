import { FadeIn } from '@/components/animation/fade-in'
import { SkillCard } from './skill-card'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export type SkillGroup = {
  name: string
  shortName?: string
  skills: string[]
}

export function SkillGroupCard({ name, shortName, skills }: SkillGroup) {
  if (!shortName) {
    shortName = name
  }

  return (
    <FadeIn to="left" startOnScrollIntersect delay={0.1} duration={0.4}>
      <Card className="overflow-hidden rounded-3xl border-none bg-gradient-to-bl from-orange-400 to-primary">
        <CardHeader>
          <FadeIn to="top" startOnScrollIntersect delay={0.2} duration={0.4}>
            <CardTitle className="overflow-hidden text-base text-primary-foreground sm:text-xl md:text-2xl">
              <span className="hidden md:block">{name}</span>
              <span className="block md:hidden">{shortName}</span>
            </CardTitle>
          </FadeIn>
        </CardHeader>
        <CardContent className="flex flex-wrap">
          {skills.map((skill) => (
            <SkillCard key={skill} value={skill} />
          ))}
        </CardContent>
      </Card>
    </FadeIn>
  )
}
