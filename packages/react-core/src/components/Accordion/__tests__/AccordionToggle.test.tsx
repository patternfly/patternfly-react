import React from 'react';

import { render, screen } from '@testing-library/react';

import { AccordionToggle } from '../AccordionToggle';
import { AccordionContext } from '../AccordionContext';

jest.mock('@patternfly/react-icons/dist/esm/icons/angle-right-icon', () => () => 'Icon mock');

test('Renders without children', () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionToggle id="accordion-toggle" data-testid="accordion-toggle-test-id" />
    </AccordionContext.Provider>
  );

  expect(screen.getByTestId('accordion-toggle-test-id')).toBeVisible();
});

test('Renders children', () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionToggle id="accordion-toggle">Test</AccordionToggle>
    </AccordionContext.Provider>
  );

  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders with inherited element props spread to the component', () => {
  render(
    <>
      <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
        <AccordionToggle id="accordion-toggle" aria-labelledby="labelling-id">
          Test
        </AccordionToggle>
        <p id="labelling-id">Label</p>
      </AccordionContext.Provider>
    </>
  );

  expect(screen.getByRole('button')).toHaveAccessibleName('Label');
});

test('Renders the accordion toggle with class pf-c-accordion__toggle', () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionToggle id="accordion-toggle" aria-label="Accordion test">
        Test
      </AccordionToggle>
    </AccordionContext.Provider>
  );

  expect(screen.getByRole('button')).toHaveClass('pf-c-accordion__toggle');
});

test('Renders the accordion toggle with custom class names provided via prop', () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionToggle id="accordion-toggle" aria-label="Accordion test" className="test-class">
        Test
      </AccordionToggle>
    </AccordionContext.Provider>
  );

  expect(screen.getByRole('button')).toHaveClass('test-class');
});

test('Renders with children inside class pf-c-accordion__toggle-text', () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionToggle id="accordion-toggle" aria-label="Accordion test">
        Test
      </AccordionToggle>
    </AccordionContext.Provider>
  );

  expect(screen.getByText('Test')).toHaveClass('pf-c-accordion__toggle-text');
});

test('Renders with the toggle icon inside class pf-c-accordion__toggle-icon', () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionToggle id="accordion-toggle" aria-label="Accordion test">
        Test
      </AccordionToggle>
    </AccordionContext.Provider>
  );

  expect(screen.getByText('Icon mock')).toHaveClass('pf-c-accordion__toggle-icon');
});

test('Renders with the id prop passed to the toggle', () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionToggle id="accordion-toggle" aria-label="Accordion test">
        Test
      </AccordionToggle>
    </AccordionContext.Provider>
  );

  expect(screen.getByRole('button')).toHaveProperty('id', 'accordion-toggle');
});

test('Renders the container as the element provided in ToggleContainer from a context by default', () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionToggle id="accordion-toggle">Test</AccordionToggle>
    </AccordionContext.Provider>
  );

  expect(screen.queryByRole('heading', { level: 1 })).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3 })).toBeVisible();
});

test('Renders the container as the element provided via the component prop when one is provided', () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionToggle id="accordion-toggle" component="h1">
        Test
      </AccordionToggle>
    </AccordionContext.Provider>
  );

  expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 1 })).toBeVisible();
});

test('Renders the toggle without pf-m-expanded and aria-expanded=false by default', () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionToggle id="accordion-toggle">Test</AccordionToggle>
    </AccordionContext.Provider>
  );

  const toggle = screen.getByRole('button');

  expect(toggle).not.toHaveClass('pf-m-expanded');
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('Renders the toggle with pf-m-expanded and aria-expanded=true when isExpanded=true', () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionToggle id="accordion-toggle" isExpanded>
        Test
      </AccordionToggle>
    </AccordionContext.Provider>
  );

  const toggle = screen.getByRole('button');

  expect(toggle).toHaveClass('pf-m-expanded');
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionToggle id="accordion-toggle">Test</AccordionToggle>
    </AccordionContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
