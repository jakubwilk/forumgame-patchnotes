import { Anchor } from '@mantine/core'
import styles from '../styles/header.module.css'
import clsx from 'clsx'

export function Logo() {
  return (
    <Anchor href={'https://www.google.com'} className={clsx('duration-100', styles.logo)}>
      {'Mage Guild Wars'}
    </Anchor>
  )
}
