Error: page.setViewportSize: Test timeout of 30000ms exceeded.

      14 |
      15 |   for (const viewport of viewports) {
    > 16 |         await page.setViewportSize({
         |                    ^
      17 |           height: viewport.height,
      18 |           width: viewport.width
      19 |         });
