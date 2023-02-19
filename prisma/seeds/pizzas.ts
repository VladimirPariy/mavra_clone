import {
  PrismaClient,
  Goods,
  Category,
  Price,
  Weight,
  Size,
  AdditiveType,
  Additive,
} from '@prisma/client'
const prisma = new PrismaClient()

const pizza: Goods[] = [
  {
    id: 6,
    title: '“Маріана”',
    image: '/static/pizzas/Maryana_Montazhnaya-oblast-1.png',
    composition:
      'Сир моцарелла, вершки, трави італійські, мідії, томати в’ялені, сир Дор Блю, петрушка',
  },
  {
    id: 7,
    title: '“Шакшука”',
    image: '/static/pizzas/shAKSHUKA_Montazhnaya-oblast-1.png',
    composition:
      'Соус “Пілаті”, сир моцарелла, курка, болгарський перець, томати в’ялені, цибуля маринована, яйце перепиляне, петрушка',
  },
  {
    id: 8,
    title: 'Дiабло',
    image: '/static/pizzas/dyablo_Montazhnaya-oblast-1.png',
    composition:
      'Соус “Пілаті”, перець червоний, сир моцарелла, копчений мікс, баварські ковбаски, перець чилі, соус чилі',
  },
  {
    id: 9,
    title: 'Турiн',
    image: '/static/pizzas/1_Montazhnaya-oblast-1.png',
    composition: 'Соус “Пілаті”, сир моцарелла, копчений мікс, цибуля, маслини, петрушка',
  },
  {
    id: 10,
    title: '4 Сезони',
    image: '/static/pizzas/4-sezona_Montazhnaya-oblast-1.png',
    composition: 'Соус “Пілаті”, сир моцарелла, помідор, гриби, салямі, шинка, корнішони, маслини',
  },
  {
    id: 11,
    title: 'М’ясна з Дор Блю',
    image: '/static/pizzas/Myasnaya-s-dor-blyu_Montazhnaya-oblast-1.png',
    composition: 'Соус “Пілаті”, сир моцарела, салямі, курка, сир Дор Блю',
  },
  {
    id: 12,
    title: 'Овочева Фея',
    image: '/static/pizzas/Ovoshhnaya-feya-scaled-e1643968590731.jpg',
    composition:
      'Соус Песто, моцарелла, гриби печерицi, кукурудза, перец болгарский, салат айсберг, помiдори черри',
  },
  {
    id: 13,
    title: 'Качка Теріякі',
    image: '/static/pizzas/terijaki.png',
    composition: 'Соус Пелаті, моцарелла, качка Конфі,ананас, соус Теріякі, кунжут',
  },
  {
    id: 14,
    title: 'Піґінезі',
    image: '/static/pizzas/piginezi.png',
    composition:
      'Соус сирний, моцарелла, свинина, бекон копчений, гриби шампіньйони, помідори, цибуля маринована',
  },
  {
    id: 15,
    title: 'Mavra Карбонара',
    image: '/static/pizzas/karbonara--e1605026649950.png',
    composition:
      'Томатный соус Пелати, моцарелла, бекон, лук маринованный, яйцо перепелиные, петрушка',
  },
  {
    id: 16,
    title: 'Mavra Джованни',
    image: '/static/pizzas/Dzhovany-scaled-e1643968315367.jpg',
    composition:
      'Томатный соус Пилати, моцарелла, мясной фарш, колбаски баварские, лук маринованный, перец болгарский, петрушка',
  },
  {
    id: 17,
    title: 'Mavra Гетманская',
    image: '/static/pizzas/getmanska-1-e1605024813823.png',
    composition:
      'Томатный соус Пелати, сыр моцарелла, бекон копчёный, мясной фарш, лук маринованный, помидоры черри, хрустящий лук, сыр Чеддер',
  },
  {
    id: 18,
    title: 'Mavra Чизбургер',
    image: '/static/pizzas/chyzburger.png',
    composition:
      'Томатный соус Пелати, моцарелла, говядина, бекон копчёный, лук маринованный, корнишоны, сыр Чеддер, айсберг, помидоры Черри, кунжут',
  },
  {
    id: 19,
    title: 'Mavra Пикник',
    image: '/static/pizzas/Pyknyk-scaled-e1643968726385.jpg',
    composition:
      'Сирний соус, моцарела, бекон, баварські ковбаски, помідори черрі, цибуля маринована, петрушка',
  },
  {
    id: 20,
    title: 'Mavra Жульен',
    image: '/static/pizzas/ZHulen-scaled-e1643967870589.jpg',
    composition:
      'Сырный соус, моцарелла, куриное филе, грибы шампиньоны, карамелизированый лук, петрушка',
  },
  {
    id: 21,
    title: 'Цитрусова насолода',
    image: '/static/pizzas/tsytrus-e1605795540416.png',
    composition:
      'Моцарелла, творожный соус, ананас, апельсин, соус шоколадный, шоколадные дропсы, мята',
  },
  {
    id: 22,
    title: 'Ягода-Малина',
    image: '/static/pizzas/malyna-1.png',
    composition: 'Моцарелла, ягоды малины, арахис, соус творожный, мята, топпинг шоколадный',
  },
  {
    id: 23,
    title: 'Mavra Медальон',
    image: '/static/pizzas/medalon-2.png',
    composition:
      '(Пицца с медальоном из телятины и ветчиной Йорк) Томатный соус «Пелати», моцарелла, медальйон из телятины, ветчина Йорк, помидоры черри, пармезан, сыр филадельфия, руккола, бальзамический соус',
  },
  {
    id: 24,
    title: 'Калабреза',
    image: '/static/pizzas/Kalabreza-scaled-e1643969816961.jpg',
    composition:
      '(Пицца с ветчиной и баварскими колбасками) Томатный соус «Пелати», моцарелла, ветчина Йорк, колбаски Баварские, помидоры черри, маслины, пармезан, бальзамический соус, петрушка',
  },
  {
    id: 25,
    title: 'Лесная фантазия',
    image: '/static/pizzas/DSC03763-1.png',
    composition:
      '(Фірмова піца з 4 видами м’яса) Томатний соус «Пелаті», моцарела, куряче філе, телятина, свинина, шинка копчена, цибуля червона,сир філадельфія, дорблю, рукола, помідори чері, лимон, пармезан, бальзамічний соус',
  },
  {
    id: 26,
    title: 'Морская сказка',
    image: '/static/pizzas/Morskaya-skazka-scaled-e1643971235504.jpg',
    composition:
      '(Пицца с морепродуктами) Сырный соус, сыр моцарелла, креветка королевская, пармезан, мидии, кальмар, маслины, помидоры черри, петрушка',
  },
  {
    id: 27,
    title: 'Козацкая',
    image: '/static/pizzas/PYTSATSA-01-e1675494833494.png',
    composition:
      '(Піца м’ясна та ситна) Томатний соус «Пелаті», моцарела, свинина, ковбаски баварські, цибуля червона, огірок солоний, помідори чері, пармезан, петрушка',
  },
  {
    id: 28,
    title: 'Прошутто Файна-Авокадна',
    image: '/static/pizzas/fana-avokadna.png',
    composition:
      'Соус Песто, моцарелла, сир Філадельфія, авокадо,помідори черрі, прошутто Крудо, рукола, пармезан,бальзамічний соус',
  },
  {
    id: 29,
    title: 'Курица Ветчина',
    image: '/static/pizzas/Kurka-shynka-scaled-e1643969442306.jpg',
    composition:
      '(Пицца с мясом курицы и ветчиной) Томатный соус «Пелати», моцарелла, филе куриное, ветчина Йорк, пармезан, маслины, петрушка, бальзамический соус',
  },
  {
    id: 30,
    title: 'Онли Курица',
    image: '/static/pizzas/only-kurytsa.png',
    composition:
      '(Пицца с мясом курицы) Томатный соус «Пелати», моцарелла, помидоры черри, шампиньоны, филе куриное, лук красный, петрушка',
  },
  {
    id: 31,
    title: 'Сырная Курица',
    image: '/static/pizzas/syrna-kurytsa.png',
    composition:
      '(Піца сирна з курячим філе) Сирний соус, моцарела, сир копчений, сир дор блю, сир Пармезан, куряче філе, петрушка, бальзамічний соус',
  },
  {
    id: 32,
    title: 'Салями',
    image: '/static/pizzas/SALYAMY-e1605025767456.png',
    composition: 'Томатный соус «Пилати», моцарелла, салями, орегано',
  },
  {
    id: 33,
    title: 'Сырная – заманчивая',
    image: '/static/pizzas/syrna-2.png',
    composition: '(Піца 4 сири) Сирний соус, моцарела, сир радомер, або копчений, дорблю, пармезан',
  },
  {
    id: 34,
    title: 'Маргарита',
    image: '/static/pizzas/margarita.png',
    composition: 'Соус Пелаті,моцарелла,помідори черрі, зелений базилік, пармезан',
  },
  {
    id: 35,
    title: 'Цезарь',
    image: '/static/pizzas/tsezar.png',
    composition:
      'Соус «Цезарь», моцарелла, куриное филе, бекон копченый, помидоры черри, айсберг, перепелиное яйцо, пармезан, перец черный молотый',
  },
  {
    id: 36,
    title: 'Сёмга и шпинат',
    image: '/static/pizzas/semga-shpynat-scaled-e1643970257384.jpg',
    composition: 'Сырный соус, моцарелла, семга, маслины, помидоры черри, шпинат, пармезан',
  },
]

