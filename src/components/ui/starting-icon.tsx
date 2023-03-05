import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'

interface Props {
  icon: StaticImageData
}

const CustomStartingIcon: FC<Props> = ({ icon }) => {
  return <Image alt='icon' src={icon} className='mx-auto mt-5 mb-4' />
}

export default CustomStartingIcon
