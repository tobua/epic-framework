import { tag } from 'epic-tag'
import { Text } from 'tags'

const Wrapper = tag('footer', 'flex justifyContent-center alignSelf-stretch background-lightgray p-large')

export function Footer() {
  return (
    <Wrapper>
      <Text>
        Brought to you by <Text bold={true}>hair</Text>plan
      </Text>
    </Wrapper>
  )
}
