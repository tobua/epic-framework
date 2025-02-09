import { addPage, configure } from 'epic-router'
import { Documentation } from 'page/documentation'
import { Guide } from 'page/guide'
import { Jsx } from 'page/jsx'
import { Overview } from 'page/overview'
import { setColors } from 'style'

export const { router } = configure('overview')

export function addRoutes() {
  addPage('overview', Overview)
  addPage('guide', Guide)
  addPage('documentation', Documentation)
  addPage('documentation/jsx', Jsx)

  setColors(router.route)
}
