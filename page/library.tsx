import type { Component } from 'epic-jsx'
import { tag } from 'epic-tag'
import { Heading, Paragraph, SubHeading, Text } from 'tags'

const Loader = tag('span', [
  'flex fontSize-[80px]',
  {
    background: 'linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)',
    backgroundSize: '200% 100%',
    backgroundPosition: '0 0',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
  },
])

export function Library(this: Component<undefined, 'loader'>) {
  this.once(() => {
    const htmlParagraph = this.ref.loader.native

    // TODO it's returning the wrong ref!!
    htmlParagraph.style.backgroundClip = 'text'
    htmlParagraph.style.webkitTextFillColor = 'transparent'

    const animation = htmlParagraph.animate([{ backgroundPosition: '200% 0' }, { backgroundPosition: '-200% 0' }], {
      duration: 2000,
      iterations: Number.POSITIVE_INFINITY,
      easing: 'ease-in-out',
    })

    animation.play()
  })

  return (
    <>
      <Heading>Component Library</Heading>
      <Paragraph>
        The following shows some components built according to minimalist design. They are split into <Text bold={true}>tags</Text>,{' '}
        <Text bold={true}>plugins</Text> and <Text bold={true}>components</Text> which is according to the structure used in the project.
      </Paragraph>
      <SubHeading>Tags</SubHeading>
      <SubHeading>Text</SubHeading>
      <SubHeading>Loader</SubHeading>
      <Loader ref="loader">Loading data...</Loader>
      <SubHeading>Plugins</SubHeading>
      <Paragraph>Plugins can be conditionally injected into any component rendering cycle where needed.</Paragraph>
      <SubHeading>Components</SubHeading>
    </>
  )
}
