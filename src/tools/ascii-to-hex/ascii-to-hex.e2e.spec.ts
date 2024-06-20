import { test, expect } from '@playwright/test';

test.describe('Tool - Ascii to hex', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ascii-to-hex');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Ascii to hex - IT Tools');
  });

  test('', async ({ page }) => {

  });
});