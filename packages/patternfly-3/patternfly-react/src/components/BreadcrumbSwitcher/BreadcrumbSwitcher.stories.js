import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { BreadcrumbSwitcher } from './index';
import { name } from '../../../package.json';
import { switcherProps } from './BreadcrumbSwitcher.fixtures';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.NAVIGATION}/Breadcrumb`, module);

const description = (
  <p>
    This component is based on Foreman BreadcrumbSwitcher component. Breadcrumbs are used to indicate the current
    page&apos;s location. See{' '}
    <a href={`${DOCUMENTATION_URL.REACT_BOOTSTRAP_COMPONENT}breadcrumb/`}>React Bootstrap Docs</a> for complete
    Breadcrumb component documentation.
  </p>
);

stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'BreadcrumbSwitcher',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_NAVIGATION}breadcrumbs/`,
    description
  })
);

const toggleClicked = () => {
  action('toggle clicked!')();
};
const closeClicked = () => {
  action('close clicked!')();
};
const searchChange = query => {
  action(`searched: ${query.target.value}`)();
};
const searchClear = () => {
  action('search cleared!')();
};
const nextPage = () => {
  action('next page clicked!')();
};
const prevPage = () => {
  action('previous page clicked!')();
};
const resourceClicked = (e, url) => {
  e.preventDefault();
  action('resource clicked!')();
};

stories.add(
  'BreadcrumbSwitcher',
  withInfo()(() => (
    <BreadcrumbSwitcher
      {...switcherProps}
      open
      isLoading={boolean('is Loading', false)}
      isPaginated={boolean('is Paginated', true)}
      searchValue={text('Highlighter Test', 'Host 1')}
      onTogglerClick={() => toggleClicked()}
      onHide={() => closeClicked()}
      onOpen={() => toggleClicked()}
      onSearchChange={searchChange}
      onNextPageClick={() => nextPage()}
      onPrevPageClick={() => prevPage()}
      onSearchClear={() => searchClear()}
      onResourceClick={resourceClicked}
    />
  ))
);
