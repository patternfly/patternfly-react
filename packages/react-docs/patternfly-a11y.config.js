const { fullscreenRoutes } = require('theme-patternfly-org/routes');

/**
 * Wait for a selector before running axe
 *
 * @param page page from puppeteer
 */
async function waitFor(page) {
  await page.waitForSelector('#root > *');
}

module.exports = {
  prefix: 'http://localhost:5000',
  waitFor,
  crawl: false,
  urls: Object.keys(fullscreenRoutes),
  ignoreRules: 'color-contrast,page-has-heading-one,scrollable-region-focusable,bypass',
  ignoreIncomplete: true,
  skip: /^\/charts\//
};
