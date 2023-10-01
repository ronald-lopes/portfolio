'use client'

import { Button, Link } from '@nextui-org/react'
import { ProjectCard } from '../project-card'
import { Title } from '../section-title'
import { projects } from '@/config/projects'
import { ArrowRight } from '@phosphor-icons/react'

export function Work() {
  return (
    <section
      id="work"
      className="mx-auto my-16 flex w-full max-w-5xl flex-col items-center justify-center px-4"
    >
      <Title title="Portfolio Highlights" subtitle="Showcase" />
      <div className="flex w-full flex-col justify-between gap-3 sm:flex-row">
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            category={item.category}
            href={item.href}
            description={item.description}
            image={item.image}
            isLoading={item.isLoading}
          />
        ))}
      </div>
      <Button
        as={Link}
        className="mt-8 gap-0 px-6"
        color="primary"
        radius="full"
        endContent={
          <ArrowRight size={16} weight="bold" className="ml-2 mt-[0.1rem]" />
        }
      >
        See more
      </Button>
    </section>
  )
}
