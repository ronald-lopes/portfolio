'use client'

import { Title } from '../section-title'
import { Specializing } from './specializing'

export const About = () => {
  return (
    <>
      <section
        id="about"
        className="my-16 flex min-h-[calc(90vh-56px)] flex-col items-center justify-center px-4"
      >
        <Title title="About me" subtitle="Exploring My Background" />

        <div className="my-8 flex w-full max-w-4xl flex-col-reverse items-center justify-between md:flex-row">
          <div className="flex w-[80%] flex-col items-start justify-center gap-4 md:w-[360px]">
            <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              It&apos;s Ronald Lopes 👋
            </p>
            <p className="leading-5 text-gray-700 dark:text-gray-300">
              I&apos;m a <b>Brazilian Product Designer</b> specializing in{' '}
              <b>designing</b> (and occasionally <b>coding</b>) exceptional
              digital experiences. Currently, I&apos;m focused on designing
              accessible, <b>human-centered products.</b>
            </p>
            <p className="leading-5 text-gray-700 dark:text-gray-300">
              If you&apos;re looking for a designer to <b>build</b> a new
              product, <b>design innovative features</b>, or resolve particular
              issues with <b>utmost efficiency</b>, check out my work and
              let&apos;s embark on this journey together.
            </p>
            <p className="leading-5 text-gray-700 dark:text-gray-300">
              Thank you for stopping by,
            </p>
            <span className="font-['Yellowtail'] text-2xl font-normal text-gray-700 dark:text-gray-300">
              Ronald Lopes
            </span>
          </div>
          <div className="relative hidden h-80 flex-1 md:flex">
            {/* Gradient */}
            <div className="absolute right-[4%] h-[310px] w-[260px] rotate-[5.74deg] rounded-2xl bg-gradient-to-br from-fuchsia-800 to-blue-600" />
            {/* Photo */}
            <div className="absolute right-[0%] top-[3%] h-[310px] w-[260px] origin-top-left rotate-[3.35deg] rounded-2xl bg-cyan-200 bg-opacity-20 bg-photo bg-cover shadow backdrop-blur-lg " />
          </div>
        </div>
      </section>
      <Specializing />
    </>
  )
}
