import { Logo } from './Logo'
import { HeaderLink } from './HeaderLink'
import { useConfigContext } from '../hooks/useConfigContext'
import { useMemo } from 'react'

export function Header() {
  const { config } = useConfigContext()

  const isForumLink = useMemo(() => config?.base.showThreadLink, [config])

  return (
    <header>
      <div className={'container max-w-[1000px] mx-auto'}>
        <div className={'flex flex-col justify-center sm:flex-row sm:justify-between items-center px-8 py-4'}>
          <Logo />
          {isForumLink && <HeaderLink />}
        </div>
      </div>
    </header>
  )
}
