import {test, expect} from '@playwright/test'

let name = "name"
let body = "body"

test('', async ({ page }) => {
  // Given the User is on the NewText page
  await page.goto('/texts/create/');
  await expect(page).toHaveTitle(/New Text/);
  
  // When they fill Name content
  // And they fill Body content
  // And they click Submit button
  await page.getByPlaceholder("name").fill(name);
  await page.getByPlaceholder("body").fill(body);
  await page.locator('button[type="submit"]').click();
  
  // Then they are redirected to the Text detail page
  // And they see the new text name
  // And they see the new text body
  await expect(page).toHaveURL(/texts\/1/);
  await expect(page).toContain(name);
  await expect(page).toContain(body);
});