import SicrediLogo from '@/assets/sicredi.jpg'
import FacilitaLogo from '@/assets/facilitajuridico.webp'

import { StaticImageData } from 'next/image'

import { Github } from 'lucide-react'
import { ReactNode } from 'react'

export type Link = {
  tooltip: string
  href: string
  icon: ReactNode
}

export type Project = {
  name: string
  icon: StaticImageData | string
  description: string

  links: Link[]
}

export const projectList: Project[] = [
  {
    name: 'Tech challenge for NT Consult',
    icon: SicrediLogo,
    description: `This project is a solution for the technical challenge proposed
    by NT Consult.`,
    links: [
      {
        tooltip: 'Front-end',
        href: '',
        icon: <Github size={24} />,
      },
      {
        tooltip: 'Back-end',
        href: 'https://github.com/kauepalota/sicredi-tech-challenge',
        icon: <Github size={24} />,
      },
    ],
  },
  {
    name: 'Tech challenge for Facilita Juridico',
    icon: FacilitaLogo,
    description: `This project was designed as part of an assessment, with the primary goal of implementing a CRUD for client management.`,
    links: [
      {
        tooltip: 'Front-end',
        href: 'https://github.com/kauepalota/sicredi-tech-challenge',
        icon: <Github size={24} />,
      },
      {
        tooltip: 'Back-end',
        href: 'https://github.com/kauepalota/sicredi-tech-challenge',
        icon: <Github size={24} />,
      },
    ],
  },
]
