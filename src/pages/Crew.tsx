import { crew } from '../data.json'
import { background } from './Crew.module.css'
import { NavLink, Outlet, Route, Routes } from 'react-router'

const getCrewNav = () =>
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

function Layout() {
  return (
    <div className="flex w-full flex-col p-300 md:p-500 lg:px-[165px] lg:py-600">
      <h1 className="text-preset-6-mobile md:text-preset-5 mb-300 text-center text-white uppercase md:text-left">
        <span className="mr-300 opacity-25">02</span>Meet your crew
      </h1>

      <Outlet />

      <div className={background} />
    </div>
  )
}

function Nav() {
  const navigation = getCrewNav()
  return (
    <nav className="flex space-x-200 lg:space-x-500">
      {navigation.map(nav => (
        <NavLink key={nav.name} to={nav.to ?? nav.path} end={nav.end} className="group">
          {({ isActive }) => (
            <div
              className={`h-[10px] w-[10px] rounded-full bg-white transition-opacity duration-500 lg:h-[15px] lg:w-[15px] ${isActive ? 'opacity-100' : 'opacity-[17.4%] group-hover:block group-hover:opacity-50'}`}
            />
          )}
        </NavLink>
      ))}
    </nav>
  )
}

function Panel({ name, role, bio, images }) {
  return (
    <div className="flex flex-grow flex-col items-center gap-400 overflow-hidden pt-500 text-white md:pt-400 lg:flex-row lg:items-stretch lg:pt-0">
      <div className="flex flex-grow flex-col md:w-lg lg:w-1/2">
        <div className="mb-300 flex flex-grow flex-col justify-center text-center lg:mb-500 lg:flex-grow lg:text-left">
          <div className="text-preset-4 mb-100 uppercase opacity-50 md:mb-200">{role}</div>
          <h1 className="text-preset-3 mb-300 uppercase">{name}</h1>
          <p className="text-preset-9 flex flex-grow text-blue-300 lg:flex-none">{bio}</p>
        </div>
        <div className="flex w-full justify-center lg:justify-start lg:pb-600">
          <Nav />
        </div>
      </div>
      <div className="mask flex flex-grow flex-col items-center justify-center lg:mt-0 lg:w-1/2 lg:justify-end">
        <img src={images.webp} className="max-h-[734px] w-[271.24px] md:w-[446.74px] lg:w-[539.28px]" />
      </div>
    </div>
  )
}

function Crew() {
  const navigation = getCrewNav()
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

Crew.Panel = Panel

export default Crew
