import styles from './Home.module.css'
import { Link } from 'react-router'

export default function Home() {
  return (
    <div className="m-300 flex flex-col justify-center md:my-1600 md:px-500 lg:justify-end lg:px-[165px]">
      <div className="flex flex-col md:px-400 lg:flex-row lg:gap-x-300 lg:px-0">
        <div className="mb-300 flex flex-col items-center gap-y-300 text-center md:px-600 lg:w-1/2 lg:items-start lg:gap-y-0 lg:px-0 lg:text-left">
          <div className="text-preset-5 text-blue-300 uppercase">So, you want to travel to</div>
          <h1 className="text-preset-1 text-white uppercase">Space</h1>
          <p className="text-preset-9 text-blue-300">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit
            back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>

        <div className="flex flex-col items-center lg:h-full lg:w-1/2">
          <div className="py-300 lg:grid lg:h-full lg:grid-cols-2">
            <Link
              to="/destination"
              className="text-preset-4 tranistion-colors flex h-[144px] w-[144px] items-center justify-center rounded-full bg-white text-blue-900 uppercase duration-500 hover:cursor-pointer hover:text-blue-900/50 hover:shadow-[0_0_0_88px_rgba(255,255,255,0.25)] md:h-[272px] md:w-[272px] lg:-col-end-1"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.background} />
    </div>
  )
}
