import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';
import './sass/base.scss';

setAddon(infoAddon);

const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(req);
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
