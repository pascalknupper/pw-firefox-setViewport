import { test } from '@playwright/test';

test('set different viewports', async ({ page }) => {
  await page.goto('https://www.otto.de/customer-registration/customerAccount');

  await page.getByTestId('fti-registration-password-input').fill('1')
  await page.getByTestId('fti-registration-password-repeat-input').fill('1')
  await page.getByRole('button', { name: 'Weiter' }).click()

  const viewports = [
      { breakpoint: 'xl', width: 1920, height: 1080 },
      { breakpoint: 's', width: 360, height: 1080 }
  ];

  for (const viewport of viewports) {
        await page.setViewportSize({
          height: viewport.height,
          width: viewport.width
        });
      }

});
