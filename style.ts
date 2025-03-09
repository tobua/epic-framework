import { configure } from 'epic-inline'
import { surfaceColors } from 'helper'
import { scale } from 'optica'

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
