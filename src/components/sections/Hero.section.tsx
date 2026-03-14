import IllustrationHero from '@/assets/illustration-hero.svg'
import { BgPill } from '../BgPill'
import { Button } from '../Button'

const Hero = () => {
  return (
    <section className='mb-16 md:mb-15.5 xl:mb-9.75 xl:pb-5 max-w-[100vw] overflow-hidden xl:grid xl:grid-cols-2 xl:pl-[165px] xl:items-center'>
          <div className='relative mb-5.5 md:mb-10.75 xl:mb-1 md:px-5.75 xl:px-0 xl:order-2'>
            <img src={IllustrationHero} alt="" className="p-1.5 xl:p-0 xl:-ml-8.75" />
            <BgPill />
          </div>

          <div className='px-3.75 md:px-13 xl:p-0 xl:mr-9 flex flex-col gap-3 md:gap-2.75 xl:gap-2.75 xl:mt-6'>
            <div className='flex flex-col gap-3.25 xl:gap-2.75 mt-0.25'>
              <h1 className='text-center xl:text-left text-preset-1 capitalize text-blue-950'>A simple bookmark manager</h1>
              <p className='text-blue-950/50 text-center xl:text-left  text-preset-2-mobile-regular md:text-preset-4'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            </div>
            <div className='flex gap-2 md:gap-2.5 justify-center xl:justify-start -mt-0.25'>
              <Button className='text-preset-2-mobile-medium md:px-2.75'>Get it on Chrome</Button>
              <Button variant="muted" className='text-preset-2-mobile-medium md:px-2.75'>Get it on Firefox</Button>
            </div>
          </div>
        </section>
  )
}

export default Hero
