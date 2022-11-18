import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { SidebarPanel, SidebarPanelWidthType } from '../SidebarPanel';

test('Renders children', () => {
  render(<SidebarPanel>Test</SidebarPanel>);
  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders with with only class name pf-c-sidebar__panel by default', () => {
  render(<SidebarPanel>Test</SidebarPanel>);
  expect(screen.getByText('Test')).toHaveClass('pf-c-sidebar__panel', { exact: true });
});

test('Renders with with class name pf-c-sidebar__panel', () => {
  render(<SidebarPanel>Test</SidebarPanel>);
  expect(screen.getByText('Test')).toHaveClass('pf-c-sidebar__panel');
});

test('Renders with custom class name when className prop is provided', () => {
  render(<SidebarPanel className="custom-class">Test</SidebarPanel>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders with class name pf-m-sticky when "sticky" is passed to variant prop', () => {
  render(<SidebarPanel variant="sticky">Test</SidebarPanel>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-sticky');
});

test('Renders with class name pf-m-static when "static" is passed to variant prop', () => {
  render(<SidebarPanel variant="static">Test</SidebarPanel>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-static');
});

test('Renders with class name pf-m-no-background when hasNoBackground prop is passed', () => {
  render(<SidebarPanel hasNoBackground>Test</SidebarPanel>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-no-background');
});

['width_25', 'width_33', 'width_50', 'width_66', 'width_75', 'width_100'].forEach(widthType => {
  test(`Renders with appropriate class names when ${widthType} is passed to each breakpoint of width prop`, () => {
    render(
      <SidebarPanel
        width={{
          default: `${widthType as SidebarPanelWidthType}`,
          sm: `${widthType as SidebarPanelWidthType}`,
          md: `${widthType as SidebarPanelWidthType}`,
          lg: `${widthType as SidebarPanelWidthType}`,
          xl: `${widthType as SidebarPanelWidthType}`,
          '2xl': `${widthType as SidebarPanelWidthType}`
        }}
      >
        Test
      </SidebarPanel>
    );

    const className = widthType.replace('_', '-');
    expect(screen.getByText('Test')).toHaveClass(`pf-m-${className}`);
    expect(screen.getByText('Test')).toHaveClass(`pf-m-${className}-on-sm`);
    expect(screen.getByText('Test')).toHaveClass(`pf-m-${className}-on-md`);
    expect(screen.getByText('Test')).toHaveClass(`pf-m-${className}-on-lg`);
    expect(screen.getByText('Test')).toHaveClass(`pf-m-${className}-on-xl`);
    expect(screen.getByText('Test')).toHaveClass(`pf-m-${className}-on-2xl`);
  });
});

test('Renders with inherited element props spread to the component', () => {
  render(<SidebarPanel aria-label="Test label">Test</SidebarPanel>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<SidebarPanel>Test</SidebarPanel>);
  expect(asFragment()).toMatchSnapshot();
});
