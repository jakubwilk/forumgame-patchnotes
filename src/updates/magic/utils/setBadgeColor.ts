import { MagicBadgesEnum } from '@app/data'

function setBadgeColor(type: MagicBadgesEnum): string {
  switch (type) {
    case MagicBadgesEnum.UPDATE:
      return 'indigo'
    case MagicBadgesEnum.ADD:
    case MagicBadgesEnum.NEW:
      return 'green'
    case MagicBadgesEnum.DELETE:
      return 'red'
    default:
      return 'indigo'
  }
}

export default setBadgeColor
