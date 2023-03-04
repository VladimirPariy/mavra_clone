import React from 'react'
import Image from 'next/image'
import icon from 'public/image/home/hr-leaf.png'
import team from 'public/image/home/team-photo-1.jpg'
import CustomTitle from '@/components/ui/custom-title'
import CustomStartingIcon from '@/components/ui/custom-starting-icon'
import { v4 as uuid } from 'uuid'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { joinTeamSchema } from '@/lib/form-validation/join-team-validation'
import InputForm from '@/components/ui/input-form'

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

interface IInputs {
  id: string
  label: string
  fieldName: 'Name' | 'Phone' | 'Mail' | 'Message'
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
    <div className='bg-gray-50'>
      <div className='flex flex-col max-w-[975px] m-auto pb-10'>
        <CustomStartingIcon icon={icon} />
        <CustomTitle>Присоединяйся к нашей команде волшебников</CustomTitle>
        <div className='flex gap-16 mt-10 text-sm text-neutral-800'>
          <div className='flex flex-col flex-1 gap-2.5'>
            <p>
              <span className='pr-1 font-semibold uppercase'>MAVRA PIZZA</span>– это стабильная и очень хорошая работа
              для поваров. Обучаем всему и развиваем твое мастерство.
            </p>
            <p>Тебя ждет:</p>
            <ul>
              {waitingForYou.map((item) => (
                <li key={item.id} className='list-disc ml-5'>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <Image alt='' src={team} className='w-80 h-80 rounded-full' />
          <form className='flex flex-col flex-1 gap-2.5' onSubmit={handleSubmit(onSubmitForm)}>
            <p>
              <span className='font-semibold mr-1 block'>Ты с нами?</span>Тогда, заполни эту форму заявки:
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
            <button className='py-3 px-7 bg-green-600 rounded-3xl text-xs text-white font-medium uppercase hover:bg-lime-500 transition-all duration-500 leading-none'>
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default JoinTeam
