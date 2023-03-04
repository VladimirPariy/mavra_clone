import { FC } from 'react'
import { Goods, PointsOfSales } from '@prisma/client'
import Head from 'next/head'
import prisma from '@/backend/prisma'
import Header from '@/components/main/header'
import WelcomeSpeech from '@/components/main/welcome-speech'
import AssortmentOfGoods from '@/components/main/assortment-of-goods'
import Locations from '@/components/main/locations'
import JoinTeam from '@/components/main/joining-team'

export interface Props {
  goods: Omit<Goods, 'composition'>[]
  pointsOfSales: Pick<PointsOfSales, 'id' | 'image' | 'city' | 'street' | 'googleLink'>[]
}

const Home: FC<Props> = ({ goods, pointsOfSales }) => {
  return (
    <>
      <Head>
        <title>Mavra Pizza | Замовляй i забирай!</title>
      </Head>
      <Header />
      <main>
        <WelcomeSpeech />
        <AssortmentOfGoods goods={goods} />
        <Locations pointsOfSales={pointsOfSales} />
        <JoinTeam />
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

  const pointsOfSales = await prisma.pointsOfSales.findMany({
    take: 4,
    select: {
      city: true,
      street: true,
      googleLink: true,
      image: true,
      id: true,
    },
  })

  return {
    props: { goods, pointsOfSales },
  }
}

export default Home
