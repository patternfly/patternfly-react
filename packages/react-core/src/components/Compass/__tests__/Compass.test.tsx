import { render, screen } from '@testing-library/react';
import { Compass } from '../Compass';
import styles from '@patternfly/react-styles/css/components/Compass/compass';

test('Renders without children', () => {
  render(
    <div data-testid="test-compass">
      <Compass />
    </div>
  );
  expect(screen.getByTestId('test-compass').firstChild).toBeVisible();
});

test('Renders with custom class name when className prop is provided', () => {
  render(<Compass className="custom-class" data-testid="compass" />);
  expect(screen.getByTestId('compass')).toHaveClass('custom-class');
});

test('Renders with default compass class', () => {
  render(<Compass data-testid="compass" />);
  expect(screen.getByTestId('compass')).toHaveClass(styles.compass);
});

test('Renders header content when provided', () => {
  render(<Compass header={<div>Header content</div>} />);
  expect(screen.getByText('Header content')).toBeVisible();
});

test('Renders sidebar start content when provided', () => {
  render(<Compass sidebarStart={<div>Sidebar start</div>} />);
  expect(screen.getByText('Sidebar start')).toBeVisible();
});

test('Renders main content when provided', () => {
  render(<Compass main={<div>Main content</div>} />);
  expect(screen.getByText('Main content')).toBeVisible();
});

test('Renders sidebar end content when provided', () => {
  render(<Compass sidebarEnd={<div>Sidebar end</div>} />);
  expect(screen.getByText('Sidebar end')).toBeVisible();
});

test('Renders footer content when provided', () => {
  render(<Compass footer={<div>Footer content</div>} />);
  expect(screen.getByText('Footer content')).toBeVisible();
});

test('Renders header with expanded class when isHeaderExpanded is true', () => {
  render(<Compass header={<div>Header</div>} isHeaderExpanded />);
  expect(screen.getByText('Header').parentElement).toHaveClass('pf-m-expanded');
});

test('Renders header without expanded class and with inert when isHeaderExpanded is false', () => {
  render(<Compass header={<div>Header</div>} isHeaderExpanded={false} />);
  const headerElement = screen.getByText('Header').parentElement;
  expect(headerElement).not.toHaveClass('pf-m-expanded');
  expect(headerElement).toHaveAttribute('inert');
});

test('Renders sidebar start with expanded class when isSidebarStartExpanded is true', () => {
  render(<Compass sidebarStart={<div>Sidebar start</div>} isSidebarStartExpanded />);
  expect(screen.getByText('Sidebar start').parentElement).toHaveClass('pf-m-expanded');
});

test('Renders sidebar start without expanded class and with inert when isSidebarStartExpanded is false', () => {
  render(<Compass sidebarStart={<div>Sidebar start</div>} isSidebarStartExpanded={false} />);
  const sidebarElement = screen.getByText('Sidebar start').parentElement;
  expect(sidebarElement).not.toHaveClass('pf-m-expanded');
  expect(sidebarElement).toHaveAttribute('inert');
});

test('Renders sidebar end with expanded class when isSidebarEndExpanded is true', () => {
  render(<Compass sidebarEnd={<div>Sidebar end</div>} isSidebarEndExpanded />);
  expect(screen.getByText('Sidebar end').parentElement).toHaveClass('pf-m-expanded');
});

test('Renders sidebar end without expanded class and with inert when isSidebarEndExpanded is false', () => {
  render(<Compass sidebarEnd={<div>Sidebar end</div>} isSidebarEndExpanded={false} />);
  const sidebarElement = screen.getByText('Sidebar end').parentElement;
  expect(sidebarElement).not.toHaveClass('pf-m-expanded');
  expect(sidebarElement).toHaveAttribute('inert');
});

test('Renders footer with expanded class when isFooterExpanded is true', () => {
  render(<Compass footer={<div>Footer</div>} isFooterExpanded />);
  expect(screen.getByText('Footer').parentElement).toHaveClass('pf-m-expanded');
});

test('Renders footer without expanded class and with inert when isFooterExpanded is false', () => {
  render(<Compass footer={<div>Footer</div>} isFooterExpanded={false} />);
  const footerElement = screen.getByText('Footer').parentElement;
  expect(footerElement).not.toHaveClass('pf-m-expanded');
  expect(footerElement).toHaveAttribute('inert');
});

test('Renders with drawer when drawerContent is provided', () => {
  render(<Compass drawerContent={<div>Drawer content</div>} />);
  expect(screen.getByText('Drawer content')).toBeVisible();
});

test('Renders with light background image when backgroundSrcLight is provided', () => {
  const backgroundSrc = 'light-bg.jpg';
  render(<Compass backgroundSrcLight={backgroundSrc} data-testid="compass" />);
  expect(screen.getByTestId('compass')).toHaveStyle(`--pf-v6-c-compass--BackgroundImage--light: url(${backgroundSrc})`);
});

test('Renders with dark background image when backgroundSrcDark is provided', () => {
  const backgroundSrc = 'dark-bg.jpg';
  render(<Compass backgroundSrcDark={backgroundSrc} data-testid="compass" />);
  expect(screen.getByTestId('compass')).toHaveStyle(`--pf-v6-c-compass--BackgroundImage--dark: url(${backgroundSrc})`);
});

test('Renders with both light and dark background images when both are provided', () => {
  const lightSrc = 'light-bg.jpg';
  const darkSrc = 'dark-bg.jpg';
  render(<Compass backgroundSrcLight={lightSrc} backgroundSrcDark={darkSrc} data-testid="compass" />);
  const compassElement = screen.getByTestId('compass');
  expect(compassElement).toHaveStyle(`--pf-v6-c-compass--BackgroundImage--light: url(${lightSrc})`);
  expect(compassElement).toHaveStyle(`--pf-v6-c-compass--BackgroundImage--dark: url(${darkSrc})`);
});

test('Renders with additional props spread to the component', () => {
  render(<Compass aria-label="Test label" data-testid="compass" />);
  expect(screen.getByTestId('compass')).toHaveAccessibleName('Test label');
});

test('Renders with default expansion states', () => {
  render(
    <Compass
      header={<div>Header</div>}
      sidebarStart={<div>Sidebar start</div>}
      sidebarEnd={<div>Sidebar end</div>}
      footer={<div>Footer</div>}
    >
      Test
    </Compass>
  );

  expect(screen.getByText('Header').parentElement).toHaveClass('pf-m-expanded');
  expect(screen.getByText('Sidebar start').parentElement).toHaveClass('pf-m-expanded');
  expect(screen.getByText('Sidebar end').parentElement).toHaveClass('pf-m-expanded');
  expect(screen.getByText('Footer').parentElement).toHaveClass('pf-m-expanded');
});

test('Matches the snapshot with basic layout', () => {
  const { asFragment } = render(
    <Compass
      header={<div>Header</div>}
      sidebarStart={<div>Sidebar start</div>}
      main={<div>Main content</div>}
      sidebarEnd={<div>Sidebar end</div>}
      footer={<div>Footer</div>}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Matches the snapshot with drawer', () => {
  const { asFragment } = render(
    <Compass
      drawerContent={<div>Drawer content</div>}
      drawerProps={{ isExpanded: true }}
      header={<div>Header</div>}
      sidebarStart={<div>Sidebar start</div>}
      main={<div>Main content</div>}
      sidebarEnd={<div>Sidebar end</div>}
      footer={<div>Footer</div>}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
