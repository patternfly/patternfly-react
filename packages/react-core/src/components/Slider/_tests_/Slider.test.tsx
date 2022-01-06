import React from 'react';
import { mount, shallow } from 'enzyme';
import { Slider } from '../Slider';
import { Button } from '../../Button';

describe('slider', () => {
  test('renders continuous slider', () => {
    const view = mount(<Slider value={50} isInputVisible inputValue={50} />);
    expect(view).toMatchSnapshot();
  });

  test('renders discrete slider', () => {
    const view = mount(<Slider value={50} min={10} max={110} step={2} isInputVisible inputValue={50} />);
    expect(view).toMatchSnapshot();
  });

  test('renders discrete slider with custom steps', () => {
    const view = mount(
      <Slider
        value={50}
        customSteps={[
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

  test('renders continuous slider with custom steps', () => {
    const view = mount(
      <Slider
        value={50}
        areCustomStepsContinuous
        customSteps={[
          { value: 0, label: '0%' },
          { value: 100, label: '100%' }
        ]}
      />
    );
    expect(view).toMatchSnapshot();
  });

  test('renders slider with input', () => {
    const view = mount(<Slider value={50} isInputVisible inputValue={50} inputLabel="%" inputPosition="right" />);
    expect(view).toMatchSnapshot();
  });

  test('renders slider with input above thumb', () => {
    const view = mount(<Slider value={50} isInputVisible inputValue={50} inputLabel="%" inputPosition="aboveThumb" />);
    expect(view).toMatchSnapshot();
  });

  test('renders slider with input actions', () => {
    const view = mount(
      <Slider
        value={50}
        leftActions={<Button variant="plain" aria-label="Minus" />}
        rightActions={<Button variant="plain" aria-label="Plus" />}
      />
    );
    expect(view).toMatchSnapshot();
  });

  test('renders disabled slider', () => {
    const view = mount(<Slider value={50} isDisabled />);
    expect(view).toMatchSnapshot();
  });

  test('renders slider with tooltip on thumb', () => {
    const view = shallow(<Slider value={50} hasTooltipOverThumb />);
    expect(view).toMatchSnapshot();
  });
});
