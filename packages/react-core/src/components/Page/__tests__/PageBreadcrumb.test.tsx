import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { PageBreadcrumb } from '../PageBreadcrumb';
import styles from '@patternfly/react-styles/css/components/Page/page';

describe('page breadcrumb', () => {
  test('Verify basic render', () => {
    const { asFragment } = render(<PageBreadcrumb>test</PageBreadcrumb>);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Verify limited width', () => {
    const { asFragment } = render(<PageBreadcrumb isWidthLimited>test</PageBreadcrumb>);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Verify top sticky', () => {
    const { asFragment } = render(<PageBreadcrumb stickyOnBreakpoint={{ default: 'top' }}>test</PageBreadcrumb>);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Verify bottom sticky', () => {
    const { asFragment } = render(<PageBreadcrumb stickyOnBreakpoint={{ default: 'bottom' }}>test</PageBreadcrumb>);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Verify top shadow', () => {
    const { asFragment } = render(<PageBreadcrumb hasShadowTop>test</PageBreadcrumb>);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Verify bottom shadow', () => {
    const { asFragment } = render(<PageBreadcrumb hasShadowBottom>test</PageBreadcrumb>);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Verify overflow scroll', () => {
    const { asFragment } = render(<PageBreadcrumb hasOverflowScroll>test</PageBreadcrumb>);
    expect(asFragment()).toMatchSnapshot();
  });

  // Old snapshot tests end here. The following tests can be kept if Page test suites need a revamp
  test('Renders without an aria-label by default', () => {
    render(<PageBreadcrumb>test</PageBreadcrumb>);

    expect(screen.getByText('test')).not.toHaveAccessibleName('Test label');
  });

  test('Renders with the passed aria-label applied', () => {
    render(<PageBreadcrumb aria-label="Test label">test</PageBreadcrumb>);

    expect(screen.getByText('test').parentElement).toHaveAccessibleName('Test label');
  });

  test('Does not log a warning in the console by default', () => {
    const consoleWarning = jest.spyOn(console, 'warn').mockImplementation();

    render(<PageBreadcrumb>test</PageBreadcrumb>);

    expect(consoleWarning).not.toHaveBeenCalled();
  });

  test('Does not log a warning in the console when an aria-label is included with hasOverflowScroll', () => {
    const consoleWarning = jest.spyOn(console, 'warn').mockImplementation();

    render(
      <PageBreadcrumb hasOverflowScroll aria-label="Test label">
        test
      </PageBreadcrumb>
    );

    expect(consoleWarning).not.toHaveBeenCalled();
  });

  test('Logs a warning in the console when an aria-label is not included with hasOverflowScroll', () => {
    const consoleWarning = jest.spyOn(console, 'warn').mockImplementation();

    render(<PageBreadcrumb hasOverflowScroll>test</PageBreadcrumb>);

    expect(consoleWarning).toHaveBeenCalled();
  });

  test('Renders with PageBody wrapper by default', () => {
    render(<PageBreadcrumb>test</PageBreadcrumb>);

    expect(screen.getByText('test')).toHaveClass(styles.pageMainBody);
  });
  test('Does not render with PageBody wrapper when hasBodyWrapper is false', () => {
    render(<PageBreadcrumb hasBodyWrapper={false}>test</PageBreadcrumb>);

    expect(screen.getByText('test')).not.toHaveClass(styles.pageMainBody);
  });
});
