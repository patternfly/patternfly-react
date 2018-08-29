import React from 'react';
import { mount } from 'enzyme';

import UtilizationBar from './UtilizationBar';

test('basic UtilizationBar renders properly', () => {
  const component = mount(<UtilizationBar now={60} />);
  expect(component.render()).toMatchSnapshot();
});

test('UtilizationBar with custom tooltips renders properly', () => {
  const overriddenTooltip = () => <strong>This tooltip is overridden.</strong>;
  const component = mount(
    <UtilizationBar now={60} availableTooltipFunction={overriddenTooltip} usedTooltipFunction={overriddenTooltip} />
  );
  expect(component.render()).toMatchSnapshot();
});

test('UtilizationBar with thresholds renders properly', () => {
  const component = mount(<UtilizationBar now={60} thresholdWarning={10} thresholdError={40} />);
  expect(component.render()).toMatchSnapshot();
});
