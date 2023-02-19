import { Button, Tooltip, createStyles } from '@mantine/core'
import { useContext } from 'react'
import { NavigationContext } from '@app/main'

const useStyles = createStyles(() => ({
  button: {
    padding: '0.85rem 1.45rem',
    height: 'auto',
    width: 'auto',
    lineHeight: 'inherit !important',
    backgroundColor: '#2b2b2b !important',
    '&:hover, &:focus': {
      backgroundColor: '#505050 !important',
    },
  },
}))

function NavBurger() {
  const { classes } = useStyles()
  const { isMenuOpen, setIsMenuOpen } = useContext(NavigationContext)

  return (
    <Tooltip label={'Szybkie menu'} position={'right'}>
      <Button color={'dark'} onClick={() => setIsMenuOpen(!isMenuOpen)} className={classes.button}>
        {isMenuOpen ? 'Zamknij nawigację' : 'Otwórz nawigację'}
      </Button>
    </Tooltip>
  )
}

export default NavBurger
