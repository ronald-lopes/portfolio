import { Hero } from '@/components/sections/hero'
import { Header } from '@/components/header'
import { About } from '@/components/sections/about'
import { Work } from '@/components/sections/work'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Work />
    </>
  )
}
