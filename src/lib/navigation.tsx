import { destinations, crew, technology } from '../data.json'
import { Crew, Destination, Home, Technology } from '../pages'
import type { NavigationType, SubNavType } from '../types/navigation'

export const navigation: NavigationType[] = [
  { name: 'home', path: '/', element: <Home />, index: true },
  { name: 'destination', path: 'destination/*', to: 'destination', element: <Destination /> },
  { name: 'crew', path: 'crew/*', to: 'crew', element: <Crew /> },
  { name: 'technology', path: 'technology/*', to: 'technology', element: <Technology /> },
]

export const getDestinationNav: () => SubNavType[] = () =>
  destinations.map(destination => {
    const { name } = destination
    const isFirst = destination === destinations[0]
    const path = isFirst ? '/' : name.replace(/\s+/g, '-').toLowerCase()

    return {
      name,
      path,
      to: `/destination${isFirst ? '' : `/${path}`}`,
      element: <Destination.Panel {...destination} />,
      index: isFirst,
      end: isFirst,
    }
  })

export const getCrewNav: () => SubNavType[] = () =>
  crew.map(person => {
    const { name } = person
    const isFirst = person === crew[0]
    const path = isFirst ? '/' : name.replace(/\s+/g, '-').toLowerCase()

    return {
      name,
      path,
      to: `/crew${isFirst ? '' : `/${path}`}`,
      element: <Crew.Panel {...person} />,
      index: isFirst,
      end: isFirst,
    }
  })

export const getTechNav: () => SubNavType[] = () =>
  technology.map(tech => {
    const { name } = tech
    const isFirst = tech === technology[0]
    const path = isFirst ? '/' : name.replace(/\s+/g, '-').toLowerCase()
    return {
      name,
      path,
      to: `/technology${isFirst ? '' : `/${path}`}`,
      element: <Technology.Panel {...tech} />,
      index: isFirst,
      end: isFirst,
    }
  })
