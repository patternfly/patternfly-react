import React from 'react';
import { render, screen } from '@testing-library/react';
import { DescriptionListTerm } from '../DescriptionListTerm';

import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';

test('Renders to match snapshot', () => {
  const { asFragment } = render(<DescriptionListTerm>test</DescriptionListTerm>);
  expect(asFragment()).toMatchSnapshot();
});

test(`Renders default class ${styles.descriptionListTerm}`, () => {
  render(<DescriptionListTerm>test</DescriptionListTerm>);
  expect(screen.getByText('test').parentElement).toHaveClass(styles.descriptionListTerm, { exact: true });
});

test(`Renders default class ${styles.descriptionListText}`, () => {
  render(<DescriptionListTerm>test</DescriptionListTerm>);
  expect(screen.getByText('test')).toHaveClass(styles.descriptionListText, { exact: true });
});

test('Renders custom className', () => {
  render(<DescriptionListTerm className="custom">test</DescriptionListTerm>);
  expect(screen.getByText('test').parentElement).toHaveClass('custom');
});

test('Renders icon', () => {
  render(<DescriptionListTerm icon={<div>icon</div>}>test</DescriptionListTerm>);
  expect(screen.getByText('icon').parentElement).toHaveClass(styles.descriptionListTermIcon);
});

test('Renders spread props', () => {
  render(<DescriptionListTerm id="id">test</DescriptionListTerm>);
  expect(screen.getByText('test').parentElement).toHaveAttribute('id', 'id');
});
