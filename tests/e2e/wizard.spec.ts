import { test, expect } from '@playwright/test';

test.describe('Wizard Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/upscale-tool');
  });

  test.describe('Step 0 - Initial Fork', () => {
    test('shows "Who are we upscaling today?" heading', async ({ page }) => {
      const heading = page.getByRole('heading', { name: /Who are we upscaling today/i });
      await expect(heading).toBeVisible();
    });

    test('shows Myself and My Organization buttons', async ({ page }) => {
      // Use locators that target the h3 text inside the buttons
      const myselfBtn = page.locator('button h3:text("Myself")').locator('..');
      const orgBtn = page.locator('button h3:text("My Organization")').locator('..');

      await expect(myselfBtn).toBeVisible();
      await expect(orgBtn).toBeVisible();
    });

    test('clicking Myself advances to step 1', async ({ page }) => {
      // Click the "Myself" card by targeting its h3
      await page.locator('button:has-text("Myself"):near(:text("Professional or Individual Growth"))').click();

      // Should now show arena question
      const heading = page.getByRole('heading', { name: /primary arena of growth/i });
      await expect(heading).toBeVisible();
    });

    test('clicking My Organization advances to step 1', async ({ page }) => {
      // Click the "My Organization" card
      await page.locator('button:has-text("My Organization")').click();

      // Should now show sector question
      const heading = page.getByRole('heading', { name: /industry does your organization dominate/i });
      await expect(heading).toBeVisible();
    });
  });

  test.describe('Individual Path', () => {
    test('can select arena option', async ({ page }) => {
      await page.locator('button:has-text("Myself")').click();
      await page.getByRole('button', { name: /Career Advancement/i }).click();

      // Should now show friction question
      const heading = page.getByRole('heading', { name: /drains your energy/i });
      await expect(heading).toBeVisible();
    });

    test('can type friction and advance with Enter', async ({ page }) => {
      await page.locator('button:has-text("Myself")').click();
      await page.getByRole('button', { name: /Career Advancement/i }).click();

      const input = page.locator('input[placeholder*="Answering repetitive emails"]');
      await input.fill('Test friction point');
      await input.press('Enter');

      // Should now show goal question
      const heading = page.getByRole('heading', { name: /Where do you want to be in 12 months/i });
      await expect(heading).toBeVisible();
    });

    test('Continue button is disabled until input is filled', async ({ page }) => {
      await page.locator('button:has-text("Myself")').click();
      await page.getByRole('button', { name: /Career Advancement/i }).click();

      const input = page.locator('input[placeholder*="Answering repetitive emails"]');
      const continueBtn = page.getByRole('button', { name: /Continue/i });

      // Button should be disabled when empty
      await expect(continueBtn).toBeDisabled();

      // Button should be enabled after typing
      await input.fill('Test friction');
      await expect(continueBtn).toBeEnabled();
    });

    test('can complete full individual flow', async ({ page }) => {
      // Step 0: Choose individual
      await page.locator('button:has-text("Myself")').click();

      // Step 1: Select arena
      await page.getByRole('button', { name: /Career Advancement/i }).click();

      // Step 2: Enter friction
      const frictionInput = page.locator('input[placeholder*="Answering repetitive emails"]');
      await frictionInput.fill('Too many meetings');
      await frictionInput.press('Enter');

      // Step 3: Enter goal
      const goalInput = page.locator('input[placeholder*="Leading a team"]');
      await goalInput.fill('Become a team lead');
      await goalInput.press('Enter');

      // Step 4: Should see loading then output
      await expect(page.getByText(/Designing your Growth Map/i)).toBeVisible();

      // After loading, should see output
      await expect(page.getByText(/Your Upscale Strategy/i)).toBeVisible({ timeout: 3000 });
    });
  });

  test.describe('Organization Path', () => {
    test('can type sector and advance', async ({ page }) => {
      await page.locator('button:has-text("My Organization")').click();

      const input = page.locator('input[placeholder*="SaaS, E-commerce"]');
      await input.fill('SaaS');
      await input.press('Enter');

      // Should now show vanishing test
      const heading = page.getByRole('heading', { name: /Vanishing.*Test/i });
      await expect(heading).toBeVisible();
    });

    test('can select metric and complete flow', async ({ page }) => {
      // Step 0: Choose organization
      await page.locator('button:has-text("My Organization")').click();

      // Step 1: Enter sector
      const sectorInput = page.locator('input[placeholder*="SaaS, E-commerce"]');
      await sectorInput.fill('E-commerce');
      await sectorInput.press('Enter');

      // Step 2: Enter vanishing test
      const vanishingInput = page.locator('input[placeholder*="Client onboarding"]');
      await vanishingInput.fill('Inventory management');
      await vanishingInput.press('Enter');

      // Step 3: Select metric
      await page.getByRole('button', { name: /Faster Delivery Speed/i }).click();

      // Should see output
      await expect(page.getByText(/Your Upscale Strategy/i)).toBeVisible({ timeout: 3000 });
    });
  });

  test.describe('Navigation', () => {
    test('Enter key advances to next step when input is filled', async ({ page }) => {
      await page.locator('button:has-text("Myself")').click();
      await page.getByRole('button', { name: /Career Advancement/i }).click();

      const input = page.locator('input[placeholder*="Answering repetitive emails"]');
      await input.fill('Test friction');
      await input.press('Enter');

      // Should have advanced
      const nextInput = page.locator('input[placeholder*="Leading a team"]');
      await expect(nextInput).toBeVisible();
    });
  });
});
