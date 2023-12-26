import { Select } from '@mantine/core'
import { useCallback, useMemo, useState } from 'react'
import { useConfigContext } from '../hooks/useConfigContext'
import { CURRENT_PATCH_VERSION } from '../utils/api.utils'

interface IProps {
  handleSelectVersion: (val: string) => void
  isConfigLoading: boolean
}

export function PatchVersionSelect({ handleSelectVersion, isConfigLoading }: IProps) {
  const { config } = useConfigContext()
  const [checkedValue, setCheckedValue] = useState<string>(CURRENT_PATCH_VERSION)
  const data = useMemo(() => {
    if (config) {
      return config?.update.versions
    }

    return ['Wersja']
  }, [config])

  const handleChange = useCallback(
    (value: string | null) => {
      setCheckedValue(value || '')
      handleSelectVersion(value || CURRENT_PATCH_VERSION)
    },
    [handleSelectVersion],
  )

  return (
    <Select value={checkedValue} label={'Wybierz wersję aktualizacji'} data={data} onChange={handleChange} disabled={isConfigLoading} />
  )
}
