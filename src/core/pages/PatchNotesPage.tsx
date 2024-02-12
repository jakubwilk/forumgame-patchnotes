import { useMemo } from 'react'
import { useGetPatchNotes } from '../api/useGetPatchNotes'
import { NodeCategory } from '../nodes/NodeCategory'
import { IConfig, IConfigPatches, TPatch } from '../models/api.model'
import { useConfigContext } from '../hooks/useConfigContext'
import { UnsupportedNode } from '../nodes/UnsupportedNode'
import { Helmet } from 'react-helmet-async'
import { LoadingPage } from './LoadingPage'
import { Footer } from '../footer/Footer'
import { isEmpty, isNil } from 'lodash'

interface IProps {
  version: string
}

export function PatchNotesPage({ version }: IProps) {
  const { config } = useConfigContext()
  const updateFileNameBasedOnVersion = useMemo(() => version.replaceAll('.', '-'), [version])
  const files = useMemo(() => config?.patches.map(({ fileName }: IConfigPatches) => fileName).filter(Boolean), [config])
  const isConfig = useMemo(() => files?.includes(updateFileNameBasedOnVersion), [files, updateFileNameBasedOnVersion])

  const { data, isLoading } = useGetPatchNotes(updateFileNameBasedOnVersion)

  const isForumName = useMemo(
    () => !isNil(config) && !isNil(config.base) && (!isNil(config.base.forumName) || !isEmpty(config.base.forumName)),
    [config],
  )
  const forumName = useMemo(() => (isForumName ? (config as IConfig).base.forumName : ''), [isForumName, config])

  return (
    <main>
      <Helmet>
        <title>{`${forumName} | Aktualizacja - ${version}`}</title>
      </Helmet>
      {isConfig ? (
        <div className={'px-8 pt-8'}>{isLoading ? <LoadingPage isFullPage={false} /> : <NodeCategory data={data as TPatch} />}</div>
      ) : (
        <UnsupportedNode
          customText={'Wykryto brak pliku z aktualizacją. Skontaktuj się z administratorem serwisu.'}
          customClassName={'mx-8'}
        />
      )}
      <Footer />
    </main>
  )
}
