import { FC, useState, FocusEvent, useEffect } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface Props {
  labelText: string
  inputType?: string
  errors: string | undefined
  registration: UseFormRegisterReturn<string>
  inputForm?: 'input' | 'textArea'
  value?: string
  className?: string
  textAreaLength?: number
}

const InputForm: FC<Props> = (props) => {
  const {
    errors,
    labelText,
    registration,
    inputType = 'text',
    inputForm = 'input',
    value,
    className,
    textAreaLength = 62,
  } = props

  const [isHover, setIsHover] = useState<boolean>(false)
  const [isLabelOpacity, setIsLabelOpacity] = useState<boolean>(true)

  const focusHandler = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.currentTarget === e.target && setIsHover(true)
  }
  const blurHandler = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.currentTarget === e.target && setIsHover(false)
    e.target.value.length === 0
      ? setIsLabelOpacity(true)
      : setIsLabelOpacity(false)
  }
  useEffect(() => {
    value?.length === 0 && setIsLabelOpacity(true)
  }, [value])

  return (
    <div className={`relative ${className ? className : ''}`}>
      <label
        className={`${
          !isHover
            ? `absolute top-0 left-2 text-sm transition-all duration-500 ${
                isLabelOpacity ? 'opacity-100' : 'opacity-0'
              } ${errors ? 'text-red-500' : ''}`
            : `absolute -top-3 left-0 text-xs transition-all duration-500 text-gray-400 ${
                errors ? 'text-red-300' : ''
              }`
        }`}
      >
        {labelText}
      </label>
      {inputForm === 'input' ? (
        <input
          type={inputType}
          {...registration}
          className={`bg-transparent border-b-[1px] border-gray-300 focus:border-b-[1px] focus:border-gray-400 outline-0 relative z-10 transition-all duration-500 px-2 w-full ${
            errors ? 'border-red-300 focus:border-red-500' : ''
          } `}
          onBlur={blurHandler}
          onFocus={focusHandler}
        />
      ) : (
        <textarea
          {...registration}
          className={`resize-none bg-transparent border-b-[1px] border-gray-300 focus:border-b-[1px] focus:border-gray-400 outline-0 relative z-10 transition-all duration-500 px-2 w-full ${
            errors ? 'border-red-300 focus:border-red-500' : ''
          }`}
          onBlur={blurHandler}
          onFocus={focusHandler}
          maxLength={textAreaLength}
        />
      )}
      <div
        className={`absolute text-xs text-red-500 transition-all duration-500 ${
          errors ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {errors}
      </div>
    </div>
  )
}

export default InputForm
