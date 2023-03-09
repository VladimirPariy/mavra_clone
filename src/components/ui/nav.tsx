import Link from 'next/link'
import { FC } from 'react'

interface Props {
  list: {
    id: number
    title: string
    href: string
  }[]
  className?: string
}

const Navbar: FC<Props> = ({ list, className }) => {
  return (
    <nav
      className={`flex flex-wrap gap-3 font-semibold text-xs ${
        className ? className : ''
      }`}
    >
      {list.map((navItem) => (
        <Link
          href={navItem.href}
          key={navItem.id}
          className='hover:text-amber-500 transition-all duration-500'
        >
          <div>{navItem.title.toUpperCase()}</div>
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
