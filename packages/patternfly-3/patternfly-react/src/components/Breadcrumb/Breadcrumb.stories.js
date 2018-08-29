import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { Breadcrumb } from './index';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.NAVIGATION}/Breadcrumb`, module);

const description = (
  <p>
    This component is based on React Bootstrap Breadcrumb component. Breadcrumbs are used to indicate the current
    page&apos;s location. See{' '}
    <a href={`${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}breadcrumb/`}>React Bootstrap Docs</a> for complete
    Breadcrumb component documentation.
  </p>
);

stories.addDecorator(
  defaultTemplate({
    title: 'Breadcrumb',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_NAVIGATION}breadcrumbs/`,
    description
  })
);

stories.add(
  'Breadcrumb',
  withInfo()(() => (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">Library</Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  ))
);

stories.add(
  'Breadcrumb combined with page title',
  withInfo()(() => (
    <Breadcrumb title>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">Library</Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  ))
);
