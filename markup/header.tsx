import type { CSSProperties } from 'epic-jsx'
import { go } from 'epic-router'
import { tag } from 'epic-tag'
import { Color } from 'style'
import logo from '../logo.png'

const Wrapper = tag(
  'header',
  'flex flex1 justifyContent-space-between alignItems-center background-highlight p-small marginTop-large marginBottom-large',
)
const Title = tag('div', 'flex center gap-medium')
const Logo = tag('img', 'w-large h-large')

const headingStyles: CSSProperties = {
  textDecoration: 'underline',
  fontWeight: 'normal',
  color: Color.white,
  textDecorationLine: 'none',
  margin: 0,
  textShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
}

const linkStyles: CSSProperties = {
  textDecoration: 'none',
}

const navigationStyles: CSSProperties = {
  textDecoration: 'none',
  color: Color.white,
}

export function Header() {
  return (
    <Wrapper>
      <Title>
        <Logo src={logo} />
        <a
          style={linkStyles}
          href="/"
          onClick={(event) => {
            event.preventDefault()
            go('overview')
          }}
        >
          <h1 style={headingStyles}>EPIC Framework</h1>
        </a>
      </Title>
      <a
        style={navigationStyles}
        href="/"
        onClick={(event) => {
          event.preventDefault()
          go('guide')
        }}
      >
        Guide
      </a>
    </Wrapper>
  )
}
