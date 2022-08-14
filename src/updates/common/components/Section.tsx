import { ReactNode } from 'react'
import { createStyles, Title } from '@mantine/core'
import clsx from 'clsx'
import Card from './Card'

const useStyles = createStyles((theme) => ({
  title: {
    color: '#cac7a8',
  },
}))

interface IProps {
  title: string
  children: ReactNode
}

function Section({ title, children }: IProps) {
  const { classes } = useStyles()

  return (
    <section className={clsx('mb-16 px-4 xl:px-0')}>
      <header className={clsx('mb-4', 'flex items-center')}>
        <Title order={2} className={clsx('font-normal', classes.title)}>
          {title}
        </Title>
      </header>
      <Card>{children}</Card>
    </section>
  )
}

export default Section
