import { motion } from 'framer-motion'

export type SkillCardProps = {
  value: string
}

export function SkillCard({ value }: SkillCardProps) {
  return (
    <motion.h1
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      className="mx-2 my-2 rounded-3xl bg-orange-900/40 px-4 py-2 font-semibold text-orange-200"
    >
      {value}
    </motion.h1>
  )
}
