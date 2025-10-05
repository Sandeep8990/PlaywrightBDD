import { test as base } from 'playwright-bdd';
const { LoginPage } = require('../pages/LoginPage.js');

const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  }
});

module.exports = { test };
