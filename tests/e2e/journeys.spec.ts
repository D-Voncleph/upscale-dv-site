import { test, expect } from '@playwright/test';

test.describe('Critical User Journeys', () => {
  test('can navigate to Audit page directly', async ({ page }) => {
    await page.goto('/audit');
    await expect(page).toHaveURL(/.*\/audit/);
  });

  test('can navigate to Upscale Tool page directly', async ({ page }) => {
    await page.goto('/upscale-tool');
    await expect(page).toHaveURL(/.*\/upscale-tool/);

    // Wizard should be visible
    const wizard = page.locator('text=Who are we upscaling');
    await expect(wizard).toBeVisible();
  });

  test('can navigate to Services page', async ({ page }) => {
    await page.goto('/services');
    await expect(page).toHaveURL(/.*\/services/);
  });

  test('can navigate to Labs page', async ({ page }) => {
    await page.goto('/labs');
    await expect(page).toHaveURL(/.*\/labs/);
  });

  test('wizard completes individual path', async ({ page }) => {
    await page.goto('/upscale-tool');

    // Step 0: Choose individual path - use has-text selector
    await page.locator('button:has-text("Myself")').click();

    // Step 1: Select arena
    await page.getByRole('button', { name: /Career Advancement/i }).click();

    // Step 2: Enter friction
    await page.locator('input').fill('Too many meetings');
    await page.locator('input').press('Enter');

    // Step 3: Enter goal
    await page.locator('input').fill('Become a team lead');
    await page.locator('input').press('Enter');

    // Step 4: Verify output is displayed
    await expect(page.getByText(/Your Upscale Strategy/i)).toBeVisible({ timeout: 4000 });
  });

  test('wizard completes organization path', async ({ page }) => {
    await page.goto('/upscale-tool');

    // Step 0: Choose organization path
    await page.locator('button:has-text("My Organization")').click();

    // Step 1: Enter sector
    await page.locator('input').fill('SaaS');
    await page.locator('input').press('Enter');

    // Step 2: Enter vanishing test
    await page.locator('input').fill('Client onboarding');
    await page.locator('input').press('Enter');

    // Step 3: Select metric
    await page.getByRole('button', { name: /Faster Delivery Speed/i }).click();

    // Step 4: Verify output
    await expect(page.getByText(/Your Upscale Strategy/i)).toBeVisible({ timeout: 4000 });
  });
});
