import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { MoreInformation } from './index';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/MoreInformation`, module);
stories.addDecorator(
  defaultTemplate({
    title: 'MoreInformation'
  })
);

const MoreInformationContent = () => (
  <center>Well done! The component takes 100% width by default and centers the link above.</center>
);

stories.add(
  'MoreInformation',
  withInfo(`This is the MoreInformation component.`)(() => (
    <MoreInformation>
      <MoreInformationContent />
    </MoreInformation>
  ))
);
