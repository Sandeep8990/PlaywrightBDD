# Playwright-BDD POM Framework (JavaScript)

This is a starter framework that uses:
- Playwright Test Runner (`@playwright/test`)
- `playwright-bdd` to convert Gherkin feature files to Playwright tests
- Page Object Model (POM) structure
- JavaScript with CommonJS
- Custom fixtures for easy access to Page Objects in steps

## Quick start

1. Install dependencies
```bash
npm install
```

2. Install browsers
```bash
npm run install:browsers
```

3. Generate Playwright tests from feature files
```bash
npm run bdd:gen
```

4. Run tests
```bash
npm test
```

## Fixtures

Custom fixtures are defined in `fixtures.js`. Example:
- `loginPage` fixture makes the `LoginPage` available directly in steps.

Extend `fixtures.js` to add more Page Objects.

This scaffold is compatible with IntelliJ. Open the folder in IntelliJ and run `npm install`.
