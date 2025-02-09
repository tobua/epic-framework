import { click } from 'epic-router'
import { tag } from 'epic-tag'
import { Animation, Jsx, Language, Native, Query, Router, State, Tag } from 'markup/icons'
import { Button, Paragraph, SubHeading } from 'tags'

const plugins = [
  {
    name: 'jsx',
    icon: Jsx,
    description: 'JSX renderer.',
    documentation: 'jsx',
  },
  {
    name: 'state',
    icon: State,
    description: 'State management.',
  },
  {
    name: 'tag',
    icon: Tag,
    description: 'CSS-in-JS styling.',
  },
  {
    name: 'router',
    icon: Router,
    description: 'Navigation.',
  },
  {
    name: 'query',
    icon: Query,
  },
  {
    name: 'language',
    icon: Language,
    description: 'Internationalization.',
  },
  {
    name: 'animation',
    icon: Animation,
    description: 'Animations.',
  },
  {
    name: 'native',
    icon: Native,
  },
]

const Wrapper = tag('div', 'flex column')
const Plugin = tag('div', 'flex gap-medium')
const Vertical = tag('div', 'flex column gap-medium')

export function Plugins() {
  return (
    <Wrapper>
      {plugins.map((plugin) => (
        <Plugin key={plugin.name}>
          <Vertical>
            <SubHeading>epic-{plugin.name}</SubHeading>
            <plugin.icon width={120} height={120} />
          </Vertical>
          <Vertical>
            <Paragraph>{plugin.description}</Paragraph>
            {plugin.documentation && <Button onClick={click(`documentation/${plugin.documentation}`)}>Documentation</Button>}
          </Vertical>
        </Plugin>
      ))}
    </Wrapper>
  )
}
