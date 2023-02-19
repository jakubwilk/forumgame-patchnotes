import { MantineProvider } from '@mantine/core'
import { TutorialsList } from '@app/updates/tutorials'
import { MagicList } from '@app/updates/magic'
import { Home } from '@app/home'
import { NavigationProvider } from '@app/main'
import { Menu } from './menu'

function App() {
  return (
    <MantineProvider
      theme={{ fontFamily: 'Poppins, sans-serif', headings: { fontFamily: 'Merriweather, serif' } }}
      withGlobalStyles
      withNormalizeCSS
    >
      <NavigationProvider>
        <div className={'relative'}>
          <Menu />
          <Home />
          <TutorialsList />
          <MagicList id={'standard-magic'} />
        </div>
      </NavigationProvider>
    </MantineProvider>
  )
}

export default App
