import type { JSX } from 'epic-jsx'
import type { CSSProperties } from 'epic-jsx'
import { tag } from 'epic-tag'
import { Footer } from 'markup/footer'
import { Header } from 'markup/header'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
  fontFamily: 'sans-serif',
  fontWeight: 400,
  fontStyle: 'normal',
}

const Content = tag('main', 'flex alignSelf-normal justifyContent-center flex1 p-small')
const Center = tag('div', 'flex column maxWidth-[1000px] fullWidth gap-large')

export function Page({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <div style={wrapperStyles}>
      <Center>
        <Header />
      </Center>
      <Content>
        <Center>{children}</Center>
      </Content>
      <Footer />
    </div>
  )
}
