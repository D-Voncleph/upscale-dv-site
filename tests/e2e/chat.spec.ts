import { test, expect } from '@playwright/test';

test.describe('Chat Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/audit');
  });

  test.describe('Initial State', () => {
    test('shows Live Strategic Audit header', async ({ page }) => {
      const header = page.getByRole('heading', { name: /Live Strategic Audit/i });
      await expect(header).toBeVisible();
    });

    test('input field is present', async ({ page }) => {
      const input = page.locator('input[placeholder*="Type your response"]');
      await expect(input).toBeVisible();
    });

    test('send button is disabled initially', async ({ page }) => {
      const sendBtn = page.locator('button[type="submit"]');
      await expect(sendBtn).toBeDisabled();
    });
  });

  test.describe('User Interaction', () => {
    test('typing enables send button', async ({ page }) => {
      const input = page.locator('input[placeholder*="Type your response"]');
      const sendBtn = page.locator('button[type="submit"]');

      await input.fill('Test message');
      await expect(sendBtn).toBeEnabled();
    });

    test('clearing input disables send button', async ({ page }) => {
      const input = page.locator('input[placeholder*="Type your response"]');
      const sendBtn = page.locator('button[type="submit"]');

      await input.fill('Test message');
      await expect(sendBtn).toBeEnabled();

      await input.clear();
      await expect(sendBtn).toBeDisabled();
    });
  });

  test.describe('Restart Functionality', () => {
    test('restart button is visible', async ({ page }) => {
      const restartBtn = page.getByRole('button', { name: /Restart/i });
      await expect(restartBtn).toBeVisible();
    });
  });
});
