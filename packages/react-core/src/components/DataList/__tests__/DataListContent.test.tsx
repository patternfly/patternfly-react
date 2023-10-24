import React from 'react';
import { render, screen } from '@testing-library/react';
import { DataListContent } from '../DataListContent';

import styles from '@patternfly/react-styles/css/components/DataList/data-list';

test('Renders to match snapshot', () => {
  const { asFragment } = render(<DataListContent aria-label="Primary Content Details"> test</DataListContent>);
  expect(asFragment()).toMatchSnapshot();
});

test(`Renders with default class ${styles.dataListExpandableContent}`, () => {
  render(
    <DataListContent data-testid="test-id" aria-label="Primary Content Details">
      test
    </DataListContent>
  );
  expect(screen.getByTestId('test-id')).toHaveClass(styles.dataListExpandableContent);
});

test(`Renders with custom class when className is passed`, () => {
  render(
    <DataListContent data-testid="test-id" aria-label="Primary Content Details" className="test-class">
      test
    </DataListContent>
  );
  expect(screen.getByTestId('test-id')).toHaveClass('test-class');
});

test(`Renders with class ${styles.modifiers.noPadding} when hasNoPadding is passed`, () => {
  render(
    <DataListContent aria-label="Primary Content Details" hidden hasNoPadding>
      test
    </DataListContent>
  );
  expect(screen.getByText('test')).toHaveClass(styles.modifiers.noPadding);
});

test(`Renders with hidden property when isHidden is passed`, () => {
  render(
    <DataListContent data-testid="test-id" aria-label="Primary Content Details" isHidden>
      test
    </DataListContent>
  );
  expect(screen.getByTestId('test-id')).toHaveAttribute('hidden');
});
