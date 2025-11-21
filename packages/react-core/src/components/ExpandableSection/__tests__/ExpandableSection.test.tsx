import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ExpandableSection, ExpandableSectionVariant } from '../ExpandableSection';
import styles from '@patternfly/react-styles/css/components/ExpandableSection/expandable-section';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

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

test('Renders with aria-label when toggleAriaLabel is passed', () => {
  render(<ExpandableSection toggleAriaLabel="Test label"></ExpandableSection>);

  expect(screen.getByRole('button')).toHaveAccessibleName('Test label');
});

test('Renders with aria-labelledby when toggleAriaLabelledBy is passed', () => {
  render(
    <>
      <div id="test-id">Test label</div>
      <ExpandableSection toggleAriaLabelledBy="test-id"></ExpandableSection>
    </>
  );

  expect(screen.getByRole('button')).toHaveAccessibleName('Test label');
});

test('Renders toggleContent as a function in uncontrolled mode (collapsed)', () => {
  render(
    <ExpandableSection toggleContent={(isExpanded) => (isExpanded ? 'Hide details' : 'Show details')}>
      Test content
    </ExpandableSection>
  );

  expect(screen.getByRole('button', { name: 'Show details' })).toBeInTheDocument();
});

test('Renders toggleContent as a function in uncontrolled mode (expanded after click)', async () => {
  const user = userEvent.setup();

  render(
    <ExpandableSection toggleContent={(isExpanded) => (isExpanded ? 'Hide details' : 'Show details')}>
      Test content
    </ExpandableSection>
  );

  const button = screen.getByRole('button', { name: 'Show details' });
  await user.click(button);

  expect(screen.getByRole('button', { name: 'Hide details' })).toBeInTheDocument();
});

test('Renders toggleContent as a function in controlled mode', () => {
  render(
    <ExpandableSection isExpanded={true} toggleContent={(isExpanded) => (isExpanded ? 'Collapse' : 'Expand')}>
      Test content
    </ExpandableSection>
  );

  expect(screen.getByRole('button', { name: 'Collapse' })).toBeInTheDocument();
});

test('Renders with default div wrapper when toggleWrapper is not specified', () => {
  render(<ExpandableSection data-testid="test-id">Test content</ExpandableSection>);

  const toggle = screen.getByRole('button').parentElement;
  expect(toggle?.tagName).toBe('DIV');
});

test('Renders with h2 wrapper when toggleWrapper="h2"', () => {
  render(
    <ExpandableSection data-testid="test-id" toggleWrapper="h2">
      Test content
    </ExpandableSection>
  );

  expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
});

test('Renders with div wrapper when toggleWrapper="div"', () => {
  render(
    <ExpandableSection data-testid="test-id" toggleWrapper="div">
      Test content
    </ExpandableSection>
  );

  const toggle = screen.getByRole('button').parentElement;
  expect(toggle?.tagName).toBe('DIV');
});

test('Can render custom toggle icon', () => {
  render(<ExpandableSection toggleIcon={<BellIcon data-testid="bell-icon" />}>Test content</ExpandableSection>);

  expect(screen.getByTestId('bell-icon')).toBeInTheDocument();
});

test('Does not render toggle icon when hasToggleIcon is false', () => {
  render(<ExpandableSection hasToggleIcon={false}>Test content</ExpandableSection>);

  const button = screen.getByRole('button');
  expect(button.querySelector('.pf-v6-c-expandable-section__toggle-icon')).not.toBeInTheDocument();
});

test('Does not render custom toggle icon when hasToggleIcon is false', () => {
  render(
    <ExpandableSection toggleIcon={<BellIcon data-testid="bell-icon" />} hasToggleIcon={false}>
      Test content
    </ExpandableSection>
  );

  expect(screen.queryByTestId('bell-icon')).not.toBeInTheDocument();
});

test('Renders toggle icon by default when hasToggleIcon is true', () => {
  render(<ExpandableSection>Test content</ExpandableSection>);

  const button = screen.getByRole('button');
  expect(button.querySelector('.pf-v6-c-expandable-section__toggle-icon')).toBeInTheDocument();
});
