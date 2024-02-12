export interface ICurrentPatchContextItem {
  threadLink: string
  showUpdateThreadLink: boolean
}

export interface ICurrentPatchContext {
  patch: ICurrentPatchContextItem
  setPatch: (val: ICurrentPatchContextItem) => void
}

export const CURRENT_PATCH_INITIAL_VALUES: ICurrentPatchContextItem = {
  threadLink: '',
  showUpdateThreadLink: false,
}
