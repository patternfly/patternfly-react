import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import './sass/base.scss';

setAddon(infoAddon);

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
