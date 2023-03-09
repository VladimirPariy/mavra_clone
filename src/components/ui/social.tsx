import { motion } from 'framer-motion'
import { Facebook } from 'public/image/home/facebook'
import { Instagram } from 'public/image/home/instagram'
import { forwardRef, Ref } from 'react'

interface Props {
  className?: string
}

const socialList = [
  { id: 1, svgIcon: <Facebook />, href: 'https://www.facebook.com/Mavrapizza' },
  {
    id: 2,
    svgIcon: <Instagram />,
    href: 'https://www.instagram.com/mavra_pizza/',
  },
]
type RefProps = Ref<HTMLDivElement>

const Social = forwardRef(({ className }: Props, ref: RefProps) => {
  return (
    <div
      ref={ref}
      className={`flex gap-4 justify-end ${className ? className : ''}`}
    >
      {socialList.map((item) => (
        <a
          className='fill-lime-500 h-[21px] flex hover:fill-amber-500 transition-all duration-500'
          key={item.id}
          href={item.href}
          target='_blank'
          rel='noreferrer'
        >
          {item.svgIcon}
        </a>
      ))}
    </div>
  )
})

Social.displayName = 'Social'

export const MotionSocial = motion(Social)

export default Social
