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
  className?: string
}

function Card({ children, className }: IProps) {
  const { classes } = useStyles()

  return <article className={clsx('p-8 pb-4 md:pb-2', 'rounded', classes.card, className)}>{children}</article>
}

export default Card
