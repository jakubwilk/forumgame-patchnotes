import { createTheme, MantineProvider } from '@mantine/core'
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { ConfigProvider } from 'src/core/context/ConfigProvider'
import { AppContent } from './AppContent'
import { useState } from 'react'
import { CurrentPatchProvider } from '../core/context/CurrentPatchProvider'

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
          <ConfigProvider>
            <CurrentPatchProvider>
              <AppContent setThemeColor={setPrimaryColor} />
            </CurrentPatchProvider>
          </ConfigProvider>
        </MantineProvider>
      </QueryClientProvider>
    </HelmetProvider>
  )
}
