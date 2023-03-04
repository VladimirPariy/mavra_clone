import { FC } from 'react'
import pizza from 'public/image/home/partn-2-1024x683.jpg'
import wood from 'public/image/home/bg-wood.jpg'
import grass from 'public/image/home/moss-panel.jpg'
import arrow from 'public/image/home/btn-arrow.png'
import Image from 'next/image'
import Link from 'next/link'
import { Goods } from '@prisma/client'

interface Props {
  goods: Omit<Goods, 'composition'>[]
}

const AssortmentOfGoods: FC<Props> = ({ goods }) => {
  return (
    <div className='relative h-[641px] overflow-hidden text-white'>
      <Image alt='' src={wood} className='w-screen h-full absolute left-0 -z-20 object-cover' />
      <Image alt='' src={grass} className='w-screen absolute top-[45%] -translate-y-2/4 -z-10 object-cover' />
      <div className='flex flex-col w-full h-full items-center'>
        <h2 className='mt-[55px] mb-3 text-4xl font-bold'>Ассортимент пиццерии</h2>
        <div className='flex flex-auto my-11 gap-16'>
          {goods.map((item) => (
            <div key={item.id} className='flex flex-col items-center'>
              <Link href={'/'}>
                <Image alt={item.title} src={item.image || pizza} width={265} height={265} />
              </Link>
              <Link href={'/'}>
                <div className='text-2xl font-bold mt-5 mb-3 hover:text-amber-500 transition-all duration-500'>
                  {item.title}
                </div>
              </Link>
              <Link
                href={'/'}
                className='py-3 px-7 bg-red-600 hover:bg-amber-500 uppercase rounded-3xl text-xs tracking-[0.7px] transition-all duration-500'
              >
                Подробнее
              </Link>
            </div>
          ))}
        </div>
        <Link
          href={'/'}
          className='mb-[35px] flex  py-3 px-7 bg-green-600 rounded-3xl text-sm text-white font-medium uppercase hover:bg-lime-500 transition-all duration-500 gap-2'
        >
          Смотреть все <Image alt='' src={arrow} className='h-[14px]' />
        </Link>
      </div>
    </div>
  )
}

export default AssortmentOfGoods
