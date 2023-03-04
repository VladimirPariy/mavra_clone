import Localization from '@/components/main/header/components/localization'
import Navbar from '@/components/main/header/components/nav'
import Logo from '@/components/main/header/components/logo'
import Social from '@/components/main/header/components/social'
import Partnership from '@/components/main/header/components/partnership'
import HeaderBackground from '@/components/main/header/components/header-background'
import MainTitle from '@/components/main/header/components/main-title'
import DeliveryOffer from '@/components/main/header/components/offer'

const Header = () => {
  return (
    <header className='relative h-[90vh]'>
      <HeaderBackground />
      <div className='flex items-center relative text-white max-w-[1190px] m-auto pt-10 px-3'>
        <Localization />
        <Navbar />
        <Logo />
        <Partnership />
        <Social />
      </div>
      <div className='max-w-[1190px] m-auto text-white flex flex-col justify-center items-center mt-16'>
        <MainTitle />
        <DeliveryOffer />
      </div>
    </header>
  )
}

export default Header
