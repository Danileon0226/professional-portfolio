import { InputHTMLAttributes } from 'react'
import { useTheme } from '../../hooks/use-theme'
import { themes } from '../../lib/themes'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export function Input({ className = '', ...props }: InputProps) {
  const { theme } = useTheme()
  const currentTheme = theme === 'system' ? 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') 
    : theme

  return (
    <input
      className={`${themes[currentTheme].input} w-full px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  )
} 