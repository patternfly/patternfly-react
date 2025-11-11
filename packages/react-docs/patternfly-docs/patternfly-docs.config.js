// This module is shared between NodeJS and babelled ES5
module.exports = {
  pathPrefix: '',
  hasGdprBanner: false,
  hasFooter: false,
  hasVersionSwitcher: false,
  hasThemeSwitcher: true,
  hasHighContrastSwitcher: true,
  hasRTLSwitcher: true,
  hasDesignGuidelines: false,
  sideNavItems: [
    { section: 'get-started' },
    { section: 'developer-guides' },
    { section: 'foundations-and-styles' },
    { section: 'components' },
    { section: 'patterns' },
    { section: 'AI' }
  ],
  topNavItems: [{ text: 'Icons', path: '/icons' }],
  port: 8002
};
