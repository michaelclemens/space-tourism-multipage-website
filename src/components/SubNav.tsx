import type { SubNavType } from '../types/navigation'
import { ReactNode } from 'react'
import { NavLink } from 'react-router'

export default function SubNav({
  navigation,
  className,
  children,
}: {
  navigation: SubNavType[]
  className: string
  children: ({ index, nav, isActive }: { index: number; nav: SubNavType; isActive: boolean }) => ReactNode
}) {
  return (
    <nav className={className}>
      {navigation.map((nav, index) => (
        <NavLink key={nav.name} to={nav.to ?? nav.path} end={nav.end} className="group flex">
          {({ isActive }) => children({ index, nav, isActive })}
        </NavLink>
      ))}
    </nav>
  )
}
