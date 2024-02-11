import { Select } from '@mantine/core'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useConfigContext } from '../hooks/useConfigContext'
import styles from '../styles/patch-version-select.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { isEqual, first } from 'lodash'
import { IConfigPatches } from '../models/api.model'
import { ICurrentUpdate } from '../models/nodes.model'

interface IProps {
  handleSelectUpdate: (val: string) => void
  isConfigLoading: boolean
}

export function PatchUpdateSelect({ handleSelectUpdate, isConfigLoading }: IProps) {
  const navigate = useNavigate()
  const { config } = useConfigContext()
  const { pathname } = useLocation()

  const currentPatch: ICurrentUpdate = useMemo(() => {
    const patch = first(config?.patches)
    return {
      label: patch?.patchName as string,
      value: patch?.fileName as string,
    }
  }, [config])

  const [selectedValue, setSelectedValue] = useState<ICurrentUpdate>({
    label: '',
    value: '',
  })

  const selectData = useMemo(() => {
    if (config) {
      return config?.patches.map(({ patchName, fileName }: IConfigPatches) => ({
        label: patchName,
        value: fileName,
      }))
    }

    return [
      {
        label: '-',
        value: '/',
      },
    ]
  }, [config])

  const navigateToPage = useCallback(
    (patch: string) => {
      const versionPage = patch.replaceAll('.', '-')

      if (patch === currentPatch.value) {
        navigate('/')
      } else {
        navigate(versionPage)
      }
    },
    [navigate, currentPatch],
  )

  const handleChange = useCallback(
    (option: ICurrentUpdate) => {
      const update = (option.value || selectedValue) as string

      setSelectedValue(option)
      handleSelectUpdate(update)
      navigateToPage(update)
    },
    [handleSelectUpdate, selectedValue, navigateToPage],
  )

  useEffect(() => {
    const patchFromPath: ICurrentUpdate = {
      label: '',
      value: pathname.replace('/', '').replaceAll('-', '.'),
    }
    const isFirstPage = isEqual(patchFromPath, '')
    const currentUpdate = isFirstPage ? currentPatch : patchFromPath

    setSelectedValue(currentUpdate)
    handleSelectUpdate(currentUpdate.value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, pathname, currentPatch])

  return (
    <Select
      value={selectedValue.value}
      label={'Wybierz aktualizację'}
      data={selectData}
      classNames={{
        label: styles.label,
      }}
      onChange={(_value, option) => handleChange(option)}
      disabled={isConfigLoading}
      allowDeselect={false}
    />
  )
}
