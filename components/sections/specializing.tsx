import { Title } from '../section-title'
import { SpecializingCard } from '../specializing-card'
import { UserFocus, PenNib, Code } from '@phosphor-icons/react'

export const Specializing = () => {
  return (
    <>
      <section className="mx-auto my-8 flex w-full items-center justify-center">
        <div className="max-w-[90%] flex-col items-center justify-center px-4 sm:max-w-[80%] md:max-w-5xl">
          <Title title="What I do" subtitle="Specializing" />
          <div className="my-8 flex flex-col justify-between gap-4 md:flex-row">
            <SpecializingCard
              icon={
                <UserFocus
                  className="my-2 dark:fill-violet-400"
                  size={32}
                  color="#6D28D9"
                  weight="bold"
                />
              }
              title="Product Design"
              subTitle="Crafting User-Centered Experiences"
              description="I specialize in designing intuitive interfaces by prioritizing 
            user needs, backed by thorough research, and a blend of form and function."
            />
            <SpecializingCard
              icon={
                <PenNib
                  className="my-2 dark:fill-violet-400"
                  size={32}
                  color="#6D28D9"
                  weight="bold"
                />
              }
              title="Design System"
              subTitle="Consistency and Cohesion"
              description="I create design systems that ensure visual consistency, 
            streamline the design process, and maintain brand identity across all touchpoints."
            />
            <SpecializingCard
              icon={
                <Code
                  className="my-2 dark:fill-violet-400"
                  size={32}
                  color="#6D28D9"
                  weight="bold"
                />
              }
              title="Front-end Development"
              subTitle="Bringing Designs to Life"
              description="Proficient in HTML, CSS, and JavaScript, I bridge the gap 
            between design and development, building immersive web experiences."
            />
          </div>
        </div>
      </section>
    </>
  )
}
