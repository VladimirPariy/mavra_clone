import { FC } from 'react'
import { PointsOfSales } from '@prisma/client'
import heart from 'public/image/home/hr-heart.png'
import CustomTitle from '@/components/ui/custom-title'
import { MotionPointOfSale } from '@/components/point-of-sale'
import CustomLink from '@/components/ui/custom-link'
import CustomStartingIcon from '@/components/ui/starting-icon'
import { motion } from 'framer-motion'

import { animationNegativeXOffset, animationScale } from '@/lib/animation'

interface Props {
  pointsOfSales: Pick<
    PointsOfSales,
    'id' | 'image' | 'city' | 'street' | 'googleLink'
  >[]
}

const Locations: FC<Props> = ({ pointsOfSales }) => {
  return (
    <motion.section
      className='my-20 max-w-[1170px] m-auto flex-col flex justify-center items-center'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={animationNegativeXOffset} custom={1}>
        <CustomStartingIcon icon={heart} />
        <CustomTitle>Наши вкусные локации</CustomTitle>
      </motion.div>
      <div className='flex flex-wrap justify-center my-9'>
        {pointsOfSales.map((item, index) => (
          <MotionPointOfSale
            key={item.id}
            item={item}
            variants={animationScale}
            custom={1}
          />
        ))}
      </div>
      <motion.div variants={animationNegativeXOffset} custom={1}>
        <CustomLink href={'/'}>все локации</CustomLink>
      </motion.div>
    </motion.section>
  )
}

export default Locations
