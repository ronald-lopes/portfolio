import { Button } from '@nextui-org/button'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="mt-14 flex flex-col items-center justify-center h-[calc(100vh-56px)]">
      <p className="text-lg font-light text-gray-700 dark:text-gray-300">
        Product Designer and Front-end Developer
      </p>
      <h1 className="text-6xl font-semibold text-center text-gray-900 dark:text-gray-100 max-w-xl-2">
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
