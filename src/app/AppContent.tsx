import { Fragment, useEffect, useMemo } from 'react'
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
import { buildRouteLink } from '../core/utils/router.utils'
import { Helmet } from 'react-helmet-async'

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
      router.map(({ patchName, fileName, isNewest }) => {
        const tempRouter = {
          path: buildRouteLink(patchName, isNewest),
          element: <PatchNotesPage version={patchName} />,
        } as ISingleBrowseRouter
        return basicRouter.children.push(tempRouter)
      })
    }

    return [basicRouter]
  }, [router, isLoading])

  const isFavicon = useMemo(() => !isNil(data) && !isNil(data.base.forumFavicon) && !isEmpty(data.base.forumFavicon), [data])

  useEffect(() => {
    if (!isLoading && !isNil(data)) {
      setConfig(data)
      setThemeColor(data.base.themeColor)
    }
  }, [data, setConfig, isLoading, setThemeColor])

  if (!isLoading && !isEmpty(APP_ROUTER)) {
    return (
      <Fragment>
        <Helmet>{isFavicon && <link rel={'icon'} href={data?.base.forumFavicon} />}</Helmet>
        <RouterProvider router={createBrowserRouter(APP_ROUTER)} />
      </Fragment>
    )
  }

  return <LoadingPage />
}
