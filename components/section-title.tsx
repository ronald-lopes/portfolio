interface TitleProps {
  title: string
  subtitle?: string
  id?: string
  className?: string
}

export const Title = (props: TitleProps) => {
  return (
    <div
      id={props.id}
      className={
        props.className ||
        'my-4 flex flex-col items-center justify-center sm:mb-8 sm:mt-16'
      }
    >
      <span
        className="
        sm:text-md bg-gradient-to-r from-red-900 to-violet-900 bg-clip-text 
        text-sm text-transparent dark:from-red-400 dark:to-violet-400"
      >
        {props.subtitle}
      </span>
      <h2
        className="
        text-2xl font-bold text-gray-900 
      dark:text-gray-100 sm:text-4xl"
      >
        {props.title}
      </h2>
    </div>
  )
}
