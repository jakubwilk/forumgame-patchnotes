import { useCallback } from 'react'
import { IPatchNodeCategoryKeyEnum, IPatchNodes, IPatchNodesItem, IPatchNodesLabelEnum } from '../models/api.model'
import { isEmpty, isEqual, isNil } from 'lodash'
import { UnsupportedNode } from './UnsupportedNode'
import { Text, Title, Tooltip, Anchor, Badge } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons-react'
import { NodeItem } from './NodeItem'

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
          <section key={name} className={'px-8 pb-4'}>
            <div className={'flex flex-col md:flex-row'}>
              {hasImageUri && <img src={imageUri} alt={name} className={'mr-4'} />}
              <div>
                <div className={'flex items-center'}>
                  {hasLabel && (
                    <Badge color={isEqual(label, IPatchNodesLabelEnum.NEW) ? 'blue' : 'red'} radius={'sm'} size={'sm'} className={'mr-2'}>
                      {isEqual(label, IPatchNodesLabelEnum.NEW) ? 'Nowe' : 'Usunięte'}
                    </Badge>
                  )}
                  <Title order={3} className={'mr-2'}>
                    {name}
                  </Title>
                  {hasLink && (
                    <Tooltip label={'Kliknij żeby przejść do wątku'} position={'right'}>
                      <Anchor href={link} target={'_blank'}>
                        <IconExternalLink />
                      </Anchor>
                    </Tooltip>
                  )}
                </div>
                {hasDescription && <Text>{description}</Text>}
                {hasNodes && <NodeItem data={nodes as Array<IPatchNodesItem>} />}
              </div>
            </div>
          </section>
        )
      }

      return <UnsupportedNode key={name} isFullWidth={false} />
    },
    [hasProps],
  )

  return (
    <>
      {data.map(({ categoryKey, name, description, link, label, imageUri, nodes }: IPatchNodes) =>
        renderEntity(categoryKey, name, description, link, label, imageUri, nodes),
      )}
    </>
  )
}
