/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';

import UtilizationBar from './UtilizationBar';

test('basic UtilizationBar renders properly', () => {
  const component = renderer.create(<UtilizationBar now={60} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('UtilizationBar with custom tooltips renders properly', () => {
  const overriddenTooltip = () => <strong>This tooltip is overridden.</strong>;
  const component = renderer.create(
    <UtilizationBar
      now={60}
      availableTooltipFunction={overriddenTooltip}
      usedTooltipFunction={overriddenTooltip}
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('UtilizationBar with thresholds renders properly', () => {
  const component = renderer.create(
    <UtilizationBar now={60} thresholdWarning={10} thresholdError={40} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
