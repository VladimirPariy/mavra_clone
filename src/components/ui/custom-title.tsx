import { PropsWithChildren, FC } from 'react'

const CustomTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h2 className='pb-5 text-4xl font-semibold text-[#402813] text-center'>
      {children}
    </h2>
  )
}

export default CustomTitle
