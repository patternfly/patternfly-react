import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Checkbox } from '../Checkbox';
import styles from '@patternfly/react-styles/css/components/Check/check';

test(`Renders with only the class ${styles.checkInput} on the check by default`, () => {
  render(<Checkbox id="test-id" />);

  expect(screen.getByRole('checkbox')).toHaveClass(styles.checkInput, { exact: true });
});

test(`Renders with only the classes ${styles.check} and ${styles.modifiers.standalone} on the check wrapper by default`, () => {
  render(<Checkbox id="test-id" />);

  expect(screen.getByRole('checkbox').parentElement).toHaveClass(`${styles.check} ${styles.modifiers.standalone}`, {
    exact: true
  });
});

test('Renders with additional classes passed via className', () => {
  render(<Checkbox id="test-id" className="test-class" />);

  expect(screen.getByRole('checkbox').parentElement).toHaveClass('test-class');
});

test('Renders with additional classes passed via inputClassName', () => {
  render(<Checkbox id="test-id" inputClassName="test-class" />);

  expect(screen.getByRole('checkbox')).toHaveClass('test-class');
});

test('Does not set the checkbox as invalid by default', () => {
  render(<Checkbox id="test-id" />);

  expect(screen.getByRole('checkbox')).toBeValid();
});

test('Sets the checkbox as invalid when isValid is false', () => {
  render(<Checkbox id="test-id" isValid={false} />);

  expect(screen.getByRole('checkbox')).toBeInvalid();
});

test('Does not set the checkbox as disabled by default', () => {
  render(<Checkbox id="test-id" />);

  expect(screen.getByRole('checkbox')).not.toBeDisabled();
});

test(`Sets the checkbox as disabled when isDisabled is passed`, () => {
  render(<Checkbox id="test-id" isDisabled />);

  expect(screen.getByRole('checkbox')).toBeDisabled();
});

test('Sets the label as disabled when isDisabled and label are passed', () => {
  render(<Checkbox id="test-id" isDisabled label="test label" />);

  expect(screen.getByLabelText('test label')).toBeDisabled();
});

test('Does not set the checkbox as required by default', () => {
  render(<Checkbox id="test-id" />);

  expect(screen.getByRole('checkbox')).not.toBeRequired();
});

test(`Sets the checkbox as required when isRequired is passed`, () => {
  render(<Checkbox id="test-id" isRequired />);

  expect(screen.getByRole('checkbox')).toBeRequired();
});

test('Does not set the checkbox as checked by default', () => {
  render(<Checkbox id="test-id" />);

  expect(screen.getByRole('checkbox')).not.toBeChecked();
});

test(`Sets the checkbox as checked when isChecked is passed`, () => {
  render(<Checkbox id="test-id" isChecked />);

  expect(screen.getByRole('checkbox')).toBeChecked();
});

test(`Sets the checkbox as checked when checked is passed`, () => {
  render(<Checkbox id="test-id" checked />);

  expect(screen.getByRole('checkbox')).toBeChecked();
});

test(`Calls onChange when the checkbox is clicked`, async () => {
  const user = userEvent.setup();
  const onChange = jest.fn();
  render(<Checkbox id="test-id" onChange={onChange} />);

  await user.click(screen.getByRole('checkbox'));

  expect(onChange).toHaveBeenCalledTimes(1);
});

test('Does not call onChange when the checkbox is not clicked', () => {
  const onChange = jest.fn();
  render(<Checkbox id="test-id" onChange={onChange} />);

  expect(onChange).not.toHaveBeenCalled();
});

test(`Calls onChange with the event and the checked value when the checkbox is clicked`, async () => {
  const user = userEvent.setup();
  const onChange = jest.fn();
  render(<Checkbox id="test-id" onChange={onChange} />);

  await user.click(screen.getByRole('checkbox'));

  expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ type: 'change' }), true);
});

test(`Calls onChange with the event and the checked value when the checkbox is clicked and isChecked is passed`, async () => {
  const user = userEvent.setup();
  const onChange = jest.fn();
  render(<Checkbox id="test-id" isChecked onChange={onChange} />);

  await user.click(screen.getByRole('checkbox'));

  expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ type: 'change' }), false);
});

test('Does not render a label by default', () => {
  render(<Checkbox id="test-id" />);

  expect(screen.queryByLabelText(/\w+/)).not.toBeInTheDocument();
});

test('Renders a label when label is passed', () => {
  render(<Checkbox id="test-id" label="test label" />);

  expect(screen.getByLabelText('test label')).toBeVisible();
});

test('Associates the label with the checkbox', () => {
  render(<Checkbox id="test-id" label="test label" />);

  expect(screen.getByRole('checkbox')).toHaveAccessibleName('test label');
});

