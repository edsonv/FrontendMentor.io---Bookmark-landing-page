import { faqsItems } from '@/constants/faqs.constants'
import { Accordion } from '../Accordion'
import { Button } from '../Button'

const FAQ = () => {
  return (
    <section className='mx-4 md:mx-14.25 lg:mx-56 mb-16 md:mb-19.5 lg:mb-22.5'>
      <div className='flex flex-col gap-2 mb-4.5'>
        <h2 className='text-preset-1 md:text-preset-2 text-blue-950 text-center'>Frequently Asked Questions</h2>
        <p className='text-center text-preset-2-mobile-regular md:text-preset-4 text-blue-950/50'>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
      </div>

      <div className='mb-6.5 md:mb-7 mt-4.75 md:mt-7'>
        <div className='flex flex-col w-full border-t-2 border-t-blue-950/25'>
          {
            faqsItems.map((faq) => (
              <Accordion key={faq.question} item={faq} />
            ))
          }
      </div>
      </div>

      <div className='flex justify-center'>
        <Button className="py-1 px-2.75 text-preset-2-mobile-medium">More Info</Button>
      </div>
    </section>
  )
}

export default FAQ
