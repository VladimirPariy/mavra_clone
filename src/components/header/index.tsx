import Image from 'next/image'
import Link from 'next/link'

import headerBackground from 'public/image/home/utp-bg.jpg'
import logo from 'public/image/home/logo.png'
import { forwardRef, Ref } from 'react'
import { motion } from 'framer-motion'

const Header = forwardRef((props, ref: Ref<HTMLElement>) => {
  return (
    <motion.header
      className='fixed z-50 top-0 h-[90px] left-0 right-0 shadow-md shadow-[#58320e]'
      ref={ref}
    >
      <Image
        src={headerBackground}
        alt='bg'
        className='w-screen object-cover object-left-bottom h-full absolute top-0 left-0 right-0 bottom-0'
      />
      <div className='relative flex'>
        <div>Nav and local</div>
        <Link href='/' className='m-auto'>
          <Image
            src={logo}
            alt='logo'
            className='bg-white rounded-full min-w-[100px] min-h-[100px] w-[100px] h-[100px]'
          />
        </Link>
        <div>Social and part</div>
      </div>
    </motion.header>
  )
})
Header.displayName = 'Header'

export const MHeader = motion(Header)

export default Header
