import Link from 'next/link'

export type NavbarProps = {
  name: string
}

export default function NavbarLink({ name }: NavbarProps) {
  return (
    <Link
      href={name.toLowerCase()}
      className="text-sm font-medium underline-offset-4 hover:underline lg:text-base"
    >
      {name}
    </Link>
  )
}
