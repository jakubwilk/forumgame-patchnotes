import { useContext } from 'react'
import { ConfigContext } from '../context/ConfigProvider'

export function useConfigContext() {
  const { config, setConfig } = useContext(ConfigContext)

  return { config, setConfig }
}
