import { Anchor, Text, Tooltip } from '@mantine/core'
import styles from '../styles/footer.module.css'
import clsx from 'clsx'

export function Footer() {
  return (
    <footer className={clsx('w-full flex items-center justify-center', styles.footer)}>
      <Text className={styles.footerText}>
        {'Projekt powstał z inicjatywy '}
        <Tooltip label={'Przejdź do forum MGW'} color={'gray'}>
          <Anchor href={'https://www.mageguildwars.pl'} className={clsx('duration-100', styles.footerLink)}>
            {'Mage Guild Wars'}
          </Anchor>
        </Tooltip>
      </Text>
    </footer>
  )
}
