import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "../Input/Input";

type FormProps = {
  onSubmit: ({ email, name }: { email: string, name: string }) => void
}

export function Form({ onSubmit }: FormProps) {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')


  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'name') {
      setName(event.target.value)
    } else {
      setEmail(event.target.value)
    }
  }

  const safeSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    onSubmit({ name, email })
  }

  return (
    <form onSubmit={safeSubmit} className=" h-full -mt-20 gap-10 mx-5 flex flex-col items-center justify-center">

      {/* <Input onChange={handleOnChange} value={name} name="name" placeholder="Insira seu nome..." />
      <Input onChange={handleOnChange} value={email} name="email" placeholder="Insira seu email..." type="email" /> */}

      <input className="alura-input" onChange={handleOnChange} value={name} name="name" placeholder="Insira seu nome..." />
      <input className="alura-input" onChange={handleOnChange} value={email} name="email" placeholder="Insira seu email..." />

      <button type="submit" className="alura-button">Seguir</button>
    </form>
  )
}