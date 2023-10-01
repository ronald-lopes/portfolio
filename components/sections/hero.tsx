'use client'

import { Button, Link } from '@nextui-org/react'

export function Hero() {
  return (
    <section className="mt-14 flex h-[calc(95vh-56px)] flex-col items-center justify-center px-4">
      <span className="text-md text-center font-light text-gray-700 dark:text-gray-300 sm:text-lg">
        Product Designer and Front-end Developer
      </span>
      <h2 className="max-w-2xl text-center text-3xl font-semibold text-gray-900 dark:text-gray-100 sm:text-6xl">
        I&apos;m passionate about
        <br /> crafting experiences
        <br /> that resonate with users.
      </h2>
      <Button
        as={Link}
        href="#work"
        className="my-8 px-6 font-semibold"
        radius="full"
        color="primary"
        variant="shadow"
        size="lg"
      >
        Check out my work
      </Button>
    </section>
  )
}
