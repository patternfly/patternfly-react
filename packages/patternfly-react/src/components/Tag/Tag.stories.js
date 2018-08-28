import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import {
  storybookPackageName,
  STORYBOOK_CATEGORY
} from 'storybook/constants/siteConstants';
import { Tag } from '../../index';
import { name } from '../../../package.json';

const stories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/Tags`,
  module
);
const description = <p>No description.</p>;
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Tag',
    description
  })
);

stories.add(
  'PatternFly Tag',
  withInfo()(() => <Tag name="Patternfly-react version" value="2.10" />)
);
