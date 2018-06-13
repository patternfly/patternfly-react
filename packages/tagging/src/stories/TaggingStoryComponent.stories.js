import React from 'react';
import { storiesOf } from '@storybook/react';
import TaggingStoryComponent from '../components/InnerComponents/TaggingStoryComponent';
import { name } from '../../package.json';
import './index.scss';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';

const stories = storiesOf(`${name}/Tagging`, module);
stories.addDecorator(
  defaultTemplate({
    title: 'Tagging',
    description: 'This is an example of the Tagging component.'
  })
);

stories.addWithInfo('TaggingStoryComponent', () => <TaggingStoryComponent />);
