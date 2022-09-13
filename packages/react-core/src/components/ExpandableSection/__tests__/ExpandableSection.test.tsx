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
      <ExpandableSection {...props} isExpanded isDetached contentId="test">
        test
      </ExpandableSection>
      <ExpandableSectionToggle isExpanded contentId="test" direction="up">
        Toggle text
      </ExpandableSectionToggle>
    </React.Fragment>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Disclosure ExpandableSection', () => {
  const { asFragment } = render(
    <ExpandableSection {...props} displaySize="large" isWidthLimited>
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
