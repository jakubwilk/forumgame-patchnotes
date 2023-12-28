import { useMemo } from 'react'
import { useGetPatchNotes } from '../api/useGetPatchNotes'
import { NodeCategory } from '../nodes/NodeCategory'
import { IPatchNode } from '../models/api.model'

interface IProps {
  version: string
}

export function PatchNotesPage({ version }: IProps) {
  const updateFileNameBasedOnVersion = useMemo(() => version.replaceAll('.', '-'), [version])
  const { data, isLoading } = useGetPatchNotes(updateFileNameBasedOnVersion)

  return (
    <main>
      <div className={'container max-w-[1000px] mx-auto'}>
        <div className={'p-8'}>{isLoading ? <p>{'Ładowanie...'}</p> : <NodeCategory data={data?.patch as Array<IPatchNode>} />}</div>
      </div>
    </main>
  )
}
