import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';
import './sass/base.scss';

setAddon(infoAddon);

const packageContext = require.context('../packages', true, /\.stories\.js$/);

function loadStories() {
  packageContext.keys().forEach(packageContext);
}

setOptions({
  /**
   * name to display in the top left corner
   * default: Storybook
   * @type {String}
   */
  name: 'Patternfly-React',
  /**
   * sorts stories
   * default: false
   * @type {Boolean}
   */
  sortStoriesByKind: true
});

configure(loadStories, module);
