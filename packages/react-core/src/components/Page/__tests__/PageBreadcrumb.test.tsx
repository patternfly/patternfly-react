import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { PageBreadcrumb } from '../PageBreadcrumb';

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
    const { asFragment } = render(<PageBreadcrumb sticky="top">test</PageBreadcrumb>);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Verify bottom sticky', () => {
    const { asFragment } = render(<PageBreadcrumb sticky="bottom">test</PageBreadcrumb>);
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

  test('Renders without an aria-label by default', () => {
    render(<PageBreadcrumb>test</PageBreadcrumb>);

    expect(screen.getByText('test')).not.toHaveAccessibleName('Test label');
  });

  test('Renders with the passed aria-label applied', () => {
    render(<PageBreadcrumb aria-label="Test label">test</PageBreadcrumb>);

    expect(screen.getByText('test')).toHaveAccessibleName('Test label');
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
});