const pizzaCategory: Category[] = [
  { id: 2, category: 'Пицца' },
  { id: 3, category: 'Пицца из половинок' },
]

const pizzaSize: Size[] = [
  { id: 1, size: 30 },
  { id: 2, size: 45 },
]

const pizzaPrice: Price[] = [
  { id: 6, goodsId: 6, sizeId: 1, price: 145 },
  { id: 7, goodsId: 6, sizeId: 2, price: 290 },
  { id: 8, goodsId: 7, sizeId: 1, price: 138 },
  { id: 9, goodsId: 7, sizeId: 2, price: 276 },
  { id: 10, goodsId: 8, sizeId: 1, price: 105 },
  { id: 11, goodsId: 8, sizeId: 2, price: 210 },
  { id: 12, goodsId: 9, sizeId: 1, price: 85 },
  { id: 13, goodsId: 9, sizeId: 2, price: 170 },
  { id: 14, goodsId: 10, sizeId: 1, price: 105 },
  { id: 15, goodsId: 10, sizeId: 2, price: 210 },
  { id: 16, goodsId: 11, sizeId: 1, price: 109 },
  { id: 17, goodsId: 11, sizeId: 2, price: 218 },
  { id: 18, goodsId: 12, sizeId: 1, price: 112 },
  { id: 19, goodsId: 12, sizeId: 2, price: 224 },
  { id: 20, goodsId: 13, sizeId: 1, price: 192 },
  { id: 21, goodsId: 13, sizeId: 2, price: 384 },
  { id: 22, goodsId: 14, sizeId: 1, price: 145 },
  { id: 23, goodsId: 14, sizeId: 2, price: 290 },
  { id: 24, goodsId: 15, sizeId: 1, price: 116 },
  { id: 25, goodsId: 15, sizeId: 2, price: 232 },
  { id: 26, goodsId: 16, sizeId: 1, price: 118 },
  { id: 27, goodsId: 16, sizeId: 2, price: 236 },
  { id: 28, goodsId: 17, sizeId: 1, price: 148 },
  { id: 29, goodsId: 17, sizeId: 2, price: 296 },
  { id: 30, goodsId: 18, sizeId: 1, price: 194 },
  { id: 31, goodsId: 18, sizeId: 2, price: 388 },
  { id: 32, goodsId: 19, sizeId: 1, price: 127 },
  { id: 33, goodsId: 19, sizeId: 2, price: 254 },
  { id: 34, goodsId: 20, sizeId: 1, price: 95 },
  { id: 35, goodsId: 20, sizeId: 2, price: 190 },
  { id: 36, goodsId: 21, sizeId: 1, price: 85 },
  { id: 37, goodsId: 21, sizeId: 2, price: 170 },
  { id: 38, goodsId: 22, sizeId: 1, price: 90 },
  { id: 39, goodsId: 22, sizeId: 2, price: 180 },
  { id: 40, goodsId: 23, sizeId: 1, price: 187 },
  { id: 41, goodsId: 23, sizeId: 2, price: 374 },
  { id: 42, goodsId: 24, sizeId: 1, price: 150 },
  { id: 43, goodsId: 24, sizeId: 2, price: 300 },
  { id: 44, goodsId: 25, sizeId: 1, price: 220 },
  { id: 45, goodsId: 25, sizeId: 2, price: 440 },
  { id: 46, goodsId: 26, sizeId: 1, price: 210 },
  { id: 47, goodsId: 26, sizeId: 2, price: 420 },
  { id: 48, goodsId: 27, sizeId: 1, price: 155 },
  { id: 49, goodsId: 27, sizeId: 2, price: 310 },
  { id: 50, goodsId: 28, sizeId: 1, price: 220 },
  { id: 51, goodsId: 28, sizeId: 2, price: 440 },
  { id: 52, goodsId: 29, sizeId: 1, price: 148 },
  { id: 53, goodsId: 29, sizeId: 2, price: 296 },
  { id: 54, goodsId: 30, sizeId: 1, price: 124 },
  { id: 55, goodsId: 30, sizeId: 2, price: 248 },
  { id: 56, goodsId: 31, sizeId: 1, price: 140 },
  { id: 57, goodsId: 31, sizeId: 2, price: 280 },
  { id: 58, goodsId: 32, sizeId: 1, price: 92 },
  { id: 59, goodsId: 32, sizeId: 2, price: 184 },
  { id: 60, goodsId: 33, sizeId: 1, price: 130 },
  { id: 61, goodsId: 33, sizeId: 2, price: 260 },
  { id: 62, goodsId: 34, sizeId: 1, price: 74 },
  { id: 63, goodsId: 34, sizeId: 2, price: 148 },
  { id: 64, goodsId: 35, sizeId: 1, price: 168 },
  { id: 65, goodsId: 35, sizeId: 2, price: 336 },
  { id: 66, goodsId: 36, sizeId: 1, price: 165 },
  { id: 67, goodsId: 36, sizeId: 2, price: 330 },
]

