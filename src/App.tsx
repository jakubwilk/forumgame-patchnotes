import { MantineProvider } from '@mantine/core'
import { Header } from './header/components'

function App() {
  return (
    <MantineProvider
      theme={{ fontFamily: 'Poppins, sans-serif', headings: { fontFamily: 'Merriweather, serif' } }}
      withGlobalStyles
      withNormalizeCSS
    >
      <div className={'container mx-auto max-w-5xl'}>
        <Header
          title={'Aktualizacja 1.4'}
          description={'Zmiany w poradnikach, a także modyfikacja magii pod kątem zdolności wbudowanych'}
        />
      </div>
    </MantineProvider>
  )
}

export default App
