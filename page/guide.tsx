import { state } from 'epic-state'
import { Code } from 'markup/components'
import { Button, Heading, Paragraph, Text } from 'tags'

const State = state({
  count: 1,
})

export function Guide() {
  return (
    <>
      <Button onClick={() => State.count++}>Increment</Button>
      <Text>
        Count: {State.count} Component ID: {this.id}
      </Text>
      <Heading>Guide</Heading>
      <Paragraph>Getting started with the basic parts looks like this:</Paragraph>
      <Code>{`import { render } from 'epic-jsx'
import { state } from 'epic-state'
import { tag } from 'epic-tag'

const State = state({
    count: 0,
    increment: () => {
      State.count += 1
    }
})

const Wrapper = tag('main', 'p-small')
const Text = tag('p', 'normal fontSize-largeText')

function App() {
    return (
      <Wrapper>
        <Text>{State.count}</Text>
        <Button onClick={State.increment}>Increment</Button>
      </Wrapper>
    )
}

render(<App />)`}</Code>
    </>
  )
}
