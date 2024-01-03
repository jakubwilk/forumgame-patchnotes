import { Text, Tooltip } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import styles from '../styles/not-found-page.module.css'

export function NotFoundContent() {
  return (
    <div className={'flex flex-col items-center justify-center px-8'}>
      <Text className={clsx('text-center', styles.title)}>{'Błąd 404'}</Text>
      <Text className={clsx('py-4 text-center', styles.description)}>{'Niestety, strona do której chcesz przejść jest niepoprawna'}</Text>
      <Tooltip label={'Wróć na stronę główną z opisem najnowszej aktualizacji'} position={'bottom'} color={'gray'}>
        <Link to={'/'} className={clsx('flex items-center duration-100', styles.link)}>
          <IconArrowLeft className={clsx('mr-2', styles.linkSvg)} />
          {'Powrót do strony głównej'}
        </Link>
      </Tooltip>
    </div>
  )
}
