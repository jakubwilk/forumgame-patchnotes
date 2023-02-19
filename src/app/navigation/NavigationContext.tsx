import { createContext } from 'react'
import { INavigationContext } from './model'

const navigationContext = createContext<INavigationContext>({
  isMenuOpen: false,
  setIsMenuOpen: (value) => {},
})

export default navigationContext
