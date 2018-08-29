import React from 'react';
import { Table } from '../index';

const headerFormat = value => <Table.Heading>{value}</Table.Heading>;
const cellFormat = value => <Table.Cell>{value}</Table.Cell>;

export const mockBootstrapColumns = [
  {
    header: {
      label: '#',
      formatters: [headerFormat]
    },
    cell: {
      formatters: [cellFormat]
    },
    property: 'id'
  },
  {
    header: {
      label: 'First Name',
      formatters: [headerFormat]
    },
    cell: {
      formatters: [cellFormat]
    },
    property: 'first_name'
  },
  {
    header: {
      label: 'Last Name',
      formatters: [headerFormat]
    },
    cell: {
      formatters: [cellFormat]
    },
    property: 'last_name'
  },
  {
    header: {
      label: 'Username',
      formatters: [headerFormat]
    },
    cell: {
      formatters: [cellFormat]
    },
    property: 'username'
  }
];

const headerFormatRightAlign = value => <Table.Heading align="right">{value}</Table.Heading>;
const cellFormatRightAlign = value => <Table.Cell align="right">{value}</Table.Cell>;

export const mockPatternflyColumns = [
  {
    header: {
      label: 'First Name',
      formatters: [headerFormat]
    },
    cell: {
      formatters: [cellFormat]
    },
    property: 'first_name'
  },
  {
    header: {
      label: 'Last Name',
      formatters: [headerFormat]
    },
    cell: {
      formatters: [cellFormat]
    },
    property: 'last_name'
  },
  {
    header: {
      label: 'Username',
      formatters: [headerFormat]
    },
    cell: {
      formatters: [cellFormat]
    },
    property: 'username'
  },
  {
    header: {
      label: 'Commits',
      formatters: [headerFormatRightAlign]
    },
    cell: {
      formatters: [cellFormatRightAlign]
    },
    property: 'commits'
  },
  {
    header: {
      label: 'Additions',
      formatters: [headerFormatRightAlign]
    },
    cell: {
      formatters: [cellFormatRightAlign]
    },
    property: 'additions'
  },
  {
    header: {
      label: 'Location',
      formatters: [value => <Table.Heading align="center">{value}</Table.Heading>]
    },
    cell: {
      formatters: [value => <Table.Cell align="center">{value}</Table.Cell>]
    },
    property: 'location'
  },
  {
    header: {
      label: 'Gender',
      formatters: [headerFormat]
    },
    cell: {
      formatters: [cellFormat]
    },
    property: 'gender'
  }
];
