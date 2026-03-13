import type { Feature } from '@/types/feature.type'
import cn from 'clsx'
import { useState } from 'react'
import { BgPill } from './BgPill'
import { BtnTabSelected } from './BtnTabSelected'
import { Button } from './Button'

interface TabsProps<T> {
  features: T[]
}

const TabItem = ({onClickHandler, feature,isActive, index}: {onClickHandler: () => void, feature: Feature, isActive: boolean, index: number})=>{
  return <li className={cn('w-full border-b border-blue-600/20 flex justify-center', index === 0 && "border-t md:border-t-0")}>
              <Button variant='tab' className={cn('relative text-preset-2-mobile-regular md:text-preset-5 md:w-full', isActive ? "text-blue-950" : "text-blue-950/50") } onClick={ onClickHandler}>
                  {feature.label}
                  <BtnTabSelected isActive={isActive} />
              </Button>
            </li>
}

const TabContent = ({feature}: {feature: Feature})=>{
  return <div className='-mt-0.25 lg:-mt-4 px-3.75 lg:grid lg:grid-cols-2 lg:items-center'>
          <div className='relative mt-5.5 lg:mt-11 mb-8.5 md:mb-18.75 md:flex md:justify-end'>
            <img src={feature.image} alt="" className='p-0.25 md:px-0 md:width-[76%] md:mr-4 lg:mr-2'/>
            <BgPill direction="left" />
          </div>
          <div className='flex flex-col items-center lg:items-start lg:self-start gap-2 md:gap-3 lg:ml-13 lg:mt-20.25'>
            <h2 className="text-preset-1 md:text-preset-2 text-blue-950 text-center lg:text-left max-w-[10ch] md:max-w-none">
              {feature.title}
            </h2>
            <p className="text-center lg:text-left text-preset-2-mobile-regular md:text-preset-4 text-blue-950/50 md:max-w-[40ch]">
              {feature.description}
            </p>
        <div className='flex items-center justify-center mt-2 md:mt-3 lg:mt-0'>
            <Button className="py-1 px-2.75 text-preset-2-mobile-medium">More Info</Button>
          </div>
        </div>
      </div>
}

export const Tabs = ({features}:TabsProps<Feature>) => {
  const [activeTab, setActiveTab] = useState(features[0])

  return (
    <>
      <ul className='px-3.75 md:px-10 lg:mx-34 mt-4 md:mt-6 flex flex-col md:flex-row mb-1.75'>
          {features.map((f, index) => (
            <TabItem key={f.label} onClickHandler={() => setActiveTab(features[index])} feature={f} isActive={activeTab.label === f.label} index={index}/>
          ))}
        </ul>

        <TabContent feature={activeTab}/>
    </>
  )
}
