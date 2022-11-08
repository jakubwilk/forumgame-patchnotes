import { ReactNode } from 'react'
import { Anchor, createStyles, Title, Tooltip } from '@mantine/core'
import clsx from 'clsx'
import Card from './Card'
import { IconExternalLink } from '@tabler/icons'

const useStyles = createStyles((theme) => ({
  title: {
    color: '#cac7a8',
  },
  link: {
    color: '#ababab',
    transition: 'color .1s ease-in-out',
    '& > hover, & > focus': {
      color: 'white',
    },
  },
}))

interface IProps {
  title: string
  id?: string
  children: ReactNode
  image?: string
  url?: string
  alt?: string
  isSection?: boolean
}

function Section({ title, id, children, image, url, alt, isSection }: IProps) {
  const { classes } = useStyles()

  return (
    <section {...(id && { id })} className={clsx('mb-16 px-4 xl:px-0')}>
      <header className={clsx('mb-4', 'flex items-center')}>
        {isSection ? (
          <div className={clsx('w-full', 'flex flex-col items-center justify-center sm:justify-start sm:flex-row')}>
            <img className={clsx('h-[100px]', 'mr-4')} src={image} alt={alt} />
            <div className={clsx('flex items-center')}>
              <Title order={2} className={clsx('inline', 'font-normal', 'mt-2 sm:mt-0', classes.title)}>
                {title}
              </Title>
              <Tooltip label={'Kliknij by przejść do wątku'} className={clsx('inline-flex items-center')}>
                <Anchor href={url} className={clsx('ml-2', classes.link)}>
                  <IconExternalLink size={'18'} />
                </Anchor>
              </Tooltip>
            </div>
          </div>
        ) : (
          <Title order={2} className={clsx('font-normal', classes.title)}>
            {title}
          </Title>
        )}
      </header>
      <Card>{children}</Card>
    </section>
  )
}

export default Section
