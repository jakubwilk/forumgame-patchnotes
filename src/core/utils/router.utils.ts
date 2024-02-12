export const FIRST_PAGE = '/'

export const parsePathname = (path: string) => {
  const pathRegexp = /[~`!#$%^&*+=\\[\]';.,/{}|":<>?]/g
  const loweredPathName = path.toLowerCase()
  return loweredPathName.replaceAll(pathRegexp, '-')
}

export const buildRouteLink = (path: string, isNewest: boolean) => {
  if (isNewest) {
    return FIRST_PAGE
  }

  return `/${parsePathname(path)}`
}
