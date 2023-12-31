import { Text } from '@mantine/core'
import styles from '../styles/nodes.module.css'
import clsx from 'clsx'

interface IProps {
  customText?: string
  isFullWidth?: boolean
  customClassName?: string
}

export function UnsupportedNode({ customText, isFullWidth = true, customClassName }: IProps) {
  return (
    <div className={clsx(isFullWidth ? 'my-8' : 'px-8 py-4', 'rounded-md', styles.unsupportedNode, customClassName)}>
      <div className={clsx('flex', isFullWidth ? 'w-full justify-center p-8' : '')}>
        <Text className={styles.unsupportedNodeText}>
          {customText || 'Wykryto niewspierany klucz. Skontaktuj się z administratorem serwisu'}
        </Text>
      </div>
    </div>
  )
}
