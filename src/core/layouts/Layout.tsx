import { Outlet } from 'react-router-dom'
import { Header } from '../header/Header'
import { Fragment } from 'react'
import { HeaderVersion } from '../header/HeaderVersion'

interface IProps {
  isConfigLoading: boolean
}

export function Layout({ isConfigLoading }: IProps) {
  return (
    <Fragment>
      <Header />
      <HeaderVersion isConfigLoading={isConfigLoading} />
      <Outlet />
    </Fragment>
  )
}
