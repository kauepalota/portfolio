import Link from 'next/link'
import { MainNavbar } from './navbar/main/navbar'
import { contact } from '@/config/contact'
import PrinterIcon from '@/components/printer-icon'
import GithubIcon from '@/components/github-icon'
import { MobileNavbar } from './navbar/mobile/navbar'

export function Header() {
  return (
    <header className="flex h-14 items-center justify-between bg-background px-4 shadow-md lg:px-6">
      <MainNavbar />

      <div className="mr-2 flex gap-3">
        <Link target="_blank" href={contact.github}>
          <GithubIcon className="hover:text-primary" width={40} height={40} />
        </Link>
        <Link
          target="_blank"
          href={'Kauê%20Palota%20-%20Software%20Engineer.pdf'}
        >
          <PrinterIcon className="hover:text-primary" width={40} height={40} />
        </Link>
      </div>

      <MobileNavbar />
    </header>
  )
}
