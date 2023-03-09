import { FC } from 'react'
import WelcomeSpeech from '@/components/home/welcome-speech'
import AssortmentOfGoods from '@/components/home/assortment-of-goods'
import Locations from '@/components/home/locations'
import JoinTeam from '@/components/home/joining-team'
import FeedbackForm from '@/components/home/feedback-form'
import { Goods, PointsOfSales } from '@prisma/client'

interface Props {
  goods: Omit<Goods, 'composition'>[]
  pointsOfSales: Pick<
    PointsOfSales,
    'id' | 'image' | 'city' | 'street' | 'googleLink'
  >[]
}

const Main: FC<Props> = ({ goods, pointsOfSales }) => {
  return (
    <main>
      <WelcomeSpeech />
      <AssortmentOfGoods goods={goods} />
      <Locations pointsOfSales={pointsOfSales} />
      <JoinTeam />
      <FeedbackForm />
    </main>
  )
}

export default Main
