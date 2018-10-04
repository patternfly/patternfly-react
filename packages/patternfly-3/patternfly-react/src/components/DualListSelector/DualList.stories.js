import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { name } from '../../../package.json';
import { items, dropdownItems } from './DualListMocks';
import {
  DualList,
  DualListArrows,
  DualListBody,
  DualListControlled,
  DualListCounter,
  DualListFilter,
  DualListFooter,
  DualListHeading,
  DualListItem,
  DualListItems,
  DualListMainCheckbox,
  DualListSelector,
  DualListSort
} from './index';

const stories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.FORMS_AND_CONTROLS}/Dual List Selector`,
  module
);

stories.addDecorator(
  defaultTemplate({
    title: 'Dual List Selector',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_FORMS}dual-list-selector/`
  })
);

stories.add(
  'Dual List Selector',
  withInfo({
    source: false,
    propTables: [
      DualList,
      DualListArrows,
      DualListBody,
      DualListCounter,
      DualListFilter,
      DualListFooter,
      DualListHeading,
      DualListItem,
      DualListItems,
      DualListMainCheckbox,
      DualListSort
    ],
    propTablesExclude: [DualListControlled, DualListSelector]
  })(() => (
    <DualListControlled
      left={{
        items: items.left,
        kebabMenu: dropdownItems
      }}
      right={{
        items: items.right,
        kebabMenu: dropdownItems
      }}
    />
  ))
);
