import { Logo } from './Logo'
import { HeaderLink } from './HeaderLink'

export function Header() {
  return (
    <header>
      <div className={'container max-w-[1000px] mx-auto'}>
        <div className={'flex flex-col justify-center sm:flex-row sm:justify-between items-center px-8 py-4'}>
          <Logo />
          <HeaderLink />
        </div>
      </div>
    </header>
  )
}
