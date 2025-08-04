import { render, screen } from '@testing-library/react';
import { PageToggleButton } from '../PageToggleButton';
import { PageContextProvider } from '../PageContext';

test('Renders without children', () => {
  render(
    <div data-testid="container">
      <PageToggleButton />
    </div>
  );

  expect(screen.getByTestId('container').firstChild).toBeVisible();
});

test('Renders with children', () => {
  render(<PageToggleButton>Test</PageToggleButton>);

  expect(screen.getByText('Test')).toBeVisible();
});

test('Throws console error when isHamburger is true and isSidebarOpen is not passed', () => {
  const consoleError = jest.spyOn(console, 'error').mockImplementation();

  render(<PageToggleButton isHamburger aria-label="Test" />);

  expect(consoleError).toHaveBeenCalledWith(
    'Button: when the isHamburger property is passed in, you must also pass in a boolean value to the isExpanded property. It is expected that a hamburger button controls the expansion of other content.'
  );
});

test('Does not throw console error when isHamburger is true and isSidebarOpen is false', () => {
  const consoleError = jest.spyOn(console, 'error').mockImplementation();

  render(<PageToggleButton isSidebarOpen={false} isHamburger aria-label="Test" />);

  expect(consoleError).not.toHaveBeenCalledWith(
    'Button: when the isHamburger property is passed in, you must also pass in a boolean value to the isExpanded property. It is expected that a hamburger button controls the expansion of other content..'
  );
});

test('Does not throw console error when isHamburger is true and isSidebarOpen is true', () => {
  const consoleError = jest.spyOn(console, 'error').mockImplementation();

  render(<PageToggleButton isSidebarOpen isHamburger aria-label="Test" />);

  expect(consoleError).not.toHaveBeenCalledWith(
    'Button: when the isHamburger property is passed in, you must also pass in a boolean value to the isExpanded property. It is expected that a hamburger button controls the expansion of other content..'
  );
});

// assisted by AI/Cursor
test('Does not throw console error when isHamburger is true, isSidebarOpen is not passed, but managedIsSidebarOpen is true', () => {
  const consoleError = jest.spyOn(console, 'error').mockImplementation();

  const mockPageContext = {
    isManagedSidebar: true,
    onSidebarToggle: () => null,
    isSidebarOpen: true, // managedIsSidebarOpen is true
    width: 1024,
    height: 768,
    getBreakpoint: () => 'lg' as const,
    getVerticalBreakpoint: () => 'lg' as const
  };

  render(
    <PageContextProvider value={mockPageContext}>
      <PageToggleButton isHamburger aria-label="Test" />
    </PageContextProvider>
  );

  expect(consoleError).not.toHaveBeenCalledWith(
    'Button: when the isHamburger property is passed in, you must also pass in a boolean value to the isExpanded property. It is expected that a hamburger button controls the expansion of other content..'
  );
});
