import { Page } from 'markup/page'
import { Plugins } from 'markup/plugins'
import { Heading } from 'tags'

export function Overview() {
  return (
    <Page>
      <Heading>Overview</Heading>
      <Plugins />
    </Page>
  )
}
