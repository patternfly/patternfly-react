import React from 'react';
import { mount } from 'enzyme';
import { Touchspin } from '../Touchspin';

describe('touchspin', () => {
  test('renders defaults & extra props', () => {
    const view = mount(<Touchspin className="custom" id="touchspin1" />);
    expect(view).toMatchSnapshot();
  });

  test('renders value', () => {
    const view = mount(<Touchspin value={90} />);
    expect(view).toMatchSnapshot();
  });

  test('renders disabled', () => {
    const view = mount(<Touchspin value={90} isDisabled />);
    expect(view).toMatchSnapshot();
  });

  test('disables lower threshold', () => {
    const view = mount(<Touchspin value={0} min={0} />);
    expect(view).toMatchSnapshot();
  });

  test('disables upper threshold', () => {
    const view = mount(<Touchspin value={100} max={100} />);
    expect(view).toMatchSnapshot();
  });

  test('renders unit', () => {
    const view = mount(<Touchspin value={5} unit="%" unitPosition="after" />);
    expect(view).toMatchSnapshot();
  });

  test('renders unit & position', () => {
    const view = mount(<Touchspin value={5} unit="$" unitPosition="before" />);
    expect(view).toMatchSnapshot();
  });

  test('renders custom width', () => {
    const view = mount(<Touchspin value={5} widthChars="10" />);
    expect(view).toMatchSnapshot();
  });

  test('passes input props successfully', () => {
    const view = mount(<Touchspin value={5} onChange={jest.fn()} inputName="test-name" />);
    expect(view).toMatchSnapshot();
  });

  test('passes button props successfully', () => {
    const view = mount(
      <Touchspin
        value={5}
        onMinus={jest.fn()}
        minusBtnProps={{ id: 'minus-id' }}
        onPlus={jest.fn()}
        plusBtnProps={{ id: 'plus-id' }}
      />
    );
    expect(view).toMatchSnapshot();
  });
});
