import { ReactNode } from 'react'

export type NavigationType = {
  name: string
  path: string
  element: ReactNode
  index?: boolean
  to?: string
}

export type SubNavType = NavigationType & { end: boolean }
