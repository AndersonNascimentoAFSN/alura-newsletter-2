import { ChangeEvent, InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input(props: InputProps) {
  return (
    <input type="text" className="alura-input" {...props} autoComplete="off" />
  )
}