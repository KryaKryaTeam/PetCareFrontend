

import { test, expect } from '@playwright/test';


test('should redirect from / to /listing/', async ({ page }) => {

  await page.goto('/');



  await expect(page).toHaveURL(/\/listing\/$/);

});

test('work with scrollBehavior', async ({ page }) => {

  await page.goto('/listing');



  await page.getByRole('link', { name: 'Home' }).click();

  await expect(page).toHaveURL(/\/listing\/#home$/);



  await page.getByRole('link', { name: 'Features' }).click();

  await expect(page).toHaveURL(/\/listing\/#features$/);



  await page.getByRole('link', { name: 'Pricing' }).click();

  await expect(page).toHaveURL(/\/listing\/pricing$/);



    await page.getByRole('link', { name: 'Reviews' }).click();

    await expect(page).toHaveURL(/\/listing\/#reviews$/);

  });

