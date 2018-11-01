import React from 'react';
import Radio from './Radio';
import { shallow } from 'enzyme';

const props = {
  onChange: jest.fn()
};

describe('Radio check component', () => {
  test('controlled', () => {
    const view = shallow(<Radio isChecked id="check" aria-label="check" name="check" />);
    expect(view).toMatchSnapshot();
  });

  test('uncontrolled', () => {
    const view = shallow(<Radio id="check" aria-label="check" name="check" />);
    expect(view).toMatchSnapshot();
  });

  test('isDisabled', () => {
    const view = shallow(<Radio id="check" isDisabled aria-label="check" name="check" />);
    expect(view).toMatchSnapshot();
  });

  test('label is string', () => {
    const view = shallow(<Radio label="Label" id="check" isChecked aria-label="check" name="check" />);
    expect(view).toMatchSnapshot();
  });

  test('label is function', () => {
    const functionLabel = () => <h1>Header</h1>;
    const view = shallow(<Radio label={functionLabel()} id="check" isChecked aria-label="check" name="check" />);
    expect(view).toMatchSnapshot();
  });

  test('label is node', () => {
    const view = shallow(<Radio label={<h1>Header</h1>} id="check" isChecked aria-label="check" name="check" />);
    expect(view).toMatchSnapshot();
  });

  test('passing class', () => {
    const view = shallow(
      <Radio label="label" className="class-123" id="check" isChecked aria-label="check" name="check" />
    );
    expect(view).toMatchSnapshot();
  });

  test('passing HTML attribute', () => {
    const view = shallow(
      <Radio label="label" aria-labelledby="labelId" id="check" isChecked aria-label="check" name="check" />
    );
    expect(view).toMatchSnapshot();
  });

  test('Radio passes value and event to onChange handler', () => {
    const newValue = true;
    const event = {
      currentTarget: { checked: newValue }
    };
    const view = shallow(<Radio id="check" {...props} aria-label="check" name="check" />);
    view.find('input').simulate('change', event);
    expect(props.onChange).toBeCalledWith(newValue, event);
  });
});
