import IconClose from '@/assets/icon-close.svg'
import IconHamburger from '@/assets/icon-hamburger.svg'
import LogoBookmarkAllWhite from '@/assets/logo-bookmark-all-white.svg'
import LogoBookmark from '@/assets/logo-bookmark.svg'
import { navLinks } from '@/constants/nav-links.constants'
import cn from "clsx"
import { useEffect, useState } from 'react'
import { Button } from '../Button'



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(()=>{
    if(isMenuOpen){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
  },[isMenuOpen])

  return (
    <header className={cn('mb-3 xl:mb-7', isMenuOpen && 'fixed top-0 h-full w-full bg-blue-950/95 py-5 px-4 md:px-10 z-10 overscroll-contain scroll-y-0')}>
        <div className={cn('flex justify-between xl:items-center', !isMenuOpen ? 'py-5 px-4 md:px-10 xl:px-21 xl:py-3.5': 'mb-5')}>
          <a href="#"><img src={isMenuOpen ? LogoBookmarkAllWhite : LogoBookmark} alt="" /></a>

          <Button variant="icon" type='button' onClick={() => setIsMenuOpen(!isMenuOpen)} className='xl:hidden'>
            <img src={isMenuOpen ? IconClose: IconHamburger} alt="" />
          </Button>

          <nav className='hidden xl:block'>
            <ul className='flex items-center xl:gap-6'>
              {navLinks.map((link) => (
                <li key={link.label} className='border-t border-b border-white/15'>
                  <a href={link.url} className='text-white text-[20px] uppercase leading-[17px] tracking-[2.31px] font-normal text-center w-full block py-3 xl:text-preset-6 xl:text-blue-950'>{link.label}</a>
                </li>
              ))}
              <li className='mt-2.5 xl:mt-0'>
                <Button variant="primary" className='w-full text-[20px] leading-[17px] tracking-[2.31px] font-normal uppercase py-1.75 xl:text-preset-6 xl:bg-red-400! xl:py-0.75 xl:px-4.25'>Login</Button>
              </li>
          </ul>
        </nav>
        </div>
        {isMenuOpen && (
          <>
          <nav className=''>
            <ul>
              {navLinks.map((link) => (
                <li key={link.label} className='border-t border-b border-white/15'>
                  <a href={link.url} className='text-white text-[20px] uppercase leading-[17px] tracking-[2.31px] font-normal text-center w-full block py-3'>{link.label}</a>
                </li>
              ))}
              <li className='mt-2.5'>
                <Button variant="outline" className='w-full text-[20px] leading-[17px] tracking-[2.31px] font-normal uppercase py-1.75'>Login</Button>
              </li>
          </ul>
        </nav>
        <ul className='flex gap-5 justify-center fixed bottom-6 left-0 w-full'>
          <li>
            <a href="#">
              <img src="/icon-facebook.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/icon-twitter.svg" alt="" />
            </a>
          </li>
        </ul>
      </>
      )}

      </header>
  )
}

export default Header
