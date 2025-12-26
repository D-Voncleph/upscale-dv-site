import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('navigation bar is visible on homepage', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();
  });

  test('navigation bar is visible on key pages', async ({ page }) => {
    const pages = ['/services', '/labs', '/audit'];
    for (const path of pages) {
      await page.goto(path);
      const nav = page.locator('nav').first();
      await expect(nav).toBeVisible();
    }
  });

  test('can set mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    // Just verify we can resize and load page
    await expect(page.locator('nav').first()).toBeVisible();
  });
});
