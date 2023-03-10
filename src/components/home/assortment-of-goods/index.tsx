import { FC, forwardRef, Ref } from 'react'
import pizza from 'public/image/home/partn-2-1024x683.jpg'
import wood from 'public/image/home/bg-wood.jpg'
import grass from 'public/image/home/moss-panel.jpg'
import arrow from 'public/image/home/btn-arrow.png'
import Image from 'next/image'
import Link from 'next/link'
import { Goods } from '@prisma/client'
import { motion } from 'framer-motion'
import CustomLink from '@/components/ui/custom-link'
import {
  animationNegativeXOffset,
  animationPositiveXOffset,
} from '@/lib/animation'

interface Props {
  goods: Omit<Goods, 'composition'>[]
}

interface PizzaProps {
  title: string
  image: string | null
}

type PizzaRefProps = Ref<HTMLDivElement>

const AssortmentOfGoods: FC<Props> = ({ goods }) => {
  return (
    <motion.section
      className='relative h-[641px] overflow-hidden text-white'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      <Image
        alt=''
        src={wood}
        className='w-screen h-full absolute left-0 -z-20 object-cover'
      />
      <Image
        alt=''
        src={grass}
        className='w-screen absolute top-[45%] -translate-y-2/4 -z-10 object-cover'
      />
      <div className='flex flex-col w-full h-full items-center'>
        <motion.h2
          className='mt-[55px] mb-3 text-4xl font-bold'
          variants={animationNegativeXOffset}
          custom='0.5'
        >
          Ассортимент пиццерии
        </motion.h2>
        <div className='flex flex-auto my-11 gap-16'>
          {goods.map((item, index) => (
            <MotionPizza
              key={item.id}
              variants={animationPositiveXOffset}
              custom={index + 1}
              {...item}
            />
          ))}
        </div>
        <motion.div variants={animationNegativeXOffset} custom='0.5'>
          <CustomLink href={'/'} className='mb-[35px] flex !text-sm gap-2'>
            Смотреть все
            <Image alt='' src={arrow} className='h-[14px]' />
          </CustomLink>
        </motion.div>
      </div>
    </motion.section>
  )
}

const Pizza = forwardRef(({ title, image }: PizzaProps, ref: PizzaRefProps) => {
  return (
    <div className='flex flex-col items-center' ref={ref}>
      <Link href={'/'}>
        <Image alt={title} src={image || pizza} width={265} height={265} />
      </Link>
      <Link href={'/'}>
        <div className='text-2xl font-bold mt-5 mb-3 hover:text-amber-500 transition-all duration-500'>
          {title}
        </div>
      </Link>
      <Link
        href={'/'}
        className='py-3 px-7 bg-red-600 hover:bg-amber-500 uppercase rounded-3xl text-xs tracking-[0.7px] transition-all duration-500'
      >
        Подробнее
      </Link>
    </div>
  )
})
Pizza.displayName = 'Pizza'

const MotionPizza = motion(Pizza)

export default AssortmentOfGoods
