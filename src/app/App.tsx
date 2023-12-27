import { createTheme, MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ConfigProvier } from 'src/core/context/ConfigProvider'
import { AppContent } from './AppContent'

const theme = createTheme({
  primaryColor: 'violet',
})
const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider defaultColorScheme={'dark'} theme={theme}>
        <ConfigProvier>
          <AppContent />
        </ConfigProvier>
      </MantineProvider>
    </QueryClientProvider>
  )
}
