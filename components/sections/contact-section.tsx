import React from 'react'
import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { contact } from '@/config/contact'
import { Button } from '../ui/button'

export function ContactSection() {
  return (
    <section
      id="contact"
      className="container grid items-start gap-4 px-4 py-12 sm:grid-cols-2 md:px-6 md:py-24 lg:gap-10 lg:py-32"
    >
      <div className="space-y-4">
        <span className="rounded-lg bg-muted px-3 py-1 text-sm">Contact</span>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {`Get in Touch`}
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {`
          Want to work together? Have a question about one of my projects? Drop me a line.
          `}
        </p>
      </div>
      <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Link target="_blank" href={contact.github}>
          <Button variant="link">
            <Github className="mr-2 h-5 w-5" />
            Github
          </Button>
        </Link>

        <Link target="_blank" href={`mailto:${contact.email}`}>
          <Button variant="link">
            <Mail className="mr-2 h-5 w-5" />
            Email
          </Button>
        </Link>

        <Link target="_blank" href={contact.linkedin}>
          <Button variant="link">
            <Linkedin className="mr-2 h-5 w-5" />
            Linkedin
          </Button>
        </Link>

        <Link target="_blank" href={contact.instagram}>
          <Button variant="link">
            <Instagram className="mr-2 h-5 w-5" />
            Instagram
          </Button>
        </Link>
      </div>
    </section>
  )
}
