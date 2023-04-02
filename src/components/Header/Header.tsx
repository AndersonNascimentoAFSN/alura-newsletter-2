import { ToggleTheme } from '../ToggleTheme/ToggleTheme'

type HeaderProps = {
  name: string | undefined
}

export function Header({ name }: HeaderProps) {
  return (
    <div className="flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
      <span className="text-gray-100">Olá, {name ?? 'usuário'}</span>
      <h1>Alura Newsletter</h1>
      <ToggleTheme />
    </div>
  )
}