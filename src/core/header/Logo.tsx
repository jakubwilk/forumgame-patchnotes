import { Anchor } from '@mantine/core'
import styles from '../styles/header.module.css'
import clsx from 'clsx'
import { useConfigContext } from '../hooks/useConfigContext'
import { useMemo } from 'react'

export function Logo() {
  const { config } = useConfigContext()

  const forumName = useMemo(() => config?.base.forumName, [config])
  const forumLink = useMemo(() => config?.base.forumLink, [config])

  return (
    <Anchor href={forumLink} className={clsx('duration-100', styles.logo)}>
      {forumName}
    </Anchor>
  )
}
