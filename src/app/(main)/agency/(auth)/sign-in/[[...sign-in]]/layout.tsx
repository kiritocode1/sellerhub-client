import { FC } from 'react'

interface layoutProps {
  children: React.ReactNode
}

const layout: FC<layoutProps> = ({children}) => {
  return <div className='grid min-h-screen w-full place-content-center'>{children}</div>
}

export default layout