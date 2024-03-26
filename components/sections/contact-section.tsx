'use client'

import React from 'react'
import { Instagram, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { contact } from '@/config/contact'
import { Button } from '../ui/button'

import { motion } from 'framer-motion'

export function ContactSection() {
  return (
    <section
      id="contact"
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
        <span className="rounded-lg bg-muted px-3 py-1 text-sm">Contact</span>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {`Get `}
          <span className="text-primary">in</span>
          {` Touch`}
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {`
          Want to work together? Have a question about one of my projects? Drop me a line.
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
        className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <Link target="_blank" href={`mailto:${contact.email}`}>
          <Button variant="link" className="text-primary-foreground">
            <Mail className="mr-2 h-5 w-5" />
            Email
          </Button>
        </Link>

        <Link target="_blank" href={contact.linkedin}>
          <Button variant="link" className="text-primary-foreground">
            <Linkedin className="mr-2 h-5 w-5" />
            Linkedin
          </Button>
        </Link>

        <Link target="_blank" href={contact.instagram}>
          <Button variant="link" className="text-primary-foreground">
            <Instagram className="mr-2 h-5 w-5" />
            Instagram
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}
