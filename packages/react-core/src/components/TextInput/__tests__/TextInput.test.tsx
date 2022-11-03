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
  test('input passes value and event to onChange handler', async () => {
    const user = userEvent.setup();

    render(<TextInputBase {...props} value="" aria-label="test input" />);

    await user.type(screen.getByLabelText('test input'), 'a');
    expect(props.onChange).toHaveBeenCalledWith('a', expect.any(Object));
  });

  test('simple text input', () => {
    const { asFragment } = render(<TextInput {...props} aria-label="simple text input" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('disabled text input', () => {
    const { asFragment } = render(<TextInput isDisabled aria-label="disabled text input" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('read only text input using isReadOnly', () => {
    const { asFragment } = render(<TextInput isReadOnly value="read only" aria-label="read only text input" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('default read only text input', () => {
    const { asFragment } = render(
      <TextInput readOnlyVariant="default" value="read only default" aria-label="default read only text input" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('plain read only text input', () => {
    const { asFragment } = render(
      <TextInput readOnlyVariant="plain" value="read only plain" aria-label="plain read only text input" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('invalid text input', () => {
    const { asFragment } = render(
      <TextInput {...props} required validated={'error'} aria-label="invalid text input" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('validated text input success', () => {
    render(<TextInput {...props} required validated={ValidatedOptions.success} aria-label="validated text input" />);
    expect(screen.getByLabelText('validated text input')).toHaveClass('pf-m-success');
  });

  test('validated text input warning', () => {
    render(<TextInput {...props} required validated={ValidatedOptions.warning} aria-label="validated text input" />);
    expect(screen.getByLabelText('validated text input')).toHaveClass('pf-m-warning');
  });

  test('validated text input error', () => {
    const { asFragment } = render(
      <TextInput {...props} required validated={ValidatedOptions.error} aria-label="validated text input" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should throw console error when no aria-label, id or aria-labelledby is given', () => {
    const myMock = jest.fn();
    global.console = { ...global.console, error: myMock };

    render(<TextInput {...props} />);

    expect(myMock).toHaveBeenCalled();
  });

  test('should not throw console error when id is given but no aria-label or aria-labelledby', () => {
    const myMock = jest.fn();
    global.console = { ...global.console, error: myMock };

    render(<TextInput {...props} id="5" />);

    expect(myMock).not.toHaveBeenCalled();
  });

  test('should not throw console error when aria-label is given but no id or aria-labelledby', () => {
    const myMock = jest.fn();
    global.console = { ...global.console, error: myMock };

    render(<TextInput {...props} aria-label="test input" />);

    expect(myMock).not.toHaveBeenCalled();
  });

  test('should not throw console error when aria-labelledby is given but no id or aria-label', () => {
    const myMock = jest.fn();
    global.console = { ...global.console, error: myMock };

    render(<TextInput {...props} aria-labelledby="test input" />);

    expect(myMock).not.toHaveBeenCalled();
  });
});
