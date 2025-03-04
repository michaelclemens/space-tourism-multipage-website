import ExploreButton from '../components/ExploreButton'
import Paragraph from '../components/Paragraph'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className="m-300 flex flex-col justify-center md:my-1600 md:px-500 lg:justify-end lg:px-[165px]">
      <div className="flex flex-col md:px-400 lg:flex-row lg:gap-x-300 lg:px-0">
        <div className="mb-300 flex flex-col items-center gap-y-300 text-center md:px-600 lg:w-1/2 lg:items-start lg:gap-y-0 lg:px-0 lg:text-left">
          <span className="text-preset-5 text-blue-300 uppercase">So, you want to travel to</span>
          <h1 className="text-preset-1 text-white uppercase">Space</h1>
          <Paragraph>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit
            back, and relax because we’ll give you a truly out of this world experience!
          </Paragraph>
        </div>

        <div className="flex flex-col items-center lg:h-full lg:w-1/2">
          <ExploreButton to="/destination" />
        </div>
      </div>

      <div className={styles.background} />
    </div>
  )
}
