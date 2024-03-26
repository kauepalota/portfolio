'use client'

import { SkillGroupCard } from './skill-group-card'

import { motion } from 'framer-motion'

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="container grid items-start gap-4 px-4 py-12 sm:grid-cols-2 md:px-6 md:py-24 lg:gap-10 lg:py-32"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, x: 0, y: 0 },
          hidden: { opacity: 0, x: -50, y: 50 },
        }}
        className="space-y-4"
      >
        <span className="rounded-lg bg-muted px-3 py-1 text-sm">Skills</span>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {`My super`}

          <span className="text-primary">powers</span>
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {`
          All of these tools and instruments, which I consider my superpowers, are the result of years of experience and learning.
          I'm always looking for new challenges and opportunities to learn new things.
          `}
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, x: 0, y: 0 },
          hidden: { opacity: 0, x: 50, y: 50 },
        }}
        className="grid w-full grid-cols-2 gap-4 md:gap-6"
      >
        <SkillGroupCard
          name="Programming languages"
          shortName="Languages"
          skills={['Java', 'Kotlin', 'Typescript']}
        />
        <SkillGroupCard
          name="Frameworks"
          skills={['Spring', 'Ktor', 'NodeJS']}
        />
        <SkillGroupCard
          name="Data storage and caching"
          shortName="Data & Caching"
          skills={['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']}
        />
        <SkillGroupCard
          name="Client side"
          skills={['React', 'NextJS', 'Tailwind', 'Redux', 'Recoil']}
        />
        <SkillGroupCard
          name="Messaging"
          skills={['Redis', 'RabbitMQ', 'Kafka']}
        />
        <SkillGroupCard
          name="DevOps"
          skills={['Docker', 'Git', 'Github Actions']}
        />
        <SkillGroupCard name="AWS" skills={['S3', 'Lambda']} />
      </motion.div>
    </section>
  )
}
