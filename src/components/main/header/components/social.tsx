import Link from 'next/link'
import { socialLink } from '@/components/header/data/social-links'

const Social = () => {
  return (
    <div className='flex gap-4 justify-end absolute right-3 top-10'>
      {socialLink.map((link) => (
        <Link
          className='fill-lime-500 h-[21px] flex hover:fill-amber-500 transition-all duration-500'
          key={link.id}
          href={link.href}
        >
          {link.svgIcon}
        </Link>
      ))}
    </div>
  )
}

export default Social
