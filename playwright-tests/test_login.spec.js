// Simulated Playwright test to check login page
const { test, expect } = require('@playwright/test');

test('Login page loads and shows correct elements', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  // These now match because of label for="id"
  await expect(page.getByLabel('Email')).toBeVisible();
  await expect(page.getByLabel('Password')).toBeVisible();
});
