import { Text } from '@mantine/core'

interface IProps {
  currentVersion: string
}

export function HeaderVersion({ currentVersion }: IProps) {
  return (
    <section>
      <div className={'container max-w-[1000px] mx-auto'}>
        <div className={'flex flex-col items-center'}>
          <Text>{'Aktualizacja'}</Text>
          <Text>{currentVersion}</Text>
        </div>
      </div>
    </section>
  )
}
