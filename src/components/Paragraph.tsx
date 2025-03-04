import { ReactNode } from 'react'

export default function Paragraph({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={`text-preset-9 text-blue-300 ${className}`}>{children}</p>
}
