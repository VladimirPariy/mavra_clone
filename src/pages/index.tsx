import { FC } from 'react'
import { Goods, PointsOfSales } from '@prisma/client'
import Head from 'next/head'
import prisma from '@/backend/prisma'
import Header from '@/components/home/header'
import Footer from '@/components/footer'
import Main from '@/components/home'

interface Props {
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
      <Main goods={goods} pointsOfSales={pointsOfSales} />
      <Footer />
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
