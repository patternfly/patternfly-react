const { fullscreenRoutes } = require('@patternfly/documentation-framework/routes');

/**
 * Wait for a selector before running axe
 *
 * @param page page from puppeteer
 */
async function waitFor(page) {
  await page.waitForSelector('#root > *');
}

const urls = Object.keys(fullscreenRoutes)
  .map((key) => {
    if (fullscreenRoutes[key].isFullscreenOnly) {
      return key;
    } else {
      // the default tab for each component/pattern does not have a trailing 'react-demo' or 'react' string in the url
      // so we strip the trailing string from those paths.
      const path = fullscreenRoutes[key].path;
      if (path.match(/\/patterns\/.*\/react-demos$/g)) {
        return path.replace(/\/react-demos$/, '');
      } else {
        // some demos have been moved to the component section, so their default tab has a trailing 'react-demos'
        if (path.match(/\/components\/.*\/react-demos$/g)) {
          if (
            path.includes('/application-launcher/') ||
            path.includes('/context-selector/') ||
            path.includes('/date-and-time-picker/') ||
            path.includes('/password-generator/') ||
            path.includes('/password-strength/') ||
            path.includes('/custom-menus/') ||
            path.includes('/options-menu/')
          ) {
            return path.replace(/\/react-demos$/, '');
          }
        }
        // all other pages in the components section have a trailing 'react' string in their default tab
        return path.replace(/\/react$/, '');
      }
    }
  })
  .reduce((result, item) => (result.includes(item) ? result : [...result, item]), []);

module.exports = {
  prefix: 'http://localhost:5000',
  waitFor,
  crawl: false,
  urls: [
    {
      url: '/',
      label: 'home fullscreen nav expanded',
      viewportDimensions: { width: 1920, height: 1080 },
      afterNav: async (page) => {
        await page.click('button#nav-toggle');
      }
    },
    {
      url: '/',
      label: 'home fullscreen nav collapsed',
      viewportDimensions: { width: 1920, height: 1080 }
    },
    {
      url: '/',
      label: 'home mobile nav collapsed',
      viewportDimensions: { width: 400, height: 900 }
    },
    {
      url: '/',
      label: 'home mobile nav expanded',
      viewportDimensions: { width: 400, height: 900 },
      afterNav: async (page) => {
        await page.click('button#nav-toggle');
      }
    },
    {
      url: '/',
      label: 'page content',
      context: 'document.getElementById("ws-page-main")'
    },
    {
      url: '/components/table',
      label: 'composable table content on mobile screen',
      viewportDimensions: { width: 400, height: 900 }
    },
    {
      url: '/components/table/react-deprecated',
      label: 'deprecated table content on mobile screen',
      viewportDimensions: { width: 400, height: 900 }
    },
    ...urls
  ],
  ignoreRules: [
    'color-contrast',
    'landmark-no-duplicate-main',
    'landmark-main-is-top-level',
    'scrollable-region-focusable',
    'link-in-text-block'
  ].join(','),
  ignoreIncomplete: true
};
