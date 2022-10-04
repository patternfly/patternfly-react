import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextArea, TextAreaBase } from '../TextArea';
import { ValidatedOptions } from '../../../helpers/constants';

const props = {
  onChange: jest.fn(),
  value: 'test textarea'
};

test('textarea input passes value and event to onChange handler', async () => {
  render(<TextAreaBase {...props} value="" aria-label="test textarea" />);

  const user = userEvent.setup();
  await user.type(screen.getByLabelText('test textarea'), 'a');

  expect(props.onChange).toHaveBeenCalledWith('a', expect.any(Object));
});

test('Renders simple text input', () => {
  render(
    <div data-testid="textarea">
      <TextArea aria-label="simple textarea" />
    </div>
  );
  expect(screen.getByTestId('textarea').firstChild).toBeVisible();
});

test('Renders with custom class passed', () => {
  render(<TextArea aria-label="custom class textarea" className="test-class" />);

  expect(screen.getByRole('textbox')).toHaveClass('test-class');
});

test('Renders text area with required attribute using isRequired', () => {
  render(<TextArea aria-label="required textarea" isRequired />);

  expect(screen.getByRole('textbox')).toBeRequired();
});

test('Renders text area with required attribute using required', () => {
  render(<TextArea aria-label="required textarea" required />);

  expect(screen.getByRole('textbox')).toBeRequired();
});

test('Renders disabled text area using isDisabled', () => {
  render(<TextArea aria-label="is disabled textarea" isDisabled />);
  expect(screen.getByRole('textbox')).toBeDisabled();
});

test('Renders disabled text area using disabled', () => {
  render(<TextArea aria-label="disabled textarea" disabled />);
  expect(screen.getByRole('textbox')).toBeDisabled();
});

test('Renders read only text area using readOnlyVariant', () => {
  render(<TextArea aria-label="is read only textarea" readOnlyVariant={'default'} />);
  expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
});

test('Renders read only text area using readOnly', () => {
  render(<TextArea aria-label="read only textarea" readOnly />);
  expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
});

test('Renders validated text area with success className', () => {
  render(<TextArea aria-label="validated textarea" validated={ValidatedOptions.success} />);
  expect(screen.getByRole('textbox')).toHaveClass('pf-m-success');
});

test('Renders validated text area with warning className', () => {
  render(<TextArea aria-label="validated textarea" validated={ValidatedOptions.warning} />);
  expect(screen.getByRole('textbox')).toHaveClass('pf-m-warning');
});

test('Renders invalid text area', () => {
  render(<TextArea aria-label="validated textarea" validated={ValidatedOptions.error} />);
  expect(screen.getByRole('textbox')).toBeInvalid();
});

test('Renders vertically resizable text area', () => {
  render(<TextArea aria-label="vertical resize textarea" resizeOrientation="vertical" />);
  expect(screen.getByRole('textbox')).toHaveClass('pf-m-resize-vertical');
});

test('Renders horizontally resizable text area', () => {
  render(<TextArea aria-label="horizontal resize textarea" resizeOrientation="horizontal" />);
  expect(screen.getByRole('textbox')).toHaveClass('pf-m-resize-horizontal');
});

test('Throws console error when no aria-label or id is given', () => {
  jest.spyOn(global.console, 'error');

  render(<TextArea />);

  expect(console.error).toHaveBeenCalled();
});

test('Does not throw console error when id is given but no aria-label', () => {
  jest.spyOn(global.console, 'error');

  render(<TextArea id="5" />);

  expect(console.error).not.toHaveBeenCalled();
});

test('Does not throw console error when aria-label is given but no id', () => {
  jest.spyOn(global.console, 'error');

  render(<TextArea aria-label="test textarea" />);

  expect(console.error).not.toHaveBeenCalled();
});

test('TextArea can be accessed via passed ref', () => {
  const testRef: React.RefObject<HTMLTextAreaElement> = React.createRef();
  render(<TextArea ref={testRef} />);
  global.scrollTo = jest.fn();
  testRef.current?.focus();
  expect(screen.getByRole('textbox')).toHaveFocus();
});

test('Matches the snapshot', () => {
  const { asFragment } = render(
    <TextArea className="custom class" isRequired isDisabled autoResize aria-label="test textarea" />
  );
  expect(asFragment()).toMatchSnapshot();
});
