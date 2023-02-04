export enum MagicBadgesEnum {
  // eslint-disable-next-line no-unused-vars
  ADD = 'ADD',
  // eslint-disable-next-line no-unused-vars
  NEW = 'NEW',
  // eslint-disable-next-line no-unused-vars
  UPDATE = 'UPDATE',
  // eslint-disable-next-line no-unused-vars
  DELETE = 'DELETE',
}

export interface IMagicChangeBadge {
  type: MagicBadgesEnum
  text: string
}

export interface IMagicListLevelChanges {
  id: string
  text: string
  badge: IMagicChangeBadge
}

export interface IMagicListLevel {
  id: string
  text: string
  changes: IMagicListLevelChanges[]
}

export interface IMagicListMain {
  id: string
  text: string
  badge: IMagicChangeBadge
}

export interface IMagicListChanges {
  main: IMagicListMain[]
  levels: IMagicListLevel[]
}

export interface IMagicList {
  id: string
  name: string
  imageUrl: string
  pageUrl: string
  alt: string
  changes: IMagicListChanges
}

export interface IMagicMainChanges {
  id: string
  text: string
  badge: IMagicChangeBadge
}

export interface IMagicMain {
  id: string
  name: string
  changes: IMagicMainChanges[]
}

export interface IMagic {
  main: IMagicMain
  magic: IMagicList[]
}

export interface IMagicDefinition {
  data: IMagic
}
