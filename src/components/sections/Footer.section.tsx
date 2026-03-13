import { navLinks } from '@/constants/nav-links.constants'

const Footer = () => {
  return (
    <footer className='bg-blue-950 flex flex-col md:flex-row items-center md:items-start py-4.25 md:py-3.75 md:px-10 lg:px-21 md:gap-9 lg:gap-7.25 md:justify-center lg:justify-start'>
      <div className='mb-6 md:mb-0'>
        <img src="/logo-bookmark-white.svg" alt="" />
      </div>
        <ul className='flex flex-col md:flex-row items-center gap-3 lg:gap-6 mb-6 md:mb-0'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.url} className='text-white text-preset-2-mobile-regular uppercase'>{link.label}</a>
            </li>
          ))}
        </ul>
        <ul className='flex gap-5 md:gap-3 lg:gap-5 items-center lg:ml-auto'>
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
    </footer>
  )
}

export default Footer
