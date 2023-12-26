export interface IConfigUpdate {
  current: string
  versions: Array<string>
}

export interface IConfig {
  update: IConfigUpdate
}
