import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ExpandableSection, ExpandableSectionVariant } from '../ExpandableSection';
import styles from '@patternfly/react-styles/css/components/ExpandableSection/expandable-section';

const props = { contentId: 'content-id', toggleId: 'toggle-id' };

test('ExpandableSection', () => {
  const { asFragment } = render(<ExpandableSection {...props}>test </ExpandableSection>);
  expect(asFragment()).toMatchSnapshot();
});

test('Renders ExpandableSection expanded', () => {
  const { asFragment } = render(
    <ExpandableSection {...props} isExpanded>
      {' '}
      test{' '}
    </ExpandableSection>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Calls onToggle when clicked', async () => {
  const mockfn = jest.fn();
  const user = userEvent.setup();

  render(<ExpandableSection onToggle={mockfn}> test </ExpandableSection>);

  await user.click(screen.getByRole('button'));
  expect(mockfn.mock.calls).toHaveLength(1);
});

test('Does not call onToggle when not clicked', async () => {
  const mockfn = jest.fn();
  const user = userEvent.setup();

  render(
    <>
      <ExpandableSection onToggle={mockfn}> test </ExpandableSection>
      <button onClick={() => {}}>Test clicker</button>
    </>
  );

  await user.click(screen.getByRole('button', { name: 'Test clicker' }));
  expect(mockfn).not.toHaveBeenCalled();
});

test('Renders Uncontrolled ExpandableSection', () => {
  const { asFragment } = render(
    <ExpandableSection {...props} toggleText="Show More">
      {' '}
      test{' '}
    </ExpandableSection>
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
    <ExpandableSection {...props} isExpanded isIndented>
      {' '}
      test{' '}
    </ExpandableSection>
  );
  expect(asFragment()).toMatchSnapshot();
});

test(`Does not render with ${styles.modifiers.truncate} class when variant is not passed`, () => {
  render(<ExpandableSection>test</ExpandableSection>);

  expect(screen.getByText('test').parentElement).not.toHaveClass(styles.modifiers.truncate);
});

test(`Does not render with ${styles.modifiers.truncate} class when variant is not truncate`, () => {
  render(<ExpandableSection variant={ExpandableSectionVariant.default}>test</ExpandableSection>);

  expect(screen.getByText('test').parentElement).not.toHaveClass(styles.modifiers.truncate);
});

test(`Renders with ${styles.modifiers.truncate} class when variant is truncate`, () => {
  render(<ExpandableSection variant={ExpandableSectionVariant.truncate}>test</ExpandableSection>);

  expect(screen.getByText('test').parentElement).toHaveClass(styles.modifiers.truncate);
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
    <ExpandableSection data-testid="test-id" {...props}>
      Test
    </ExpandableSection>
  );

  const wrapper = screen.getByTestId('test-id');

  expect(wrapper).toContainHTML('aria-labelledby="toggle-id"');
  expect(wrapper).toContainHTML('aria-controls="content-id"');
});

test(`Does not render with classes ${styles.modifiers.expandTop} nor ${styles.modifiers.expandBottom} by default`, () => {
  render(<ExpandableSection>Test content</ExpandableSection>);

  expect(screen.getByText('Test content').parentElement).not.toHaveClass('pf-m-expand-top');
  expect(screen.getByText('Test content').parentElement).not.toHaveClass('pf-m-expand-bottom');
});

test(`Does not render with classes ${styles.modifiers.expandTop} nor ${styles.modifiers.expandBottom} when only isDetached is true`, () => {
  render(<ExpandableSection isDetached>Test content</ExpandableSection>);

  expect(screen.getByText('Test content').parentElement).not.toHaveClass('pf-m-expand-top');
  expect(screen.getByText('Test content').parentElement).not.toHaveClass('pf-m-expand-bottom');
});

test(`Does not render with class ${styles.modifiers.expandTop} when direction="up" and isDetached is false`, () => {
  render(<ExpandableSection direction="up">Test content</ExpandableSection>);

  expect(screen.getByText('Test content').parentElement).not.toHaveClass('pf-m-expand-top');
});

test(`Does not render with class ${styles.modifiers.expandBottom} when direction="down" and isDetached is false`, () => {
  render(<ExpandableSection direction="down">Test content</ExpandableSection>);

  expect(screen.getByText('Test content').parentElement).not.toHaveClass('pf-m-expand-bottom');
});

test(`Renders with class ${styles.modifiers.expandTop} when isDetached is true and direction="up"`, () => {
  render(
    <ExpandableSection isDetached direction="up">
      Test content
    </ExpandableSection>
  );

  expect(screen.getByText('Test content').parentElement).toHaveClass('pf-m-expand-top');
});

test(`Renders with class ${styles.modifiers.expandBottom} when isDetached is true and direction="down"`, () => {
  render(
    <ExpandableSection isDetached direction="down">
      Test content
    </ExpandableSection>
  );

  expect(screen.getByText('Test content').parentElement).toHaveClass('pf-m-expand-bottom');
});

test('Does not render with class pf-m-detached when isDetached is true and direction is not passed', () => {
  render(<ExpandableSection isDetached>Test content</ExpandableSection>);

  expect(screen.getByText('Test content').parentElement).not.toHaveClass('pf-m-detached');
});

test('Renders with class pf-m-detached when isDetached is true and direction is passed', () => {
  render(
    <ExpandableSection isDetached direction="up">
      Test content
    </ExpandableSection>
  );

  expect(screen.getByText('Test content').parentElement).toHaveClass('pf-m-detached');
});
