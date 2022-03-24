import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  test('controlled', () => {
    render(<Checkbox isChecked id="check" aria-label="check" />);
    expect(screen.getByRole('checkbox').outerHTML).toMatchSnapshot();
  });

  test('controlled - 3rd state', () => {
    render(<Checkbox isChecked={null} id="check" aria-label="check" />);
    expect(screen.getByRole('checkbox').outerHTML).toMatchSnapshot();
  });

  test('uncontrolled', () => {
    render(<Checkbox id="check" aria-label="check" />);
    expect(screen.getByRole('checkbox').outerHTML).toMatchSnapshot();
  });

  test('isDisabled', () => {
    render(<Checkbox id="check" isDisabled aria-label="check" />);
    expect(screen.getByRole('checkbox').outerHTML).toMatchSnapshot();
  });

  test('label is string', () => {
    render(<Checkbox label="Label" id="check" isChecked aria-label="check" />);
    expect(screen.getByRole('checkbox').outerHTML).toMatchSnapshot();
  });

  test('label is function', () => {
    const functionLabel = () => <h1>Header</h1>;
    render(<Checkbox label={functionLabel()} id="check" isChecked aria-label="check" />);
    expect(screen.getByRole('checkbox').outerHTML).toMatchSnapshot();
  });

  test('label is node', () => {
    render(<Checkbox label={<h1>Header</h1>} id="check" isChecked aria-label="check" />);
    expect(screen.getByRole('checkbox').outerHTML).toMatchSnapshot();
  });

  test('passing class', () => {
    render(<Checkbox label="label" className="class-123" id="check" isChecked aria-label="check" />);
    expect(screen.getByRole('checkbox').outerHTML).toMatchSnapshot();
  });

  test('passing HTML attribute', () => {
    render(<Checkbox label="label" aria-labelledby="labelId" id="check" isChecked aria-label="check" />);
    expect(screen.getByRole('checkbox').outerHTML).toMatchSnapshot();
  });

  test('passing description', () => {
    render(<Checkbox id="check" label="checkbox" description="Text description..." />);
    expect(screen.getByText('Text description...')).toBeInTheDocument();
  });

  test('passing body', () => {
    render(<Checkbox id="check" label="checkbox" body="This is where custom content goes." />);

    expect(screen.getByText('This is where custom content goes.')).toBeInTheDocument();
  });

  test('checkbox onChange handler called when component is clicked', () => {
    const onChangeHandler = jest.fn();
    render(<Checkbox id="check" onChange={onChangeHandler} aria-label="check" isChecked={false} />);

    userEvent.click(screen.getByLabelText('check'));
    expect(onChangeHandler).toBeCalled();
  });

  test('should throw console error when no id is given', () => {
    const myMock = jest.fn();
    global.console = { ...global.console, error: myMock };

    render(<Checkbox id={undefined} />);
    expect(myMock).toBeCalled();
  });
});
