import React from 'react';

import { render, screen } from '@testing-library/react';

import { AccordionToggle } from '../AccordionToggle';
import { AccordionContext, AccordionItemContext } from '../AccordionContext';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';

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

test(`Renders the accordion toggle with class ${styles.accordionToggle}`, () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionToggle id="accordion-toggle" aria-label="Accordion test">
        Test
      </AccordionToggle>
    </AccordionContext.Provider>
  );

  expect(screen.getByRole('button')).toHaveClass(styles.accordionToggle);
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

test(`Renders with children inside class ${styles.accordionToggleText}`, () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionToggle id="accordion-toggle" aria-label="Accordion test">
        Test
      </AccordionToggle>
    </AccordionContext.Provider>
  );

  expect(screen.getByText('Test')).toHaveClass(styles.accordionToggleText);
});

test(`Renders with the toggle icon inside class ${styles.accordionToggleIcon}`, () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionToggle id="accordion-toggle" aria-label="Accordion test">
        Test
      </AccordionToggle>
    </AccordionContext.Provider>
  );

  expect(screen.getByText('Icon mock')).toHaveClass(styles.accordionToggleIcon);
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

test('Renders the toggle with aria-expanded=false when isExpanded from context is false', () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionItemContext.Provider value={{ isExpanded: false }}>
        <AccordionToggle id="accordion-toggle">Test</AccordionToggle>
      </AccordionItemContext.Provider>
    </AccordionContext.Provider>
  );

  const toggle = screen.getByRole('button');

  expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('Renders the toggle with aria-expanded=true when isExpanded from context is true', () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionItemContext.Provider value={{ isExpanded: true }}>
        <AccordionToggle id="accordion-toggle">Test</AccordionToggle>
      </AccordionItemContext.Provider>
    </AccordionContext.Provider>
  );

  const toggle = screen.getByRole('button');

  expect(toggle).toHaveAttribute('aria-expanded', 'true');
});

test('Renders toggle text before toggle icon by default', () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionToggle id="accordion-toggle" isExpanded>
        Test
      </AccordionToggle>
    </AccordionContext.Provider>
  );

  const toggle = screen.getByRole('button');

  expect(toggle.firstChild).toHaveClass(styles.accordionToggleText);
});

test('Renders toggle icon before toggle text when togglePosition from context = "start"', () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3', togglePosition: 'start' }}>
      <AccordionToggle id="accordion-toggle" isExpanded>
        Test
      </AccordionToggle>
    </AccordionContext.Provider>
  );

  const toggle = screen.getByRole('button');

  expect(toggle.firstChild).toHaveClass(styles.accordionToggleIcon);
});

test('Renders toggle text before toggle icon by default', () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionToggle id="accordion-toggle" isExpanded>
        Test
      </AccordionToggle>
    </AccordionContext.Provider>
  );

  const toggle = screen.getByRole('button');

  expect(toggle.firstChild).toHaveClass(styles.accordionToggleText);
});

test('Renders toggle icon before toggle text when togglePosition from context = "start"', () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3', togglePosition: 'start' }}>
      <AccordionToggle id="accordion-toggle" isExpanded>
        Test
      </AccordionToggle>
    </AccordionContext.Provider>
  );

  const toggle = screen.getByRole('button');

  expect(toggle.firstChild).toHaveClass(styles.accordionToggleIcon);
});

test('Renders toggle text before toggle icon by default', () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionToggle id="accordion-toggle" isExpanded>
        Test
      </AccordionToggle>
    </AccordionContext.Provider>
  );

  const toggle = screen.getByRole('button');

  expect(toggle.firstChild).toHaveClass(styles.accordionToggleText);
});

test('Renders toggle icon before toggle text when togglePosition from context = "start"', () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3', togglePosition: 'start' }}>
      <AccordionToggle id="accordion-toggle" isExpanded>
        Test
      </AccordionToggle>
    </AccordionContext.Provider>
  );

  const toggle = screen.getByRole('button');

  expect(toggle.firstChild).toHaveClass(styles.accordionToggleIcon);
});

test('Renders toggle text before toggle icon by default', () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionToggle id="accordion-toggle" isExpanded>
        Test
      </AccordionToggle>
    </AccordionContext.Provider>
  );

  const toggle = screen.getByRole('button');

  expect(toggle.firstChild).toHaveClass(styles.accordionToggleText);
});

test('Renders toggle icon before toggle text when togglePosition from context = "start"', () => {
  render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3', togglePosition: 'start' }}>
      <AccordionToggle id="accordion-toggle" isExpanded>
        Test
      </AccordionToggle>
    </AccordionContext.Provider>
  );

  const toggle = screen.getByRole('button');

  expect(toggle.firstChild).toHaveClass(styles.accordionToggleIcon);
});

test('Matches the snapshot', () => {
  const { asFragment } = render(
    <AccordionContext.Provider value={{ ToggleContainer: 'h3' }}>
      <AccordionItemContext.Provider value={{ isExpanded: false }}>
        <AccordionToggle id="accordion-toggle">Test</AccordionToggle>
      </AccordionItemContext.Provider>
    </AccordionContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
