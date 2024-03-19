import Image from 'next/image'

import Profile from '@/assets/profile.jpg'

export function IntroductionSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-4 sm:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Introduction
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {`Hi, I'm Kauê Palota`}
            </h1>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
        </div>
      </div>
    </section>
  )
}
