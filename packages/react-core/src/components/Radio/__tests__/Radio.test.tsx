import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Radio } from '../Radio';

const props = {
  onChange: jest.fn()
};

describe('Radio', () => {
  test('controlled', () => {
    render(<Radio isChecked id="check" aria-label="check" name="check" />);
    expect(screen.getByRole('radio').outerHTML).toMatchSnapshot();
  });

  test('uncontrolled', () => {
    render(<Radio id="check" aria-label="check" name="check" />);
    expect(screen.getByRole('radio').outerHTML).toMatchSnapshot();
  });

  test('isDisabled', () => {
    render(<Radio id="check" isDisabled aria-label="check" name="check" />);
    expect(screen.getByRole('radio').outerHTML).toMatchSnapshot();
  });

  test('isLabelBeforeButton', () => {
    render(<Radio id="check" isLabelBeforeButton label="Radio label" aria-label="check" name="check" />);
    expect(screen.getByRole('radio').outerHTML).toMatchSnapshot();
  });

  test('isLabelWrapped', () => {
    render(<Radio id="check" isLabelWrapped label="Radio label" aria-label="check" name="check" />);
    expect(screen.getByRole('radio').outerHTML).toMatchSnapshot();
  });

  test('label is string', () => {
    render(<Radio label="Label" id="check" isChecked aria-label="check" name="check" />);
    expect(screen.getByRole('radio').outerHTML).toMatchSnapshot();
  });

  test('label is function', () => {
    const functionLabel = () => <h1>Header</h1>;
    render(<Radio label={functionLabel()} id="check" isChecked aria-label="check" name="check" />);
    expect(screen.getByRole('radio').outerHTML).toMatchSnapshot();
  });

  test('label is node', () => {
    render(<Radio label={<h1>Header</h1>} id="check" isChecked aria-label="check" name="check" />);
    expect(screen.getByRole('radio').outerHTML).toMatchSnapshot();
  });

  test('passing class', () => {
    render(<Radio label="label" className="class-123" id="check" isChecked aria-label="check" name="check" />);
    expect(screen.getByRole('radio').outerHTML).toMatchSnapshot();
  });

  test('passing HTML attribute', () => {
    render(<Radio label="label" aria-labelledby="labelId" id="check" isChecked aria-label="check" name="check" />);
    expect(screen.getByRole('radio').outerHTML).toMatchSnapshot();
  });

  test('Radio passes value and event to onChange handler', () => {
    render(<Radio id="check" {...props} aria-label="check" name="check" />);

    userEvent.click(screen.getByRole('radio'));
    expect(props.onChange).toHaveBeenCalled();
  });

  test('Radio description', () => {
    render(<Radio id="check" name="check" aria-label="check" description="Text description..." />);
    expect(screen.getByText('Text description...')).toBeInTheDocument();
  });

  test('Radio body', () => {
    render(<Radio id="check" name="check" aria-label="check" body="Text body..." />);
    expect(screen.getByText('Text body...')).toBeInTheDocument();
  });

  test('should throw console error when no id is given', () => {
    const myMock = jest.fn();
    global.console = { ...global.console, error: myMock };

    render(<Radio id={undefined} name="check" aria-label="check" description="Text description..." />);

    expect(myMock).toBeCalled();
  });
});
