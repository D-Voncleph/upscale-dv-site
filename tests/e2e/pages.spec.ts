import { test, expect } from '@playwright/test';

const pages = [
  { name: 'Homepage', path: '/', heading: 'UPSCALE' },
  { name: 'Services', path: '/services', heading: 'Services' },
  { name: 'AI Automation', path: '/services/ai-automation', heading: 'AI Automation' },
  { name: 'Digital Construction', path: '/services/digital-construction', heading: 'Digital Construction' },
  { name: 'Business Architecture', path: '/services/business-architecture', heading: 'Business Architecture' },
  { name: 'Labs', path: '/labs', heading: 'Labs' },
  { name: 'Manifesto', path: '/manifesto', heading: 'Manifesto' },
  { name: 'Audit', path: '/audit', heading: 'Audit' },
  { name: 'Upscale Tool', path: '/upscale-tool', heading: 'upscaling' },
];

for (const pageInfo of pages) {
  test(`${pageInfo.name} loads correctly`, async ({ page }) => {
    await page.goto(pageInfo.path);

    // Check that navigation is present
    const nav = page.locator('nav');
    await expect(nav.first()).toBeVisible();

    // Check that main content is present (use first main element)
    const main = page.locator('main').first();
    await expect(main).toBeVisible();
  });
}
