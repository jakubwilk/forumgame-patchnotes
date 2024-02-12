import { ComboboxItem, Select } from '@mantine/core'
import styles from '../styles/patch-version-select.module.css'
import { useConfigContext } from '../hooks/useConfigContext'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { ICurrentUpdate } from '../models/nodes.model'
import { buildRouteLink, FIRST_PAGE } from '../utils/router.utils'
import { isEmpty, isEqual, isNil } from 'lodash'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCurrentPatchContext } from '../hooks/useCurrentPatchContext'
import { ICurrentPatchContextItem } from '../models/current-patch-context.model'

interface IProps {
  handleSelectUpdate: (val: string) => void
  isConfigLoading: boolean
}

type TOptionItem = ComboboxItem & ICurrentPatchContextItem

export function PatchUpdateSelect({ handleSelectUpdate, isConfigLoading }: IProps) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { config } = useConfigContext()
  const { setPatch } = useCurrentPatchContext()
  const [selectValue, setSelectValue] = useState<ICurrentUpdate>({
    label: '-',
    value: '/',
  })

  const selectData = useMemo(() => {
    return (
      config?.patches
        .filter(({ fileName }) => !isNil(fileName))
        .map(({ patchName, fileName, isNewest, threadLink, showUpdateThreadLink }) => {
          return { label: patchName, value: buildRouteLink(fileName, isNewest), threadLink, showUpdateThreadLink }
        }) || []
    )
  }, [config])

  const handleChange = useCallback(
    (option: TOptionItem) => {
      setSelectValue(option)
      handleSelectUpdate(option.label)
      navigate(option.value)
      setPatch({ threadLink: option.threadLink, showUpdateThreadLink: option.showUpdateThreadLink })
    },
    [handleSelectUpdate, navigate],
  )

  useEffect(() => {
    const currentSelectData = selectData.find(({ value }) => isEqual(value, pathname))
    if (isEmpty(currentSelectData) || isNil(currentSelectData)) {
      navigate(FIRST_PAGE)
    } else {
      setSelectValue(currentSelectData)
      handleSelectUpdate(currentSelectData.label)
      setPatch({ threadLink: currentSelectData.threadLink, showUpdateThreadLink: currentSelectData.showUpdateThreadLink })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectData])

  return (
    <Select
      value={selectValue.value}
      label={'Wybierz aktualizację'}
      data={selectData}
      classNames={{
        label: styles.label,
      }}
      onChange={(_value, option) => handleChange(option as TOptionItem)}
      disabled={isConfigLoading}
      allowDeselect={false}
    />
  )
}
