import { destinations } from '../data.json'
import styles from './Destination.module.css'
import { NavLink, Outlet, Route, Routes } from 'react-router'

const getDestinationNav = () =>
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

function Layout() {
  return (
    <div className="flex w-full flex-col p-300 md:p-500 lg:px-[165px] lg:py-600">
      <h1 className="text-preset-6-mobile md:text-preset-5 mb-300 text-center text-white uppercase md:text-left">
        <span className="mr-300 opacity-25">01</span>Pick your destination
      </h1>

      <div className="flex flex-grow items-center justify-center text-white">
        <Outlet />
      </div>

      <div className={styles.background} />
    </div>
  )
}

function Nav() {
  const navigation = getDestinationNav()
  return (
    <nav className="text-preset-8 mb-300 flex h-400 space-x-400 lg:mb-500">
      {navigation.map(nav => (
        <NavLink key={nav.name} to={nav.to ?? nav.path} end={nav.end} className="group flex">
          {({ isActive }) => (
            <div className="relative flex flex-col uppercase">
              <div className="flex flex-grow items-start">{nav.name}</div>
              <div
                className={`absolute bottom-0 h-[3px] w-full bg-white transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:block group-hover:opacity-50'}`}
              />
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  )
}

function Panel({
  name,
  description,
  distance,
  travel,
  images,
}: {
  name: string
  description: string
  distance: string
  travel: string
  images: { webp: string }
}) {
  return (
    <div className="flex flex-col items-center gap-y-400 lg:flex-row lg:gap-y-0">
      <div className="flex flex-col py-[26px] md:py-[42px] lg:w-1/2 lg:py-0">
        <img src={images.webp} className="max-h-[734px] w-[150px] md:w-[300px] lg:w-[480px]" />
      </div>
      <div className="flex flex-grow flex-col items-center md:w-[514px] lg:w-1/2 lg:items-start lg:px-[54px]">
        <Nav />
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="text-preset-2 mb-200 uppercase">{name}</h1>
          <p className="text-preset-9 text-blue-300">{description}</p>
        </div>
        <hr className="my-300 w-full text-white/25 lg:my-500" />
        <div className="flex w-full flex-col gap-y-300 text-center uppercase md:flex-row md:gap-y-0 lg:text-left">
          <div className="flex w-full flex-col md:w-1/2">
            <div className="text-preset-7 mb-150 text-blue-300">Avg. distance</div>
            <div className="text-preset-6">{distance}</div>
          </div>
          <div className="flex w-full flex-col md:w-1/2">
            <div className="text-preset-7 mb-150 text-blue-300">Est. travel time</div>
            <div className="text-preset-6">{travel}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Destination() {
  const navigation = getDestinationNav()
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {navigation.map(nav => (
          <Route key={nav.name} {...nav} />
        ))}
      </Route>
    </Routes>
  )
}

Destination.Panel = Panel

export default Destination
