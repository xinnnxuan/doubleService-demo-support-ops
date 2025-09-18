// Simulated Playwright test to check login page
const { test, expect } = require('@playwright/test');

test('Login page loads and shows correct elements', async ({ page }) => {
  await page.goto('https://demo.gov-form.com/login');

  // Check for username & password fields
  await expect(page.getByLabel('Email')).toBeVisible();
  await expect(page.getByLabel('Password')).toBeVisible();

  // Attempt login
  await page.fill('input[name="email"]', 'demo@test.com');
  await page.fill('input[name="password"]', 'test1234');
  await page.click('button[type="submit"]');

  // Simulate success
  await expect(page).toHaveURL(/.*dashboard/);
});
