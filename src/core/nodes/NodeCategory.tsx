import { Fragment, useCallback } from 'react'
import { IPatchCategoryNode, IPatchNodeCategoryKeyEnum, IPatchThreadNode, TPatch } from '../models/api.model'
import { isEqual, isEmpty, isNil } from 'lodash'
import { UnsupportedNode } from './UnsupportedNode'
import { Title, Text } from '@mantine/core'
import { NodeThread } from './NodeThread'
import styles from '../styles/nodes.module.css'
import clsx from 'clsx'

interface IProps {
  data: TPatch
}

export function NodeCategory({ data }: IProps) {
  const renderCategory = useCallback(
    (categoryKey: IPatchNodeCategoryKeyEnum, slug: string, name: string, nodes: Array<IPatchThreadNode>, description?: string) => {
      const hasDescription = !isEmpty(description) || !isNil(description)

      if (isEqual(categoryKey, IPatchNodeCategoryKeyEnum.CATEGORY)) {
        return (
          <article key={slug} className={'mb-8'}>
            <header className={clsx('p-4 rounded-md', styles.categoryHeader)}>
              <Title order={2} className={styles.entityTitle}>
                {name}
              </Title>
              {hasDescription && <Text className={clsx('pt-2', styles.categoryDescription)}>{description}</Text>}
            </header>
            <NodeThread data={nodes} />
          </article>
        )
      }

      return <UnsupportedNode key={name} customClassName={'mt-0'} />
    },
    [],
  )

  return (
    <Fragment>
      {data.map(({ categoryKey, slug, name, description, nodes }: IPatchCategoryNode) =>
        renderCategory(categoryKey, slug, name, nodes, description),
      )}
    </Fragment>
  )
}
