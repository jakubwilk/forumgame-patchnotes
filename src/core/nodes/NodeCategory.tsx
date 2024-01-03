import { useCallback } from 'react'
import { IPatchNode, IPatchNodeCategoryKeyEnum, IPatchNodes } from '../models/api.model'
import { isEqual, isEmpty, isNil } from 'lodash'
import { UnsupportedNode } from './UnsupportedNode'
import { Title, Text } from '@mantine/core'
import { NodeEntity } from './NodeEntity'
import styles from '../styles/nodes.module.css'
import clsx from 'clsx'

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
            <header className={clsx('p-4 rounded-md', styles.categoryHeader)}>
              <Title order={2} className={styles.entityTitle}>
                {name}
              </Title>
              {hasDescription && <Text className={clsx('pt-2', styles.categoryDescription)}>{description}</Text>}
            </header>
            <NodeEntity data={nodes} />
          </article>
        )
      }

      return <UnsupportedNode key={name} />
    },
    [],
  )

  return <>{data.map(({ categoryKey, name, description, nodes }: IPatchNode) => renderCategory(categoryKey, name, nodes, description))}</>
}
