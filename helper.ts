import convert from 'color-convert'

const lighten = (color: string, change: number): string => {
  const hsl = convert.hex.hsl(color)
  hsl[2] += change * 5
  hsl[2] = Math.min(100, Math.max(0, hsl[2]))
  return `#${convert.hsl.hex(hsl)}`
}

export const surfaceColors = (color: string, name: string) => ({
  [`${name}100`]: lighten(color, 8),
  [`${name}200`]: lighten(color, 7),
  [`${name}300`]: lighten(color, 6),
  [`${name}400`]: lighten(color, 5),
  [`${name}500`]: lighten(color, 4),
  [`${name}600`]: lighten(color, 3),
  [`${name}700`]: lighten(color, 2),
  [`${name}800`]: lighten(color, 1),
  [`${name}900`]: lighten(color, 0),
})

export const Label = {
  overviewLink: 'overview-link',
  guideLink: 'guide-link',
  documenationLink: 'documentation-link',
}
