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
import { IConfigPatches } from 'src/core/models/api.model'

interface IProps {
  setThemeColor: (color: string) => void
}

export function AppContent({ setThemeColor }: IProps) {
  const { data, isLoading } = useGetConfig()
  const { setConfig } = useConfigContext()

  const router = useMemo(() => data?.patches as Array<IConfigPatches>, [data])

  const APP_ROUTER = useMemo(() => {
    const basicRouter = {
      element: <Layout isConfigLoading={isLoading} />,
      errorElement: <NotFoundPage />,
      children: [] as Array<ISingleBrowseRouter>,
    }

    if (router) {
      router.map(({ patchName, fileName }) => {
        console.log('patchNote', patchName)
        console.log('fileName', fileName)
        const tempRouter = { path: fileName, element: <PatchNotesPage version={patchName} /> } as ISingleBrowseRouter
        return basicRouter.children.push(tempRouter)
      })
    }

    return [basicRouter]
  }, [router, isLoading])

  useEffect(() => {
    if (!isLoading && !isNil(data)) {
      setConfig(data)
      setThemeColor(data.base.themeColor)
    }
  }, [data, setConfig, isLoading, setThemeColor])

  if (!isLoading && !isEmpty(APP_ROUTER)) {
    return <RouterProvider router={createBrowserRouter(APP_ROUTER)} />
  }

  return <LoadingPage />
}
