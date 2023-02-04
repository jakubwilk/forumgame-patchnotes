import { TutorialBadgesEnum } from '../../../data'

function setBadgeColor(type: TutorialBadgesEnum): string {
  switch (type) {
    case TutorialBadgesEnum.UPDATE:
      return 'indigo'
    case TutorialBadgesEnum.NEW:
      return 'green'
    case TutorialBadgesEnum.DELETE:
      return 'red'
    default:
      return 'indigo'
  }
}

export default setBadgeColor
