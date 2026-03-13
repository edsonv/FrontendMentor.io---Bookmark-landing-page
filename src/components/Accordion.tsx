import type { FAQ } from '@/types/faq.type'
import { useState } from 'react'
import { ArrowIcon } from './ArrowIcon'
import { Button } from './Button'

export const Accordion = ({item}: {item: FAQ}) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='flex flex-col border-b-2 border-b-blue-950/25'>
      <Button variant="accordion" className='w-full flex justify-between items-center px-0 md:pr-3 text-preset-2-mobile-regular md:text-preset-4 text-blue-950 py-2 md:py-1.75' onClick={()=>setOpen(!open)}>
        {item.question}
        <ArrowIcon stroke={open ? "hsl(0, 94%, 66%)":"hsl(231, 69%, 60%)"} className={open ? 'rotate-180': ""}/>
      </Button>
      {open && (
        <div className='pb-1.5'>
          <p className="text-preset-2-mobile-light md:text-preset-5 text-blue-950/75">{item.answer}</p>
        </div>
      )}
      </div>
  )
}
