import { Fragment } from 'react'
import clsx from 'clsx'
import { Badge, createStyles, List, Text, Title } from '@mantine/core'
import { Section } from '../../common'
import { IconArrowNarrowRight } from '@tabler/icons'
import { setBadgeColor } from '../utils'
import { STANDARD_MAGIC } from '../../../data'

const useStyles = createStyles((theme) => ({
  header: {
    backgroundImage: 'url(./magic-section.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '230px',
    borderTop: '1px solid #583270',
    borderBottom: '1px solid #583270',
  },
  title: {
    // color: '#f7f7f7',
    color: '#cac7a8',
  },
  text: {
    color: '#b7b7b7',
    fontSize: '1rem',
  },
  subTitle: {
    color: '#c8c8c8',
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

function MagicList() {
  const { classes } = useStyles()

  return (
    <Fragment>
      <div className={'container mx-auto w-full max-w-full'}>
        <header className={clsx(classes.header, 'flex justify-center flex-col', 'text-center', 'py-8 px-4 mb-16')}>
          <Title order={2} className={clsx(classes.title, 'font-normal text-4xl', 'mb-4')}>
            {'Magie zwykłe'}
          </Title>
          <Text className={classes.text}>
            {
              'Zmain doczekały się również same magie, które otrzymały zdolności wbudowane, by umożliwić rozgrywkę bez posiadania żadnych zaklęć'
            }
          </Text>
        </header>
      </div>
      <div className={'container mx-auto max-w-5xl'}>
        <Section id={'magicList'} title={STANDARD_MAGIC.data.main.name as string}>
          <section className={clsx('mb-4 md:mb-8 p-4', classes.section)}>
            <List>
              {STANDARD_MAGIC.data.main.changes.map((change) => (
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
        </Section>
        {STANDARD_MAGIC.data.magic.map((magic) => (
          <Section key={magic.id} title={magic.name} image={magic.imageUrl} url={magic.pageUrl} alt={magic.alt} isSection>
            <Text className={clsx(classes.subTitle, 'mb-2', 'uppercase tracking-wider', 'font-bold')}>{'Zmiany ogólne'}</Text>
            <section className={clsx('mb-4 md:mb-8 p-4', classes.section)}>
              <List>
                {magic.changes.main.map((change) => (
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
            {magic.changes.levels.map((level) => (
              <div key={level.id}>
                <Text className={clsx(classes.subTitle, 'mb-2', 'uppercase tracking-wider', 'font-bold')}>{level.text}</Text>
                <section className={clsx('mb-4 md:mb-8 p-4', classes.section)}>
                  <List>
                    {level.changes.map((change) => (
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
        ))}
      </div>
    </Fragment>
  )
}

export default MagicList
