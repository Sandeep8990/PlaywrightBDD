// Generated from: tests/features/login.feature
import { test } from "../../../support/fixtures.js";

test.describe('Login functionality', () => {

  test('Successful login', { tag: ['@Test'] }, async ({ Given, When, Then, loginPage, page }) => { 
    await Given('I open the login page', null, { loginPage }); 
    await When('I login with username "admin" and password "password123"', null, { loginPage }); 
    await Then('I should see the homepage', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/features/login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@Test"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I open the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I login with username \"admin\" and password \"password123\"","stepMatchArguments":[{"group":{"start":22,"value":"\"admin\"","children":[{"start":23,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":43,"value":"\"password123\"","children":[{"start":44,"value":"password123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the homepage","stepMatchArguments":[]}]},
]; // bdd-data-end