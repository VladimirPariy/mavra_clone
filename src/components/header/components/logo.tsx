import Image from 'next/image'
import Link from 'next/link'
import image from 'public/image/home/logo.png'

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src={image}
        alt='logo'
        className='bg-white rounded-full min-w-[235px] min-h-[236.5px] w-[235px] h-[236.5px]'
      />
    </Link>
  )
}

export default Logo
