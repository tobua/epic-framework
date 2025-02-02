import { expect, test } from '@playwright/test'
import { Label } from '../helper'

test('Page with title can be loaded.', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/EPIC Framework/)

  await expect(page.locator('h1')).toContainText('Overview')
})

test('Can navigate to other pages.', async ({ page }) => {
  await page.goto('/')

  const guideLink = page.locator(`[aria-label="${Label.guideLink}"]`).first()
  const documenationLink = page.locator(`[aria-label="${Label.documenationLink}"]`).first()

  await guideLink.click()

  expect(page.url()).toContain('/guide')
  await expect(page.locator('h1')).toContainText('Guide')

  await documenationLink.click()

  expect(page.url()).toContain('/documentation')
  await expect(page.locator('h1')).toContainText('Documentation')
})
