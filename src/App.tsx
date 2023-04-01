import { Header } from "./components/Header/Header";
import { ArticleList } from "./components/ArticleList/ArticleList";
import { useState } from "react";
import { Form } from "./components/Form/Form";

type User = {
  name: string
  email: string
}

export function App() {
  const [user, setUser] = useState<User>()
  const hasUser = Boolean(user)

  function handleSubmit({ name, email }: User) {
    setUser({ name, email })
  }

  return (
    <main className="h-screen">
      <Header name={user?.name}/>
      
      {hasUser && <ArticleList />}

      {hasUser || <Form onSubmit={handleSubmit} /> }
      
    </main>
  )
}

