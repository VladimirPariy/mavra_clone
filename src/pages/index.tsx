import { FC, useEffect, useRef, useState } from 'react'
import { Goods, PointsOfSales } from '@prisma/client'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import prisma from '@/backend/prisma'
import BigHeader from '@/components/home/big-header'
import Footer from '@/components/footer'
import Main from '@/components/home'
import { MHeader } from '@/components/header'

import { animationScaleAndNegYOffset } from '@/lib/animation'

interface Props {
  goods: Omit<Goods, 'composition'>[]
  pointsOfSales: Pick<
    PointsOfSales,
    'id' | 'image' | 'city' | 'street' | 'googleLink'
  >[]
}

const Home: FC<Props> = ({ goods, pointsOfSales }) => {
  const { hidden, visible } = animationScaleAndNegYOffset

  const [heightBigHeader, setHeightBigHeader] = useState(0)
  const [isVisibleHeader, setVisibleHeader] = useState(false)
  const eventRef = useRef<boolean>(false)

  const scroll = () => {
    if (window && heightBigHeader && window.scrollY >= heightBigHeader) {
      setVisibleHeader(true)
      return
    }
    setVisibleHeader(false)
  }

  useEffect(() => {
    if (window && !eventRef.current) {
      window.addEventListener('scroll', scroll)
      eventRef.current = true
    }
    return () => {
      window.removeEventListener('scroll', scroll)
      eventRef.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heightBigHeader])

  return (
    <>
      <Head>
        <title>Mavra Pizza | Замовляй i забирай!</title>
      </Head>
      <AnimatePresence>
        {isVisibleHeader && (
          <MHeader initial={hidden} animate={visible} exit={hidden} />
        )}
      </AnimatePresence>
      <BigHeader setHeight={setHeightBigHeader} setVisible={setVisibleHeader} />
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
