import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { Col, Row } from 'react-bootstrap';
import { withInfo } from '@storybook/addon-info/dist/index';
import {
  MockFilterDisplay,
  mockFilterDisplaySource,
} from './__mocks__/mockFilterDisplay';
import { mockFilterFieldsSource } from './__mocks__/mockFilterFields';

const stories = storiesOf('Filter', module);

const filterParameters = `
  id - (String) Necessary for accessibility if there are multiple filters on a page
  filterFields - (Required) Array of filter fields for this filter (see definition below)
  filterAddedCB - function(field, value), called when a filter is added
`;

const filterFieldsType = `
  id - Optional unique Id for the filter field, useful for comparison
  title - The label to display for the filter field
  placeholder- Text to display when no filter value has been entered
  filterType - The filter input field type (any html input type, or 'select' for a single select box or 'complex-select' for a category select box)
  filterValues - List of valid select values used when filterType is 'select' or 'complex-select' (in where these values serve as case insensitve keys for .filterCategories objects)
  filterCategories - For 'complex-select' only, array of objects whoes keys (case insensitive) match the .filterValues, these objects include each of the filter fields above (sans .placeholder)
  filterCategoriesPlaceholder - Text to display in \`complex-select\` category value select when no filter value has been entered, Optional
  filterAddedCB - Callback function when a filter is added (ctrl.currentField, ctrl.currentValue);
`;

stories.addDecorator(
  defaultTemplate({
    title: 'Filter',
    documentationLink:
      'http://www.patternfly.org/pattern-library/forms-and-controls/filter/',
  }),
);

stories.add(
  'Filter',
  withInfo({
    source: false,
    propTablesExclude: [Row, Col, MockFilterDisplay],
    text: (
      <div>
        <h1>Story Source</h1>
        <h2>Filter Display</h2>
        <pre>{mockFilterDisplaySource}</pre>
        <h2>Filter Parameters</h2>
        <pre>{filterParameters}</pre>
        <h2>Filter Fields Definition</h2>
        <pre>{filterFieldsType}</pre>
        <h2>Example Filter Fields</h2>
        <pre>{mockFilterFieldsSource}</pre>
      </div>
    ),
  })(() => (
    <Row>
      <Col sm={12}>
        <MockFilterDisplay />
      </Col>
    </Row>
  )),
);
