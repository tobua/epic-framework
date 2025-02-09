import { Anchor, Heading, Paragraph, SubHeading } from 'tags'

export function Documentation() {
  return (
    <>
      <Heading>Documentation</Heading>
      <Anchor id="jsx">
        <SubHeading>epic-jsx</SubHeading>
      </Anchor>
      <Paragraph>This plugin takes care of rendering and updating elements rendered in the browser from JSX.</Paragraph>
      <Anchor id="jsx">
        <SubHeading>epic-state</SubHeading>
      </Anchor>
      <Paragraph>Reactive and mutable state management that ensures components will automatically rerender whenever necessary.</Paragraph>
    </>
  )
}
