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
  // tree-table examples are skipped because aria-level, aria-posinset, aria-setsize are intentionally
  // being used slightly unconventionally in those examples
  skip: /^\/charts\//
};
