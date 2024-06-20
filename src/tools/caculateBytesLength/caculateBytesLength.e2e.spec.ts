import { test, expect } from '@playwright/test';

test.describe('Tool - CaculateBytesLength', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/caculateBytesLength');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('CaculateBytesLength - IT Tools');
  });

  test('', async ({ page }) => {

  });
});