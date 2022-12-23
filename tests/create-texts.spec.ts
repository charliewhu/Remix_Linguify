import { test, expect } from '@playwright/test'

test('', async ({ page }) => {
    // Given the User is on the NewText page
    await page.goto('/texts/new/');
    await expect(page).toHaveTitle(/New Remix App/);
    
    // When they click Submit button
    await page.click('button[type="submit"]');
    
    // Then they are redirected to the Text detail page
    await expect(page).toHaveURL(/texts\/1/);

  });