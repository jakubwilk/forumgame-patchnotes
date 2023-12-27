import { CURRENT_PATCH_VERSION } from '../utils/api.utils'

interface IProps {
  version?: string
}

export function PatchNotesPage({ version = CURRENT_PATCH_VERSION }: IProps) {
  return <p>{`Aktualizacja do wersji ${version}`}</p>
}
