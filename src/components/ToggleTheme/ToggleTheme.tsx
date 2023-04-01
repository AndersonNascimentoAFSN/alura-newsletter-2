import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export function ToggleTheme() {
  const pageClass = document.documentElement.classList

  useEffect(() => {
    const mode = localStorage.getItem('@alura-newsletter-darkMode')
    mode && pageClass.add(mode)
  }, [])

  const toggle = () => {
    pageClass.toggle('dark')
    localStorage.setItem('@alura-newsletter-darkMode', pageClass.value)
  }

  return (
    <div className="hidden sm:block">
      <MoonIcon className="h-8 text-gray-100 block cursor-pointer dark:hidden" onClick={toggle} />
      <SunIcon className="h-8 text-gray-100 hidden cursor-pointer dark:block" onClick={toggle} />
    </div>
  )
}