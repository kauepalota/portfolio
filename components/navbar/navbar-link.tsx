import Link from 'next/link'

export type NavbarProps = {
  name: string
  destination: string
}

export default function NavbarLink({ name, destination }: NavbarProps) {
  return (
    <Link
      href={destination}
      className="text-sm font-medium underline-offset-4 hover:underline lg:text-base"
    >
      {name}
    </Link>
  )
}
