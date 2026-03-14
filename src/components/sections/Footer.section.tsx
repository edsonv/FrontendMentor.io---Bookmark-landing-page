import IconFacebook from '@/assets/icon-facebook.svg'
import IconTwitter from '@/assets/icon-twitter.svg'
import LogoBookmarkWhite from '@/assets/logo-bookmark-white.svg'
import { navLinks } from '@/constants/nav-links.constants'

const Footer = () => {
  return (
    <footer className='bg-blue-950 flex flex-col md:flex-row items-center md:items-start py-4.25 md:py-3.75 md:px-10 xl:px-21 md:gap-9 xl:gap-7.25 md:justify-center xl:justify-start'>
      <div className='mb-6 md:mb-0'>
        <img src={LogoBookmarkWhite} alt="" />
      </div>
        <ul className='flex flex-col md:flex-row items-center gap-3 xl:gap-6 mb-6 md:mb-0'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.url} className='text-white text-preset-2-mobile-regular uppercase'>{link.label}</a>
            </li>
          ))}
        </ul>
        <ul className='flex gap-5 md:gap-3 xl:gap-5 items-center xl:ml-auto'>
          <li>
            <a href="#">
              <img src={IconFacebook} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={IconTwitter} alt="" />
            </a>
          </li>
        </ul>
    </footer>
  )
}

export default Footer
