import { useCallback } from 'react'
import { IPatchNodeCategoryKeyEnum, IPatchNodes, IPatchNodesItem, IPatchNodesLabelEnum } from '../models/api.model'
import { isEmpty, isEqual, isNil } from 'lodash'
import { UnsupportedNode } from './UnsupportedNode'
import { Text, Title, Tooltip, Anchor, Badge } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons-react'
import { NodeItem } from './NodeItem'
import styles from '../styles/nodes.module.css'
import clsx from 'clsx'
import { NodeMarkdown } from './NodeMarkdown'

interface IProps {
  data: Array<IPatchNodes>
}

export function NodeEntity({ data }: IProps) {
  const hasProps = useCallback((props: string | Array<any> | undefined) => !isEmpty(props) || !isNil(props), [])

  const renderEntity = useCallback(
    (
      categoryKey: IPatchNodeCategoryKeyEnum,
      name: string,
      description?: string,
      link?: string,
      label?: string,
      imageUri?: string,
      nodes?: Array<IPatchNodesItem>,
    ) => {
      const hasDescription = hasProps(description)
      const hasLink = hasProps(link)
      const hasLabel = hasProps(label)
      const hasImageUri = hasProps(imageUri)
      const hasNodes = hasProps(nodes)

      if (isEqual(categoryKey, IPatchNodeCategoryKeyEnum.ENTITY)) {
        return (
          <div key={name} className={'px-8 pb-12 last:pb-8'}>
            <div className={'flex flex-col md:flex-row'}>
              {hasImageUri && <img src={imageUri} alt={name} className={clsx('mr-4 mb-4', styles.entityImage)} />}
              <div>
                <div className={'flex flex-col'}>
                  {hasLabel && (
                    <Badge color={isEqual(label, IPatchNodesLabelEnum.NEW) ? 'blue' : 'red'} radius={'sm'} size={'sm'} className={'mb-2'}>
                      {isEqual(label, IPatchNodesLabelEnum.NEW) ? 'Nowe' : 'Usunięte'}
                    </Badge>
                  )}
                  <div className={'flex items-center mb-2'}>
                    <Title order={3} className={clsx('mr-2', styles.itemTitle)}>
                      {name}
                    </Title>
                    {hasLink && (
                      <Tooltip label={'Kliknij żeby przejść do wątku'} position={'right'} color={'gray'}>
                        <Anchor href={link} target={'_blank'} className={styles.iconLink}>
                          <IconExternalLink className={'duration-100'} />
                        </Anchor>
                      </Tooltip>
                    )}
                  </div>
                </div>
                {hasDescription && (
                  <Text className={styles.itemDescription}>
                    <NodeMarkdown text={description as string} />
                  </Text>
                )}
                {hasNodes && <NodeItem data={nodes as Array<IPatchNodesItem>} />}
              </div>
            </div>
          </div>
        )
      }

      return <UnsupportedNode key={name} customClassName={'mx-8 mb-8 last:mb-0'} isFullWidth={false} />
    },
    [hasProps],
  )

  return (
    <section className={clsx('pt-8 mt-4 rounded-md', styles.entityContent)}>
      {data.map(({ categoryKey, name, description, link, label, imageUri, nodes }: IPatchNodes) =>
        renderEntity(categoryKey, name, description, link, label, imageUri, nodes),
      )}
    </section>
  )
}
