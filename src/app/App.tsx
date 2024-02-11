import { createTheme, MantineProvider } from '@mantine/core'
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { ConfigProvier } from 'src/core/context/ConfigProvider'
import { AppContent } from './AppContent'
import { useState } from 'react'

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (err) => console.log('err', err),
  }),
})

export function App() {
  const [primaryColor, setPrimaryColor] = useState('dark')

  const mantineTheme = createTheme({
    primaryColor,
  })

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <MantineProvider defaultColorScheme={'dark'} theme={mantineTheme}>
          <ConfigProvier>
            <AppContent setThemeColor={setPrimaryColor} />
          </ConfigProvier>
        </MantineProvider>
      </QueryClientProvider>
    </HelmetProvider>
  )
}
