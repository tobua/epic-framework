import convert from 'color-convert'

const lighten = (color: string, change: number): string => {
  const hsl = convert.hex.hsl(color)
  hsl[2] += change * 5
  hsl[2] = Math.min(100, Math.max(0, hsl[2]))
  return `#${convert.hsl.hex(hsl)}`
}

export const surfaceColors = (color: string) => ({
  s100: lighten(color, 8),
  s200: lighten(color, 7),
  s300: lighten(color, 6),
  s400: lighten(color, 5),
  s500: lighten(color, 4),
  s600: lighten(color, 3),
  s700: lighten(color, 2),
  s800: lighten(color, 1),
  s900: lighten(color, 0),
})

export const Label = {
  overviewLink: 'overview-link',
  guideLink: 'guide-link',
  documenationLink: 'documentation-link',
}
