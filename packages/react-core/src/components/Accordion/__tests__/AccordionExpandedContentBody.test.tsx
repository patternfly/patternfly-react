import React from 'react';

import { render, screen } from '@testing-library/react';

import { AccordionExpandedContentBody } from '../AccordionExpandedContentBody';

test('Renders without children', () => {
    const { asFragment } = render(<AccordionExpandedContentBody />);

    /* a snapshot test is used here because this component isn't selectable via better screen queries without children 
    as it doesn't spread other props to its container
    */
    expect(asFragment()).toMatchSnapshot();
});

test('Renders children', () => {
  render(<AccordionExpandedContentBody>Test</AccordionExpandedContentBody>);

  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders with class name pf-c-accordion__expanded-content-body', () => {
  render(<AccordionExpandedContentBody>Test</AccordionExpandedContentBody>);

  expect(screen.getByText('Test')).toHaveClass('pf-c-accordion__expanded-content-body');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(
    <AccordionExpandedContentBody>Test</AccordionExpandedContentBody>
  );
  expect(asFragment()).toMatchSnapshot();
});
