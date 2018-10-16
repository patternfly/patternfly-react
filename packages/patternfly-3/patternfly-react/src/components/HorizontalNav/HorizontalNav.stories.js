import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { HorizontalNav } from './index';
import { name } from '../../../package.json';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import pfFitBrand from 'storybook/img/brand.svg';
import { mastheadMock } from './__mocks__/masthead';
import { singleLevel } from './__mocks__/singleLevel';
import { twoLevel } from './__mocks__/twoLevel';
import { dropdownLevel } from './__mocks__/dropdownLevel';

const stories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.NAVIGATION}/Horizontal Navigation`,
  module
);

const description = (
  <p>
    This component is based on Patternfly horizontal navigation component. See{' '}
    <a href={`${DOCUMENTATION_URL.PATTERNFLY_ORG_NAVIGATION}horizontal-navigation/`}>Patternfly Docs</a>
    for complete Horizontal Navigation component documentation.
  </p>
);

stories.addDecorator(
  defaultTemplate({
    title: 'Horizontal Navigation',
    description,
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_NAVIGATION}horizontal-navigation/`
  })
);

stories.addWithInfo('Single-Level Menu Bar', '', () => (
  <HorizontalNav>
    {mastheadMock({
      titleImg: pfFitBrand,
      title: 'Patternfly React',
      navToggle: false,
      thin: true
    })}
    {singleLevel}
  </HorizontalNav>
));

stories.addWithInfo('Two-Level Menu Bar', '', () => (
  <HorizontalNav>
    {mastheadMock({
      titleImg: pfFitBrand,
      title: 'Patternfly React',
      navToggle: false,
      thin: true
    })}
    {twoLevel}
  </HorizontalNav>
));

stories.addWithInfo('Menu Bar with Dropdowns', '', () => (
  <HorizontalNav>
    {mastheadMock({
      titleImg: pfFitBrand,
      title: 'Patternfly React',
      navToggle: false,
      thin: true
    })}
    {dropdownLevel}
  </HorizontalNav>
));