const pizzaWeight: Weight[] = [
  { id: 6, goodsId: 6, sizeId: 1, weight: 450 },
  { id: 7, goodsId: 6, sizeId: 2, weight: 900 },
  { id: 8, goodsId: 7, sizeId: 1, weight: 550 },
  { id: 9, goodsId: 7, sizeId: 2, weight: 1100 },
  { id: 10, goodsId: 8, sizeId: 1, weight: 560 },
  { id: 11, goodsId: 8, sizeId: 2, weight: 1120 },
  { id: 12, goodsId: 9, sizeId: 1, weight: 540 },
  { id: 13, goodsId: 9, sizeId: 2, weight: 1080 },
  { id: 14, goodsId: 10, sizeId: 1, weight: 530 },
  { id: 15, goodsId: 10, sizeId: 2, weight: 1060 },
  { id: 16, goodsId: 11, sizeId: 1, weight: 520 },
  { id: 17, goodsId: 11, sizeId: 2, weight: 1040 },
  { id: 18, goodsId: 12, sizeId: 1, weight: 595 },
  { id: 19, goodsId: 12, sizeId: 2, weight: 1190 },
  { id: 20, goodsId: 13, sizeId: 1, weight: 630 },
  { id: 21, goodsId: 13, sizeId: 2, weight: 1260 },
  { id: 22, goodsId: 14, sizeId: 1, weight: 650 },
  { id: 23, goodsId: 14, sizeId: 2, weight: 1300 },
  { id: 24, goodsId: 15, sizeId: 1, weight: 540 },
  { id: 25, goodsId: 15, sizeId: 2, weight: 1080 },
  { id: 26, goodsId: 16, sizeId: 1, weight: 580 },
  { id: 27, goodsId: 16, sizeId: 2, weight: 1160 },
  { id: 28, goodsId: 17, sizeId: 1, weight: 670 },
  { id: 29, goodsId: 17, sizeId: 2, weight: 1340 },
  { id: 30, goodsId: 18, sizeId: 1, weight: 750 },
  { id: 31, goodsId: 18, sizeId: 2, weight: 1500 },
  { id: 32, goodsId: 19, sizeId: 1, weight: 580 },
  { id: 33, goodsId: 19, sizeId: 2, weight: 1160 },
  { id: 34, goodsId: 20, sizeId: 1, weight: 590 },
  { id: 35, goodsId: 20, sizeId: 2, weight: 1180 },
  { id: 36, goodsId: 21, sizeId: 1, weight: 680 },
  { id: 37, goodsId: 21, sizeId: 2, weight: 1460 },
  { id: 38, goodsId: 22, sizeId: 1, weight: 650 },
  { id: 39, goodsId: 22, sizeId: 2, weight: 1300 },
  { id: 40, goodsId: 23, sizeId: 1, weight: 600 },
  { id: 41, goodsId: 23, sizeId: 2, weight: 1200 },
  { id: 42, goodsId: 24, sizeId: 1, weight: 610 },
  { id: 43, goodsId: 24, sizeId: 2, weight: 1220 },
  { id: 44, goodsId: 25, sizeId: 1, weight: 860 },
  { id: 45, goodsId: 25, sizeId: 2, weight: 1720 },
  { id: 46, goodsId: 26, sizeId: 1, weight: 600 },
  { id: 47, goodsId: 26, sizeId: 2, weight: 1200 },
  { id: 48, goodsId: 27, sizeId: 1, weight: 630 },
  { id: 49, goodsId: 27, sizeId: 2, weight: 1260 },
  { id: 50, goodsId: 28, sizeId: 1, weight: 700 },
  { id: 51, goodsId: 28, sizeId: 2, weight: 1400 },
  { id: 52, goodsId: 29, sizeId: 1, weight: 610 },
  { id: 53, goodsId: 29, sizeId: 2, weight: 1220 },
  { id: 54, goodsId: 30, sizeId: 1, weight: 610 },
  { id: 55, goodsId: 30, sizeId: 2, weight: 1220 },
  { id: 56, goodsId: 31, sizeId: 1, weight: 530 },
  { id: 57, goodsId: 31, sizeId: 2, weight: 1060 },
  { id: 58, goodsId: 32, sizeId: 1, weight: 540 },
  { id: 59, goodsId: 32, sizeId: 2, weight: 1080 },
  { id: 60, goodsId: 33, sizeId: 1, weight: 530 },
  { id: 61, goodsId: 33, sizeId: 2, weight: 1060 },
  { id: 62, goodsId: 34, sizeId: 1, weight: 480 },
  { id: 63, goodsId: 34, sizeId: 2, weight: 960 },
  { id: 64, goodsId: 35, sizeId: 1, weight: 650 },
  { id: 65, goodsId: 35, sizeId: 2, weight: 1300 },
  { id: 66, goodsId: 36, sizeId: 1, weight: 600 },
  { id: 67, goodsId: 36, sizeId: 2, weight: 1200 },
]

