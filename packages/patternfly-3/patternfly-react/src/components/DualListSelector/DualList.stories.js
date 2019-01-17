/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { name } from '../../../package.json';
import { items, dropdownItems } from './DualListMocks';
import { Button } from '../../index';
import {
  DualList,
  DualListArrows,
  DualListBody,
  DualListControlled,
  DualListCounter,
  DualListFilter,
  DualListFooter,
  DualListHeading,
  DualListHiddenSelect,
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

const storyInfo = {
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
    DualListSort,
    DualListHiddenSelect
  ],
  propTablesExclude: [DualListControlled, DualListSelector, Button]
};

stories.addDecorator(
  defaultTemplate({
    title: 'Dual List Selector',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_FORMS}dual-list-selector/`
  })
);

stories.add(
  'Dual List Selector',
  withInfo(storyInfo)(() => (
    <DualListControlled
      left={{
        items: items.left,
        inputProps: { name: 'left' },
        kebabMenu: dropdownItems
      }}
      right={{
        items: items.right,
        inputProps: { name: 'right' },
        kebabMenu: dropdownItems
      }}
    />
  ))
);

stories.add(
  'Dual List Selector as a form input',
  withInfo(storyInfo)(() => (
    <div>
      <h3>Please see this short video to understand how to send the form values by network:</h3>
      <iframe
        width="400"
        height="200"
        style={{ marginBottom: '20px' }}
        src="https://www.youtube.com/embed/G8rlyyifhtQ"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <form action="">
        <DualListControlled
          allowHiddenInputs
          left={{
            items: items.left,
            inputProps: { name: 'left-selector' },
            kebabMenu: dropdownItems
          }}
          right={{
            items: items.right,
            inputProps: { name: 'right-selector' },
            kebabMenu: dropdownItems
          }}
        />
        <Button type="submit">Submit form</Button>
      </form>
    </div>
  ))
);
