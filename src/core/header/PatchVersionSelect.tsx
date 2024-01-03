import { Select } from '@mantine/core'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useConfigContext } from '../hooks/useConfigContext'
import styles from '../styles/patch-version-select.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { isEqual, first } from 'lodash'
import { IConfigPatches } from '../models/api.model'

interface IProps {
  handleSelectVersion: (val: string) => void
  isConfigLoading: boolean
}

export function PatchVersionSelect({ handleSelectVersion, isConfigLoading }: IProps) {
  const navigate = useNavigate()
  const { config } = useConfigContext()
  const { pathname } = useLocation()

  const currentVersion = useMemo(() => first(config?.patches)?.version as string, [config])

  const [checkedValue, setCheckedValue] = useState<string>('')
  const data = useMemo(() => {
    if (config) {
      return config?.patches.map(({ version }: IConfigPatches) => version)
    }

    return ['-']
  }, [config])

  const navigateToPage = useCallback(
    (version: string) => {
      const versionPage = version.replaceAll('.', '-')

      if (version === currentVersion) {
        navigate('/')
      } else {
        navigate(versionPage)
      }
    },
    [navigate, currentVersion],
  )

  const handleChange = useCallback(
    (value: string | null) => {
      const version = (value || checkedValue) as string

      setCheckedValue(value as string)
      handleSelectVersion(version)
      navigateToPage(version)
    },
    [handleSelectVersion, navigateToPage, checkedValue],
  )

  useEffect(() => {
    const versionFromPath = pathname.replace('/', '').replaceAll('-', '.')
    const isFirstPage = isEqual(versionFromPath, '')
    const value = isFirstPage ? currentVersion : versionFromPath

    setCheckedValue(value)
    handleSelectVersion(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, pathname, currentVersion])

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
