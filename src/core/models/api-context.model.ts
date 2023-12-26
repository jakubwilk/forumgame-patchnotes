import { IConfig } from './api.model'

export interface IConfigContext {
  config: IConfig | null
  setConfig: (val: IConfig) => void
}
