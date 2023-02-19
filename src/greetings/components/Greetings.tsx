import { Blockquote, Paper } from '@mantine/core'

interface IProps {
  text: string
  authors: string
}

function Greetings({ text, authors }: IProps) {
  return (
    <section className={'pt-[6rem] pb-[4rem] px-4 md:px-16'} id={'home'}>
      <Paper p={'xl'}>
        <Blockquote cite={authors}>{text}</Blockquote>
      </Paper>
    </section>
  )
}

export default Greetings
