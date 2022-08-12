import { ReactNode } from 'react'
import { createStyles } from '@mantine/core'
import clsx from 'clsx'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: '#301e38',
    border: '1px solid #583270',
  },
}))

interface IProps {
  children: ReactNode
}

function Card({ children }: IProps) {
  const { classes } = useStyles()

  return <article className={clsx('p-8 pb-4', 'rounded', classes.card)}>{children}</article>
}

export default Card
