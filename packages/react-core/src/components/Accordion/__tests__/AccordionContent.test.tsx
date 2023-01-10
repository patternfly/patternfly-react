import React from 'react';

import { render, screen } from '@testing-library/react';

import { AccordionContent } from '../AccordionContent';
import { AccordionContext } from '../AccordionContext';

jest.mock('../AccordionExpandedContentBody', () => ({
  AccordionExpandedContentBody: ({ children }) => <div aria-label="Expanded content body mock">{children}</div>
}));

test('Renders without children', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionContent data-testid="accordion-content" />
    </AccordionContext.Provider>
  );

  expect(screen.getByTestId('accordion-content')).toBeVisible();
});

test('Renders children', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionContent>Test</AccordionContent>
    </AccordionContext.Provider>
  );

  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders with children wrapped in AccordionExpandedContentBody by default', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionContent>Test</AccordionContent>
    </AccordionContext.Provider>
  );

  expect(screen.getByText('Test')).toHaveAccessibleName('Expanded content body mock');
});

test('Does not render children wrapped in AccordionExpandedContentBody when isCustomContent=true', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionContent isCustomContent>Test</AccordionContent>
    </AccordionContext.Provider>
  );

  expect(screen.getByText('Test')).not.toHaveAccessibleName('Expanded content body mock');
});

test('Renders with the passed aria label', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionContent aria-label="Accordion content">Test</AccordionContent>
    </AccordionContext.Provider>
  );

  expect(screen.getByRole('heading')).toHaveAccessibleName('Accordion content');
});

test('Renders with the passed aria-labelledby', () => {
  render(
    <>
      <div id="accordion-label1">Accordion content</div>
      <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
        <AccordionContent aria-labelledby="accordion-label1">Test</AccordionContent>
      </AccordionContext.Provider>
    </>
  );

  expect(screen.getByRole('heading')).toHaveAccessibleName('Accordion content');
});

test('Renders with inherited element props spread to the component', () => {
  render(
    <>
      <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
        <AccordionContent aria-labelledby="labelling-id">Test</AccordionContent>
        <p id="labelling-id">Label</p>
      </AccordionContext.Provider>
    </>
  );

  expect(screen.getByRole('heading')).toHaveAccessibleName('Label');
});

test('Renders with class name pf-c-accordion__expanded-content', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionContent>Test</AccordionContent>
    </AccordionContext.Provider>
  );

  expect(screen.getByRole('heading')).toHaveClass('pf-c-accordion__expanded-content');
});

test('Renders with custom class names provided via prop', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionContent className="test-class">Test</AccordionContent>
    </AccordionContext.Provider>
  );

  expect(screen.getByRole('heading')).toHaveClass('test-class');
});

test('Renders with the id prop passed to the container', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionContent id="test-id">Test</AccordionContent>
    </AccordionContext.Provider>
  );

  expect(screen.getByRole('heading')).toHaveProperty('id', 'test-id');
});

test('Renders the container as the element provided in ContentContainer from a context by default', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionContent>Test</AccordionContent>
    </AccordionContext.Provider>
  );

  expect(screen.queryByRole('heading', { level: 1 })).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3 })).toBeVisible();
});

test('Renders as the element provided via the component prop when one is provided', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'button' }}>
      <AccordionContent component="h1">Test</AccordionContent>
    </AccordionContext.Provider>
  );

  expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 1 })).toBeVisible();
});

test('Renders without pf-m-fixed by default', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionContent>Test</AccordionContent>
    </AccordionContext.Provider>
  );

  expect(screen.getByRole('heading')).not.toHaveClass('pf-m-fixed');
});

test('Renders with pf-m-fixed when isFixed is true', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionContent isFixed>Test</AccordionContent>
    </AccordionContext.Provider>
  );

  expect(screen.getByRole('heading')).toHaveClass('pf-m-fixed');
});

test('Renders unhidden and with pf-m-expanded by default', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionContent>Test</AccordionContent>
    </AccordionContext.Provider>
  );

  const contentContainer = screen.getByRole('heading');

  expect(contentContainer).not.toHaveAttribute('hidden');
  expect(contentContainer).toHaveClass('pf-m-expanded');
});

test('Renders aria-hidden and without pf-m-expanded when isHidden is true', () => {
  render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionContent isHidden>Test</AccordionContent>
    </AccordionContext.Provider>
  );

  const contentContainer = screen.getByRole('heading', { hidden: true });

  expect(contentContainer).toHaveAttribute('hidden');
  expect(contentContainer).not.toHaveClass('pf-m-expanded');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(
    <AccordionContext.Provider value={{ ContentContainer: 'h3' }}>
      <AccordionContent aria-label="this is a simple accordion">Test</AccordionContent>
    </AccordionContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
