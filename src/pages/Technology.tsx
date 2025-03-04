import SubHeading from '../components/SubHeading'
import SubNav from '../components/SubNav'
import { getTechNav } from '../lib/navigation'
import styles from './Technology.module.css'
import { Outlet, Route, Routes } from 'react-router'

function Layout() {
  return (
    <div className="flex w-full flex-col p-300 md:p-500 lg:py-600 lg:pr-0 lg:pl-[165px]">
      <div className="flex flex-col">
        <SubHeading number={3} text="Space launch 101" />
        <div className="flex flex-grow flex-col items-center justify-center text-white lg:ml-auto">
          <Outlet />
        </div>
      </div>
      <div className={styles.background} />
    </div>
  )
}

function Panel({ name, description, images }: { name: string; description: string; images: { portrait: string; landscape: string } }) {
  const navigation = getTechNav()
  return (
    <div className="flex flex-grow flex-col items-center lg:flex-row">
      <div className="mt-800 w-screen flex-none lg:hidden">
        <img src={images.landscape} className="max-h-[258px] w-full md:max-h-[357px]" alt="Technology image landscape" />
      </div>
      <SubNav navigation={navigation} className="mt-400 mb-500 flex flex-row space-x-200 lg:my-0 lg:mr-800 lg:flex-col lg:space-y-400 lg:space-x-0">
        {({ index, isActive }) => (
          <div
            className={`text-preset-4 flex h-500 w-500 items-center justify-center rounded-full ring-1 ring-white/25 transition-all duration-500 md:h-[56px] md:w-[56px] lg:h-1000 lg:w-1000 ${isActive ? 'bg-white text-blue-900 ring-0' : 'group-hover:ring-white'}`}
          >
            {index + 1}
          </div>
        )}
      </SubNav>

      <div className="flex flex-col justify-center px-300 text-center md:w-lg md:px-0 lg:mr-400 lg:text-left">
        <div className="text-preset-4 mb-200 uppercase opacity-50">The terminology...</div>
        <h1 className="text-preset-3 mb-200 uppercase lg:mb-300">{name}</h1>
        <p className="text-preset-9 text-blue-300">{description}</p>
      </div>

      <div className="hidden flex-none lg:block">
        <img src={images.portrait} className="max-h-[734px] w-[608px]" alt="Technology image portrait" />
      </div>
    </div>
  )
}

function Technology() {
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

Technology.Panel = Panel

export default Technology
