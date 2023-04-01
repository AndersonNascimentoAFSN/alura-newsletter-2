import articles from '../../articles.json'

export function ArticleList() {
  return (
    <div className='mt-5 sm:mt-0 m-auto max-w-2xl grid gap-5 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center'>
      {
        articles?.map(({ title }) => <p key={title}>{title}</p>)
      }
    </div>
  )
}