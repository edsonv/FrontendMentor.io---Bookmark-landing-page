import { features } from '@/constants/features.constants'
import { Tabs } from '../Tabs'

const Features = () => {

  return (
    <section className='mb-16.5 md:mb-18.75 xl:mb-12.5 overflow-hidden'>
          <div className='px-3.75 md:px-12.5 flex flex-col gap-2 xl:max-w-95 xl:mx-auto'>
            <h2 className='text-preset-1 md:text-preset-2 text-blue-950 text-center'>Features</h2>
            <p className='text-center text-preset-2-mobile-regular md:text-preset-4 text-blue-950/50'>Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.</p>
          </div>

          <Tabs features={features} />
        </section>
  )
}

export default Features
