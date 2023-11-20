import React from 'react';
import { render, screen } from '@testing-library/react';
import { DescriptionListDescription } from '../DescriptionListDescription';

import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';

test('Renders to match snapshot', () => {
  const { asFragment } = render(<DescriptionListDescription>test</DescriptionListDescription>);
  expect(asFragment()).toMatchSnapshot();
});

test(`Renders default class ${styles.descriptionListDescription}`, () => {
  render(<DescriptionListDescription>test</DescriptionListDescription>);
  expect(screen.getByText('test').parentElement).toHaveClass(styles.descriptionListDescription, { exact: true });
});

test('Renders custom className', () => {
  render(<DescriptionListDescription className="custom">test</DescriptionListDescription>);
  expect(screen.getByText('test').parentElement).toHaveClass('custom');
});

test('Renders spread props', () => {
  render(<DescriptionListDescription id="id">test</DescriptionListDescription>);
  expect(screen.getByText('test').parentElement).toHaveAttribute('id', 'id');
});
