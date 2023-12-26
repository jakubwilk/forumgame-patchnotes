import { createBrowserRouter } from 'react-router-dom'
import App from 'src/app/App'
import { Layout } from 'src/core/layouts/Layout'

export const ROUTER = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
    ],
  },
])
