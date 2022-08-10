import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { PageNavigation } from '../PageNavigation';

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
    const { asFragment } = render(<PageNavigation sticky="top">test</PageNavigation>);
    expect(asFragment()).toMatchSnapshot();
  });
  test('Verify bottom sticky', () => {
    const { asFragment } = render(<PageNavigation sticky="bottom">test</PageNavigation>);
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

  test('Renders without an aria-label by default', () => {
    render(<PageNavigation>test</PageNavigation>);

    expect(screen.getByText('test')).not.toHaveAccessibleName('Test label');
  });

  test('Renders with the passed aria-label applied', () => {
    render(<PageNavigation aria-label="Test label">test</PageNavigation>);

    expect(screen.getByText('test')).toHaveAccessibleName('Test label');
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
});
