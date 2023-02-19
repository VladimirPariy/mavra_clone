import Link from 'next/link'
import { FC } from 'react'

interface Props {
  href: string
  text: string
  color?: string
  withBorder?: boolean
}

const CustomLink: FC<Props> = (props) => {
  const { href, text, color, withBorder } = props
  return (
    <Link
      href={href}
      className={`py-3 px-7 bg-green-600 rounded-3xl text-xs text-white font-medium uppercase hover:bg-lime-500 transition-all duration-500 
			${withBorder ? 'border' : ''} ${color ? color : ''}`}
    >
      {text}
    </Link>
  )
}

export default CustomLink
