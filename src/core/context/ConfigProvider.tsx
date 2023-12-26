import { ReactNode, createContext, useCallback, useMemo, useState } from 'react'
import { IConfigContext } from '../models/api-context.model'
import { IConfig } from '../models/api.model'

interface IProps {
  children: ReactNode
}

export const ConfigContext = createContext<IConfigContext>({
  config: null,
  setConfig: () => {},
})

export function ConfigProvier({ children }: IProps) {
  const [config, setConfig] = useState<IConfig | null>(null)

  const handleSetConfig = useCallback((config: IConfig) => setConfig(config), [])

  const values = useMemo(
    () => ({
      config,
      setConfig: handleSetConfig,
    }),
    [config, handleSetConfig],
  )

  return <ConfigContext.Provider value={values}>{children}</ConfigContext.Provider>
}
