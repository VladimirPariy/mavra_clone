import { motion } from 'framer-motion'
import Link from 'next/link'
import { forwardRef, ReactNode, Ref } from 'react'

interface Props {
  href: string
  children: ReactNode
  color?: string
  withBorder?: boolean
  className?: string
}

type RefProps = Ref<HTMLAnchorElement>

const CustomLink = forwardRef((props: Props, ref: RefProps) => {
  const { href, children, color, withBorder, className } = props
  return (
    <Link
      ref={ref}
      href={href}
      className={`px-7 bg-green-600 rounded-3xl text-xs pb-3 pt-3.5 text-white font-medium uppercase hover:bg-lime-500 transition-all duration-500 
			${withBorder ? 'border' : ''} ${color ? color : ''} ${
        className ? className : ''
      }`}
    >
      {children}
    </Link>
  )
})

CustomLink.displayName = 'CustomLink'

export const MotionCustomLink = motion(CustomLink)

export default CustomLink
