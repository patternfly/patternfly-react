import React from 'react';
import { render, screen } from '@testing-library/react';
import { DescriptionListTermHelpTextButton } from '../DescriptionListTermHelpTextButton';

import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';

test('Renders to match snapshot', () => {
  const { asFragment } = render(<DescriptionListTermHelpTextButton>test</DescriptionListTermHelpTextButton>);
  expect(asFragment()).toMatchSnapshot();
});

test(`Renders default class ${styles.descriptionListText}`, () => {
  render(<DescriptionListTermHelpTextButton>test</DescriptionListTermHelpTextButton>);
  expect(screen.getByText('test')).toHaveClass(`${styles.descriptionListText} ${styles.modifiers.helpText}`, {
    exact: true
  });
});

test('Renders custom className', () => {
  render(<DescriptionListTermHelpTextButton className="custom">test</DescriptionListTermHelpTextButton>);
  expect(screen.getByText('test')).toHaveClass('custom');
});

test('Renders spread props', () => {
  render(<DescriptionListTermHelpTextButton id="id">test</DescriptionListTermHelpTextButton>);
  expect(screen.getByText('test')).toHaveAttribute('id', 'id');
});
