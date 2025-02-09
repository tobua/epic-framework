import { click } from 'epic-router'
import { tag } from 'epic-tag'
import { Label } from 'helper'
import logo from '../logo.png'

const Wrapper = tag(
  'header',
  'flex flex1 justifyContent-space-between alignItems-center background-highlight p-medium radius-medium marginTop-large marginBottom-large',
)
const Left = tag('div', 'flex center gap-medium')
const Right = tag('nav', 'flex center gap-medium')
const Logo = tag('img', 'w-40 h-40 background-white p-small radius-small')
const Title = tag('p', 'normal fontWeight fontSize-32 color-white textShadow-[0px 0px 10px rgba(0, 0, 0, 0.5)]')
const Link = tag('a', 'link padding-small radius-small', {
  white: 'color-white',
  hover: { default: 'background-white color-gray600', isTitle: '' },
  isTitle: '',
})

export function Header() {
  return (
    <Wrapper>
      <Left>
        <Logo src={logo} />
        <Link href="/" aria-label={Label.overviewLink} isTitle={true} onClick={click('overview')}>
          <Title>EPIC Framework</Title>
        </Link>
      </Left>
      <Right>
        <Link white={true} aria-label={Label.guideLink} href="/" onClick={click('guide')}>
          Guide
        </Link>
        <Link white={true} aria-label={Label.documenationLink} href="/" onClick={click('documentation')}>
          Documentation
        </Link>
      </Right>
    </Wrapper>
  )
}
