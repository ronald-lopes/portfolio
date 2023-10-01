import { ContactForm } from '../contact-form'
import { Title } from '../section-title'
import {
  EnvelopeSimple,
  LinkedinLogo,
  DribbbleLogo,
  GithubLogo,
} from '@phosphor-icons/react'
import { Button, Link } from '@nextui-org/react'

export const Contact = () => {
  return (
    <section
      id="get-in-touch"
      className="mb-8 flex flex-col items-center justify-center px-4"
    >
      <Title title="Get in touch" subtitle="What’s Next?" />
      <ContactForm />
      <div className="mt-8 flex flex-row gap-4">
        <Button
          className="text-slate-800 dark:text-slate-300"
          as={Link}
          isExternal
          isIconOnly
          variant="light"
          aria-label="Email"
          href="mailto:contato@ronaldlopes.design"
        >
          <EnvelopeSimple weight="bold" size={24} />
        </Button>
        <Button
          className="text-slate-800 dark:text-slate-300"
          as={Link}
          isExternal
          isIconOnly
          variant="light"
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/ronald-lopes/"
        >
          <LinkedinLogo weight="bold" size={24} />
        </Button>
        <Button
          className="text-slate-800 dark:text-slate-300"
          as={Link}
          isExternal
          isIconOnly
          variant="light"
          aria-label="Dribbble"
          href="https://dribbble.com/ronaldlopes"
        >
          <DribbbleLogo weight="bold" size={24} />
        </Button>
        <Button
          className="text-slate-800 dark:text-slate-300"
          as={Link}
          isExternal
          isIconOnly
          variant="light"
          aria-label="GitHub"
          href="https://github.com/ronald-lopes"
        >
          <GithubLogo weight="bold" size={24} />
        </Button>
      </div>
    </section>
  )
}
