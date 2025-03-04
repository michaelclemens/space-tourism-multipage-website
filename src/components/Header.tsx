import Navbar from './Navbar'
import logoImg from '/assets/shared/logo.svg'

export default function Header() {
  return (
    <header className="flex h-[88px] w-full items-center md:h-1200 lg:mt-500">
      <div className="flex-none px-400 lg:px-800">
        <img src={logoImg} className="h-500 w-500 md:h-600 md:w-600" />
      </div>
      <div className="z-10 -mr-500 hidden h-px w-full bg-white/25 lg:block" />

      <Navbar />
    </header>
  )
}
