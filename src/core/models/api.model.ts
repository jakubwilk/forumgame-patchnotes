export interface IConfigUpdate {
  current: string
  versions: Array<string>
}

export interface IConfigRouter {
  url: string
  slug: string
}

export interface IConfig {
  update: IConfigUpdate
  router: Array<IConfigRouter>
}
