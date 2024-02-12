import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface IProps {
  text: string
  className?: string
}

export function NodeMarkdown({ text, className }: IProps) {
  return (
    <Markdown className={className} remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
      {text}
    </Markdown>
  )
}