const pizzaAdditiveType: AdditiveType[] = [
  { id: 1, title: 'Бортики' },
  { id: 2, title: 'Добавки' },
  { id: 3, title: 'Соусы' },
]

const pizzaAdditive: Additive[] = [
  {
    id: 1,
    price: 48,
    title: 'Бортик с молочной сосиской (пицца 30см)',
    additiveTypeId: 1,
  },
  {
    id: 2,
    price: 96,
    title: 'Бортик с молочной сосиской (пицца 45см)',
    additiveTypeId: 1,
  },
  {
    id: 3,
    price: 42,
    title: 'Сырный бортик с сыром «Филадельфия» (пицца 30 см)',
    additiveTypeId: 1,
  },
  {
    id: 4,
    price: 84,
    title: 'Сырный бортик с сыром «Филадельфия» (пицца 45 см)',
    additiveTypeId: 1,
  },
  { id: 5, price: 10, title: 'Перец Чили', additiveTypeId: 2 },
  { id: 6, price: 26, title: 'Моцарелла', additiveTypeId: 2 },
  { id: 7, price: 12, title: 'Грибы', additiveTypeId: 2 },
  { id: 8, price: 22, title: 'Ананас', additiveTypeId: 2 },
  { id: 9, price: 25, title: 'Курица', additiveTypeId: 2 },
  { id: 10, price: 15, title: 'Соус Чили', additiveTypeId: 2 },
  { id: 11, price: 20, title: 'Кукуруза', additiveTypeId: 2 },
  { id: 12, price: 15, title: 'Сырный', additiveTypeId: 3 },
  { id: 13, price: 15, title: 'Тар-тар', additiveTypeId: 3 },
  { id: 14, price: 15, title: 'Барбекю', additiveTypeId: 3 },
  { id: 15, price: 15, title: 'Манго-чили', additiveTypeId: 3 },
]

