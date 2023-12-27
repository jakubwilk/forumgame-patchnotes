import { createBrowserRouter } from 'react-router-dom'
import { Layout } from 'src/core/layouts/Layout'
import { PatchNotesPage } from 'src/core/pages/PatchNotesPage'

export const ROUTER = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <PatchNotesPage />,
      },
      {
        path: '/2-0-1',
        element: <PatchNotesPage version={'2.0.1'} />,
      },
    ],
  },
])
