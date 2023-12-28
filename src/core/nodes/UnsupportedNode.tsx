import { Text } from '@mantine/core'
import clsx from 'clsx'

interface IProps {
  isFullWidth?: boolean
}

export function UnsupportedNode({ isFullWidth = true }: IProps) {
  return (
    <div className={isFullWidth ? 'my-8' : 'px-8 pb-4'}>
      <div className={clsx('flex', isFullWidth ? 'w-full justify-center p-8' : '')}>
        <Text>{'Wykryto niewspierany categoryKey. Skontaktuj się z administratorem serwisu'}</Text>
      </div>
    </div>
  )
}
