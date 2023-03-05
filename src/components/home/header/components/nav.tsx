import Link from 'next/link'

export const navList = [
  { id: 1, title: 'главная', href: '/' },
  { id: 2, title: 'о нас', href: '/' },
  { id: 3, title: 'каталог', href: '/' },
  { id: 4, title: 'где купить', href: '/' },
  { id: 5, title: 'контакты', href: '/' },
]

const Navbar = () => {
  return (
    <nav className='flex flex-wrap gap-3 font-semibold text-xs flex-1'>
      {navList.map((navItem) => (
        <Link href={navItem.href} key={navItem.id} className='hover:text-amber-500 transition-all duration-500'>
          <div>{navItem.title.toUpperCase()}</div>
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