test('Does not render an asterisk when a label is passed but isRequired is not', () => {
  render(<Checkbox id="test-id" label="test label" />);

  expect(screen.queryByText('*')).not.toBeInTheDocument();
});

test('Renders an asterisk when isRequired and a label are passed', () => {
  render(<Checkbox id="test-id" isRequired label="test label" />);

  expect(screen.getByText('*')).toBeVisible();
});

test(`Wraps the required asterisk in the ${styles.checkLabelRequired} className`, () => {
  render(<Checkbox id="test-id" isRequired label="test label" />);

  expect(screen.getByText('*')).toHaveClass(styles.checkLabelRequired, { exact: true });
});

test('Renders with the provided id', () => {
  render(<Checkbox id="test-id" />);

  expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'test-id');
});

test('Does not render an aria-label by default', () => {
  render(<Checkbox id="test-id" />);

  expect(screen.getByRole('checkbox')).not.toHaveAttribute('aria-label');
});

test('Sets the name to the passed aria-label', () => {
  render(<Checkbox id="test-id" aria-label="test aria-label" />);

  expect(screen.getByRole('checkbox')).toHaveAccessibleName('test aria-label');
});

test('Does not render a description by default', () => {
  render(<Checkbox id="test-id" />);

  expect(screen.queryByText(/\w+/)).not.toBeInTheDocument();
});

test('Renders a description when description is passed', () => {
  render(<Checkbox id="test-id" description="test description" />);

  expect(screen.getByText('test description')).toBeVisible();
});

test(`Renders the passed description with the ${styles.checkDescription} className`, () => {
  render(<Checkbox id="test-id" description="test description" />);

  expect(screen.getByText('test description')).toHaveClass(styles.checkDescription, { exact: true });
});

test('Does not render a body by default', () => {
  render(<Checkbox id="test-id" />);

  expect(screen.queryByText(/\w+/)).not.toBeInTheDocument();
});

test('Renders a body when body is passed', () => {
  render(<Checkbox id="test-id" body="test body" />);

  expect(screen.getByText('test body')).toBeVisible();
});

test(`Renders the passed body with the ${styles.checkBody} className`, () => {
  render(<Checkbox id="test-id" body="test body" />);

  expect(screen.getByText('test body')).toHaveClass(styles.checkBody, { exact: true });
});

test('Renders the check wrapper as a div by default', () => {
  render(<Checkbox id="test-id" />);

  expect(screen.getByRole('checkbox').parentElement?.tagName).toBe('DIV');
});

test('Renders with the provided component', () => {
  render(<Checkbox id="test-id" component="span" />);

  expect(screen.getByRole('checkbox').parentElement?.tagName).toBe('SPAN');
});

test('Renders with the label wrapper if isLabelWrapped is provided', () => {
  render(<Checkbox id="test-id" isLabelWrapped />);

  expect(screen.getByRole('checkbox').parentElement?.tagName).toBe('LABEL');
});

test('Renders with span element around the inner label text if isLabelWrapped is provided', () => {
  const labelText = 'test checkbox label';
  render(<Checkbox id="test-id" isLabelWrapped label={labelText} />);

  expect(screen.getByText(labelText).tagName).toBe('SPAN');
});

test('Renders with the provided component although isLabelWrapped is provided', () => {
  render(<Checkbox id="test-id" isLabelWrapped component="h3" />);

  expect(screen.getByRole('checkbox').parentElement?.tagName).toBe('H3');
});

test('Renders with the label wrapper if component is set to label', () => {
  render(<Checkbox id="test-id" component="label" />);

  expect(screen.getByRole('checkbox').parentElement?.tagName).toBe('LABEL');
});

test('Renders with span element around the inner label text if component is set to label', () => {
  const labelText = 'test checkbox label';
  render(<Checkbox id="test-id" component="label" label={labelText} />);

  expect(screen.getByText(labelText).tagName).toBe('SPAN');
});

test('Renders label before checkbox input if labelPosition is "start"', () => {
  render(<Checkbox id="test-id" labelPosition="start" label={'test checkbox label'} />);

  const wrapper = screen.getByRole('checkbox').parentElement!;

  expect(wrapper.children[0].tagName).toBe('LABEL');
  expect(wrapper.children[1].tagName).toBe('INPUT');
});

test(`Spreads additional props`, () => {
  render(<Checkbox id="test-id" data-testid="test-id" />);

  expect(screen.getByTestId('test-id')).toBeInTheDocument();
});

test(`Sets the checkbox as checked by default when defaultChecked is passed`, () => {
  render(<Checkbox id="test-id" defaultChecked />);

  expect(screen.getByRole('checkbox')).toBeChecked();
});

test('Matches snapshot', () => {
  const { asFragment } = render(<Checkbox id="test-id" ouiaId="ouia-id" />);

  expect(asFragment()).toMatchSnapshot();
});
