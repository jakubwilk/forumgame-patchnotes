import { Anchor, Text, Tooltip } from '@mantine/core'
import styles from '../styles/footer.module.css'
import clsx from 'clsx'

export function Footer() {
  return (
    <footer className={clsx('w-full flex items-center justify-center', styles.footer)}>
      <Text className={styles.footerText}>
        {'2024 © - Wszelkie prawa zastrzeżone - '}
        <Tooltip label={'Przejdź do strony projektu'} color={'gray'}>
          <Anchor href={'https://www.mageguildwars.pl'} className={clsx('duration-100', styles.footerLink)}>
            {'patchnotes.github.io'}
          </Anchor>
        </Tooltip>
      </Text>
    </footer>
  )
}
