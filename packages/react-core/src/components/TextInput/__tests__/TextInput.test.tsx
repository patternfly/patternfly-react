import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextInput, TextInputBase } from '../TextInput';
import { ValidatedOptions } from '../../../helpers/constants';

const props = {
  onChange: jest.fn(),
  value: 'test input'
};

describe('TextInput', () => {
  test('input passes value and event to onChange handler', () => {
    render(<TextInputBase {...props} aria-label="test input" />);

    userEvent.type(screen.getByLabelText('test input'), 'new test input');
    expect(props.onChange).toHaveBeenCalled();
  });

  test('simple text input', () => {
    render(<TextInput {...props} aria-label="simple text input" />);
    expect(screen.getByLabelText('simple text input').outerHTML).toMatchSnapshot();
  });

  test('disabled text input', () => {
    render(<TextInput isDisabled aria-label="disabled text input" />);
    expect(screen.getByLabelText('disabled text input').outerHTML).toMatchSnapshot();
  });

  test('readonly text input', () => {
    render(<TextInput isReadOnly value="read only" aria-label="readonly text input" />);
    expect(screen.getByLabelText('readonly text input').outerHTML).toMatchSnapshot();
  });

  test('invalid text input', () => {
    render(<TextInput {...props} required validated={'error'} aria-label="invalid text input" />);
    expect(screen.getByLabelText('invalid text input').outerHTML).toMatchSnapshot();
  });

  test('validated text input success', () => {
    render(<TextInput {...props} required validated={ValidatedOptions.success} aria-label="validated text input" />);
    expect(screen.getByLabelText('validated text input').className).toContain('pf-m-success');
  });

  test('validated text input success', () => {
    render(<TextInput {...props} required validated={ValidatedOptions.warning} aria-label="validated text input" />);
    expect(screen.getByLabelText('validated text input').className).toContain('pf-m-warning');
  });

  test('validated text input', () => {
    render(<TextInput {...props} required validated={ValidatedOptions.error} aria-label="validated text input" />);
    expect(screen.getByLabelText('validated text input').outerHTML).toMatchSnapshot();
  });

  test('should throw console error when no aria-label, id or aria-labelledby is given', () => {
    const myMock = jest.fn();
    global.console = { ...global.console, error: myMock };

    render(<TextInput {...props} />);

    expect(myMock).toBeCalled();
  });

  test('should not throw console error when id is given but no aria-label or aria-labelledby', () => {
    const myMock = jest.fn();
    global.console = { ...global.console, error: myMock };

    render(<TextInput {...props} id="5" />);

    expect(myMock).not.toBeCalled();
  });

  test('should not throw console error when aria-label is given but no id or aria-labelledby', () => {
    const myMock = jest.fn();
    global.console = { ...global.console, error: myMock };

    render(<TextInput {...props} aria-label="test input" />);

    expect(myMock).not.toBeCalled();
  });

  test('should not throw console error when aria-labelledby is given but no id or aria-label', () => {
    const myMock = jest.fn();
    global.console = { ...global.console, error: myMock };

    render(<TextInput {...props} aria-labelledby="test input" />);

    expect(myMock).not.toBeCalled();
  });
});
