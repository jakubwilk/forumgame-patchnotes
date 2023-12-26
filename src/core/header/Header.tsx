import { Logo } from './Logo'
import { PatchVersionSelect } from './PatchVersionSelect'

interface IProps {
  handleSelectVersion: (val: string) => void
  isConfigLoading: boolean
}

export function Header({ isConfigLoading, handleSelectVersion }: IProps) {
  return (
    <header>
      <div className={'container max-w-[1000px] mx-auto'}>
        <div className={'flex flex-col justify-center sm:flex-row sm:justify-between items-center px-8'}>
          <Logo />
          <PatchVersionSelect handleSelectVersion={handleSelectVersion} isConfigLoading={isConfigLoading} />
        </div>
      </div>
    </header>
  )
}
