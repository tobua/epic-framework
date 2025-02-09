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
      gray200: '#EEEEEE',
      gray400: '#BDBDBD',
      gray600: '#757575',
      gray800: '#424242',
      ...surfaceColors(pageColors[page] ?? pageColors.default),
    },
    size: (value: number) => scale(value),
  })

const textScalingFactor = 1.2
const textScalingFactorHeadings = 1.6

export const Color = {
  highlight: '#3600E6',
  highlightTransparent: (transparency: number) => `rgba(33, 150, 243, ${transparency})`,
  interact: '#F37E21',
  interactTransparent: (transparency: number) => `rgba(243, 126, 33, ${transparency})`,
  black: '#000000',
  white: '#FFFFFF',
  gray: '#D9D9D9',
  lightgray: '#E9E9E9',
}

export const Space = {
  huge: scale(80),
  large: scale(40),
  medium: scale(20),
  small: scale(10),
  tiny: scale(5),
}

export const Text = {
  heading: scale(40, textScalingFactorHeadings),
  subHeading: scale(32, textScalingFactorHeadings),
  large: scale(24, textScalingFactor),
  medium: scale(16, textScalingFactor),
  small: scale(12, textScalingFactor),
}

export const Transition = {
  fast: '300ms',
  medium: '600ms',
  slow: '1200ms',
}

export const globalStyles = () => {
  if (window.CSS.supports('max-height', '100dvh')) {
    document.body.style.minHeight = '100dvh'
  }
}
