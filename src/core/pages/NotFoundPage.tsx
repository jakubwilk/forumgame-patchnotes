import { Text, Tooltip } from '@mantine/core'
import { Link } from 'react-router-dom'
import { IconArrowLeft } from '@tabler/icons-react'
import styles from '../styles/not-found-page.module.css'
import clsx from 'clsx'

export function NotFoundPage() {
  return (
    <section className={'min-h-screen w-full flex items-center justify-center'}>
      <div className={'flex flex-col items-center px-8'}>
        <Text className={styles.title}>{'Błąd 404'}</Text>
        <Text className={clsx('py-4', styles.description)}>{'Niestety, strona do której chcesz przejść jest niepoprawna'}</Text>
        <Tooltip label={'Wróć na stronę główną z opisem najnowszej aktualizacji'} position={'bottom'} color={'gray'}>
          <Link to={'/'} className={clsx('flex items-center', styles.link)}>
            <IconArrowLeft className={'mr-2'} />
            {'Powrót do strony głównej'}
          </Link>
        </Tooltip>
      </div>
    </section>
  )
}
