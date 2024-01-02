import { useMemo } from 'react'
import { useGetPatchNotes } from '../api/useGetPatchNotes'
import { NodeCategory } from '../nodes/NodeCategory'
import { IPatchNode } from '../models/api.model'
import { useConfigContext } from '../hooks/useConfigContext'
import { UnsupportedNode } from '../nodes/UnsupportedNode'
import { Helmet } from 'react-helmet-async'

interface IProps {
  version: string
}

export function PatchNotesPage({ version }: IProps) {
  const { config } = useConfigContext()
  const updateFileNameBasedOnVersion = useMemo(() => version.replaceAll('.', '-'), [version])
  const files = useMemo(() => config?.update.files, [config])
  const isConfigFile = useMemo(() => files?.includes(updateFileNameBasedOnVersion), [files, updateFileNameBasedOnVersion])

  const { data, isLoading } = useGetPatchNotes(updateFileNameBasedOnVersion)

  return (
    <main>
      <Helmet>
        <title>{`Mage Guild Wars - Aktualizacja ${version}`}</title>
      </Helmet>
      <div className={'container max-w-[1000px] mx-auto'}>
        {isConfigFile ? (
          <div className={'p-8'}>{isLoading ? <p>{'Ładowanie...'}</p> : <NodeCategory data={data?.patch as Array<IPatchNode>} />}</div>
        ) : (
          <UnsupportedNode
            customText={'Wykryto brak pliku z aktualizacją. Skontaktuj się z administratorem serwisu.'}
            customClassName={'mx-8'}
          />
        )}
      </div>
    </main>
  )
}
