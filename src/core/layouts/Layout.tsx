import { Outlet } from 'react-router-dom'
import { Header } from '../header/Header'
import { HeaderUpdate } from '../header/HeaderUpdate'

interface IProps {
  isConfigLoading: boolean
}

export function Layout({ isConfigLoading }: IProps) {
  return (
    <div className={'container max-w-[1000px] mx-auto'}>
      <Header />
      <HeaderUpdate isConfigLoading={isConfigLoading} />
      <Outlet />
    </div>
  )
}
