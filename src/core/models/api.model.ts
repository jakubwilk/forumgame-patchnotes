export interface IConfigBase {
  forumName: string
  forumLink: string
  forumFavicon: string
  themeColor: string
}

export interface IConfigPatches {
  patchName: string
  fileName: string
  threadLink: string
  showUpdateThreadLink: boolean
  isNewest: boolean
}

export interface IConfig {
  base: IConfigBase
  patches: Array<IConfigPatches>
}

export enum IPatchNodeCategoryKeyEnum {
  // eslint-disable-next-line no-unused-vars
  CATEGORY = 'CATEGORY',
  // eslint-disable-next-line no-unused-vars
  THREAD = 'THREAD',
  // eslint-disable-next-line no-unused-vars
  ITEM = 'ITEM',
}

export enum IPatchNodesLabelEnum {
  // eslint-disable-next-line no-unused-vars
  NEW = 'NEW',
  // eslint-disable-next-line no-unused-vars
  REMOVE = 'REMOVE',
}

export interface IPatchCategoryNode {
  categoryKey: IPatchNodeCategoryKeyEnum.CATEGORY
  slug: string
  name: string
  description?: string
  nodes: Array<IPatchThreadNode>
}

export interface IPatchThreadNode {
  categoryKey: IPatchNodeCategoryKeyEnum.THREAD
  slug: string
  name: string
  description?: string
  imageUri?: string
  link?: string
  label?: IPatchNodesLabelEnum
  nodes?: Array<IPatchItemNode>
}

export interface IPatchItemNode {
  categoryKey: IPatchNodeCategoryKeyEnum.ITEM
  slug: string
  description: string
  link?: string
}

export type TPatch = Array<IPatchCategoryNode>
