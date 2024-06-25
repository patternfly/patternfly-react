import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { PageNavigation } from '../PageNavigation';
import styles from '@patternfly/react-styles/css/components/Page/page';

describe('page navigation', () => {
  test('Verify basic render', () => {
    const { asFragment } = render(<PageNavigation>test</PageNavigation>);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Verify limited width', () => {
    const { asFragment } = render(<PageNavigation isWidthLimited>test</PageNavigation>);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Verify top sticky', () => {
    const { asFragment } = render(<PageNavigation stickyOnBreakpoint={{ default: 'top' }}>test</PageNavigation>);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Verify bottom sticky', () => {
    const { asFragment } = render(<PageNavigation stickyOnBreakpoint={{ default: 'bottom' }}>test</PageNavigation>);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Verify top shadow', () => {
    const { asFragment } = render(<PageNavigation hasShadowTop>test</PageNavigation>);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Verify bottom shadow', () => {
    const { asFragment } = render(<PageNavigation hasShadowBottom>test</PageNavigation>);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Verify overflow scroll', () => {
    const { asFragment } = render(<PageNavigation hasOverflowScroll>test</PageNavigation>);
    expect(asFragment()).toMatchSnapshot();
  });

  // Old snapshot tests end here. The following tests can be kept if Page test suites need a revamp
  test('Renders without an aria-label by default', () => {
    render(<PageNavigation>test</PageNavigation>);

    expect(screen.getByText('test')).not.toHaveAccessibleName('Test label');
  });

  test('Renders with the passed aria-label applied', () => {
    render(
      <PageNavigation aria-label="Test label" hasOverflowScroll>
        test
      </PageNavigation>
    );

    expect(screen.getByText('test').parentElement).toHaveAccessibleName('Test label');
  });

  test('Does not log a warning in the console by default', () => {
    const consoleWarning = jest.spyOn(console, 'warn').mockImplementation();

    render(<PageNavigation>test</PageNavigation>);

    expect(consoleWarning).not.toHaveBeenCalled();
  });

  test('Does not log a warning in the console when an aria-label is included with hasOverflowScroll', () => {
    const consoleWarning = jest.spyOn(console, 'warn').mockImplementation();

    render(
      <PageNavigation hasOverflowScroll aria-label="Test label">
        test
      </PageNavigation>
    );

    expect(consoleWarning).not.toHaveBeenCalled();
  });

  test('Logs a warning in the console when an aria-label is not included with hasOverflowScroll', () => {
    const consoleWarning = jest.spyOn(console, 'warn').mockImplementation();

    render(<PageNavigation hasOverflowScroll>test</PageNavigation>);

    expect(consoleWarning).toHaveBeenCalled();
  });

  test('Renders with PageMainBody wrapper by default', () => {
    render(<PageNavigation>test</PageNavigation>);

    expect(screen.getByText('test')).toHaveClass(styles.pageMainBody);
  });
  test('Does not render with PageMainBody wrapper when hasMainBodyWrapper is false', () => {
    render(<PageNavigation hasMainBodyWrapper={false}>test</PageNavigation>);

    expect(screen.getByText('test')).not.toHaveClass(styles.pageMainBody);
  });
});
