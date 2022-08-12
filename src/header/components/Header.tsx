import { createStyles, Text, Title } from '@mantine/core'
import clsx from 'clsx'

const useStyles = createStyles((theme) => ({
  background: {
    backgroundImage: 'url(background.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
  },
  title: {
    color: '#e3e3e3',
    fontSize: '3rem',
  },
  text: {
    color: '#918a8f',
    fontSize: '1rem',
  },
}))

interface IProps {
  title: string
  description: string
}

function Header({ title, description }: IProps) {
  const { classes } = useStyles()

  return (
    <header className={clsx('min-h-[542px] h-full min-w-full', classes.background, 'flex flex-col justify-end', 'px-4 md:px-0')}>
      <div className={clsx('text-center', 'mb-[-2rem]')}>
        <Title order={1} className={clsx('mb-4', 'font-normal', classes.title)}>
          {title}
        </Title>
        <Text className={classes.text}>{description}</Text>
      </div>
    </header>
  )
}

export default Header
