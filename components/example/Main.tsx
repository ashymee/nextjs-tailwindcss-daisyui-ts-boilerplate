import React, { FC } from 'react'

const Main: FC = ({ children }) => {
  return (
    <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
      {children}
    </main>
  )
}

export default Main
