import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/home/header/components/nav'
import Social from '@/components/home/header/components/social'
import CustomLink from '@/components/ui/custom-link'
import headerBackground from 'public/image/home/utp-bg.jpg'
import logo from 'public/image/home/logo.png'
import mavraPizza from 'public/image/home/mavra-pizza.png'

const Header = () => {
  return (
    <header className='relative h-[90vh]'>
      <Image src={headerBackground} alt='background' className='w-screen h-[90vh] absolute top-0 -z-10 object-cover' />
      <div className='flex items-center relative text-white max-w-[1190px] m-auto pt-10 px-3'>
        <div className='text-sm absolute left-3 top-10'>
          <span>UA</span>
          checkbox
          <span>RU</span>
        </div>
        <Navbar />
        <Link href='/'>
          <Image
            src={logo}
            alt='logo'
            className='bg-white rounded-full min-w-[235px] min-h-[236.5px] w-[235px] h-[236.5px]'
          />
        </Link>
        <div className='flex flex-1 justify-center'>
          <CustomLink href='/' text='ПАРТНЕРСТВО' withBorder={true} />
        </div>
        <Social />
      </div>
      <div className='max-w-[1190px] m-auto text-white flex flex-col justify-center items-center mt-16'>
        <Image src={mavraPizza} alt='mavra pizza' />
        <div className='mt-5 flex flex-col items-center'>
          <p className='text-3xl text-center font-extralight'>
            Якщо бажаєте зробити замовлення на доставку-звертайтесь до наших партнерів{' '}
            <Link
              href='https://city-drive.ua/'
              className='text-lime-500 underline hover:no-underline hover:text-amber-500 transition-all duration-500'
            >
              city-drive.ua
            </Link>
            , а також телефонуй за номером:
          </p>
          <a
            href={`tel: 098 7000 721`}
            className='bg-red-600 text-2xl font-semibold uppercase py-3 px-7 rounded-3xl max-w-fit mt-8 hover:bg-amber-500 transition-all duration-500'
          >
            Доставка: 098 7000 721
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
