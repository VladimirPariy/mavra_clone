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

import {
  animationOpacity,
  animationNegativeXOffset,
  animationPositiveXOffset,
  animationPositiveYOffset,
} from '@/lib/animation'
import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react'

const navList = [
  { id: 1, title: 'главная', href: '/' },
  { id: 2, title: 'о нас', href: '/' },
  { id: 3, title: 'каталог', href: '/' },
  { id: 4, title: 'где купить', href: '/' },
  { id: 5, title: 'контакты', href: '/' },
]

interface Props {
  setHeight: Dispatch<SetStateAction<number>>
  setVisible: Dispatch<SetStateAction<boolean>>
}

const BigHeader: FC<Props> = ({ setHeight, setVisible }) => {
  const ref = useRef<HTMLElement | null>(null)

  const resizeHandler = () => {
    const resizeObserver = new ResizeObserver((entries) => {
      const { height } = entries[0].contentRect
      setHeight(height)
      window.scrollY >= height ? setVisible(true) : setVisible(false)
    })
    if (ref.current) resizeObserver.observe(ref.current)
  }

  useEffect(() => {
    if (ref && window) {
      resizeHandler()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.section
      className='relative h-[90vh] min-h-[680px] section_main '
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      ref={ref}
    >
      <Image
        src={headerBackground}
        alt='bg'
        className='w-screen h-full absolute top-0 -z-10 object-cover'
      />
      <div className='flex items-center relative text-white max-w-[1190px] m-auto pt-10 px-3'>
        <motion.div
          className='text-sm absolute left-3 top-10'
          variants={animationOpacity}
          custom='1'
        >
          <span>UA</span>
          checkbox
          <span>RU</span>
        </motion.div>
        <motion.div
          className='flex-1'
          variants={animationNegativeXOffset}
          custom='2'
        >
          <Navbar list={navList} />
        </motion.div>
        <MotionLink href='/' variants={animationOpacity} custom='0.5'>
          <Image
            src={logo}
            alt='logo'
            className='bg-white rounded-full min-w-[235px] min-h-[236.5px] w-[235px] h-[236.5px]'
          />
        </MotionLink>
        <motion.div
          className='flex flex-1 justify-center'
          variants={animationPositiveXOffset}
          custom='2'
        >
          <CustomLink href='/' withBorder={true}>
            ПАРТНЕРСТВО
          </CustomLink>
        </motion.div>

        <MotionSocial
          variants={animationOpacity}
          custom='1'
          className='absolute right-3 top-10'
        />
      </div>
      <div className='max-w-[1190px] m-auto text-white flex flex-col justify-center items-center my-16'>
        <MotionImage
          src={mavraPizza}
          alt='mavra pizza'
          variants={animationOpacity}
          custom='0.5'
        />
        <motion.div
          className='mt-5 flex flex-col items-center'
          variants={animationPositiveYOffset}
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
    </motion.section>
  )
}

export default BigHeader
