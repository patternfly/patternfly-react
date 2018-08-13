const PATTERNFLY_ORG = 'http://www.patternfly.org/';

export const BASE_URL = {
  PATTERNFLY_ORG,
  PATTERNFLY_LIBRARY: `${PATTERNFLY_ORG}pattern-library/`,
  REACT_BOOTSTRAP: 'https://react-bootstrap.github.io/'
};

export const DOCUMENTATION_URL = {
  PATTERNFLY_ORG_APPLICATION_FRAMEWORK: `${BASE_URL.PATTERNFLY_LIBRARY}application-framework/`,
  PATTERNFLY_ORG_COMMUNICATION: `${BASE_URL.PATTERNFLY_LIBRARY}communication/`,
  PATTERNFLY_ORG_WIDGETS: `${BASE_URL.PATTERNFLY_LIBRARY}widgets/`,
  PATTERNFLY_ORG_STYLES: `${PATTERNFLY_ORG}styles/`,
  PATTERNFLY_ORG_NAVIGATION: `${BASE_URL.PATTERNFLY_LIBRARY}navigation/`,
  PATTERNFLY_ORG_DATA_VISUALIZATION: `${BASE_URL.PATTERNFLY_LIBRARY}data-visualization/`,
  PATTERNFLY_ORG_FORMS: `${BASE_URL.PATTERNFLY_LIBRARY}forms-and-controls/`,
  PATTERNFLY_ORG_CONTENT_VIEWS: `${BASE_URL.PATTERNFLY_LIBRARY}content-views/`,
  PATTERNFLY_ORG_CARDS: `${BASE_URL.PATTERNFLY_LIBRARY}cards/`,
  PATTERNFLY_ORG_INLINE_EDIT: `${BASE_URL.PATTERNFLY_LIBRARY}forms-and-controls/inline-edit/`,
  REACT_BOOTSTRAP_COMPONENT: `${BASE_URL.REACT_BOOTSTRAP}components/`,
  REACT_BOOTSTRAP_LAYOUT: `${BASE_URL.REACT_BOOTSTRAP}layout/`
};

export const STORYBOOK_CATEGORY = {
  APPLICATION_FRAMEWORK: 'Application Framework',
  CARDS: 'Cards',
  COMMUNICATION: 'Communication',
  CONTENT_VIEWS: 'Content Views',
  DASHBOARD: 'Dashboard',
  DATA_VISUALIZATION: 'Data Visualization',
  FORMS_AND_CONTROLS: 'Forms and Controls',
  LAYOUTS: 'Layouts',
  NAVIGATION: 'Navigation',
  WIDGETS: 'Widgets'
};

export const DESCRIPTION = {
  C3JS_URL: 'http://c3js.org/reference.html',
  C3JS_TEXT: 'This component is based on c3js graph, to see full documentation follow'
};

export const storybookPackageName = pkg => {
  if (pkg.startsWith('@')) {
    const subs = pkg.split('/');
    return `${subs[1]} (${subs[0]})`;
  }
  return pkg;
};
