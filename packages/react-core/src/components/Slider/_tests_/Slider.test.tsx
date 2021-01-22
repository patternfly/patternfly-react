import React from 'react';
import { mount } from 'enzyme';
import { Slider } from '../Slider';
import { Button } from '../../Button';

describe('slider', () => {
  test('renders continuous slider', () => {
    const view = mount(<Slider currentValue={50} isInputVisible inputValue={50} />);
    expect(view).toMatchSnapshot();
  });

  test('renders discrete slider', () => {
    const view = mount(
      <Slider
        isDiscrete
        currentValue={50}
        steps={[
          { value: 0, label: '0%' },
          { value: 25, label: '25%', isLabelHidden: true },
          { value: 50, label: '50%' },
          { value: 75, label: '75%', isLabelHidden: true },
          { value: 100, label: '100%' }
        ]}
      />
    );
    expect(view).toMatchSnapshot();
  });

  test('renders slider with input', () => {
    const view = mount(<Slider currentValue={50} isInputVisible inputValue={50} inputLabel="%" inputPosition="left" />);
    expect(view).toMatchSnapshot();
  });

  test('renders slider with input above thumb', () => {
    const view = mount(
      <Slider currentValue={50} isInputVisible inputValue={50} inputLabel="%" inputPosition="aboveThumb" />
    );
    expect(view).toMatchSnapshot();
  });

  test('renders slider with input actions', () => {
    const view = mount(
      <Slider
        currentValue={50}
        leftActions={<Button variant="plain" aria-label="Minus" />}
        rightActions={<Button variant="plain" aria-label="Plus" />}
      />
    );
    expect(view).toMatchSnapshot();
  });
});
