import { Card, CardBody } from '@nextui-org/react'

interface SpecializingCardProps {
  title: string
  subTitle: string
  icon?: React.ReactNode
  description: string
  className?: string
}

export const SpecializingCard = (props: SpecializingCardProps) => {
  return (
    <Card
      shadow="none"
      className="border border-violet-200 bg-violet-50 dark:border-content1 dark:bg-content1"
    >
      <CardBody className="gap-[0.1rem]">
        {props.icon}
        <span className="text-lg font-semibold text-gray-900 dark:text-gray-200">
          {props.title}
        </span>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-500">
          {props.subTitle}
        </span>
        <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
          {props.description}
        </p>
      </CardBody>
    </Card>
  )
}
