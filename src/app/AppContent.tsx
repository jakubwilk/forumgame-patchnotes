import { useEffect, useMemo } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useGetConfig } from 'src/core/api/useGetConfig'
import { useConfigContext } from 'src/core/hooks/useConfigContext'
import { Layout } from 'src/core/layouts/Layout'
import { ISingleBrowseRouter } from 'src/core/models/router.model'
import { NotFoundPage } from 'src/core/pages/NotFoundPage'
import { PatchNotesPage } from 'src/core/pages/PatchNotesPage'
import { isNil, isEmpty } from 'lodash'
import { LoadingPage } from 'src/core/pages/LoadingPage'
import { IConfigRouter } from 'src/core/models/api.model'

interface IProps {
  setPrimaryColor: (color: string) => void
}

export function AppContent({ setPrimaryColor }: IProps) {
  const { data, isLoading } = useGetConfig()
  const { setConfig } = useConfigContext()

  const router = useMemo(() => data?.router as Array<IConfigRouter>, [data])

  const APP_ROUTER = useMemo(() => {
    const basicRouter = {
      element: <Layout isConfigLoading={isLoading} />,
      errorElement: <NotFoundPage />,
      children: [] as Array<ISingleBrowseRouter>,
    }

    if (router) {
      router.map(({ url, slug }) => {
        const tempRouter = { path: url, element: <PatchNotesPage version={slug.replaceAll('-', '.')} /> } as ISingleBrowseRouter
        return basicRouter.children.push(tempRouter)
      })
    }

    return [basicRouter]
  }, [router, isLoading])

  useEffect(() => {
    if (!isLoading && !isNil(data)) {
      setConfig(data)
      setPrimaryColor(data.base.primaryColor)
    }
  }, [data, setConfig, isLoading, setPrimaryColor])

  if (!isLoading && !isEmpty(APP_ROUTER)) {
    return <RouterProvider router={createBrowserRouter(APP_ROUTER)} />
  }

  return <LoadingPage />
}
