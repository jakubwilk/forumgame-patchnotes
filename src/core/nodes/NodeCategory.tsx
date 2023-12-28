import { useCallback } from 'react'
import { IPatchNode, IPatchNodeCategoryKeyEnum, IPatchNodes } from '../models/api.model'
import { isEqual, isEmpty, isNil } from 'lodash'
import { UnsupportedNode } from './UnsupportedNode'
import { Title, Text } from '@mantine/core'
import { NodeEntity } from './NodeEntity'

interface IProps {
  data: Array<IPatchNode>
}

export function NodeCategory({ data }: IProps) {
  const renderCategory = useCallback(
    (categoryKey: IPatchNodeCategoryKeyEnum, name: string, nodes: Array<IPatchNodes>, description?: string) => {
      const hasDescription = !isEmpty(description) || !isNil(description)

      if (isEqual(categoryKey, IPatchNodeCategoryKeyEnum.CATEGORY)) {
        return (
          <article key={name} className={'mb-8'}>
            <header className={'p-4'}>
              <Title order={2}>{name}</Title>
              {hasDescription && <Text className={'pt-2'}>{description}</Text>}
            </header>
            <NodeEntity data={nodes} />
          </article>
        )
      }

      return <UnsupportedNode key={name} />
    },
    [],
  )

  return data.map(({ categoryKey, name, description, nodes }: IPatchNode) => renderCategory(categoryKey, name, nodes, description))
}
