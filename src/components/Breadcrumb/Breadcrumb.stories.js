import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { Breadcrumb } from './index';

const stories = storiesOf('Breadcrumb', module);

const description = (
  <p>
    This component is based on React Bootstrap Breadcrumb component. Breadcrumbs
    are used to indicate the current page&apos;s location. See{' '}
    <a href={`${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}breadcrumb/`}>
      React Bootstrap Docs
    </a>{' '}
    for complete Breadcrumb component documentation.
  </p>
);

stories.addDecorator(
  defaultTemplate({
    title: 'Breadcrumb',
    documentationLink: `${
      DOCUMENTATION_URL.PATTERNFLY_ORG_NAVIGATION
    }breadcrumbs/`,
    description
  })
);

stories.addWithInfo('Breadcrumb', '', () => (
  <Breadcrumb>
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
      Library
    </Breadcrumb.Item>
    <Breadcrumb.Item active>Data</Breadcrumb.Item>
  </Breadcrumb>
));
