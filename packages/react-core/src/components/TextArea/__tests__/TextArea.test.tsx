import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextArea, TextAreaBase } from '../TextArea';
import { ValidatedOptions } from '../../../helpers/constants';

const props = {
  onChange: jest.fn(),
  value: 'test textarea'
};

describe('TextArea', () => {
  test('textarea input passes value and event to onChange handler', () => {
    render(<TextAreaBase {...props} aria-label="test textarea" />);

    userEvent.type(screen.getByLabelText('test textarea'), 'new test textarea');
    expect(props.onChange).toHaveBeenCalled();
  });

  test('simple text input', () => {
    render(<TextArea {...props} aria-label="simple textarea" />);
    expect(screen.getByLabelText('simple textarea').outerHTML).toMatchSnapshot();
  });

  test('disabled text input using isDisabled', () => {
    render(<TextArea {...props} aria-label="is disabled textarea" isDisabled />);
    expect(screen.getByLabelText('is disabled textarea').outerHTML).toMatchSnapshot();
  });

  test('disabled text input using disabled', () => {
    render(<TextArea {...props} aria-label="disabled textarea" disabled />);
    expect(screen.getByLabelText('disabled textarea').outerHTML).toMatchSnapshot();
  });

  test('read only text input using isReadOnly', () => {
    render(<TextArea {...props} aria-label="is read only textarea" isReadOnly />);
    expect(screen.getByLabelText('is read only textarea').outerHTML).toMatchSnapshot();
  });

  test('read only text input using readOnly', () => {
    render(<TextArea {...props} aria-label="read only textarea" readOnly />);
    expect(screen.getByLabelText('read only textarea').outerHTML).toMatchSnapshot();
  });

  test('invalid text area', () => {
    render(<TextArea {...props} required validated={'error'} aria-label="invalid textarea" />);
    expect(screen.getByLabelText('invalid textarea').outerHTML).toMatchSnapshot();
  });

  test('validated text area success', () => {
    render(<TextArea {...props} required validated={ValidatedOptions.success} aria-label="validated textarea" />);
    expect(screen.getByLabelText('validated textarea').className).toContain('pf-m-success');
  });

  test('validated text area warning', () => {
    render(<TextArea {...props} required validated={ValidatedOptions.warning} aria-label="validated textarea" />);
    expect(screen.getByLabelText('validated textarea').className).toContain('pf-m-warning');
  });

  test('validated text area error', () => {
    render(<TextArea {...props} required validated={ValidatedOptions.error} aria-label="validated textarea" />);
    expect(screen.getByLabelText('validated textarea').outerHTML).toMatchSnapshot();
  });

  test('vertically resizable text area', () => {
    render(<TextArea resizeOrientation="vertical" {...props} aria-label="vertical resize textarea" />);
    expect(screen.getByLabelText('vertical resize textarea').outerHTML).toMatchSnapshot();
  });

  test('horizontally resizable text area', () => {
    render(
      <TextArea
        resizeOrientation="horizontal"
        {...props}
        required
        validated={'error'}
        aria-label="horizontal resize textarea"
      />
    );
    expect(screen.getByLabelText('horizontal resize textarea').outerHTML).toMatchSnapshot();
  });

  test('should throw console error when no aria-label or id is given', () => {
    const myMock = jest.fn();
    global.console = { ...global.console, error: myMock };

    render(<TextArea {...props} />);

    expect(myMock).toBeCalled();
  });

  test('should not throw console error when id is given but no aria-label', () => {
    const myMock = jest.fn();
    global.console = { ...global.console, error: myMock };

    render(<TextArea {...props} id="5" />);

    expect(myMock).not.toBeCalled();
  });

  test('should not throw console error when aria-label is given but no id', () => {
    const myMock = jest.fn();
    global.console = { ...global.console, error: myMock };

    render(<TextArea {...props} aria-label="test textarea" />);

    expect(myMock).not.toBeCalled();
  });
});
