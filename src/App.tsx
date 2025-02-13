import { Crew, Destination, Home, Technology } from './pages'
import closeIcon from '/assets/shared/icon-close.svg'
import menuIcon from '/assets/shared/icon-hamburger.svg'
import logoImg from '/assets/shared/logo.svg'
import { useState } from 'react'
import { Route, Routes, Outlet, NavLink } from 'react-router'

const navigation = [
  { name: 'home', path: '/', element: <Home />, index: true },
  { name: 'destination', path: 'destination/*', to: 'destination', element: <Destination /> },
  { name: 'crew', path: 'crew/*', to: 'crew', element: <Crew /> },
  { name: 'technology', path: 'technology/*', to: 'technology', element: <Technology /> },
]

function Layout() {
  return (
    <>
      <div className="flex h-[88px] w-full items-center md:h-1200 lg:mt-500">
        <div className="flex-none px-400 lg:px-800">
          <img src={logoImg} className="h-500 w-500 md:h-600 md:w-600" />
        </div>
        <div className="z-10 -mr-500 hidden h-px w-full bg-white/25 lg:block" />

        <Nav />
      </div>

      <main className="flex w-full flex-grow">
        <Outlet />
      </main>
    </>
  )
}

function Nav() {
  const [opended, setOpened] = useState(false)
  return (
    <div className="text-preset-8 w-full text-[16px]/[19.2px] tracking-[2px] lg:ml-auto lg:w-auto">
      <div className="flex h-[88px] justify-end px-300 md:hidden">
        <button className="flex-none hover:cursor-pointer" onClick={() => setOpened(true)}>
          <img src={menuIcon} />
        </button>
        <div
          className={`fixed top-0 z-50 flex h-screen w-[254px] flex-col bg-white/5 pl-400 text-white backdrop-blur-3xl transition-all duration-300 ${opended ? 'right-0' : '-right-full'}`}
        >
          <button className="mx-300 my-400 ml-auto flex hover:cursor-pointer" onClick={() => setOpened(false)}>
            <img src={closeIcon} />
          </button>
          <nav className="mt-600 flex flex-col space-y-400">
            {navigation.map((nav, index) => (
              <NavLink key={nav.name} to={nav.to ?? nav.path} className="flex" reloadDocument>
                {({ isActive }) => (
                  <>
                    <div className="flex items-center uppercase">
                      <span className="mr-150 font-bold">{index.toString().padStart(2, '0')}</span>
                      {nav.name}
                    </div>
                    <div className={`ml-auto flex h-full w-[3px] bg-white ${isActive ? 'opacity-100' : 'hidden'}`} />
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
      <nav className="hidden h-1200 w-full justify-end space-x-600 bg-white/5 px-500 text-white backdrop-blur-3xl md:flex lg:w-3xl lg:px-800">
        {navigation.map((nav, index) => (
          <NavLink key={nav.name} to={nav.to ?? nav.path} className="group flex">
            {({ isActive }) => (
              <div className="relative flex flex-col">
                <div className="flex flex-grow items-center uppercase">
                  <span className="mr-150 font-bold">{index.toString().padStart(2, '0')}</span>
                  {nav.name}
                </div>
                <div
                  className={`absolute bottom-0 h-[3px] w-full bg-white transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:block group-hover:opacity-50'}`}
                />
              </div>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {navigation.map(nav => (
          <Route key={nav.name} {...nav} />
        ))}
      </Route>
    </Routes>
  )
}

export default App
