const { fullscreenRoutes } = require('@patternfly/documentation-framework/routes');

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
  ignoreRules: [
    'color-contrast',
    'page-has-heading-one',
    'scrollable-region-focusable',
    'bypass',
    'nested-interactive'
  ].join(','),
  ignoreIncomplete: true,
  skip: /^\/charts\//
};
