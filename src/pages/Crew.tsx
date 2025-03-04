import Paragraph from '../components/Paragraph'
import SubHeading from '../components/SubHeading'
import SubNav from '../components/SubNav'
import { getCrewNav } from '../lib/navigation'
import styles from './Crew.module.css'
import { Outlet, Route, Routes } from 'react-router'

function Layout() {
  return (
    <div className="flex w-full flex-col p-300 md:p-500 lg:px-[165px] lg:py-600">
      <SubHeading number={2} text="Meet your crew" />
      <Outlet />
      <div className={styles.background} />
    </div>
  )
}

function Panel({ name, role, bio, images }: { name: string; role: string; bio: string; images: { webp: string } }) {
  const navigation = getCrewNav()
  return (
    <div className="flex flex-grow flex-col items-center gap-400 overflow-hidden pt-500 text-white md:pt-400 lg:flex-row lg:items-stretch lg:pt-0">
      <div className="flex flex-grow flex-col md:w-lg lg:w-1/2">
        <div className="mb-300 flex flex-grow flex-col justify-center text-center lg:mb-500 lg:flex-grow lg:text-left">
          <div className="text-preset-4 mb-100 uppercase opacity-50 md:mb-200">{role}</div>
          <h1 className="text-preset-3 mb-300 uppercase">{name}</h1>
          <Paragraph className="flex flex-grow lg:flex-none">{bio}</Paragraph>
        </div>
        <div className="flex w-full justify-center lg:justify-start lg:pb-600">
          <SubNav navigation={navigation} className="flex space-x-200 lg:space-x-500">
            {({ isActive }) => (
              <div
                className={`h-[10px] w-[10px] rounded-full bg-white transition-opacity duration-500 lg:h-[15px] lg:w-[15px] ${isActive ? 'opacity-100' : 'opacity-[17.4%] group-hover:block group-hover:opacity-50'}`}
              />
            )}
          </SubNav>
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
