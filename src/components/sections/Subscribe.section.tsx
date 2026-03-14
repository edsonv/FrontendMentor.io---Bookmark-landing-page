import IconError from '@/assets/icon-error.svg'
import { zodResolver } from '@hookform/resolvers/zod'
import cn from 'clsx'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../Button'

const subscribeSchema = z.object({
  email: z.email()
})

const Subscribe = () => {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(subscribeSchema)
  })

  return (
    <section className='bg-blue-600 px-4 md:px-[163px] xl:px-63 py-6 md:pt-7 md:pb-9.75 flex flex-col gap-4.25 md:gap-3.75'>
      <div className='flex flex-col items-center md:gap-3'>
        <span className='text-white text-preset-3 md:text-preset-6-semibold uppercase text-center'>35,000+ already joined</span>
        <h2 className='text-white text-preset-1 md:text-preset-2 text-center'>Stay up-to-date with what we’re doing</h2>
      </div>
      <form className='flex flex-col md:flex-row gap-1.75 md:items-start' onSubmit={handleSubmit((data)=>console.log(data))}>
        <div className={cn("rounded-[5px] md:flex-1",errors.email && 'bg-red-400 border-3 border-red-400')}>
          <div className='relative'>
          <input className='bg-white rounded-[5px] w-full px-2 md:px-3 py-1.25 md:py-1.25 text-preset-2-mobile-regular md:text-preset-6' type="email" placeholder='Enter your email address' {...register('email')} aria-invalid={errors.email ? "true" : "false"}/>
          {errors.email && <img src={IconError} alt="" className='absolute top-[50%] -translate-y-[50%] right-1.75'/>}
          </div>
          {errors.email && <p className='bg-red-400 text-preset-4 md:text-preset-7 text-white px-1.5 py-0.25'>Whoops, make sure it's an email</p>}
        </div>
        <Button variant='accent' className='py-1 md:py-1.25 md:mt-0 text-preset-2-mobile-medium md:text-preset-6-medium md:px-3' type='submit'>Contact Us</Button>
      </form>
    </section>
  )
}

export default Subscribe
