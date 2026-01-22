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
    { section: 'components' },
    { section: 'patterns' },
    { section: 'foundations-and-styles' },
    { section: 'AI' },
    { section: 'developer-guides' }
  ],
  topNavItems: [{ text: 'Icons', path: '/icons' }],
  port: 8002
};
