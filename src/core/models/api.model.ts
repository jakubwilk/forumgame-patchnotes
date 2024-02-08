export interface IConfigBase {
  forumName: string
  forumLink: string
  showThreadLink: boolean
  primaryColor: string
}

export interface IConfigPatches {
  version: string
  name: string | null
  link: string
}

export interface IConfigRouter {
  url: string
  slug: string
}

export interface IConfig {
  base: IConfigBase
  patches: Array<IConfigPatches>
  router: Array<IConfigRouter>
}

export enum IPatchNodeCategoryKeyEnum {
  // eslint-disable-next-line no-unused-vars
  CATEGORY = 'CATEGORY',
  // eslint-disable-next-line no-unused-vars
  ENTITY = 'ENTITY',
  // eslint-disable-next-line no-unused-vars
  ITEM = 'ITEM',
}

export enum IPatchNodesLabelEnum {
  // eslint-disable-next-line no-unused-vars
  NEW = 'NEW',
  // eslint-disable-next-line no-unused-vars
  REMOVE = 'REMOVE',
}

export interface IPatchNodesItem {
  categoryKey: IPatchNodeCategoryKeyEnum
  slug: string
  description: string
  link?: string
}

export interface IPatchNodes {
  categoryKey: IPatchNodeCategoryKeyEnum
  name: string
  description?: string
  link?: string
  label?: IPatchNodesLabelEnum
  imageUri?: string
  nodes?: Array<IPatchNodesItem>
}

export interface IPatchNode {
  categoryKey: IPatchNodeCategoryKeyEnum
  name: string
  nodes: Array<IPatchNodes>
  description?: string
}

export interface IPatch {
  patch: Array<IPatchNode>
}
