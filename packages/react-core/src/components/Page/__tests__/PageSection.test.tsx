import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { PageSection, PageSectionTypes } from '../PageSection';
import styles from '@patternfly/react-styles/css/components/Page/page';

jest.mock('../Page');

test('Check page section with no padding example against snapshot', () => {
  const Section = <PageSection padding={{ default: 'noPadding' }} />;
  const { asFragment } = render(Section);
  expect(asFragment()).toMatchSnapshot();
});

test('Check page section with limited width', () => {
  const Section = <PageSection isWidthLimited />;
  const { asFragment } = render(Section);
  expect(asFragment()).toMatchSnapshot();
});

test('Check page section with center alignment', () => {
  const Section = <PageSection isWidthLimited isCenterAligned />;
  const { asFragment } = render(Section);
  expect(asFragment()).toMatchSnapshot();
});

test('Check page main tabs section against snapshot', () => {
  const Section = <PageSection type={PageSectionTypes.tabs} />;
  const { asFragment } = render(Section);
  expect(asFragment()).toMatchSnapshot();
});

test('Check page main nav section against snapshot', () => {
  const Section = <PageSection type={PageSectionTypes.nav} />;
  const { asFragment } = render(Section);
  expect(asFragment()).toMatchSnapshot();
});

test('Check page main subnav section against snapshot', () => {
  const Section = <PageSection type={PageSectionTypes.subNav} />;
  const { asFragment } = render(Section);
  expect(asFragment()).toMatchSnapshot();
});

test('Check page main breadcrumb section against snapshot', () => {
  const Section = <PageSection type={PageSectionTypes.breadcrumb} />;
  const { asFragment } = render(Section);
  expect(asFragment()).toMatchSnapshot();
});

test('Check page section with no fill example against snapshot', () => {
  const Section = <PageSection isFilled={false} />;
  const { asFragment } = render(Section);
  expect(asFragment()).toMatchSnapshot();
});

test('Check page section with fill example against snapshot', () => {
  const Section = <PageSection isFilled />;
  const { asFragment } = render(Section);
  expect(asFragment()).toMatchSnapshot();
});

test('Check page section with fill and no padding example against snapshot', () => {
  const Section = <PageSection isFilled padding={{ default: 'noPadding' }} />;
  const { asFragment } = render(Section);
  expect(asFragment()).toMatchSnapshot();
});

test('Verify page section top sticky', () => {
  const { asFragment } = render(<PageSection stickyOnBreakpoint={{ default: 'top' }}>test</PageSection>);
  expect(asFragment()).toMatchSnapshot();
});

test('Verify page section bottom sticky', () => {
  const { asFragment } = render(<PageSection stickyOnBreakpoint={{ default: 'bottom' }}>test</PageSection>);
  expect(asFragment()).toMatchSnapshot();
});

test('Verify page section top shadow', () => {
  const { asFragment } = render(<PageSection hasShadowTop>test</PageSection>);
  expect(asFragment()).toMatchSnapshot();
});

test('Verify page section bottom shadow', () => {
  const { asFragment } = render(<PageSection hasShadowBottom>test</PageSection>);
  expect(asFragment()).toMatchSnapshot();
});

test('Verify page section overflow scroll', () => {
  const { asFragment } = render(<PageSection hasOverflowScroll>test</PageSection>);
  expect(asFragment()).toMatchSnapshot();
});

// Old snapshot tests end here. The following tests can be kept if Page test suites need a revamp
test('Renders without an aria-label by default', () => {
  render(<PageSection>test</PageSection>);

  expect(screen.getByText('test')).not.toHaveAccessibleName('Test label');
});

test('Renders with the passed aria-label applied', () => {
  render(<PageSection aria-label="Test label">test</PageSection>);

  expect(screen.getByText('test').parentElement).toHaveAccessibleName('Test label');
});

test('Does not log a warning in the console by default', () => {
  const consoleWarning = jest.spyOn(console, 'warn').mockImplementation();

  render(<PageSection>test</PageSection>);

  expect(consoleWarning).not.toHaveBeenCalled();
});

test('Does not log a warning in the console when an aria-label is included with hasOverflowScroll', () => {
  const consoleWarning = jest.spyOn(console, 'warn').mockImplementation();

  render(
    <PageSection hasOverflowScroll aria-label="Test label">
      test
    </PageSection>
  );

  expect(consoleWarning).not.toHaveBeenCalled();
});

test('Logs a warning in the console when an aria-label is not included with hasOverflowScroll', () => {
  const consoleWarning = jest.spyOn(console, 'warn').mockImplementation();

  render(<PageSection hasOverflowScroll>test</PageSection>);

  expect(consoleWarning).toHaveBeenCalled();
});

test('Renders as a section by default', () => {
  render(<PageSection>test</PageSection>);

  expect(screen.getByText('test').parentElement).toHaveProperty('nodeName', 'SECTION');
});

test('Renders as other elements when a different element type is passed using the component prop', () => {
  render(<PageSection component="main">test</PageSection>);

  expect(screen.getByRole('main')).toHaveTextContent('test');
});

test('Renders with PageBody wrapper by default', () => {
  render(<PageSection>test</PageSection>);

  expect(screen.getByText('test')).toHaveClass(styles.pageMainBody);
});
test('Does not render with PageBody wrapper when hasBodyWrapper is false', () => {
  render(<PageSection hasBodyWrapper={false}>test</PageSection>);

  expect(screen.getByText('test')).not.toHaveClass(styles.pageMainBody);
});

test(`Does not render with ${styles.modifiers.fill} or ${styles.modifiers.noFill} if isFilled is not passed`, () => {
  render(<PageSection component="main">test</PageSection>);

  expect(screen.getByRole('main')).not.toHaveClass(styles.modifiers.fill);
  expect(screen.getByRole('main')).not.toHaveClass(styles.modifiers.noFill);
});

test(`Renders with ${styles.modifiers.fill} if isFilled={true} is passed`, () => {
  render(
    <PageSection component="main" isFilled={true}>
      test
    </PageSection>
  );

  expect(screen.getByRole('main')).toHaveClass(styles.modifiers.fill);
});

test(`Renders with ${styles.modifiers.noFill} if isFilled={false} is passed`, () => {
  render(
    <PageSection component="main" isFilled={false}>
      test
    </PageSection>
  );

  expect(screen.getByRole('main')).toHaveClass(styles.modifiers.noFill);
});
