import { FC } from 'react'
import { PointsOfSales } from '@prisma/client'
import Image from 'next/image'
import heart from 'public/image/home/hr-heart.png'
import CustomTitle from '@/components/ui/custom-title'
import PointOfSale from '@/components/point-of-sale'
import CustomLink from '@/components/ui/custom-link'

interface Props {
  pointsOfSales: Pick<PointsOfSales, 'id' | 'image' | 'city' | 'street' | 'googleLink'>[]
}

const Locations: FC<Props> = ({ pointsOfSales }) => {
  return (
    <div className='my-20 max-w-[1170px] m-auto flex-col flex justify-center items-center'>
      <Image alt='heart' src={heart} className='mx-auto mt-5 mb-4' />
      <CustomTitle>Наши вкусные локации</CustomTitle>
      <div className='flex flex-wrap justify-center my-9'>
        {pointsOfSales.map((item) => (
          <PointOfSale key={item.id} item={item} />
        ))}
      </div>
      <CustomLink href={'/'} text='все локации' />
    </div>
  )
}

export default Locations
