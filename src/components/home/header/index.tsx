import Image from 'next/image'
import { motion } from 'framer-motion'

import headerBackground from 'public/image/home/utp-bg.jpg'
import logo from 'public/image/home/logo.png'
import mavraPizza from 'public/image/home/mavra-pizza.png'

import Navbar from '@/components/ui/nav'
import CustomLink from '@/components/ui/custom-link'
import { MotionSocial } from '@/components/ui/social'
import { MotionLink } from '@/components/ui/motion-link'
import { MotionImage } from '@/components/ui/motion-image'

const navList = [
  { id: 1, title: 'главная', href: '/' },
  { id: 2, title: 'о нас', href: '/' },
  { id: 3, title: 'каталог', href: '/' },
  { id: 4, title: 'где купить', href: '/' },
  { id: 5, title: 'контакты', href: '/' },
]

const headerAnimation = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.5,
      duration: custom * 0.5,
    },
  }),
}

const headerAnimationWithNegativeXOffset = {
  hidden: {
    x: -300,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.5,
      duration: custom * 0.5,
    },
  }),
}
const headerAnimationWithPositiveXOffset = {
  hidden: { ...headerAnimationWithNegativeXOffset.hidden, x: 300 },
  visible: (custom: number) => ({
    ...headerAnimationWithNegativeXOffset.visible(custom),
  }),
}

const headerAnimationWithYOffset = {
  hidden: {
    y: 300,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.5,
      duration: custom * 0.5,
    },
  }),
}

const Header = () => {
  return (
    <motion.header
      className='relative h-[90vh]'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      <Image
        src={headerBackground}
        alt='bg'
        className='w-screen h-[90vh] absolute top-0 -z-10 object-cover'
      />
      <div className='flex items-center relative text-white max-w-[1190px] m-auto pt-10 px-3'>
        <motion.div
          className='text-sm absolute left-3 top-10'
          variants={headerAnimation}
          custom='1'
        >
          <span>UA</span>
          checkbox
          <span>RU</span>
        </motion.div>
        <motion.div
          className='flex-1'
          variants={headerAnimationWithNegativeXOffset}
          custom='2'
        >
          <Navbar list={navList} />
        </motion.div>
        <MotionLink href='/' variants={headerAnimation} custom='0.5'>
          <Image
            src={logo}
            alt='logo'
            className='bg-white rounded-full min-w-[235px] min-h-[236.5px] w-[235px] h-[236.5px]'
          />
        </MotionLink>
        <motion.div
          className='flex flex-1 justify-center'
          variants={headerAnimationWithPositiveXOffset}
          custom='2'
        >
          <CustomLink href='/' text='ПАРТНЕРСТВО' withBorder={true} />
        </motion.div>

        <MotionSocial
          variants={headerAnimation}
          custom='1'
          className='absolute right-3 top-10'
        />
      </div>
      <div className='max-w-[1190px] m-auto text-white flex flex-col justify-center items-center mt-16'>
        <MotionImage
          src={mavraPizza}
          alt='mavra pizza'
          variants={headerAnimation}
          custom='0.5'
        />
        <motion.div
          className='mt-5 flex flex-col items-center'
          variants={headerAnimationWithYOffset}
          custom='2'
        >
          <p className='text-3xl text-center font-extralight'>
            Якщо бажаєте зробити замовлення на доставку-звертайтесь до наших
            партнерів{' '}
            <a
              href='https://city-drive.ua/'
              className='text-lime-500 underline hover:no-underline hover:text-amber-500 transition-all duration-500'
              target='_blank'
              rel='noreferrer'
            >
              city-drive.ua
            </a>
            , а також телефонуй за номером:
          </p>
          <a
            href={`tel: 098 7000 721`}
            className='bg-red-600 text-2xl font-semibold uppercase py-3 px-7 rounded-3xl max-w-fit mt-8 hover:bg-amber-500 transition-all duration-500'
          >
            Доставка: 098 7000 721
          </a>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header
