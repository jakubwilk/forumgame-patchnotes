import { Loader } from '@mantine/core'

export function LoadingPage() {
  return (
    <div className={'min-h-screen w-full flex items-center justify-center'}>
      <Loader size={70} />
    </div>
  )
}
