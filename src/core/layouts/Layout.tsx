import { Outlet } from 'react-router-dom'
import { Header } from '../header/Header'
import { HeaderVersion } from '../header/HeaderVersion'

interface IProps {
  isConfigLoading: boolean
}

export function Layout({ isConfigLoading }: IProps) {
  return (
    <div className={'container max-w-[1000px] mx-auto'}>
      <Header />
      <HeaderVersion isConfigLoading={isConfigLoading} />
      <Outlet />
    </div>
  )
}
