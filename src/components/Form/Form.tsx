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
    <form onSubmit={safeSubmit} className=" h-full -mt-20 gap-10 flex flex-col items-center justify-center">
      <input type="text" placeholder="Insira seu nome..." name="name" onChange={(event) => setName(event.target.value)} value={name} />
      <input type="email" placeholder="Insira seu email..." name="email" onChange={(event) => setEmail(event.target.value)} value={email} />

      <button type="submit" className="py-1 px-5 bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 uppercase">Seguir</button>
    </form>
  )
}