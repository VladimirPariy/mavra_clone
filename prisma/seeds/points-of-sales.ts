import { PrismaClient, PointsOfSales } from '@prisma/client'
const prisma = new PrismaClient()

const pointsOfSales: PointsOfSales[] = [
  {
    id: 1,
    city: 'г. Запорожье',
    street: 'ул. Северокольцевая, 10а, рядом с ТЦ «ВАРУС»',
    googleLink:
      "https://www.google.com.ua/maps/place/Pivnichno-Kil'tseva+St,+10,+Zaporizhzhia,+Zaporiz'ka+oblast,+69000/@47.7844397,35.2207337,18z/data=!4m6!3m5!1s0x40dc5ebfefea5a5b:0x30483df268f7134e!8m2!3d47.7845536!4d35.2220549!16s%2Fg%2F1wf20cj6?hl=en&authuser=0",
    greeting:
      'Жителям Космического микрорайона повезло, ваша Мавка – особенная, с уютной террасой для перекуса! Жду тебя и твою семью в самом центре, возле ТЦ «Варус».',
    image: '/static/points_of_sales/pk.jpg',
    shopPhone: '+38 (095) 16-94-454',
    deliveryPhone: '+38 (098) 7000-721',
    workingDay: 'ПН-ПТ',
    workingTime: '09:00-21:00',
  },
  {
    id: 2,
    city: 'г. Запорожье',
    street: 'ул. Бородинская, 20б, рядом с ТЦ «Амстор»',
    googleLink:
      "https://www.google.com.ua/maps/place/Borodyns'ka+St,+20%D0%91,+Zaporizhzhia,+Zaporiz'ka+oblast,+69000/@47.8850189,35.0731704,17z/data=!3m1!4b1!4m5!3m4!1s0x40dc64212896705b:0x3752dcdfa5190c31!8m2!3d47.8850153!4d35.0753591?hl=en&authuser=0",
    greeting:
      'MAVRA PIZZA на правом берегу Днепра. Если ты живешь рядом со мной в этом уютном районе, то тебе сказочно повезло. Но если нет, то не переживай – возле нас есть большая парковка. Тебе будет удобно заехать за пиццей по дороге с работы домой. Все маршрутки тоже останавливаются здесь, уверена, их манит запах моей свежей пиццы)).',
    image: '/static/points_of_sales/Borodinskaya-20b-1024x733.jpg',
    shopPhone: '+38 (095) 484-95-87',
    deliveryPhone: '+38 (098) 7000-721',
    workingDay: 'ПН-ВС',
    workingTime: '09:00-21:00',
  },
  {
    id: 3,
    city: 'г. Запорожье',
    street: 'ул. Чаривная, 74, в ТЦ «Амстор»',
    googleLink:
      "https://www.google.com.ua/maps/place/Charivna+St,+74,+Zaporizhzhia,+Zaporiz'ka+oblast,+Ukraine,+69000/@47.8470599,35.238135,17z/data=!3m1!4b1!4m6!3m5!1s0x40dc5d0a22f75745:0x40cccc0efa56ac0c!8m2!3d47.8470599!4d35.238135!16s%2Fg%2F1hhvnrhx0?hl=en&authuser=0",
    greeting:
      'В Шевченковском районе живет так много любителей пиццы, что я просто обязана была открыть здесь пиццерию. Общественный транспорт ходит недалеко от меня, а если тебе и пешком близко – вообще замечательно.',
    image: '/static/points_of_sales/photo_2021-08-27_11-24-45.jpg',
    shopPhone: '+38 (095) 484-97-71',
    deliveryPhone: '+38 (098) 7000-721',
    workingDay: 'ПН-ВС',
    workingTime: '09:00-21:00',
  },
  {
    id: 4,
    city: 'г. Запорожье',
    street: 'ул. Победы, 64, внутри ТЦ «Амстор»',
    googleLink:
      "https://www.google.com.ua/maps/place/Peremohy+St,+64,+Zaporizhzhia,+Zaporiz'ka+oblast,+Ukraine,+69000/@47.8356453,35.1223167,17z/data=!3m1!4b1!4m6!3m5!1s0x40dc60cbfee2ed6f:0x6270eff5a2e0b696!8m2!3d47.8356453!4d35.1223167!16s%2Fg%2F11bw3ynl06?hl=en&authuser=0",
    greeting:
      'В центре все куда-то спешат и снуют – да это и немудрено. Особенно в обед, когда менеджеры из офисов вокруг и тысячи студентов из универов ищут вкусный и быстрый ланч. Я готовлю за 15 минут пиццу ресторанного качества, так что, уверена, мы с тобой станем лучшими друзьями 😉 Ищи меня внутри ТРЦ «Амстор».',
    image: '/static/points_of_sales/partn-3-1024x683.jpg',
    shopPhone: '+38 (095) 484-95-73',
    deliveryPhone: '+38 (098) 7000-721',
    workingDay: 'ПН-ВС',
    workingTime: '08:00-21:00',
  },
  {
    id: 5,
    city: 'г. Запорожье',
    street: 'ул. Запорожская, 12',
    googleLink:
      "https://www.google.com.ua/maps/place/Zaporiz'ka+St,+12,+Zaporizhzhia,+Zaporiz'ka+oblast,+69000/@47.8217215,35.1588171,16z/data=!4m6!3m5!1s0x40dc5e015f334b89:0x15dc4ea02ef8e860!8m2!3d47.8219566!4d35.1612247!16s%2Fg%2F11h_fsndbf?hl=en",
    greeting:
      'Пиццерия MAVRAPIZZA в одном из центральных районов города расположилась по адресу г. Запорожье, ул. Запорожская, 12. Заказывайте и забирайте с собой свою любимую пиццу и тортильи от наших пиццайола. Ждем Вас с нетерпением!',
    image: '/static/points_of_sales/zaporizka-12-1.jpg',
    shopPhone: '+38 (095) 757-03-51',
    deliveryPhone: '+38 (098) 7000-721',
    workingDay: 'ПН-ВС',
    workingTime: '09:00-21:00',
  },
  {
    id: 6,
    city: 'г. Запорожье',
    street: 'ул. Инж. Преображенского, 13, рядом с ТЦ «Амстор»',
    googleLink:
      'https://www.google.com/maps/place/%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82+%D0%86%D0%BD%D0%B6%D0%B5%D0%BD%D0%B5%D1%80%D0%B0+%D0%9F%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE,+13,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B6%D0%B6%D1%8F,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B7%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+69000/@47.8193323,35.0534992,18z/data=!4m6!3m5!1s0x40dc61a9ce67d891:0xc39587307c1eb58f!8m2!3d47.8191271!4d35.0541437!16s%2Fg%2F11c5j7wysc',
    greeting:
      'Пиццерия MAVRAPIZZA в одном из прекрасных районов города расположилась по адресу г. Запорожье, ул. Инженера Преображенского, 13, рядом с ТЦ Амстор. Заказывайте и забирайте с собой свою любимую пиццу и тортильи от наших профессиональных пиццайола. Ждем Вас с нетерпением!',
    image: '/static/points_of_sales/preobrazh-3.jpg',
    shopPhone: '+38 (095) 813-19-94',
    deliveryPhone: '+38 (098) 7000-721',
    workingDay: 'ПН-ВС',
    workingTime: '09:00-21:00',
  },
  {
    id: 7,
    city: 'г. Запорожье',
    street: 'ул. Новокузнецкая, 41, возле ТЦ «Амстор»',
    googleLink:
      'https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9D%D0%BE%D0%B2%D0%BE%D0%BA%D1%83%D0%B7%D0%BD%D0%B5%D1%86%D1%8C%D0%BA%D0%B0,+41,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B6%D0%B6%D1%8F,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B7%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+69000/@47.7740926,35.1788943,16z/data=!4m6!3m5!1s0x40dc5f028f6bece1:0x8b79439a6faef540!8m2!3d47.774269!4d35.1821965!16s%2Fg%2F11bw3x4qzk',
    greeting:
      'Пиццерия MAVRAPIZZA расположилась по адресу г. Запорожье, ул. Новокузнецкая, 41, рядом с ТЦ “Амстор”. Ждем Вас с нетерпением!',
    image: '/static/points_of_sales/novokuznetska.jpg',
    shopPhone: '+38 (095) 893-92-43',
    deliveryPhone: '+38 (098) 7000-721',
    workingDay: 'ПН-ВС',
    workingTime: '09:00-21:00',
  },
  {
    id: 8,
    city: 'г. Запорожье',
    street: 'ул. Новокузнецкая, 13в',
    googleLink:
      'https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9D%D0%BE%D0%B2%D0%BE%D0%BA%D1%83%D0%B7%D0%BD%D0%B5%D1%86%D1%8C%D0%BA%D0%B0,+13%D0%B2,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B6%D0%B6%D1%8F,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B7%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+69000/@47.7826121,35.1810161,17z/data=!4m6!3m5!1s0x40dc5ef8fcd91ad3:0x9ce82387ac57bfe4!8m2!3d47.7827167!4d35.1828046!16s%2Fg%2F11p02g5x3z?hl=uk',
    greeting:
      'Пиццерия MAVRAPIZZA расположилась по адресу г. Запорожье, ул. Новокузнецкая, 13в. Ждем Вас с нетерпением!',
    image: '/static/points_of_sales/novokuznetska-13.jpg',
    shopPhone: '+38 (095) 632-15-26',
    deliveryPhone: '+38 (098) 7000-721',
    workingDay: 'ПН-ВС',
    workingTime: '09:00-21:00',
  },
  {
    id: 9,
    city: 'г. Запорожье',
    street: 'ул. Новгородская, 9Б',
    googleLink:
      'https://www.google.com/maps/place/9A,+%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D1%8C%D0%BA%D0%B0+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F,+9%D0%90,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B6%D0%B6%D1%8F,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B7%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+69000/@47.8188314,35.0304812,17z/data=!4m6!3m5!1s0x40dc61a2f9ad9ecd:0x8100290f9bfbad90!8m2!3d47.8190168!4d35.0320781!16s%2Fg%2F1tdm280t',
    greeting:
      'Я готовлю за 15 минут пиццу ресторанного качества, так что, уверена, мы с тобой станем лучшими друзьями 😉 Ищи меня внутри ТРЦ «Амстор».',
    image:
      '/static/points_of_sales/photo_2020-11-14_19-52-01-e1605372967500-1.jpg',
    shopPhone: '+38 (095) 045-25-88',
    deliveryPhone: '+38 (098) 7000-721',
    workingDay: 'ПН-ВС',
    workingTime: '08:00-21:00',
  },
  {
    id: 10,
    city: 'г. Запорожье',
    street: 'ул. Рустави, 1Д',
    googleLink:
      'https://www.google.com/maps/place/1A,+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D1%96,+1%D0%90,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B6%D0%B6%D1%8F,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B7%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+69000/@47.8836237,35.0164041,18z/data=!4m6!3m5!1s0x40dc647a06a8627b:0x5e75f92e6e02167e!8m2!3d47.8835865!4d35.0178159!16s%2Fg%2F1tdj_3h9',
    greeting:
      'Жду тебя и твою семью на самую вкусную пиццу в мире, возле ТЦ «Апельмон».',
    image: '/static/points_of_sales/rustavi-main.jpg',
    shopPhone: '+38 (095) 430-38-50',
    deliveryPhone: '+38 (098) 7000-721',
    workingDay: 'ПН-ПТ',
    workingTime: '09:00-21:00',
  },
  {
    id: 11,
    city: 'г. Запорожье',
    street: 'Проспект Соборный, 147',
    googleLink:
      'https://www.google.com.ua/maps/place/%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82+%D0%A1%D0%BE%D0%B1%D0%BE%D1%80%D0%BD%D0%B8%D0%B9,+147,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B6%D0%B6%D1%8F,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B7%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+69000/@47.842498,35.13106,17z/data=!3m1!4b1!4m6!3m5!1s0x40dc6733f38a7655:0x22026484f67cc422!8m2!3d47.842498!4d35.13106!16s%2Fg%2F11c5mf3zy3?hl=uk&authuser=0',
    greeting:
      'Я готовлю пиццу ресторанного качества за 15 минут , так что, уверена, мы с тобой станем лучшими друзьями 😉 Жду тебя и твою семью на Соборном проспекте, 147.',
    image: '/static/points_of_sales/soborny-1024x768.jpg',
    shopPhone: '+38 (095) 025-69-90',
    deliveryPhone: '+38 (098) 7000-721',
    workingDay: 'ПН-ВС',
    workingTime: '09:00-21:00',
  },
  {
    id: 12,
    city: 'г. Запорожье',
    street: 'Хортицкое шоссе, 30а',
    googleLink:
      'https://www.google.com.ua/maps/place/%D0%A5%D0%BE%D1%80%D1%82%D0%B8%D1%86%D1%8C%D0%BA%D0%B5+%D1%88%D0%BE%D1%81%D0%B5,+30%D0%90,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B6%D0%B6%D1%8F,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B7%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+69000/@47.8305473,35.0165028,17z/data=!3m1!4b1!4m6!3m5!1s0x40dc61823568921b:0xfce0cb2facf253c7!8m2!3d47.8305473!4d35.0165028!16s%2Fg%2F11bw3x_q_d?hl=uk&authuser=0',
    greeting:
      'Я готовлю пиццу ресторанного качества за 15 минут , так что, уверена, мы с тобой станем лучшими друзьями 😉 Жду тебя и твою семью на Хортицькому шосе, 30А.',
    image: '/static/points_of_sales/khortytska-1024x537.jpg',
    shopPhone: '+38 (095) 025-70-01',
    deliveryPhone: '+38 (098) 7000-721',
    workingDay: 'ПН-ВС',
    workingTime: '08:00-21:00',
  },
  {
    id: 13,
    city: 'г. Запорожье',
    street: 'ул. Товарищеская 56',
    googleLink:
      'https://www.google.com/maps/place/%D0%A2%D0%BE%D0%B2%D0%B0%D1%80%D0%B8%D1%81%D1%8C%D0%BA%D0%B0+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F,+56,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B6%D0%B6%D1%8F,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B7%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+69000/@47.8883059,35.0648041,17z/data=!3m1!4b1!4m6!3m5!1s0x40dc643cb387c401:0xe7d6668be3ddbaae!8m2!3d47.8883059!4d35.0648041!16s%2Fg%2F1tjdpw8n',
    greeting:
      'Создаю для тебя самую волшебную и вкусную пиццу Запорожья. Авторские рецепты, фирменные ингредиенты и немного магии.',
    image: '/static/points_of_sales/photo_2022-10-26_13-44-27-1024x768.jpg',
    shopPhone: '+38 (095) 870-29-08',
    deliveryPhone: '+38 (098) 7000-721',
    workingDay: 'ПН-ВС',
    workingTime: '09:00-21:00',
  },
  {
    id: 14,
    city: 'пгт. Новониколаевка',
    street: 'ул. Украинская, 33',
    googleLink:
      'https://www.google.com.ua/maps/place/%D0%9D%D0%BE%D0%B2%D0%BE%D0%BC%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2%D0%BA%D0%B0,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B7%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+70100/@47.9761275,35.9032057,15z/data=!4m6!3m5!1s0x40dc3249bc581d05:0x61b4e5e7a3bcb782!8m2!3d47.9767667!4d35.9095015!16s%2Fg%2F1215jh4r?hl=uk&authuser=0',
    greeting: '',
    image: '/static/points_of_sales/novomykolaivka.jpg',
    shopPhone: '+38 (095) 347-28-56',
    deliveryPhone: '+38 (098) 7000-721',
    workingDay: 'ПН-ВС',
    workingTime: '09:00-21:00',
  },
  {
    id: 15,
    city: 'пгт. Кушугум',
    street: 'ул. Кірова, 196',
    googleLink:
      'https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9A%D1%96%D1%80%D0%BE%D0%B2%D0%B0,+196,+%D0%9A%D1%83%D1%88%D1%83%D0%B3%D1%83%D0%BC,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B7%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+70450/@47.7098043,35.214675,17z/data=!3m1!4b1!4m6!3m5!1s0x40dcf6257aeb6635:0xaa3474d81faec7e6!8m2!3d47.7098043!4d35.214675!16s%2Fg%2F11fjwz9w4r?hl=uk&authuser=0',
    greeting:
      'Я готовлю за 15 минут пиццу ресторанного качества, так что, уверена, мы с тобой станем лучшими друзьями 😉 Ищи меня на ул. Кирова, 196.',
    image: '/static/points_of_sales/kushugum.jpg',
    shopPhone: '+38 (095) 632-15-78',
    deliveryPhone: '+38 (098) 7000-721',
    workingDay: 'ПН-ВС',
    workingTime: '09:00-21:00',
  },
]

const seedPointsOfSales = async () => {
  const pointsOfSalesPromises = pointsOfSales.map(({ id, ...rest }) => {
    return prisma.pointsOfSales.upsert({
      where: { id },
      update: { ...rest },
      create: { id, ...rest },
    })
  })

  await Promise.all(pointsOfSalesPromises)

  console.log('[SEEDER] Points of sales have been updated')
}

export const seed = async () => {
  await seedPointsOfSales()
  console.log('[SEEDER] Done')
}

if (process.env.CLI_START) {
  seed()
    .catch((err) => {
      console.error(err)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
