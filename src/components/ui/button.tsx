import { ButtonHTMLAttributes, ReactNode } from 'react'
import { useTheme } from '../../hooks/use-theme'
import { themes } from '../../lib/themes'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export function Button({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}: ButtonProps) {
  const { theme } = useTheme()
  const currentTheme = theme === 'system' ? 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') 
    : theme

  return (
    <button
      className={`${themes[currentTheme].button[variant]} px-4 py-2 rounded-md transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  )
} 