const seedPizza = async () => {
  const additiveTypePromises = pizzaAdditiveType.map(({ id, title }) => {
    return prisma.additiveType.upsert({
      where: { id },
      update: {},
      create: { title, id },
    })
  })

  const additivePromises = pizzaAdditive.map(({ id, price, title, additiveTypeId }) => {
    return prisma.additive.upsert({
      where: { id },
      update: {},
      create: { id, title, price, additiveTypeId },
    })
  })

  const categoryPromises = pizzaCategory.map(({ category, id }) => {
    return prisma.category.upsert({
      where: { id },
      update: {},
      create: { id, category },
    })
  })

  const sizePromises = pizzaSize.map(({ id, size }) => {
    return prisma.size.upsert({
      where: { id },
      update: {},
      create: { id, size },
    })
  })

  const pizzaPromises = pizza.map(({ title, id, composition, image }) => {
    return prisma.goods.upsert({
      where: { id },
      update: {},
      create: {
        id,
        title,
        composition,
        image,
        size: {
          connect: pizzaSize.map((item) => ({ id: item.id })),
        },
        categories: {
          connect: pizzaCategory.map((item) => ({ id: item.id })),
        },
        additivesTypes: {
          connect: pizzaAdditiveType.map((item) => ({ id: item.id })),
        },
        price: {
          createMany: {
            data: pizzaPrice
              .filter((item) => item.goodsId === id)
              .map((item) => ({
                id: item.id,
                price: item.price,
              })),
          },
        },
        weight: {
          createMany: {
            data: pizzaWeight
              .filter((item) => item.goodsId === id)
              .map((item) => ({
                id: item.id,
                weight: item.weight,
              })),
          },
        },
      },
    })
  })

  const pricePromises = pizzaPrice.map(({ id, sizeId, goodsId, price }) => {
    return prisma.price.upsert({
      where: { id },
      update: { sizeId },
      create: {
        id,
        price,
        goodsId,
        sizeId,
      },
    })
  })

  const weightPromises = pizzaWeight.map(({ goodsId, id, sizeId, weight }) => {
    return prisma.weight.upsert({
      where: { id },
      update: { sizeId },
      create: {
        id,
        goodsId,
        sizeId,
        weight,
      },
    })
  })

  await Promise.all(additiveTypePromises)
  await Promise.all(additivePromises)
  await Promise.all(categoryPromises)
  await Promise.all(sizePromises)
  await Promise.all(pizzaPromises)
  await Promise.all(pricePromises)
  await Promise.all(weightPromises)

  console.log('[SEEDER] Pizza have been updated')
}

export const seed = async () => {
  await seedPizza()
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
