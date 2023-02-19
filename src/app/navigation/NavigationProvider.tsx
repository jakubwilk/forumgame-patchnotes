import NavigationContext from './NavigationContext'
import { ReactNode, useCallback, useState } from 'react'

interface IProps {
  children: ReactNode
}

function NavigationProvider({ children }: IProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOpenMenu = useCallback((value: boolean) => {
    setIsMenuOpen(value)
  }, [])

  return <NavigationContext.Provider value={{ isMenuOpen, setIsMenuOpen: handleOpenMenu }}>{children}</NavigationContext.Provider>
}

export default NavigationProvider
