import React from 'react';
import { render, screen } from '@testing-library/react';
import { DescriptionListGroup } from '../DescriptionListGroup';

import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';

test('Renders to match snapshot', () => {
  const { asFragment } = render(<DescriptionListGroup>test</DescriptionListGroup>);
  expect(asFragment()).toMatchSnapshot();
});

test(`Renders default class ${styles.descriptionListGroup}`, () => {
  render(<DescriptionListGroup>test</DescriptionListGroup>);
  expect(screen.getByText('test')).toHaveClass(styles.descriptionListGroup, { exact: true });
});

test('Renders custom className', () => {
  render(<DescriptionListGroup className="custom">test</DescriptionListGroup>);
  expect(screen.getByText('test')).toHaveClass('custom');
});

test('Renders spread props', () => {
  render(<DescriptionListGroup id="id">test</DescriptionListGroup>);
  expect(screen.getByText('test')).toHaveAttribute('id', 'id');
});
