import { RouterProvider } from 'react-router-dom'
import { ROUTER } from 'src/config/router.config'
import { createTheme, MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ConfigProvier } from 'src/core/context/ConfigProvider'

const theme = createTheme({})
const queryClient = new QueryClient()

export function AppWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider defaultColorScheme={'dark'} theme={theme}>
        <ConfigProvier>
          <RouterProvider router={ROUTER} />
        </ConfigProvier>
      </MantineProvider>
    </QueryClientProvider>
  )
}
