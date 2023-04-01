import { FormEvent, useState } from "react";

type FormProps = {
  onSubmit: ({ email, name }: { email: string, name: string }) => void
}

export function Form({ onSubmit }: FormProps) {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const safeSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    onSubmit({ name, email })
  }

  return (
    <form onSubmit={safeSubmit}>
      <input type="text" placeholder="Insira seu nome..." name="name" onChange={(event) => setName(event.target.value)} value={name} />
      <input type="email" placeholder="Insira seu email..." name="email" onChange={(event) => setEmail(event.target.value)} value={email} />

      <button type="submit">Seguir</button>
    </form>
  )
}