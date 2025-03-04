import { Link, To } from 'react-router'

export default function ExploreButton({ to }: { to: To }) {
  return (
    <div className="py-300 lg:grid lg:h-full lg:grid-cols-2">
      <Link
        to={to}
        className="text-preset-4 tranistion-colors flex h-[144px] w-[144px] items-center justify-center rounded-full bg-white text-blue-900 uppercase duration-500 hover:cursor-pointer hover:text-blue-900/50 hover:shadow-[0_0_0_88px_rgba(255,255,255,0.25)] md:h-[272px] md:w-[272px] lg:-col-end-1"
      >
        Explore
      </Link>
    </div>
  )
}
