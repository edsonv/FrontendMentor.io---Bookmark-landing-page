import { cards } from '@/constants/cards.constants'
import { Cards } from '../Card'

const Downloads = () => {
  return (
    <section className='mx-6 mb-15.5 md:mb-16 lg:mb-20'>
      <div className='flex flex-col items-center gap-2.25 lg:gap-2 mb-4.25 lg:mb-8'>
        <h2 className='text-preset-1 md:text-preset-2 text-blue-950 text-center max-w-[11ch] md:max-w-none'>Download the extension</h2>
        <p className='text-center text-preset-2-mobile-regular md:text-preset-4 text-blue-950/50 md:max-w-[50ch]'>We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <Cards cards={cards}/>
    </section>
  )
}

export default Downloads
