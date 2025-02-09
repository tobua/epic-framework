import type React from 'epic-jsx'
import { tag } from 'epic-tag'

const CodeWrapper = tag('code', 'p-medium bg-gray200 radius-medium')
const CodePre = tag('pre', 'normal')

export const Code = ({ children }: { children: React.ReactNode }) => (
  <CodeWrapper>
    <CodePre>{children}</CodePre>
  </CodeWrapper>
)
