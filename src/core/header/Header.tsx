import { Logo } from './Logo'
import { HeaderLink } from './HeaderLink'
import { useMemo } from 'react'
import { useCurrentPatchContext } from '../hooks/useCurrentPatchContext'

export function Header() {
  const { patch } = useCurrentPatchContext()

  const showUpdateThreadLink = useMemo(() => patch.showUpdateThreadLink, [patch])
  const threadLink = useMemo(() => patch.threadLink, [patch])

  return (
    <header>
      <div className={'container max-w-[1000px] mx-auto'}>
        <div className={'flex flex-col justify-center sm:flex-row sm:justify-between items-center px-8 py-4'}>
          <Logo />
          {showUpdateThreadLink && <HeaderLink link={threadLink} />}
        </div>
      </div>
    </header>
  )
}
