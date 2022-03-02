import React from 'react';
import { render } from '@testing-library/react';
import { NumberInput } from '../NumberInput';

describe('numberInput', () => {
  test('renders defaults & extra props', () => {
    const view = render(<NumberInput className="custom" id="numberInput1" />);
    expect(view.container).toMatchSnapshot();
  });

  test('renders value', () => {
    const view = render(<NumberInput value={90} />);
    expect(view.container).toMatchSnapshot();
  });

  test('renders disabled', () => {
    const view = render(<NumberInput value={90} isDisabled />);
    expect(view.container).toMatchSnapshot();
  });

  test('disables lower threshold', () => {
    const view = render(<NumberInput value={0} min={0} />);
    expect(view.container).toMatchSnapshot();
  });

  test('disables upper threshold', () => {
    const view = render(<NumberInput value={100} max={100} />);
    expect(view.container).toMatchSnapshot();
  });

  test('renders unit', () => {
    const view = render(<NumberInput value={5} unit="%" unitPosition="after" />);
    expect(view.container).toMatchSnapshot();
  });

  test('renders unit & position', () => {
    const view = render(<NumberInput value={5} unit="$" unitPosition="before" />);
    expect(view.container).toMatchSnapshot();
  });

  test('renders custom width', () => {
    const view = render(<NumberInput value={5} widthChars="10" />);
    expect(view.container).toMatchSnapshot();
  });

  test('passes input props successfully', () => {
    const view = render(<NumberInput value={5} onChange={jest.fn()} inputName="test-name" />);
    expect(view.container).toMatchSnapshot();
  });

  test('passes button props successfully', () => {
    const view = render(
      <NumberInput
        value={5}
        onMinus={jest.fn()}
        minusBtnProps={{ id: 'minus-id' }}
        onPlus={jest.fn()}
        plusBtnProps={{ id: 'plus-id' }}
      />
    );
    expect(view.container).toMatchSnapshot();
  });
});
