import { Article } from '../Article/Article'

import articles from '../../../articles.json'

export function ArticleList() {
  return (
    <div className='mt-5 sm:mt-0 m-auto max-w-2xl grid gap-5 sm:grid-cols-2 lg:grid-cols-3 px-4 lg:max-w-[1000px]'>
      {
        articles?.map((
          { title, tags, text, alt, image }
        ) =>
          <Article
            key={title}
            alt={alt}
            image={image}
            tags={tags}
            text={text}
            title={title}
          />
        )
      }
    </div>
  )
}