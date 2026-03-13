import type { Card } from '@/types/card.type'
import cn from 'clsx'
import { Button } from './Button'

interface ExtensionCardProps extends Card {
  className?: string
}

const ExtensionCard = ({title, version, imageUrl, className}: ExtensionCardProps) => {
  return (
    <div className={cn('flex flex-col items-center rounded-[15px] py-4 gap-3 md:gap-2 lg:gap-3 lg:max-h-[371px] shadow-card', className && className)}>
      <div className='flex flex-col items-center gap-4 md:gap-2 lg:gap-4'>
        <img src={imageUrl} alt={`Logo ${title}`} className=''/>
        <div className='flex flex-col gap-1 md:gap-0 lg:gap-1'>
          <h3 className='text-blue-950 text-[24px] leading-[200%] font-medium md:text-preset-3'>Add to {title}</h3>
          <p className='text-center text-preset-2-mobile-regular md:text-preset-6 text-blue-950/50'>Minimum version {version}</p>
        </div>
      </div>
      <div className=''>
        <img src="/bg-dots.svg" alt="" />
      </div>
      <div>
        <Button className='text-preset-2-mobile-medium md:text-preset-6 px-4 md:px-1.5 md:py-0.5 lg:px-4.75 lg:py-1'>Add & Install Extension</Button>
      </div>
    </div>
  )
}


export const Cards = ({cards}: {cards: Card[]})=>{
  const ladderOffsets =["lg:mt-0", "lg:mt-[40px]", "lg:mt-[80px]"]
  return (<div className='flex flex-col md:flex-row gap-4 md:gap-2 lg:gap-4 lg:justify-center'>
          {cards.map((card, index) =>(<ExtensionCard key={card.title} {...card} className={ladderOffsets[index]}/>))}
        </div>)
}
