import { Fragment } from 'react'
import clsx from 'clsx'
import { createStyles, Text, Title } from '@mantine/core'

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
}))

function MagicList() {
  const { classes } = useStyles()

  return (
    <Fragment>
      <header className={clsx(classes.header, 'flex justify-center flex-col', 'text-center', 'py-8 px-4 mb-16')}>
        <Title order={2} className={clsx(classes.title, 'font-normal text-4xl', 'mb-4')}>
          {'Magie'}
        </Title>
        <Text className={classes.text}>
          {
            'Zmain doczekały się również same magie, które otrzymały zdolności wbudowane, by umożliwić rozgrywkę bez posiadania żadnych zaklęć'
          }
        </Text>
      </header>
    </Fragment>
  )
}

export default MagicList
