import React from 'react';
import { render, screen } from '@testing-library/react';
import { DataListCell } from '../DataListCell';

import styles from '@patternfly/react-styles/css/components/DataList/data-list';

test('Cell renders to match snapshot', () => {
  const { asFragment } = render(<DataListCell>Secondary</DataListCell>);
  expect(asFragment()).toMatchSnapshot();
});

test(`Renders default class ${styles.dataListCell}`, () => {
  render(
    <DataListCell data-testid="test" key={0}>
      Primary Id
    </DataListCell>
  );
  expect(screen.getByTestId('test')).toHaveClass(styles.dataListCell, { exact: true });
});

test(`Renders custom class when className is passed`, () => {
  render(
    <DataListCell data-testid="test" key={0} className="test-class">
      Primary Id
    </DataListCell>
  );
  expect(screen.getByTestId('test')).toHaveClass('test-class');
});

test(`Renders with spread props`, () => {
  render(
    <DataListCell key={0} id="test">
      Primary Id
    </DataListCell>
  );
  expect(screen.getByText('Primary Id')).toHaveAttribute('id', 'test');
});

test('Renders width modifier when width is passed', () => {
  [
    { width: 1, class: '' },
    { width: 2, class: styles.modifiers.flex_2 },
    { width: 3, class: styles.modifiers.flex_3 },
    { width: 4, class: styles.modifiers.flex_4 },
    { width: 5, class: styles.modifiers.flex_5 }
  ].forEach((testCase, index) => {
    const testId = `cell-test-id-${index}`;

    render(
      <DataListCell data-testid={testId} width={testCase.width as any} key={index}>
        Primary Id
      </DataListCell>
    );

    const dataListCell = screen.getByTestId(testId);

    testCase.class === ''
      ? expect(dataListCell).not.toHaveClass(
          styles.modifiers.flex_2,
          styles.modifiers.flex_3,
          styles.modifiers.flex_4,
          styles.modifiers.flex_5
        )
      : expect(dataListCell).toHaveClass(`pf-v6-c-data-list__cell ${testCase.class}`, { exact: true });
  });
});

test('Has text wrap modifiers when wrapModifier is passed', () => {
  [
    { wrapModifier: null as any, class: '' },
    { wrapModifier: 'breakWord', class: styles.modifiers.breakWord },
    { wrapModifier: 'nowrap', class: styles.modifiers.nowrap },
    { wrapModifier: 'truncate', class: styles.modifiers.truncate }
  ].forEach((testCase, index) => {
    const testId = `cell-test-id-${index}`;

    render(
      <DataListCell data-testid={testId} wrapModifier={testCase.wrapModifier} key={index}>
        Primary Id
      </DataListCell>
    );

    const dataListCell = screen.getByTestId(testId);

    testCase.class === ''
      ? expect(dataListCell).not.toHaveClass(
          styles.modifiers.breakWord,
          styles.modifiers.nowrap,
          styles.modifiers.truncate
        )
      : expect(dataListCell).toHaveClass(`${testCase.class}`);
  });
});

test(`Renders with class ${styles.modifiers.alignRight} when alignRight is passed`, () => {
  render(
    <DataListCell data-testid="test" key={0} alignRight>
      Primary Id
    </DataListCell>
  );
  expect(screen.getByTestId('test')).toHaveClass(styles.modifiers.alignRight);
});

test(`Renders with class ${styles.modifiers.icon} when isIcon is passed`, () => {
  render(
    <DataListCell data-testid="test" key={0} isIcon>
      Primary Id
    </DataListCell>
  );
  expect(screen.getByTestId('test')).toHaveClass(styles.modifiers.icon);
});

test(`Renders with class ${styles.modifiers.noFill} when isFilled = false`, () => {
  render(
    <DataListCell data-testid="test" key={0} isFilled={false}>
      Primary Id
    </DataListCell>
  );
  expect(screen.getByTestId('test')).toHaveClass(styles.modifiers.noFill);
});
