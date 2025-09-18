// Simulated form submission flow
test('Form submission works correctly', async ({ page }) => {
  await page.goto('https://demo.gov-form.com/forms/new');

  await page.fill('#field_name', 'John Doe');
  await page.fill('#field_city', 'Taipei');
  await page.click('button[type="submit"]');

  // Expect success alert
  await expect(page.getByText('Form submitted successfully')).toBeVisible();
});
