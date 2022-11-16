import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { SidebarPanel } from '../SidebarPanel';

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

test('Renders with appropriate width-25 class names when "width_25" is passed to each breakpoint of width prop', () => {
  render(
    <SidebarPanel
      width={{ default: 'width_25', sm: 'width_25', md: 'width_25', lg: 'width_25', xl: 'width_25', '2xl': 'width_25' }}
    >
      Test
    </SidebarPanel>
  );
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-25');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-25-on-sm');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-25-on-md');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-25-on-lg');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-25-on-xl');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-25-on-2xl');
});

test('Renders with appropriate width-33 class names when "width_33" is passed to each breakpoint of width prop', () => {
  render(
    <SidebarPanel
      width={{ default: 'width_33', sm: 'width_33', md: 'width_33', lg: 'width_33', xl: 'width_33', '2xl': 'width_33' }}
    >
      Test
    </SidebarPanel>
  );
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-33');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-33-on-sm');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-33-on-md');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-33-on-lg');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-33-on-xl');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-33-on-2xl');
});

test('Renders with appropriate width-50 class names when "width_50" is passed to each breakpoint of width prop', () => {
  render(
    <SidebarPanel
      width={{ default: 'width_50', sm: 'width_50', md: 'width_50', lg: 'width_50', xl: 'width_50', '2xl': 'width_50' }}
    >
      Test
    </SidebarPanel>
  );
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-50');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-50-on-sm');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-50-on-md');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-50-on-lg');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-50-on-xl');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-50-on-2xl');
});

test('Renders with appropriate width-66 class names when "width_66" is passed to each breakpoint of width prop', () => {
  render(
    <SidebarPanel
      width={{ default: 'width_66', sm: 'width_66', md: 'width_66', lg: 'width_66', xl: 'width_66', '2xl': 'width_66' }}
    >
      Test
    </SidebarPanel>
  );
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-66');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-66-on-sm');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-66-on-md');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-66-on-lg');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-66-on-xl');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-66-on-2xl');
});

test('Renders with appropriate width-75 class names when "width_75" is passed to each breakpoint of width prop', () => {
  render(
    <SidebarPanel
      width={{ default: 'width_75', sm: 'width_75', md: 'width_75', lg: 'width_75', xl: 'width_75', '2xl': 'width_75' }}
    >
      Test
    </SidebarPanel>
  );
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-75');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-75-on-sm');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-75-on-md');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-75-on-lg');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-75-on-xl');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-75-on-2xl');
});

test('Renders with appropriate width-100 class names when "width_100" is passed to each breakpoint of width prop', () => {
  render(
    <SidebarPanel
      width={{
        default: 'width_100',
        sm: 'width_100',
        md: 'width_100',
        lg: 'width_100',
        xl: 'width_100',
        '2xl': 'width_100'
      }}
    >
      Test
    </SidebarPanel>
  );
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-100');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-100-on-sm');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-100-on-md');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-100-on-lg');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-100-on-xl');
  expect(screen.getByText('Test')).toHaveClass('pf-m-width-100-on-2xl');
});

test('Renders with inherited element props spread to the component', () => {
  render(<SidebarPanel aria-label="Test label">Test</SidebarPanel>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<SidebarPanel>Test</SidebarPanel>);
  expect(asFragment()).toMatchSnapshot();
});
