import { Text } from '@mantine/core'
import { clsx } from 'clsx'

import styles from 'src/core/styles/header.module.css'
import { PatchUpdateSelect } from './PatchUpdateSelect'
import { useCallback, useState } from 'react'

interface IProps {
  isConfigLoading: boolean
}

export function HeaderUpdate({ isConfigLoading }: IProps) {
  const [currentUpdate, setCurrentUpdate] = useState<string>('')

  const handleSelectUpdate = useCallback((value: string) => {
    setCurrentUpdate(value)
  }, [])

  return (
    <section className={clsx('py-12 mx-4 rounded-md', styles.headerVersion)}>
      <div className={'flex flex-col justify-center md:flex-row md:justify-between items-center px-8'}>
        <div className={'flex flex-col items-center md:items-start'}>
          <Text className={clsx(styles.title)}>{'Aktualizacja rozgrywki'}</Text>
          <Text className={clsx(styles.version)}>{currentUpdate}</Text>
        </div>
        <PatchUpdateSelect handleSelectUpdate={handleSelectUpdate} isConfigLoading={isConfigLoading} />
      </div>
    </section>
  )
}
