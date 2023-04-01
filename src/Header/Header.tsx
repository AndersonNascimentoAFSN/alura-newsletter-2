import { MoonIcon } from '@heroicons/react/24/solid'

export function Header() {
  return (
    <div className="flex h-20 bg-gray-500 justify-between items-center px-5 sm:rounded-xl sm:m-5">
      <span className="text-gray-100">Olá, usuário</span>
      <h1 className="text-gray-100 text-xl">Alura Newsletter</h1>
      <MoonIcon className="hidden sm:block h-8 text-gray-100 cursor-pointer" />
    </div>
  )
}