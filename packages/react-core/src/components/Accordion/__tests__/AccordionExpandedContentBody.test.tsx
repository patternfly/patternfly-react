import React from 'react';

import { render, screen } from '@testing-library/react';

import { AccordionExpandableContentBody } from '../AccordionExpandableContentBody';

test('Renders without children', () => {
  const { asFragment } = render(<AccordionExpandableContentBody />);

  /* a snapshot test is used here because this component isn't selectable via better screen queries without children 
    as it doesn't spread other props to its container
    */
  expect(asFragment()).toMatchSnapshot();
});

test('Renders children', () => {
  render(<AccordionExpandableContentBody>Test</AccordionExpandableContentBody>);

  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders with class name pf-v5-c-accordion__expandable-content-body', () => {
  render(<AccordionExpandableContentBody>Test</AccordionExpandableContentBody>);

  expect(screen.getByText('Test')).toHaveClass('pf-v5-c-accordion__expandable-content-body');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<AccordionExpandableContentBody>Test</AccordionExpandableContentBody>);
  expect(asFragment()).toMatchSnapshot();
});
