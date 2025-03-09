import { Anchor, Box, Heading, Horizontal, Paragraph, SubHeading } from 'tags'

export function Documentation() {
  return (
    <>
      <Heading>Documentation</Heading>
      <Anchor id="jsx">
        <SubHeading>epic-jsx</SubHeading>
      </Anchor>
      <Paragraph>This plugin takes care of rendering and updating elements rendered in the browser from JSX.</Paragraph>
      <Anchor id="state">
        <SubHeading>epic-state</SubHeading>
      </Anchor>
      <Paragraph>Reactive and mutable state management that ensures components will automatically rerender whenever necessary.</Paragraph>
      <Anchor id="tag">
        <SubHeading>epic-tag</SubHeading>
      </Anchor>
      <Paragraph>Used to style and extend tags, inspited by styled components.</Paragraph>
      <SubHeading>Colors</SubHeading>
      <Horizontal>
        <Box style="bg-gray900" />
        <Box style="bg-gray800" />
        <Box style="bg-gray700" />
        <Box style="bg-gray600" />
        <Box style="bg-gray500" />
        <Box style="bg-gray400" />
        <Box style="bg-gray300" />
        <Box style="bg-gray200" />
        <Box style="bg-gray100" />
      </Horizontal>
      <Horizontal>
        <Box style="bg-s900" />
        <Box style="bg-s800" />
        <Box style="bg-s700" />
        <Box style="bg-s600" />
        <Box style="bg-s500" />
        <Box style="bg-s400" />
        <Box style="bg-s300" />
        <Box style="bg-s200" />
        <Box style="bg-s100" />
      </Horizontal>
    </>
  )
}
