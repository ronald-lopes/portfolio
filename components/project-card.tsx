'use client'

import {
  Button,
  Link,
  Card,
  CardBody,
  CardFooter,
  Image,
} from '@nextui-org/react'

interface ProjectCardProps {
  title: string
  category: string
  description: string
  href: string
  image?: string
  className?: string
  isLoading?: boolean
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <Card
      fullWidth
      className="w-full border-gray-200 bg-gray-100 dark:border-content1 dark:bg-content1"
      shadow="none"
    >
      <CardBody className="w-full max-w-full overflow-visible p-0">
        <Image
          radius="lg"
          isBlurred
          src={props.image}
          width="100%"
          alt={props.title}
          isLoading={props.isLoading}
          className=" aspect-[16/8] w-full max-w-full object-cover"
        />
      </CardBody>
      <CardFooter className="flex flex-col items-end px-4">
        <div className="mb-2 w-full flex-col">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {props.title}
          </h3>
          <span className="text-base font-medium text-gray-900 dark:text-gray-100">
            {props.category}
          </span>
          <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
            {props.description}
          </p>
        </div>
        <Button
          showAnchorIcon
          as={Link}
          href={props.href}
          variant="light"
          size="md"
        >
          View Project
        </Button>
      </CardFooter>
    </Card>
  )
}
