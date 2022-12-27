import {test, expect} from '@playwright/test'

test.describe('navigation',  () => {

  test('TextList links to TextDetail', async ({ page }) => {
    // Given the User is on the TextList page
    await page.goto('/texts/');
    await expect(page).toHaveTitle(/My Texts/);

    // When they click on the first Text list item
    await page.getByTestId('textItem').first().click();

    // Then they should be on the TextDetail page
    await expect(page).toHaveURL(/texts\/1/);
  });
})