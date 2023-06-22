import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ExpandableSection, ExpandableSectionVariant } from '../ExpandableSection';
import { ExpandableSectionToggle } from '../ExpandableSectionToggle';

const props = {};

test('ExpandableSection', () => {
  const { asFragment } = render(<ExpandableSection {...props}>test </ExpandableSection>);
  expect(asFragment()).toMatchSnapshot();
});

test('Renders ExpandableSection expanded', () => {
  const { asFragment } = render(<ExpandableSection isExpanded> test </ExpandableSection>);
  expect(asFragment()).toMatchSnapshot();
});

test('ExpandableSection onToggle called', async () => {
  const mockfn = jest.fn();
  const user = userEvent.setup();

  render(<ExpandableSection onToggle={mockfn}> test </ExpandableSection>);

  await user.click(screen.getByRole('button'));
  expect(mockfn.mock.calls).toHaveLength(1);
});

test('Renders Uncontrolled ExpandableSection', () => {
  const { asFragment } = render(<ExpandableSection toggleText="Show More"> test </ExpandableSection>);
  expect(asFragment()).toMatchSnapshot();
});

test('Detached ExpandableSection renders successfully', () => {
  const { asFragment } = render(
    <React.Fragment>
      <ExpandableSection {...props} isExpanded isDetached toggleId="toggle-id" contentId="test">
        test
      </ExpandableSection>
      <ExpandableSectionToggle isExpanded contentId="test" toggleId="toggle-id" direction="up">
        Toggle text
      </ExpandableSectionToggle>
    </React.Fragment>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Disclosure ExpandableSection', () => {
  const { asFragment } = render(
    <ExpandableSection {...props} displaySize="lg" isWidthLimited>
      test{' '}
    </ExpandableSection>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Renders ExpandableSection indented', () => {
  const { asFragment } = render(
    <ExpandableSection isExpanded isIndented>
      {' '}
      test{' '}
    </ExpandableSection>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Does not render with pf-m-truncate class when variant is not passed', () => {
  render(<ExpandableSection {...props}>test</ExpandableSection>);

  expect(screen.getByText('test').parentElement).not.toHaveClass('pf-m-truncate');
});

test('Does not render with pf-m-truncate class when variant is not truncate', () => {
  render(
    <ExpandableSection variant={ExpandableSectionVariant.default} {...props}>
      test
    </ExpandableSection>
  );

  expect(screen.getByText('test').parentElement).not.toHaveClass('pf-m-truncate');
});

test('Renders with pf-m-truncate class when variant is truncate', () => {
  render(
    <ExpandableSection variant={ExpandableSectionVariant.truncate} {...props}>
      test
    </ExpandableSection>
  );

  expect(screen.getByText('test').parentElement).toHaveClass('pf-m-truncate');
});

test('Renders with value passed to contentId', () => {
  render(
    <ExpandableSection data-testid="test-id" contentId="custom-id">
      Test
    </ExpandableSection>
  );

  const wrapper = screen.getByTestId('test-id');
  const content = wrapper.querySelector('#custom-id');
  expect(content).toBeInTheDocument();
});

test('Renders with value passed to toggleId', () => {
  render(
    <ExpandableSection data-testid="test-id" toggleId="custom-id">
      Test
    </ExpandableSection>
  );

  const wrapper = screen.getByTestId('test-id');
  const toggle = wrapper.querySelector('#custom-id');
  expect(toggle).toBeVisible();
});

test('Renders with ARIA attributes when contentId and toggleId are passed', () => {
  render(
    <ExpandableSection data-testid="test-id" toggleId="toggle-id" contentId="content-id">
      Test
    </ExpandableSection>
  );

  const wrapper = screen.getByTestId('test-id');

  expect(wrapper).toContainHTML('aria-labelledby="toggle-id"');
  expect(wrapper).toContainHTML('aria-controls="content-id"');
});
