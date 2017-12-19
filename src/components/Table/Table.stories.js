import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { Table } from './index';

import { mockTableItems } from './__mocks__/mockTableItems';

const stories = storiesOf('Table', module);

stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Table',
    documentationLink:
      'http://www.patternfly.org/pattern-library/widgets/#tables',
  }),
);

const columns = [
  {
    header: 'Name',
    accessor: 'name',
    isKey: true,
    width: '20%',
    formatter: (cell, row) => {
      return <span>{row.name}</span>;
    },
    hidden: false,
  },
  {
    header: 'Height',
    accessor: 'height',
    dataAlign: 'right',
    width: '10%',
    hidden: false,
  },
  {
    header: 'Hair Color',
    accessor: 'hair_color',
    width: '15%',
    hidden: false,
  },
  {
    header: 'Gender',
    accessor: 'gender',
    width: '15%',
    hidden: false,
  },
  {
    header: 'Eye Color',
    accessor: 'eye_color',
    width: '15%',
    hidden: false,
  },
  {
    header: 'Birth Year',
    accessor: 'birth_year',
    width: '15%',
    hidden: false,
  },
  {
    header: 'Mass',
    accessor: 'mass',
    dataAlign: 'right',
    width: '10%',
    hidden: false,
  },
];

stories.addWithInfo('Basic Table', () => {
  const striped = boolean('Striped', true);
  const bordered = boolean('Bordered', true);
  const hover = boolean('Hover', true);
  return (
    <Table
      data={mockTableItems.slice(0, 5)}
      columns={columns}
      striped={striped}
      bordered={bordered}
      hover={hover}
    />
  );
});

stories.addWithInfo('Data Table', () => {
  const striped = boolean('Striped', true);
  const bordered = boolean('Bordered', true);
  const hover = boolean('Hover', true);
  const dataSort = boolean('Data Sorting', true);
  return (
    <Table
      data={mockTableItems.slice(0, 5)}
      columns={columns}
      striped={striped}
      bordered={bordered}
      hover={hover}
      dataSort={dataSort}
    />
  );
});
