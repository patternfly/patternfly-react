import React from 'react';

import { render, screen } from '@testing-library/react';

import { AccordionContent } from '../AccordionContent';
import { AccordionContext, AccordionItemContext } from '../AccordionContext';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';

jest.mock('../AccordionExpandableContentBody', () => ({
  AccordionExpandableContentBody: ({ children }) => <div aria-label="Expanded content body mock">{children}</div>
}));

test('Renders without children', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionItemContext.Provider value={{ isExpanded: true }}>
        <AccordionContent data-testid="accordion-content" />
      </AccordionItemContext.Provider>
    </AccordionContext.Provider>
  );

  expect(screen.getByTestId('accordion-content')).toBeVisible();
});

test('Renders children', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionItemContext.Provider value={{ isExpanded: true }}>
        <AccordionContent>Test</AccordionContent>
      </AccordionItemContext.Provider>
    </AccordionContext.Provider>
  );

  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders with children wrapped in AccordionExpandableContentBody by default', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionItemContext.Provider value={{ isExpanded: true }}>
        <AccordionContent>Test</AccordionContent>
      </AccordionItemContext.Provider>
    </AccordionContext.Provider>
  );

  expect(screen.getByText('Test')).toHaveAccessibleName('Expanded content body mock');
});

test('Does not render children wrapped in AccordionExpandableContentBody when isCustomContent=true', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionItemContext.Provider value={{ isExpanded: true }}>
        <AccordionContent isCustomContent>Test</AccordionContent>
      </AccordionItemContext.Provider>
    </AccordionContext.Provider>
  );

  expect(screen.getByText('Test')).not.toHaveAccessibleName('Expanded content body mock');
});

test('Renders with the passed aria label', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionItemContext.Provider value={{ isExpanded: true }}>
        <AccordionContent aria-label="Accordion content">Test</AccordionContent>
      </AccordionItemContext.Provider>
    </AccordionContext.Provider>
  );

  expect(screen.getByRole('heading')).toHaveAccessibleName('Accordion content');
});

test('Renders with the passed aria-labelledby', () => {
  render(
    <>
      <div id="accordion-label1">Accordion content</div>
      <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
        <AccordionItemContext.Provider value={{ isExpanded: true }}>
          <AccordionContent aria-labelledby="accordion-label1">Test</AccordionContent>
        </AccordionItemContext.Provider>
      </AccordionContext.Provider>
    </>
  );

  expect(screen.getByRole('heading')).toHaveAccessibleName('Accordion content');
});

test('Renders with inherited element props spread to the component', () => {
  render(
    <>
      <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
        <AccordionItemContext.Provider value={{ isExpanded: true }}>
          <AccordionContent aria-labelledby="labelling-id">Test</AccordionContent>
        </AccordionItemContext.Provider>
        <p id="labelling-id">Label</p>
      </AccordionContext.Provider>
    </>
  );

  expect(screen.getByRole('heading')).toHaveAccessibleName('Label');
});

test(`Renders with class name ${styles.accordionExpandableContent}`, () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionItemContext.Provider value={{ isExpanded: true }}>
        <AccordionContent>Test</AccordionContent>
      </AccordionItemContext.Provider>
    </AccordionContext.Provider>
  );

  expect(screen.getByRole('heading')).toHaveClass(styles.accordionExpandableContent);
});

test('Renders with custom class names provided via prop', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionItemContext.Provider value={{ isExpanded: true }}>
        <AccordionContent className="test-class">Test</AccordionContent>
      </AccordionItemContext.Provider>
    </AccordionContext.Provider>
  );

  expect(screen.getByRole('heading')).toHaveClass('test-class');
});

test('Renders with the id prop passed to the container', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionItemContext.Provider value={{ isExpanded: true }}>
        <AccordionContent id="test-id">Test</AccordionContent>
      </AccordionItemContext.Provider>
    </AccordionContext.Provider>
  );

  expect(screen.getByRole('heading')).toHaveProperty('id', 'test-id');
});

test('Renders the container as the element provided in ContentContainer from a context by default', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionItemContext.Provider value={{ isExpanded: true }}>
        <AccordionContent>Test</AccordionContent>
      </AccordionItemContext.Provider>
    </AccordionContext.Provider>
  );

  expect(screen.queryByRole('heading', { level: 1 })).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3 })).toBeVisible();
});

test('Renders as the element provided via the component prop when one is provided', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'button' }}>
      <AccordionItemContext.Provider value={{ isExpanded: true }}>
        <AccordionContent component="h1">Test</AccordionContent>
      </AccordionItemContext.Provider>
    </AccordionContext.Provider>
  );

  expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 1 })).toBeVisible();
});

test('Renders the container as hidden when isExpanded from context is false', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionItemContext.Provider value={{ isExpanded: false }}>
        <AccordionContent>Test</AccordionContent>
      </AccordionItemContext.Provider>
    </AccordionContext.Provider>
  );

  expect(screen.getByRole('heading', { hidden: true })).toHaveAttribute('hidden');
});

test('Renders the container as not hidden when isExpanded from context is true', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionItemContext.Provider value={{ isExpanded: true }}>
        <AccordionContent>Test</AccordionContent>
      </AccordionItemContext.Provider>
    </AccordionContext.Provider>
  );

  expect(screen.getByRole('heading', { level: 3 })).not.toHaveAttribute('hidden');
});

test('Renders without pf-m-fixed by default', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionItemContext.Provider value={{ isExpanded: true }}>
        <AccordionContent>Test</AccordionContent>
      </AccordionItemContext.Provider>
    </AccordionContext.Provider>
  );

  expect(screen.getByRole('heading')).not.toHaveClass('pf-m-fixed');
});

test('Renders with pf-m-fixed when isFixed is true', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionItemContext.Provider value={{ isExpanded: true }}>
        <AccordionContent isFixed>Test</AccordionContent>
      </AccordionItemContext.Provider>
    </AccordionContext.Provider>
  );

  expect(screen.getByRole('heading')).toHaveClass('pf-m-fixed');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionItemContext.Provider value={{ isExpanded: true }}>
        <AccordionContent aria-label="this is a simple accordion">Test</AccordionContent>
      </AccordionItemContext.Provider>
    </AccordionContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
