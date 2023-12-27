import { Outlet } from 'react-router-dom'
import { Header } from '../header/Header'
import { useGetConfig } from '../api/useGetConfig'
import { Fragment, useCallback, useEffect, useState } from 'react'
import { useConfigContext } from '../hooks/useConfigContext'
import { CURRENT_PATCH_VERSION } from '../utils/api.utils'
import { HeaderVersion } from '../header/HeaderVersion'

export function Layout() {
  const { data, isLoading } = useGetConfig()
  const { setConfig } = useConfigContext()
  const [selectedVersion, setSelectedVersion] = useState<string>(data?.update.current || CURRENT_PATCH_VERSION)

  const handleSelectVersion = useCallback((value: string) => setSelectedVersion(value), [setSelectedVersion])

  useEffect(() => {
    if (!isLoading && data) {
      setConfig(data)
    }
  }, [isLoading, data, setConfig])

  return (
    <Fragment>
      <Header />
      <HeaderVersion currentVersion={selectedVersion} handleSelectVersion={handleSelectVersion} isConfigLoading={isLoading} />
      <Outlet />
    </Fragment>
  )
}
