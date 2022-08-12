export enum TutorialBadgesEnum {
  // eslint-disable-next-line no-unused-vars
  NEW = 'NEW',
  // eslint-disable-next-line no-unused-vars
  UPDATE = 'UPDATE',
  // eslint-disable-next-line no-unused-vars
  DELETE = 'DELETE',
}

export interface ITutorialChangeBadge {
  type: TutorialBadgesEnum
  text: string
}

export interface ITutorialChange {
  id: string
  text: string
  badge: ITutorialChangeBadge
}

export interface ITutorials {
  id: string
  title: string
  link?: string
  changes: ITutorialChange[]
}

export interface ITutorialsResponse {
  tutorials: ITutorials[]
}
