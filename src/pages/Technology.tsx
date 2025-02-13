import { technology } from '../data.json'
import { background } from './Technology.module.css'
import { NavLink, Outlet, Route, Routes } from 'react-router'

const getTechNav = () =>
  technology.map(tech => {
    const { name } = tech
    const isFirst = tech === technology[0]
    const path = isFirst ? '/' : name.replace(/\s+/g, '-').toLowerCase()
    return {
      name,
      path,
      to: `/technology${isFirst ? '' : `/${path}`}`,
      element: <Panel {...tech} />,
      index: isFirst,
      end: isFirst,
    }
  })

function Layout() {
  return (
    <div className="flex w-full flex-col p-300 md:p-500 lg:px-0 lg:py-600">
      <div className="flex flex-col lg:ml-auto">
        <h1 className="text-preset-6-mobile md:text-preset-5 mb-300 text-center text-white uppercase md:text-left">
          <span className="mr-300 opacity-25">03</span>Space launch 101
        </h1>

        <div className="flex flex-grow flex-col items-center justify-center text-white">
          <Outlet />
        </div>
      </div>
      <div className={background} />
    </div>
  )
}

function Nav() {
  const navigation = getTechNav()
  return (
    <nav className="mt-400 mb-500 flex flex-row space-x-200 lg:my-0 lg:mr-800 lg:flex-col lg:space-y-400 lg:space-x-0">
      {navigation.map((nav, index) => (
        <NavLink key={nav.name} to={nav.to ?? nav.path} end={nav.end} className="group flex">
          {({ isActive }) => (
            <div
              className={`text-preset-4 flex h-500 w-500 items-center justify-center rounded-full ring-1 ring-white/25 transition-all duration-500 md:h-[56px] md:w-[56px] lg:h-1000 lg:w-1000 ${isActive ? 'bg-white text-blue-900 ring-0' : 'group-hover:ring-white'}`}
            >
              {index + 1}
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  )
}

function Panel({ name, description, images }) {
  return (
    <div className="flex flex-grow flex-col items-center lg:flex-row">
      <div className="mt-800 w-screen flex-none lg:hidden">
        <img src={images.portrait} className="max-h-[258px] w-full object-cover object-center md:max-h-[357px]" />
      </div>
      <Nav />

      <div className="flex flex-col justify-center px-300 text-center md:w-lg md:px-0 lg:mr-400 lg:text-left">
        <div className="text-preset-4 mb-200 uppercase opacity-50">The terminology...</div>
        <h1 className="text-preset-3 mb-200 uppercase lg:mb-300">{name}</h1>
        <p className="text-preset-9 text-blue-300">{description}</p>
      </div>

      <div className="hidden flex-none lg:block">
        <img src={images.portrait} className="max-h-[734px] w-[608px]" />
      </div>
    </div>
  )
}

export default function Technology() {
  const navigation = getTechNav()
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
