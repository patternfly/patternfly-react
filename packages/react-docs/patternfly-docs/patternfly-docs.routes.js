// This module is shared between NodeJS and babelled ES5
const isClient = Boolean(process.env.NODE_ENV);

module.exports = {
  '/': {
    SyncComponent: isClient && require('./pages/index').default
  },
  '/icons': {
    Component: () => import(/* webpackChunkName: "icons/index" */ './pages/icons'),
    title: 'Icons'
  },
  '/404': {
    SyncComponent: isClient && require('@patternfly/documentation-framework/pages/404').default,
    title: '404 Error'
  }
};
