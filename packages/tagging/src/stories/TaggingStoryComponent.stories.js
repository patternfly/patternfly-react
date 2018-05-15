import React from 'react';
import { storiesOf } from '@storybook/react';
import TaggingStoryComponent from '../components/TaggingStoryComponent';
import { name } from '../../package.json';
import './index.scss';

storiesOf(`${name}/Tagging`, module).add('Tagging example', () => (
  <TaggingStoryComponent />
));
