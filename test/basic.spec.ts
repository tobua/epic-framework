import { expect, test } from '@playwright/test'

test('Page with title can be loaded.', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/EPIC Framework/)

  await expect(page.locator('h1')).toContainText('Overview')
})
