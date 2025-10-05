
import { createBdd } from 'playwright-bdd';
const {test} = require('../../support/fixtures.js')

const { Given,When, Then } = createBdd(test);

Given('I open the login page', async ({ loginPage }) => {
  await loginPage.goto();
});

When('I login with username {string} and password {string}', async ({ loginPage }, username, password) => {
  //await loginPage.login(username, password);
  console.log(await loginPage.getPageTitle());
});

Then('I should see the homepage', async ({ page }) => {
  await expect(page.locator('h1')).toHaveText('Playwright enables reliable end-to-end testing for modern web apps');
});
