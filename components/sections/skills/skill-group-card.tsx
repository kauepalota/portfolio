import { SkillCard } from './skill-card'
import { motion } from 'framer-motion'
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      <Card className="overflow-hidden rounded-3xl border-none bg-gradient-to-bl from-orange-400 to-primary">
        <CardHeader>
          <CardTitle className="overflow-hidden text-base text-primary-foreground sm:text-xl md:text-2xl">
            <span className="hidden md:block">{name}</span>
            <span className="block md:hidden">{shortName}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap">
          {skills.map((skill) => (
            <SkillCard key={skill} value={skill} />
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}
