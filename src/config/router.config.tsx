import { createBrowserRouter } from 'react-router-dom'
import { Layout } from 'src/core/layouts/Layout'
import { NotFoundPage } from 'src/core/pages/NotFoundPage'
import { PatchNotesPage } from 'src/core/pages/PatchNotesPage'
import { VERSION_2_0_2 } from 'src/core/utils/version.utils'

export const ROUTER = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <PatchNotesPage />,
      },
      {
        path: '/2-0-2',
        element: <PatchNotesPage version={VERSION_2_0_2} />,
      },
    ],
  },
])
