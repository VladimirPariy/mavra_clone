import Link from 'next/link'
import { navList } from '@/components/header/data/nav-list'

const Navbar = () => {
  return (
    <nav className='flex flex-wrap gap-3 font-semibold text-xs flex-1'>
      {navList.map((navItem) => (
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
