/// <reference types="@rsbuild/core/types" />
import { render } from 'epic-jsx'
import { Page, addPage, configure } from 'epic-router'
import { plugin } from 'epic-state'
import { connect } from 'epic-state/connect'
import { Documentation } from 'page/documentation'
import { Guide } from 'page/guide'
import { Overview } from 'page/overview'
import { globalStyles } from 'style'

// Styles
globalStyles()
// Connect state to JSX
plugin(connect)
// Router
export const { router } = configure('overview')
addPage('overview', Overview)
addPage('guide', Guide)
addPage('documentation', Documentation)

render(<Page />)
