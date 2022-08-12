import { MantineProvider } from '@mantine/core'

function App() {
  return (
    <MantineProvider theme={{ fontFamily: 'Poppins, sans-serif' }} withGlobalStyles withNormalizeCSS>
      <div className={'container mx-auto max-w-5xl'}>
        <p>{'list'}</p>
      </div>
    </MantineProvider>
  )
}

export default App
