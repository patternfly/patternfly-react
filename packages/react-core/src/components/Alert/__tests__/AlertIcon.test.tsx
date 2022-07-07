import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { AlertIcon } from '../AlertIcon';

jest.mock('@patternfly/react-icons/dist/esm/icons/check-circle-icon', () => () => 'Check circle icon mock');
jest.mock('@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon', () => () => 'Exclamation circle icon mock');
jest.mock('@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon', () => () =>
  'Exclamation triangle icon mock'
);
jest.mock('@patternfly/react-icons/dist/esm/icons/info-circle-icon', () => () => 'Info circle icon mock');
jest.mock('@patternfly/react-icons/dist/esm/icons/bell-icon', () => () => 'Bell icon mock');

test('Renders without children', () => {
  render(
    <div data-testid="container">
      <AlertIcon variant="default" />
    </div>
  );

  expect(screen.getByTestId('container').firstChild).toBeVisible();
});

test('Renders with the bell icon when variant = default', () => {
  render(<AlertIcon variant="default" />);

  expect(screen.getByText('Bell icon mock')).toBeVisible();
});

test('Renders with the check circle icon when variant = success', () => {
  render(<AlertIcon variant="success" />);

  expect(screen.getByText('Check circle icon mock')).toBeVisible();
});

test('Renders with the exclamation circle icon when variant = danger', () => {
  render(<AlertIcon variant="danger" />);

  expect(screen.getByText('Exclamation circle icon mock')).toBeVisible();
});

test('Renders with the exclamation triangle icon when variant = warning', () => {
  render(<AlertIcon variant="warning" />);

  expect(screen.getByText('Exclamation triangle icon mock')).toBeVisible();
});

test('Renders with the info circle icon when variant = info', () => {
  render(<AlertIcon variant="info" />);

  expect(screen.getByText('Info circle icon mock')).toBeVisible();
});

test('Renders with custom class names provided via prop', () => {
  render(<AlertIcon variant="default" className="test-class" />);

  expect(screen.getByText('Bell icon mock')).toHaveClass('test-class');
});

test('Renders with the passed custom icon when one is passed rather than the icon determined by the passed variant', () => {
  render(<AlertIcon variant="default" customIcon="Custom icon" />);

  expect(screen.queryByText('Bell icon mock')).not.toBeInTheDocument();
  expect(screen.getByText('Custom icon')).toBeVisible();
});

test('Renders the icon inside class pf-c-alert__icon', () => {
  render(<AlertIcon variant="default" />);

  expect(screen.getByText('Bell icon mock')).toHaveClass('pf-c-alert__icon');
});

test('Renders with inherited element props spread to the component', () => {
  render(<AlertIcon variant="default" aria-label="Test label" />);

  expect(screen.getByText('Bell icon mock')).toHaveAccessibleName('Test label');
});

test('Matches snapshot', () => {
  const { asFragment } = render(<AlertIcon variant="default" />);

  expect(asFragment()).toMatchSnapshot();
});
