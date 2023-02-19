import AssortmentOfGoods from '@/components/assortment-of-goods'
import Header from '@/components/header'
import WelcomeSpeech from '@/components/welcome-speech'
import Head from 'next/head'
import { FC } from 'react'
import prisma from '@/backend/prisma'
import { ShotPizzaInfo } from '@/lib/types/pizza'

export interface Props {
  goods: ShotPizzaInfo[]
}

const Home: FC<Props> = ({ goods }) => {
  return (
    <>
      <Head>
        <title>Mavra Pizza | Замовляй i забирай!</title>
      </Head>
      <Header />
      <main>
        <WelcomeSpeech />
        <AssortmentOfGoods goods={goods} />
      </main>
      <footer></footer>
    </>
  )
}

export async function getServerSideProps(): Promise<{ props: Props }> {
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
