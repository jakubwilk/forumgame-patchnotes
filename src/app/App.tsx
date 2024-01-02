import { createTheme, MantineProvider } from '@mantine/core'
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { ConfigProvier } from 'src/core/context/ConfigProvider'
import { AppContent } from './AppContent'

const theme = createTheme({
  primaryColor: 'green',
})
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (err) => console.log('err', err),
  }),
})

export function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <MantineProvider defaultColorScheme={'dark'} theme={theme}>
          <ConfigProvier>
            <AppContent />
          </ConfigProvier>
        </MantineProvider>
      </QueryClientProvider>
    </HelmetProvider>
  )
}
