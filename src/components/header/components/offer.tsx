import Link from 'next/link'

const DeliveryOffer = () => {
  return (
    <div className='mt-5 flex flex-col items-center'>
      <p className='text-3xl text-center font-extralight'>
        Якщо бажаєте зробити замовлення на доставку-звертайтесь до наших партнерів{' '}
        <Link
          href='https://city-drive.ua/'
          className='text-lime-500 underline hover:no-underline hover:text-amber-500 transition-all duration-500'
        >
          city-drive.ua
        </Link>
        , а також телефонуй за номером:
      </p>
      <a
        href={`tel: 098 7000 721`}
        className='bg-red-600 text-2xl font-semibold uppercase py-3 px-7 rounded-3xl max-w-fit mt-8 hover:bg-amber-500 transition-all duration-500'
      >
        Доставка: 098 7000 721
      </a>
    </div>
  )
}

export default DeliveryOffer
