import { Text } from '@mantine/core'

export function UnsupportedNode() {
  return (
    <div className={'my-8'}>
      <div className={'w-full flex justify-center p-8'}>
        <Text>{'Wykryto niewspierany categoryKey. Skontaktuj się z administratorem serwisu'}</Text>
      </div>
    </div>
  )
}
