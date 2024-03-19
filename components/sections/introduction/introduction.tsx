import Image from 'next/image'

import Profile from '@/assets/profile.jpg'

export function IntroductionSection() {
  return (
    <section className="container grid w-full items-center gap-4 px-4 py-12 sm:grid-cols-2 md:px-6 md:py-24 lg:gap-10 lg:py-32">
      <div className="space-y-4">
        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
          Introduction
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {`Hi, I'm Kauê Palota`}
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {`I'm a backend developer skilled in Spring Boot, Ktor, Java, and Kotlin. Recently, I've developed an interest in frontend development. Despite my lack of professional experience in this area, I'm seeking opportunities to grow my skills, particularly in fullstack development.`}
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          alt="Photo"
          className="mx-auto aspect-[1/1] overflow-hidden rounded-full object-cover object-center"
          height="400"
          src={Profile}
          width="400"
        />
      </div>
    </section>
  )
}
