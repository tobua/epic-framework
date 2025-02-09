import { tag } from 'epic-tag'
import { Horizontal, Text } from 'tags'

const Wrapper = tag('footer', 'flex column alignItems-center gap-medium alignSelf-stretch background-lightgray p-large')
const SurfaceTag = (value: number) => tag('div', `flex w-small h-small bg-s${value}`)

function Tag({ value }: { value: number }) {
  const Component = SurfaceTag(value)
  return <Component />
}

export function Footer() {
  return (
    <Wrapper>
      <Text>
        Brought to you by <Text bold={true}>hair</Text>plan
      </Text>
      <Horizontal>
        <Tag value={100} />
        <Tag value={200} />
        <Tag value={300} />
        <Tag value={400} />
        <Tag value={500} />
        <Tag value={600} />
        <Tag value={700} />
        <Tag value={800} />
        <Tag value={900} />
      </Horizontal>
    </Wrapper>
  )
}
