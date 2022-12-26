import {test, expect} from '@playwright/test'

test('viewing the list of Texts', async ({page}) => {
    // Given the User is on the Home page
    await page.goto('/texts/');
    await expect(page).toHaveTitle(/My Texts/);

    // Then they should see Texts listed
    const listItems = await page.locator('#textItem')
    console.log(listItems)
    await expect(listItems.count()).toBeGreaterThan(1)
})