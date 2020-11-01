// This module is shared between NodeJS and babelled ES5
module.exports = {
  pathPrefix: '',
  hasGdprBanner: false,
  hasFooter: false,
  hasVersionSwitcher: false,
  hasDesignGuidelines: false,
  sideNavItems: [
    { section: 'developer-resources' },
    { section: 'charts' },
    { section: 'components' },
    { section: 'demos' },
    { section: 'extensions' },
    { section: 'layouts' }
  ],
  topNavItems: [{ text: 'Icons', path: '/icons' }],
  port: 8002
};
