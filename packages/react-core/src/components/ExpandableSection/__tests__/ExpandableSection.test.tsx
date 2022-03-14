import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ExpandableSection } from '../ExpandableSection';
import { ExpandableSectionToggle } from '../ExpandableSectionToggle';

const props = {};

test('ExpandableSection', () => {
  const view = render(<ExpandableSection {...props}>test </ExpandableSection>);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('Renders ExpandableSection expanded', () => {
  const view = render(<ExpandableSection isExpanded> test </ExpandableSection>);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('ExpandableSection onToggle called', () => {
  const mockfn = jest.fn();

  render(<ExpandableSection onToggle={mockfn}> test </ExpandableSection>);

  userEvent.click(screen.getByRole('button'));
  expect(mockfn.mock.calls).toHaveLength(1);
});

test('Renders Uncontrolled ExpandableSection', () => {
  const view = render(<ExpandableSection toggleText="Show More"> test </ExpandableSection>);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('Detached ExpandableSection renders successfully', () => {
  const view = render(
    <React.Fragment>
      <ExpandableSection {...props} isExpanded isDetached contentId="test">
        test
      </ExpandableSection>
      <ExpandableSectionToggle isExpanded contentId="test" direction="up">
        Toggle text
      </ExpandableSectionToggle>
    </React.Fragment>
  );
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('Disclosure ExpandableSection', () => {
  const view = render(
    <ExpandableSection {...props} displaySize="large" isWidthLimited>
      test{' '}
    </ExpandableSection>
  );
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('Renders ExpandableSection indented', () => {
  const view = render(
    <ExpandableSection isExpanded isIndented>
      {' '}
      test{' '}
    </ExpandableSection>
  );
  expect(view.container.outerHTML).toMatchSnapshot();
});
