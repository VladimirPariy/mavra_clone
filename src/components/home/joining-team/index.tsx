import React from 'react'
import Image from 'next/image'
import { v4 as uuid } from 'uuid'
import { motion } from 'framer-motion'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import icon from 'public/image/home/hr-leaf.png'
import team from 'public/image/home/team-photo-1.jpg'
import CustomTitle from '@/components/ui/custom-title'
import CustomStartingIcon from '@/components/ui/starting-icon'
import Button from '@/components/ui/button'
import InputForm from '@/components/ui/input-form'
import { joinTeamSchema } from '@/lib/form-validation/join-team-validation'
import {
  animationNegativeXOffset,
  animationPositiveXOffset,
  animationScale,
} from '@/lib/animation'
import { MotionImage } from '@/components/ui/motion-image'

interface IForm {
  Name: string
  Phone: string
  Mail: string
  Message?: string
}

interface IWaitingForYou {
  id: string
  title: string
}

export type FieldsName = 'Name' | 'Phone' | 'Mail' | 'Message'
export interface IInputs {
  id: string
  label: string
  fieldName: FieldsName
  form?: 'input' | 'textArea'
}

const waitingForYou: IWaitingForYou[] = [
  { id: uuid(), title: 'Сменный график работы' },
  { id: uuid(), title: 'Высокая заработная плата' },
  { id: uuid(), title: 'Комфортные условия, дружный коллектив' },
  { id: uuid(), title: 'Удобное месторасположение' },
  { id: uuid(), title: 'Корпоративные привилегии' },
]

const inputs: IInputs[] = [
  { id: uuid(), label: 'Имя', fieldName: 'Name' },
  { id: uuid(), label: 'Номер телефона', fieldName: 'Phone' },
  { id: uuid(), label: 'E-mail', fieldName: 'Mail' },
  { id: uuid(), label: 'Сообщение', fieldName: 'Message', form: 'textArea' },
]

const JoinTeam = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<IForm>({
    resolver: yupResolver(joinTeamSchema),
    defaultValues: {
      Name: '',
      Mail: '',
      Phone: '',
      Message: '',
    },
    mode: 'onSubmit',
  })

  const onSubmitForm: SubmitHandler<IForm> = (data) => {
    console.log(data)
    reset()
  }

  return (
    <motion.section
      className='bg-gray-50 pt-9'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className='flex flex-col max-w-[975px] m-auto pb-20 '>
        <motion.div variants={animationScale} custom={1}>
          <CustomStartingIcon icon={icon} />
          <CustomTitle>Присоединяйся к нашей команде волшебников!</CustomTitle>
        </motion.div>
        <div className='flex gap-16 mt-10 text-sm text-neutral-800 flex-wrap'>
          <motion.div
            className='flex flex-col flex-1 gap-2.5'
            variants={animationNegativeXOffset}
            custom={1}
          >
            <p>
              <span className='pr-1 font-semibold uppercase'>MAVRA PIZZA</span>–
              это стабильная и очень хорошая работа для поваров. Обучаем всему и
              развиваем твое мастерство.
            </p>
            <p>Тебя ждет:</p>
            <ul>
              {waitingForYou.map((item) => (
                <li key={item.id} className='list-disc ml-5'>
                  {item.title}
                </li>
              ))}
            </ul>
          </motion.div>
          <MotionImage
            alt=''
            src={team}
            className='w-80 h-80 rounded-full'
            variants={animationScale}
            custom={1}
          />
          <motion.form
            className='flex flex-col flex-1 gap-2.5'
            onSubmit={handleSubmit(onSubmitForm)}
            variants={animationPositiveXOffset}
            custom={1}
          >
            <p>
              <span className='font-semibold pr-1 block'>Ты с нами?</span>Тогда,
              заполни эту форму заявки:
            </p>
            <div className='flex flex-col gap-7 mt-1'>
              {inputs.map((item) => (
                <InputForm
                  errors={errors[item.fieldName]?.message}
                  registration={register(item.fieldName)}
                  key={item.id}
                  labelText={item.label}
                  inputForm={item.form}
                  value={getValues(item.fieldName)}
                />
              ))}
            </div>
            <Button>Отправить</Button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  )
}

export default JoinTeam
