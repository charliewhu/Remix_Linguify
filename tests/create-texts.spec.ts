import { test, expect } from '@playwright/test'

let text = "Test Text"

test('', async ({ page }) => {
    // Given the User is on the NewText page
    await page.goto('/texts/new/');
    await expect(page).toHaveTitle(/New Remix App/);
    
    // When they fill Text content
    // And they click Submit button
    await page.locator('input[type="text"]').fill(text);
    await page.locator('button[type="submit"]').click();
    
    // Then they are redirected to the Text detail page
    // And they see the new text
    await expect(page).toHaveURL(/texts\/1/);
    await expect(page).toContain(text);
  });