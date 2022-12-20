import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ProgressStep, ProgressStepVariant } from '../ProgressStep';
import { capitalize } from '../../../helpers';

jest.mock('@patternfly/react-icons/dist/esm/icons/check-circle-icon', () => () => 'Success icon mock');
jest.mock('@patternfly/react-icons/dist/esm/icons/resources-full-icon', () => () => 'Info icon mock');
jest.mock('@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon', () => () => 'Warning icon mock');
jest.mock('@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon', () => () => 'Danger icon mock');

test('Renders without children', () => {
  render(
    <div data-testid="progress-step">
      <ProgressStep />
    </div>
  );

  expect(screen.getByTestId('progress-step').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<ProgressStep>Test</ProgressStep>);
  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders with class pf-c-progress-stepper__step on the containing li element', () => {
  render(<ProgressStep>Test</ProgressStep>);
  expect(screen.getByRole('listitem')).toHaveClass('pf-c-progress-stepper__step');
});

test('Renders with custom class name on the containing li element when className prop is provided', () => {
  render(<ProgressStep className="custom-class">Test</ProgressStep>);
  expect(screen.getByRole('listitem')).toHaveClass('custom-class');
});

['default', undefined].forEach(variant => {
  test(`Renders with no additional classes when variant=${variant} on containing li element`, () => {
    render(<ProgressStep variant={`${variant as ProgressStepVariant}`}>Test</ProgressStep>);
    expect(screen.getByRole('listitem')).toHaveClass('pf-c-progress-stepper__step', { exact: true });
  });
});

['success', 'info', 'warning', 'danger'].forEach(variant => {
  test(`Does not render with class pf-m-${variant} by default on containing li element`, () => {
    render(<ProgressStep>Test</ProgressStep>);
    expect(screen.getByRole('listitem')).not.toHaveClass(`pf-m-${variant}`);
  });

  test(`Renders with class pf-m-${variant} when variant = ${variant} on containing li element`, () => {
    render(<ProgressStep variant={`${variant as ProgressStepVariant}`}>Test</ProgressStep>);
    expect(screen.getByRole('listitem')).toHaveClass(`pf-m-${variant}`);
  });

  test(`Does not render with ${variant} variant icon by default`, () => {
    render(<ProgressStep>Test</ProgressStep>);
    expect(screen.queryByText(`${capitalize(variant)} icon mock`)).not.toBeInTheDocument();
  });

  test(`Renders with ${variant} variant icon when variant = ${variant}`, () => {
    render(<ProgressStep variant={`${variant as ProgressStepVariant}`}>Test</ProgressStep>);
    expect(screen.getByText(`${capitalize(variant)} icon mock`)).toBeVisible();
  });
});

test('Does not render with class pf-m-pending by default on containing li element', () => {
  render(<ProgressStep>Test</ProgressStep>);
  expect(screen.getByRole('listitem')).not.toHaveClass('pf-m-pending');
});

test('Renders with class pf-m-pending when variant = pending on containing li element', () => {
  render(<ProgressStep variant="pending">Test</ProgressStep>);
  expect(screen.getByRole('listitem')).toHaveClass('pf-m-pending');
});

test('Renders the element passed via the icon prop', () => {
  render(<ProgressStep icon="Custom Icon">Test</ProgressStep>);
  expect(screen.getByText('Custom Icon')).toBeVisible();
});

test('Renders the icon element inside span element with class pf-c-progress-stepper__step-icon', () => {
  render(<ProgressStep icon="Custom Icon">Test</ProgressStep>);
  expect(screen.getByText('Custom Icon')).toHaveClass('pf-c-progress-stepper__step-icon');
});

test('Does not render with class pf-m-current by default on containing li element', () => {
  render(<ProgressStep>Test</ProgressStep>);
  expect(screen.getByRole('listitem')).not.toHaveClass('pf-m-current');
});

test('Renders with class pf-m-current on containing li element when isCurrent is passed', () => {
  render(<ProgressStep isCurrent>Test</ProgressStep>);
  expect(screen.getByRole('listitem')).toHaveClass('pf-m-current');
});

test('Renders without aria-current on containing li element by default', () => {
  render(<ProgressStep>Test</ProgressStep>);
  expect(screen.getByRole('listitem')).not.toHaveAttribute('aria-current');
});

test(`Renders with a aria-current of "step" on containing li element when isCurrent is passed`, () => {
  render(<ProgressStep isCurrent>Test</ProgressStep>);
  expect(screen.getByRole('listitem')).toHaveAttribute('aria-current', 'step');
});

test(`Renders with the aria label on containing li element passed via prop`, () => {
  render(<ProgressStep aria-label="Test label">Test</ProgressStep>);
  expect(screen.getByRole('listitem')).toHaveAccessibleName('Test label');
});

test('Renders the element passed via the description prop', () => {
  render(<ProgressStep description={<button>Description</button>}>Test</ProgressStep>);
  expect(screen.getByRole('button', { name: 'Description' })).toBeVisible();
});

test('Renders the description element inside div element with class pf-c-progress-stepper__step-description', () => {
  render(<ProgressStep description="Description">Test</ProgressStep>);
  expect(screen.getByText('Description')).toHaveClass('pf-c-progress-stepper__step-description');
});

test('Renders children inside class pf-c-progress-stepper__step-title', () => {
  render(<ProgressStep>Test</ProgressStep>);
  expect(screen.getByText('Test')).toHaveClass('pf-c-progress-stepper__step-title');
});

test('Renders Component element as div by default', () => {
  render(<ProgressStep>Test</ProgressStep>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'DIV');
});

test('Renders Component element as button when popoverRender is defined', () => {
  render(<ProgressStep popoverRender={() => <div>Popover</div>}>Test</ProgressStep>);
  expect(screen.getByRole('button')).toBeVisible();
});

test('Does not render with class pf-m-help-text by default on Component element', () => {
  render(<ProgressStep>Test</ProgressStep>);
  expect(screen.getByText('Test')).not.toHaveClass('pf-m-help-text');
});

test('Renders with class pf-m-help-text when popoverRender is defined', () => {
  render(<ProgressStep popoverRender={() => <div>Popover</div>}>Test</ProgressStep>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-help-text');
});

test('Does not renders with aria-labelledBy by default on Component element', () => {
  render(<ProgressStep>Test</ProgressStep>);
  expect(screen.getByText('Test')).not.toHaveAccessibleName();
});

test('Renders with an accessible name that matches children', () => {
  render(
    <ProgressStep id="test-id" titleId="title-id">
      Test
    </ProgressStep>
  );
  expect(screen.getByText('Test')).toHaveAccessibleName('Test');
});

test('Renders with popoverRender element', () => {
  render(<ProgressStep popoverRender={() => <div>Popover</div>}>Test</ProgressStep>);
  expect(screen.getByText('Popover')).toBeVisible();
});

test('Renders with inherited element props spread to the component', () => {
  render(
    <>
      <ProgressStep aria-describedby="labelling-id" aria-label="Test label" />
      <p id="labelling-id">Described by text</p>
    </>
  );

  expect(screen.getByLabelText('Test label')).toHaveAccessibleDescription('Described by text');
});

test('Matches snapshot', () => {
  const { asFragment } = render(<ProgressStep>Test</ProgressStep>);
  expect(asFragment()).toMatchSnapshot();
});
