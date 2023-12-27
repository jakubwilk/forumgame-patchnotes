import { Text } from '@mantine/core'
import { clsx } from 'clsx'

import styles from 'src/core/styles/header.module.css'
import { PatchVersionSelect } from './PatchVersionSelect'
import { useCallback, useState } from 'react'

interface IProps {
  isConfigLoading: boolean
}

export function HeaderVersion({ isConfigLoading }: IProps) {
  const [currentVersion, setCurrentVersion] = useState<string>('')

  const handleSelectVersion = useCallback((value: string) => {
    setCurrentVersion(value)
  }, [])

  return (
    <section className={clsx('py-12', styles.headerVersion)}>
      <div className={'container max-w-[1000px] mx-auto'}>
        <div className={'flex flex-col justify-center md:flex-row md:justify-between items-center px-8'}>
          <div className={'flex flex-col items-center md:items-start'}>
            <Text className={clsx(styles.title)}>{'Aktualizacja forum'}</Text>
            <Text className={clsx(styles.version)}>{currentVersion}</Text>
          </div>
          <PatchVersionSelect handleSelectVersion={handleSelectVersion} isConfigLoading={isConfigLoading} />
        </div>
      </div>
    </section>
  )
}
