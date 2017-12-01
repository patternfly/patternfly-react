import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import './less/base.less';

setAddon(infoAddon);

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
