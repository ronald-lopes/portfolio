import { Button } from '@nextui-org/button'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="mt-14 flex h-[calc(100vh-56px)] flex-col items-center justify-center">
      <p className="text-lg font-light text-gray-700 dark:text-gray-300">
        Product Designer and Front-end Developer
      </p>
      <h1 className="max-w-xl-2 text-center text-6xl font-semibold text-gray-900 dark:text-gray-100">
        I&apos;m passionate about
        <br /> crafting experiences
        <br /> that resonate with users.
      </h1>
      <Link className="my-8" href="#">
        <Button radius="full" color="secondary" variant="shadow">
          Check out my work
        </Button>
      </Link>
    </section>
  )
}
