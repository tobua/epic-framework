/// <reference types="@rsbuild/core/types" />
import { render } from 'epic-jsx'
import { Page } from 'epic-router'
import { plugin } from 'epic-state'
import { connect } from 'epic-state/connect'
import { Static } from 'markup/static'
import { addRoutes } from 'router'
import { globalStyles } from 'style'

globalStyles() // Styles
plugin(connect) // Connect state to JSX renderer
addRoutes() // Router

render(
  <Static>
    <Page />
  </Static>,
)
