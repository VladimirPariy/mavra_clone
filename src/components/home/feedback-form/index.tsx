import CustomTitle from '@/components/ui/custom-title'
import CustomStartingIcon from '@/components/ui/starting-icon'
import yinYang from 'public/image/home/hr-in-yan.png'
import InputForm from '@/components/ui/input-form'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { v4 as uuid } from 'uuid'
import { IInputs, FieldsName } from '@/components/home/joining-team'
import { feedbackSchema } from '@/lib/form-validation/feedback-validation'
import Button from '@/components/ui/button'

interface IForm {
  Name: string
  Mail: string
  Phone: string
  Topic: string
  Message: string
}

type FeedbackFields = FieldsName | 'Topic'

interface IFields extends Omit<IInputs, 'fieldName'> {
  fieldName: FeedbackFields
}

const fields: IFields[] = [
  { id: uuid(), label: 'Ваше имя', fieldName: 'Name' },
  { id: uuid(), label: 'E-mail', fieldName: 'Mail' },
  { id: uuid(), label: 'Номер телефона', fieldName: 'Phone' },
  { id: uuid(), label: 'Тема', fieldName: 'Topic' },
  { id: uuid(), label: 'Сообщение', fieldName: 'Message', form: 'textArea' },
]

const FeedbackForm = () => {
  const {
    getValues,
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IForm>({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      Name: '',
      Mail: '',
      Phone: '',
      Message: '',
      Topic: '',
    },
    mode: 'onSubmit',
  })

  const onSubmitForm: SubmitHandler<IForm> = (data) => {
    console.log(data)
    reset()
  }

  return (
    <div className='max-w-[550px] m-auto pb-20 pt-9'>
      <CustomStartingIcon icon={yinYang} />
      <CustomTitle>Обратная связь</CustomTitle>
      <div className='text-base font-semibold text-center'>
        <p>Если у вас есть вопросы или предложения,</p>
        <p>напишите нам!</p>
      </div>
      <form onSubmit={handleSubmit(onSubmitForm)} className='grid gap-7 grid-cols-2 mt-9'>
        {fields.map((item) => (
          <InputForm
            errors={errors[item.fieldName]?.message}
            registration={register(item.fieldName)}
            key={item.id}
            labelText={item.label}
            inputForm={item.form}
            value={getValues(item.fieldName)}
            className={item.fieldName === 'Message' ? 'col-span-2' : ''}
            textAreaLength={item.fieldName === 'Message' ? 200 : 0}
          />
        ))}
        <Button className='col-span-2'>Отправить</Button>
      </form>
    </div>
  )
}

export default FeedbackForm
