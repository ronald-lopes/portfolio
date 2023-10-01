'use client'

import { Header } from '@/components/header'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Work } from '@/components/sections/work'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <div id="home">
        <Header />
        <Hero />
        <About />
        <Work />
        <Contact />
      </div>
    </>
  )
}
