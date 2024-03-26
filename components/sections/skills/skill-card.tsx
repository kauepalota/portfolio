export type SkillCardProps = {
  value: string
}

export function SkillCard({ value }: SkillCardProps) {
  return (
    <div className="mx-2 my-2 rounded-3xl bg-orange-900/40 px-4 py-2 font-semibold text-orange-200">
      {value}
    </div>
  )
}
