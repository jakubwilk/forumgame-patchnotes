import { createStyles, Badge, Anchor, List, Title, Tooltip } from '@mantine/core'
import clsx from 'clsx'
import { IconArrowNarrowRight, IconExternalLink } from '@tabler/icons'
import { Section, setBadgeColor } from '@app/updates/common'
import { TUTORIALS } from '@app/data'

const useStyles = createStyles((theme) => ({
  title: {
    color: '#e3e3e3',
  },
  link: {
    color: '#ababab',
    transition: 'color .1s ease-in-out',
    '& > hover, & > focus': {
      color: 'white',
    },
  },
  section: {
    backgroundColor: '#100011',
    border: '1px solid #583270',
  },
  listItem: {
    color: '#918a8f',
    fontSize: '1rem',
    lineHeight: '1.8rem',
  },
  listArrow: {
    color: '#2c2c2c',
  },
}))

function TutorialsList() {
  const { classes } = useStyles()

  return (
    <div className={'container mx-auto max-w-5xl'} id={'tutorials'}>
      <Section id={'tutorialList'} title={'Poradniki'}>
        {TUTORIALS.tutorials.map((item) => (
          <div key={item.id}>
            <header className={clsx('mb-4', 'flex items-center')}>
              <Title order={3} className={clsx(classes.title, 'font-normal', 'mr-2')}>
                {item.title}
              </Title>
              {item.link && (
                <Tooltip label={'Kliknij by przejść do wątku'}>
                  <Anchor href={item.link} className={classes.link}>
                    <IconExternalLink size={'18'} />
                  </Anchor>
                </Tooltip>
              )}
            </header>
            <section className={clsx('mb-4 md:mb-8 p-4', classes.section)}>
              <List>
                {item.changes.map((change) => (
                  <List.Item key={change.id} className={clsx('flex items-start', classes.listItem)}>
                    <IconArrowNarrowRight size={'16'} className={clsx('mr-2', 'inline-block', classes.listArrow)} />
                    {change.text}
                    <Badge color={setBadgeColor(change.badge.type)} size={'sm'} variant={'filled'} className={'ml-2'}>
                      {change.badge.text}
                    </Badge>
                  </List.Item>
                ))}
              </List>
            </section>
          </div>
        ))}
      </Section>
    </div>
  )
}

export default TutorialsList
