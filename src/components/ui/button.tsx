import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

const Button: FC<Props> = ({ children, className }) => {
  return (
    <button
      className={`py-3 px-7 bg-green-600 rounded-3xl text-xs text-white font-medium uppercase hover:bg-lime-500 transition-all duration-500 leading-none max-w-fit m-auto ${
        className ? className : ''
      }`}
    >
      {children}
    </button>
  )
}

export default Button
