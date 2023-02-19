import AssortmentOfGoods from '@/components/assortment-of-goods'
import Header from '@/components/header'
import WelcomeSpeech from '@/components/welcome-speech'
import Head from 'next/head'
import { FC } from 'react'
import { Goods } from '@prisma/client'
import prisma from '@/backend/prisma'

export interface Props {
  goods: Goods[]
}

const Home: FC<Props> = (props) => {
  console.log(props)

  return (
    <>
      <Head>
        <title>Mavra Pizza | Замовляй i забирай!</title>
      </Head>
      <Header />
      <main className='max-w-[1170px] m-auto'>
        <WelcomeSpeech />
        <AssortmentOfGoods />
      </main>
      <footer></footer>
    </>
  )
}

export async function getServerSideProps() {
  const goods = await prisma.goods.findMany({
    take: 3,
    where: {
      categories: {
        some: { category: 'Пицца' },
      },
    },
    select: {
      id: true,
      title: true,
      image: true,
    },
  })

  return {
    props: { goods },
  }
}

export default Home
