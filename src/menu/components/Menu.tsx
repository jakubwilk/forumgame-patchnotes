import { NavBurger } from './index'
import { useContext, useState } from 'react'
import { NavigationContext } from '@app/main'
import { createStyles, NavLink } from '@mantine/core'
import clsx from 'clsx'

const useStyles = createStyles(() => ({
  menuContent: {
    marginTop: '1rem',
    backgroundColor: '#2b2b2b',
    width: 250,
    '& > a': {
      display: 'block',
      padding: '0.5rem 1rem',
      textTransform: 'uppercase',
      fontWeight: 600,
      fontSize: '0.9rem',
      color: '#999',
      textDecoration: 'none',
      transition: 'color .1s ease-in-out',
      backgroundColor: 'transparent !important',
      '&[data-active]': {
        color: '#fff !important',
      },
      '&:hover, &:focus, &:active': {
        color: '#fff !important',
        outline: 'none',
        border: 'none',
        textDecoration: 'none',
        backgroundColor: 'transparent !important',
      },
    },
  },
}))

function Menu() {
  const { isMenuOpen } = useContext(NavigationContext)
  const [active, setActive] = useState(0)
  const { classes } = useStyles()

  return (
    <div className={'fixed mt-5 ml-5'}>
      <NavBurger />
      {isMenuOpen && (
        <div className={clsx(classes.menuContent, 'rounded-sm')}>
          <NavLink label={'Początek strony'} component={'a'} href={'#home'} active={active === 1} onClick={() => setActive(1)} />
          <NavLink label={'Poradniki'} component={'a'} href={'#tutorials'} active={active === 2} onClick={() => setActive(2)} />
          <NavLink label={'Magie zwykłe'} component={'a'} href={'#standard-magic'} active={active === 3} onClick={() => setActive(3)} />
        </div>
      )}
    </div>
  )
}

export default Menu
