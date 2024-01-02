import { Loader } from '@mantine/core'
import clsx from 'clsx'

interface IProps {
  isFullPage?: boolean
}

export function LoadingPage({ isFullPage = true }: IProps) {
  return (
    <div className={clsx('w-full flex items-center justify-center', isFullPage ? 'min-h-screen' : 'h-full my-24')}>
      <Loader size={70} />
    </div>
  )
}
