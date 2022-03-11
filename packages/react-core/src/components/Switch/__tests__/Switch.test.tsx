import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Switch } from '../Switch';

const props = {
  onChange: jest.fn(),
  isChecked: false
};

describe('Switch', () => {
  test('switch label for attribute equals input id attribute', () => {
    render(<Switch id="foo" aria-label="Switch label" />);
    expect(screen.getByLabelText('Switch label').getAttribute('id')).toEqual('foo');
  });

  test('switch label id is auto generated', () => {
    render(<Switch aria-label="Switch label" />);
    expect(screen.getByLabelText('Switch label')).toHaveAttribute('id');
  });

  test('switch is checked', () => {
    render(<Switch id="switch-is-checked" label="On" labelOff="Off" isChecked aria-label="Switch label" />);
    expect(expect(screen.getByLabelText('Switch label').outerHTML)).toMatchSnapshot();
  });

  test('switch is not checked', () => {
    render(<Switch id="switch-is-not-checked" label="On" labelOff="Off" isChecked={false} aria-label="Switch label" />);
    expect(expect(screen.getByLabelText('Switch label').outerHTML)).toMatchSnapshot();
  });

  test('switch with only label is checked', () => {
    render(<Switch id="switch-is-checked" label="On" isChecked={true} />);
    expect(expect(screen.getAllByText('On')[0].outerHTML)).toMatchSnapshot();
  });

  test('switch with only label is not checked', () => {
    render(<Switch id="switch-is-not-checked" label="Off" isChecked={false} />);
    expect(expect(screen.getAllByText('Off')[0].outerHTML)).toMatchSnapshot();
  });

  test('no label switch is checked', () => {
    render(<Switch id="no-label-switch-is-checked" isChecked aria-label="Switch label" />);
    expect(expect(screen.getByLabelText('Switch label').outerHTML)).toMatchSnapshot();
  });

  test('no label switch is not checked', () => {
    render(<Switch id="no-label-switch-is-not-checked" isChecked={false} aria-label="Switch label" />);
    expect(expect(screen.getByLabelText('Switch label').outerHTML)).toMatchSnapshot();
  });

  test('switch is checked and disabled', () => {
    render(<Switch id="switch-is-checked-and-disabled" isChecked isDisabled aria-label="Switch label" />);
    expect(expect(screen.getByLabelText('Switch label').outerHTML)).toMatchSnapshot();
  });

  test('switch is not checked and disabled', () => {
    render(<Switch id="switch-is-not-checked-and-disabled" isChecked={false} isDisabled aria-label="Switch label" />);
    expect(expect(screen.getByLabelText('Switch label').outerHTML)).toMatchSnapshot();
  });

  test('switch passes value and event to onChange handler', () => {
    render(<Switch id="onChange-switch" {...props} aria-label="Switch label" />);

    userEvent.click(screen.getByLabelText('Switch label'));
    expect(props.onChange.mock.calls[0][0]).toBe(true);
  });

  test('should throw console error when no aria-label or label is given', () => {
    const myMock = jest.fn();

    global.console = { ...global.console, error: myMock };

    render(<Switch {...props} />);
    expect(myMock).toBeCalled();
  });

  test('should not throw console error when label is given but no aria-label', () => {
    const myMock = jest.fn();
    global.console = { ...global.console, error: myMock };

    render(<Switch {...props} label="test switch" />);

    expect(myMock).not.toBeCalled();
  });

  test('should not throw console error when aria-label is given but no label', () => {
    const myMock = jest.fn();
    global.console = { ...global.console, error: myMock };

    render(<Switch {...props} aria-label="test switch" />);

    expect(myMock).not.toBeCalled();
  });

  test('should apply reversed modifier', () => {
    render(<Switch id="reversed-switch" label="reversed switch" isReversed aria-label="Switch label" />);
    expect(screen.getByLabelText('Switch label').parentElement.className).toContain('pf-m-reverse');
  });
});
