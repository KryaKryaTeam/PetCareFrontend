// test/e2e/redirect.spec.ts
import { test, expect } from '@playwright/test';

test('should redirect from / to /listing/', async ({ page }) => {
  // Go to the root path
  await page.goto('/');

  // Assert that the current URL ends with /listing/
  await expect(page).toHaveURL(/\/listing\/$/);
});
