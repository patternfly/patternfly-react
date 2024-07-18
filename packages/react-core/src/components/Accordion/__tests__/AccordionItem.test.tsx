import React from 'react';

import { render, screen } from '@testing-library/react';
import { AccordionItem } from '../AccordionItem';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';

test('Renders children', () => {
  render(<AccordionItem>Test</AccordionItem>);

  expect(screen.getByText('Test')).toBeVisible();
});

test(`Renders with class ${styles.accordionItem} by default`, () => {
  render(<AccordionItem>Test</AccordionItem>);

  expect(screen.getByText('Test')).toHaveClass(styles.accordionItem, { exact: true });
});

test(`Renders with class ${styles.modifiers.expanded} when isExpanded is true`, () => {
  render(<AccordionItem isExpanded>Test</AccordionItem>);

  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.expanded);
});

test(`Renders with additional classes when className is passed`, () => {
  render(<AccordionItem className="custom-class">Test</AccordionItem>);

  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test(`Spreads props if others are passed`, () => {
  render(<AccordionItem data-testId="testId">Test</AccordionItem>);

  expect(screen.getByTestId('testId')).toBeInTheDocument();
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<AccordionItem>Test</AccordionItem>);
  expect(asFragment()).toMatchSnapshot();
});
