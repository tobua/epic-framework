import { go } from 'epic-router'
import { tag } from 'epic-tag'
import logo from '../logo.png'

const Wrapper = tag(
  'header',
  'flex flex1 justifyContent-space-between alignItems-center background-highlight p-small marginTop-large marginBottom-large',
)
const Left = tag('div', 'flex center gap-medium')
const Logo = tag('img', 'w-large h-large')
const Title = tag('p', 'normal fontWeight fontSize-32 color-white textShadow-[0px 0px 10px rgba(0, 0, 0, 0.5)]')
const Link = tag('a', 'link', { white: 'color-white' })

export function Header() {
  return (
    <Wrapper>
      <Left>
        <Logo src={logo} />
        <Link
          href="/"
          onClick={(event) => {
            event.preventDefault()
            go('overview')
          }}
        >
          <Title>EPIC Framework</Title>
        </Link>
      </Left>
      <Link
        white={true}
        href="/"
        onClick={(event) => {
          event.preventDefault()
          go('guide')
        }}
      >
        Guide
      </Link>
    </Wrapper>
  )
}
