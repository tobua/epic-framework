import { tag } from 'epic-tag'

export const Text = tag('span', '', { bold: 'bold' })
export const Paragraph = tag('p', 'normal', { bold: 'bold' })
export const Heading = tag('h1', 'normal')
export const SubHeading = tag('h2', 'normal')
export const Anchor = tag('a', 'link')
export const Button = tag('button', 'button bg-interact p-medium radius-medium', { hover: 'bg-highlight', focus: 'bg-highlight' })
export const Horizontal = tag('div', 'flex gap-medium alignItems-center', {
  center: 'justifyContent-center',
})
export const Vertical = tag('div', 'flex flex1 column gap-small alignItems-start')
