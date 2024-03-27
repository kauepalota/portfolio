import { motion } from 'framer-motion'

export type SkillCardProps = {
  value: string
}

export function SkillCard({ value }: SkillCardProps) {
  return (
    <motion.h1
      initial="hidden"
      whileInView="visible"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        delay: 0.2,
        duration: 0.5,
      }}
      variants={{
        visible: { rotate: 0, opacity: 1, y: 0 },
        hidden: { rotate: -6, opacity: 0, y: 0 },
      }}
      className="mx-2 my-2 rounded-3xl bg-orange-900/40 px-4 py-2 font-semibold text-orange-200"
    >
      {value}
    </motion.h1>
  )
}
