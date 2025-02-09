import type React from 'epic-jsx'
import { tag } from 'epic-tag'
import { Footer } from 'markup/footer'
import { Header } from 'markup/header'

const Wrapper = tag('div', 'flex col alignItems-center flex1')
const Content = tag('main', 'flex alignSelf-normal justifyContent-center flex1 p-small')
const Center = tag('div', 'flex column maxWidth-[1000px] fullWidth gap-large')

export function Static({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Center>
        <Header />
      </Center>
      <Content>
        <Center>{children}</Center>
      </Content>
      <Footer />
    </Wrapper>
  )
}
