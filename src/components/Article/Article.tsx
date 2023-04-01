type ArticleProps = {
  title: string
  text: string[]
  tags: string[]
  image: string | undefined
  alt: string | undefined
}

export function Article({ title, text, tags, image, alt }: ArticleProps) {
  return (
    <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex-col items-center">
      <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h3>

      <div className="grid gap-1">
        {text.map((content) => <p key={content} className="text-alura-200 dark:text-gray-400">{content}</p>)}
      </div>

      {image && <img src={image} className="sm:p-4"/>}
      {image && alt && <span className="sr-only">{alt}</span>}
    </div>
  )
}