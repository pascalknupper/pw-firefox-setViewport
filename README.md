running `npx playwright test`leads to failure with firefox

Error: page.setViewportSize: Test timeout of 30000ms exceeded.

      14 |
      15 |   for (const viewport of viewports) {
    > 16 |         await page.setViewportSize({
         |                    ^
      17 |           height: viewport.height,
      18 |           width: viewport.width
      19 |         });


running `npx playwright test --ui` no issues with firefox
