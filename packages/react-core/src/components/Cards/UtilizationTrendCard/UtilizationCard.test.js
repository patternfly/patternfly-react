import React from 'react';
import { mount } from 'enzyme';
import {
  UtilizationCard,
  UtilizationCardDetails,
  UtilizationCardDetailsCount,
  UtilizationCardDetailsDesc,
  UtilizationCardDetailsLine1,
  UtilizationCardDetailsLine2
} from './index';

import { CardTitle } from '../index';

test('Utilization Card is working properly', () => {
  const component = mount(
    <UtilizationCard>
      <CardTitle>Card Title</CardTitle>
    </UtilizationCard>
  );

  expect(component.render()).toMatchSnapshot();
});
test('Utilization Card Details is working properly', () => {
  const component = mount(
    <UtilizationCardDetails>
      <UtilizationCardDetailsCount>200</UtilizationCardDetailsCount>
      <UtilizationCardDetailsDesc>
        <UtilizationCardDetailsLine1>Available</UtilizationCardDetailsLine1>
        <UtilizationCardDetailsLine2>of 1300 Gbps</UtilizationCardDetailsLine2>
      </UtilizationCardDetailsDesc>
    </UtilizationCardDetails>
  );

  expect(component.render()).toMatchSnapshot();
});
test('Utilization Card Details Description is working properly', () => {
  const component = mount(
    <UtilizationCardDetailsDesc>
      <UtilizationCardDetailsLine1>Available</UtilizationCardDetailsLine1>
      <UtilizationCardDetailsLine2>of 1300 Gbps</UtilizationCardDetailsLine2>
    </UtilizationCardDetailsDesc>
  );

  expect(component.render()).toMatchSnapshot();
});
test('Utilization Card Details Line1,2 is working properly', () => {
  const component = mount(
    <div>
      <UtilizationCardDetailsLine1>Available</UtilizationCardDetailsLine1>
      <UtilizationCardDetailsLine2>of 1300 Gbps</UtilizationCardDetailsLine2>
    </div>
  );

  expect(component.render()).toMatchSnapshot();
});
