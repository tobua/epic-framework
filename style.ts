import { configure } from 'epic-inline'
import { surfaceColors } from 'helper'
import { scale } from 'optica'

export const creativeColors = {
  purple: '#6B46C1',
  violet: '#8B5CF6',
  lavender: '#A78BFA',
  orange: '#F97316',
  yellow: '#EAB308',
  turquoise: '#14B8A6',
}

const pageColors = {
  default: '#3600E6',
  jsx: '#0075FF',
  guide: '#000000',
}

// TODO epic-tag, calling configure should rerender all tags.
export const setColors = (page: string) =>
  configure({
    colors: {
      highlight: '#3600E6',
      interact: '#F37E21',
      ...surfaceColors('#666666', 'gray'),
      ...surfaceColors(pageColors[page] ?? pageColors.default, 's'),
    },
    size: (value: number) => scale(value),
  })

export const styles = () => {
  if (window.CSS.supports('max-height', '100dvh')) {
    document.body.style.minHeight = '100dvh'
  }
}
