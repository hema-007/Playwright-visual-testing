import { test, expect, Page } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

test('Verify login page without adding input', async ({ page }) => {
  await page?.goto('https://qa-app.joinassembly.com/login');
  (await page?.locator("//button[@type='submit']").isVisible()) == true;
  await page?.waitForTimeout(1500);
  expect(await page?.screenshot()).toMatchSnapshot(
    './expectedResult/loginpagewithoutemail.png'
  );
});

test('Verify login page by adding input', async ({ page }) => {
  await page?.goto('https://qa-app.joinassembly.com/login');
  (await page?.locator("//button[@type='submit']").isVisible()) == true;
  await page?.locator("//input[@type='email']").type('hema@joinassembly.com');
  await page?.waitForTimeout(1500);
  expect(await page?.screenshot()).toMatchSnapshot(
    './expectedResult/loginpagewithemail.png'
  );
});

test('Verify enter passcode page without input', async ({ page }) => {
  await page?.goto('https://qa-app.joinassembly.com/login');
  await page?.locator("//input[@type='email']").type('hema@joinassembly.com');
  await page?.locator("//button[@type='submit']").click();
  (await page?.locator("//form[@method='post']").isVisible()) == true;
  await page?.waitForTimeout(1500);
  expect(await page?.screenshot()).toMatchSnapshot(
    './expectedResult/passcodewithoutinput.png'
  );
});
