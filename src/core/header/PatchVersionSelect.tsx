import { Select } from '@mantine/core'
import { useCallback, useMemo, useState } from 'react'
import { useConfigContext } from '../hooks/useConfigContext'
import { CURRENT_PATCH_VERSION } from '../utils/api.utils'
import styles from '../styles/patch-version-select.module.css'
import { useNavigate } from 'react-router-dom'

interface IProps {
  handleSelectVersion: (val: string) => void
  isConfigLoading: boolean
}

export function PatchVersionSelect({ handleSelectVersion, isConfigLoading }: IProps) {
  const navigate = useNavigate()
  const { config } = useConfigContext()
  const [checkedValue, setCheckedValue] = useState<string>(CURRENT_PATCH_VERSION)
  const data = useMemo(() => {
    if (config) {
      return config?.update.versions
    }

    return ['Wersja']
  }, [config])

  const navigateToPage = useCallback(
    (version: string) => {
      const versionPage = version.replaceAll('.', '-')

      if (version === CURRENT_PATCH_VERSION) {
        navigate('/')
      } else {
        navigate(versionPage)
      }
    },
    [navigate],
  )

  const handleChange = useCallback(
    (value: string | null) => {
      const version = value || CURRENT_PATCH_VERSION

      setCheckedValue(value || '')
      handleSelectVersion(version)
      navigateToPage(version)
    },
    [handleSelectVersion, navigateToPage],
  )

  return (
    <Select
      value={checkedValue}
      label={'Wybierz wersję aktualizacji'}
      data={data}
      classNames={{
        label: styles.label,
      }}
      onChange={handleChange}
      disabled={isConfigLoading}
      allowDeselect={false}
    />
  )
}
