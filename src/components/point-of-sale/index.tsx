import Map from 'public/image/home/map'
import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'
import { PointsOfSales } from '@prisma/client'

interface IProps {
  item: Pick<PointsOfSales, 'id' | 'image' | 'city' | 'street' | 'googleLink'>
}

const PointOfSale: FC<IProps> = ({ item }) => {
  return (
    <div className='w-72 flex flex-col items-center px-4'>
      <Image
        alt='location'
        src={item.image}
        width={300}
        height={300}
        className='w-56 h-56 object-cover rounded-full mb-5'
      />
      <a
        href={item.googleLink}
        target={'_blank'}
        rel='noreferrer'
        className='flex items-center gap-2 justify-center text-sm font-semibold mb-1.5 text-amber-500 hover:text-lime-500 underline hover:no-underline transition-all duration-500'
      >
        <span className='w-5 h-6'>
          <Map />
        </span>
        <span>Искать на карте</span>
      </a>
      <div className='flex flex-col justify-center items-center text-center flex-auto font-semibold text-[15px]'>
        <p>{item.city},</p>
        <p>{item.street}</p>
      </div>
      <Link
        href={'/'}
        className='uppercase text-sm text-lime-500 font-semibold underline mt-2 hover:text-amber-500 hover:no-underline transition-all duration-500'
      >
        Перейти и заказать
      </Link>
    </div>
  )
}

export default PointOfSale
