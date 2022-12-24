import { test, expect } from '@playwright/test'

let id = 1
let name = "Name"
let body = "Body"

let data = {
  id: id,
  name: name,
  body: body,
}

test('', async ({ page }) => {
  await page.route('linguify.up.railway.app/texts/1/', route => route.fulfill({
    status: 200,
    body: JSON.stringify(data),
  }));

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