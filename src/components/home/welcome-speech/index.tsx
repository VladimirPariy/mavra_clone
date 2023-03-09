import { motion } from 'framer-motion'
import Image from 'next/image'
import pizza from 'public/image/home/partn-2-1024x683.jpg'
import heart from 'public/image/home/hr-heart.png'
import CustomLink from '@/components/ui/custom-link'
import CustomTitle from '@/components/ui/custom-title'
import CustomStartingIcon from '@/components/ui/starting-icon'
import { MotionImage } from '@/components/ui/motion-image'

const animationNegativeXOffset = {
  hidden: {
    opacity: 0,
    x: -300,
  },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom,
      duration: custom,
    },
  }),
}

const animationPositiveXOffset = {
  hidden: {
    opacity: 0,
    x: 300,
  },
  visible: (custom: number) => ({
    ...animationNegativeXOffset.visible(custom),
  }),
}

const WelcomeSpeech = () => {
  return (
    <motion.section
      className='max-w-[1170px] m-auto'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className='flex py-[70px] flex-wrap justify-center'>
        <MotionImage
          variants={animationNegativeXOffset}
          custom='0.5'
          alt='pizza'
          src={pizza}
          className='max-w-[585px] px-[15px] h-full'
        />
        <motion.div
          className='max-w-[585px] px-[50px] py-[35px] text-center'
          variants={animationPositiveXOffset}
          custom='0.5'
        >
          <CustomStartingIcon icon={heart} />
          <CustomTitle>Привет! Я – MAVRA PIZZA!</CustomTitle>
          <div className='text-sm flex flex-col gap-2.5 leading-7'>
            <p>
              Создаю для тебя самую волшебную и вкусную пиццу Запорожья.
              Авторские рецепты, фирменные ингредиенты и немного магии.
            </p>
            <p>Моя фаворитка – «Лесная фантазия». Попробуешь?))</p>
            <p>Просто найди меня, подожди 15 минут и получи свою коробочку</p>
            <p>с горячей пиццей 😉</p>
          </div>
          <div className='my-6'>
            <CustomLink href='/' text='Подробнее' withBorder={true} />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default WelcomeSpeech
