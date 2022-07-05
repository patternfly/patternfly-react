import React from 'react';
import { render, screen } from '@testing-library/react';
import { NumberInput } from '../NumberInput';
import userEvent from '@testing-library/user-event';

describe('numberInput', () => {
  test('renders defaults & extra props', () => {
    const { asFragment } = render(<NumberInput className="custom" id="numberInput1" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders value', () => {
    const { asFragment } = render(<NumberInput value={90} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders disabled', () => {
    const { asFragment } = render(<NumberInput value={90} isDisabled />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('disables lower threshold', () => {
    const { asFragment } = render(<NumberInput value={0} min={0} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('disables upper threshold', () => {
    const { asFragment } = render(<NumberInput value={100} max={100} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders unit', () => {
    const { asFragment } = render(<NumberInput value={5} unit="%" unitPosition="after" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders unit & position', () => {
    const { asFragment } = render(<NumberInput value={5} unit="$" unitPosition="before" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders custom width', () => {
    const { asFragment } = render(<NumberInput value={5} widthChars={10} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('passes input props successfully', () => {
    const { asFragment } = render(<NumberInput value={5} onChange={jest.fn()} inputName="test-name" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('passes button props successfully', () => {
    const { asFragment } = render(
      <NumberInput
        value={5}
        onMinus={jest.fn()}
        minusBtnProps={{ id: 'minus-id' }}
        onPlus={jest.fn()}
        plusBtnProps={{ id: 'plus-id' }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders negative value', () => {
    render(<NumberInput value={-999} />);
    expect(screen.getByDisplayValue('-999')).toBeInTheDocument();
  });

  test('renders decimal value', () => {
    render(<NumberInput value={5.5} />);
    expect(screen.getByDisplayValue('5.5')).toBeInTheDocument();
  });

  test('renders negative decimal value', () => {
    render(<NumberInput value={-5.2} />);
    expect(screen.getByDisplayValue('-5.2')).toBeInTheDocument();
  });

  test('does not call onChange callback when the input does not change', () => {
    const onChangeMock = jest.fn();

    render(<NumberInput onChange={onChangeMock}>5</NumberInput>);

    expect(onChangeMock).not.toHaveBeenCalled();
  });

  test('calls onChange callback when input changes', () => {
    const onChangeMock = jest.fn();
    render(<NumberInput onChange={onChangeMock}>55</NumberInput>);

    const input = screen.getByRole('spinbutton');
    userEvent.type(input, '55');

    expect(onChangeMock).toHaveBeenCalledTimes(2);
  });

  test('does not call onBlur callback when input does not lose focus', () => {
    const onBlurMock = jest.fn();

    render(<NumberInput onBlur={onBlurMock}>5</NumberInput>);

    const input = screen.getByRole('spinbutton');
    userEvent.click(input);

    expect(onBlurMock).not.toHaveBeenCalled();
  });

  test('calls onBlur callback when input loses focus', () => {
    const onBlurMock = jest.fn();

    render(<NumberInput onBlur={onBlurMock}>5</NumberInput>);

    const input = screen.getByRole('spinbutton');
    userEvent.click(input);
    userEvent.click(document.body);

    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });

  test('removes trailing zero', () => {
    render(<NumberInput value={120.0} />);
    expect(screen.getByDisplayValue('120')).toBeInTheDocument();
  });

  test('removes many trailing zeroes', () => {
    render(<NumberInput value={120.0100} />);
    expect(screen.getByDisplayValue('120.01')).toBeInTheDocument();
  });

  test('removes leading zero', () => {
    render(<NumberInput value={10} onChange={() => {}} />);
  
    const input = screen.getByRole('spinbutton');
    userEvent.type(input, '{arrowleft}{arrowleft}0');
    expect(input).toHaveDisplayValue('010');
  
    userEvent.click(document.body);
  
    expect(input).toHaveDisplayValue('10');
  });

  test('removes a trailing zero from a negative number', () => {
    render(<NumberInput value={-40.0} />);
    expect(screen.getByDisplayValue('-40')).toBeInTheDocument();
  });

  test('removes trailing zeroes from a negative number', () => {
    render(<NumberInput value={-40.0100} />);
    expect(screen.getByDisplayValue('-40.01')).toBeInTheDocument();
  });

  test('removes leading zero from a negative number', () => {
    render(<NumberInput value={-18} onChange={() => {}} />);
  
    const input = screen.getByRole('spinbutton');
    userEvent.type(input, '{arrowleft}{arrowleft}0');
    expect(input).toHaveDisplayValue('-018');
  
    userEvent.click(document.body);
  
    expect(input).toHaveDisplayValue('-18');
  });

  test('removes leading and trailing zeroes from a positive number', () => {
    render(<NumberInput value={47.0} onChange={() => {}} />);
  
    const input = screen.getByRole('spinbutton');
    userEvent.type(input, '{arrowleft}{arrowleft}0');
    expect(input).toHaveDisplayValue('047');
  
    userEvent.click(document.body);
  
    expect(input).toHaveDisplayValue('47');
  });

  test('removes leading and trailing zeroes from a negative number', () => {
    render(<NumberInput value={-55.0} onChange={() => {}} />);
  
    const input = screen.getByRole('spinbutton');
    userEvent.type(input, '{arrowleft}{arrowleft}0');
    expect(input).toHaveDisplayValue('-055');
  
    userEvent.click(document.body)
  
    expect(input).toHaveDisplayValue('-55');
  });
});
