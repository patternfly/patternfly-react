import * as React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { Radio } from '../Radio';

const props = {
  onChange: jest.fn()
};

describe('Radio check component', () => {
  test('controlled', () => {
    const view = render(<Radio isChecked id="check" aria-label="check" name="check" />);
    expect(view.container).toMatchSnapshot();
  });

  test('uncontrolled', () => {
    const view = render(<Radio id="check" aria-label="check" name="check" />);
    expect(view.container).toMatchSnapshot();
  });

  test('isDisabled', () => {
    const view = render(<Radio id="check" isDisabled aria-label="check" name="check" />);
    expect(view.container).toMatchSnapshot();
  });

  test('isLabelBeforeButton', () => {
    const view = render(<Radio id="check" isLabelBeforeButton label="Radio label" aria-label="check" name="check" />);
    expect(view.container).toMatchSnapshot();
  });

  test('isLabelWrapped', () => {
    const view = render(<Radio id="check" isLabelWrapped label="Radio label" aria-label="check" name="check" />);
    expect(view.container).toMatchSnapshot();
  });

  test('label is string', () => {
    const view = render(<Radio label="Label" id="check" isChecked aria-label="check" name="check" />);
    expect(view.container).toMatchSnapshot();
  });

  test('label is function', () => {
    const functionLabel = () => <h1>Header</h1>;
    const view = render(<Radio label={functionLabel()} id="check" isChecked aria-label="check" name="check" />);
    expect(view.container).toMatchSnapshot();
  });

  test('label is node', () => {
    const view = render(<Radio label={<h1>Header</h1>} id="check" isChecked aria-label="check" name="check" />);
    expect(view.container).toMatchSnapshot();
  });

  test('passing class', () => {
    const view = render(
      <Radio label="label" className="class-123" id="check" isChecked aria-label="check" name="check" />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('passing HTML attribute', () => {
    const view = render(
      <Radio label="label" aria-labelledby="labelId" id="check" isChecked aria-label="check" name="check" />
    );
    expect(view.container).toMatchSnapshot();
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

  test('Radio description', () => {
    const view = shallow(<Radio id="check" name="check" aria-label="check" description="Text description..." />);
    const descriptionEl = view.find('span[className="pf-c-radio__description"]');
    expect(descriptionEl.length).toBe(1);
    expect(descriptionEl.text()).toBe('Text description...');
  });

  test('Radio body', () => {
    const view = shallow(<Radio id="check" name="check" aria-label="check" body="Text body..." />);
    const bodyEl = view.find('span[className="pf-c-radio__body"]');
    expect(bodyEl.length).toBe(1);
    expect(bodyEl.text()).toBe('Text body...');
  });

  test('should throw console error when no id is given', () => {
    const myMock = jest.fn();
    global.console = { ...global.console, error: myMock };
    shallow(<Radio name="check" aria-label="check" description="Text description..." />);
    expect(myMock).toBeCalled();
  });
});
