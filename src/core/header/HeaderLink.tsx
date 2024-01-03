import { Anchor } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import styles from '../styles/header.module.css'
import clsx from 'clsx'
import { useConfigContext } from '../hooks/useConfigContext'
import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import { isEqual, first } from 'lodash'
import { FIRST_PAGE } from '../utils/router.utils'
import { IConfigPatches } from '../models/api.model'

export function HeaderLink() {
  const location = useLocation()
  const { config } = useConfigContext()

  const patchVersionBasedOnLocation = useMemo(() => {
    const path = location.pathname

    if (!isEqual(path, FIRST_PAGE)) {
      return location.pathname.replace(FIRST_PAGE, '')
    }

    return path
  }, [location])
  const isFirstPage = useMemo(() => isEqual(patchVersionBasedOnLocation, FIRST_PAGE), [patchVersionBasedOnLocation])
  const patchForumLink = useMemo(() => {
    if (isFirstPage) {
      return first(config?.patches)?.link || ''
    }

    const patchVersion = patchVersionBasedOnLocation.replaceAll('-', '.')

    const currentPatch = config?.patches.find((patch: IConfigPatches) => isEqual(patch.version, patchVersion))

    return currentPatch?.link
  }, [config, isFirstPage, patchVersionBasedOnLocation])

  return (
    <Anchor href={patchForumLink} target={'_blank'} className={clsx('mt-4 flex items-center duration-100 sm:mt-0', styles.headerLink)}>
      <IconArrowLeft className={styles.headerLinkSvg} />
      <span className={'ml-1'}>{'Powrót do wątku z aktualizacją'}</span>
    </Anchor>
  )
}
