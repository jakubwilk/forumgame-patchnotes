import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface IProps {
  text: string
}

export function NodeMarkdown({ text }: IProps) {
  return <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>{text}</Markdown>
}
