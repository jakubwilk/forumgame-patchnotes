import { useContext } from 'react'
import { CurrentPatchContext } from '../context/CurrentPatchProvider'

export function useCurrentPatchContext() {
  const { patch, setPatch } = useContext(CurrentPatchContext)

  return { patch, setPatch }
}
