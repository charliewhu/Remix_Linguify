import {test, expect} from '@playwright/test'

let name = "name"
let body = "body"

test('', async ({ page, request }) => {
  // Given the User is on the NewText page
  await page.goto('/texts/create/');
  await expect(page).toHaveTitle(/New Text/);
  
  // When they fill Name content
  // And they fill Body content
  // And they click Submit button
  await page.getByPlaceholder("name").fill(name);
  await page.getByPlaceholder("body").fill(body);
  await page.locator('button[type="submit"]').click();
  
  // Then there is a POST request to the server
  // And they are redirected to the Text detail page
  // And they see the new text name
  // And they see the new text body
  const issues = await request.post(`**/api/texts/`);
  expect(issues.ok()).toBeTruthy();
  await expect(page).toHaveURL(/texts\/1/);
  await page.getByText(name)
  await page.getByText(body)
});