import Image from 'next/image'
import grass from 'public/image/home/moss-panel.jpg'
import bgLogo from 'public/image/home/footer-bg.png'
import logo from 'public/image/home/logo.png'
import Mail from 'public/image/home/mail'
import Navbar from '../ui/nav'
import Social from '../ui/social'

export const navList = [
  { id: 1, title: 'главная', href: '/' },
  { id: 2, title: 'о нас', href: '/' },
  { id: 3, title: 'каталог', href: '/' },
  { id: 4, title: 'где купить', href: '/' },
  { id: 5, title: 'партнерам', href: '/' },
  { id: 6, title: 'контакты', href: '/' },
]

const Footer = () => {
  return (
    <footer className='relative overflow-hidden'>
      <div className='bg-[#3a2511] pb-10 text-white relative'>
        <Image src={bgLogo} alt='' className='absolute w-80 top-[30px]' />
        <div className='flex flex-col pt-5  gap-3 max-w-[1170px] m-auto'>
          <div className='flex justify-between gap-3 flex-wrap items-center px-7'>
            <Image
              src={logo}
              alt=''
              className='bg-white rounded-full h-24 w-24'
            />
            <Navbar list={navList} className='relative z-10' />
            <a href='mailto:' className='flex gap-2'>
              <Mail className='stroke-green-600' />
              <span>mavrapizza@ukr.net</span>
            </a>
            <Social />
          </div>
          <p className='mb-5 text-sm'>© 2020, MAVRA PIZZA</p>
        </div>
      </div>
      <Image
        alt=''
        src={grass}
        className='absolute -bottom-10 z-10 w-full h-20'
      />
    </footer>
  )
}

export default Footer
