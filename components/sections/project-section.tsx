import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { projectList } from '../../config/projects'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="container grid items-start gap-4 px-4 py-12 sm:grid-cols-2 md:px-6 md:py-24 lg:gap-10 lg:py-32"
    >
      <div className="space-y-4">
        <span className="rounded-lg bg-muted px-3 py-1 text-sm">Projects</span>

        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">My work</h2>

        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {`Here are some of the projects I've worked on.`}
        </p>
      </div>
      <div className="grid w-full grid-cols-2 gap-4 sm:gap-6">
        {projectList.map((project) => (
          <div
            key={project.name}
            className="flex flex-col overflow-hidden rounded-lg border border-muted shadow-sm transition-colors hover:z-20 hover:shadow"
          >
            <Image
              alt={project.name}
              src={project.icon}
              height={350}
              width={600}
              className="bg-white object-fill object-center p-4"
            />

            <div className="flex h-full flex-col rounded-sm p-4">
              <h3 className="font-bold tracking-tighter">{project.name}</h3>

              <p className="mb-4 text-sm text-muted-foreground">
                {project.description}
              </p>

              <div className="ml-auto mt-auto grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
                {project.links.map((link, index) => (
                  <Button
                    key={index}
                    disabled={!link.href}
                    className="mt-auto gap-2"
                    variant={'secondary'}
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      className={cn(
                        'flex gap-2',
                        link.href ? 'cursor-pointer' : 'cursor-not-allowed',
                      )}
                    >
                      {link.icon}
                      {link.tooltip}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
