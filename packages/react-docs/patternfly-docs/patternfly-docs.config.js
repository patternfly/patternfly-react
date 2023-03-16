// This module is shared between NodeJS and babelled ES5
module.exports = {
  pathPrefix: '',
  hasGdprBanner: false,
  hasFooter: false,
  hasVersionSwitcher: false,
  hasDarkThemeSwitcher: true,
  hasDesignGuidelines: false,
  sideNavItems: [
    { section: 'get-started' },
    { section: 'developer-resources' }, 
    { section: 'components' },
    { section: 'patterns' },
    { section: 'extensions' },
    { section: 'charts' },
    { section: 'topology' },
    { section: 'layouts' }
  ],
  topNavItems: [{ text: 'Icons', path: '/icons' }],
  port: 8002
};
