import { useCallback } from 'react'
import { IPatchNodeCategoryKeyEnum, IPatchNodesItem } from '../models/api.model'
import { isEmpty, isEqual, isNil } from 'lodash'
import { UnsupportedNode } from './UnsupportedNode'
import { Anchor, List, Text, Tooltip } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons-react'

interface IProps {
  data: Array<IPatchNodesItem>
}

export function NodeItem({ data }: IProps) {
  const renderItem = useCallback(
    (categoryKey: IPatchNodeCategoryKeyEnum, slug: string, description: string, index: number, link?: string) => {
      const hasLink = isEmpty(link) || isNil(link)

      if (isEqual(categoryKey, IPatchNodeCategoryKeyEnum.ITEM)) {
        const itemNumber = index + 1

        return (
          <List.Item key={slug} className={'flex items-center'}>
            <div className={'flex'}>
              <Text className={'mr-2'}>{`${itemNumber}.`}</Text>
              {description}
            </div>
            {hasLink && (
              <Tooltip label={'Kliknij żeby przejść do wątku'} position={'right'}>
                <Anchor href={link} target={'_blank'}>
                  <IconExternalLink />
                </Anchor>
              </Tooltip>
            )}
          </List.Item>
        )
      }

      return <UnsupportedNode key={slug} isFullWidth={false} />
    },
    [],
  )

  return (
    <List withPadding>
      {data.map(({ categoryKey, slug, description, link }, index) => renderItem(categoryKey, slug, description, index, link))}
    </List>
  )
}
