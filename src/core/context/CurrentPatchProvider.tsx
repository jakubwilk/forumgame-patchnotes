import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'
import { CURRENT_PATCH_INITIAL_VALUES, ICurrentPatchContext, ICurrentPatchContextItem } from '../models/current-patch-context.model'

interface IProps {
  children: ReactNode
}

export const CurrentPatchContext = createContext<ICurrentPatchContext>({
  patch: CURRENT_PATCH_INITIAL_VALUES,
  setPatch: () => {},
})

export function CurrentPatchProvider({ children }: IProps) {
  const [patch, setPatch] = useState<ICurrentPatchContextItem>(CURRENT_PATCH_INITIAL_VALUES)

  const handleSetPatch = useCallback((patch: ICurrentPatchContextItem) => setPatch(patch), [])

  const values: ICurrentPatchContext = useMemo(
    () => ({
      patch,
      setPatch: handleSetPatch,
    }),
    [patch, handleSetPatch],
  )

  return <CurrentPatchContext.Provider value={values}>{children}</CurrentPatchContext.Provider>
}
