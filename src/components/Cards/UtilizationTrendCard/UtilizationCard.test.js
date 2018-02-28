import React from 'react';
import renderer from 'react-test-renderer';
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
  const component = renderer.create(
    <UtilizationCard>
      <CardTitle>Card Title</CardTitle>
    </UtilizationCard>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Utilization Card Details is working properly', () => {
  const component = renderer.create(
    <UtilizationCardDetails>
      <UtilizationCardDetailsCount>200</UtilizationCardDetailsCount>
      <UtilizationCardDetailsDesc>
        <UtilizationCardDetailsLine1>Available</UtilizationCardDetailsLine1>
        <UtilizationCardDetailsLine2>of 1300 Gbps</UtilizationCardDetailsLine2>
      </UtilizationCardDetailsDesc>
    </UtilizationCardDetails>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Utilization Card Details Description is working properly', () => {
  const component = renderer.create(
    <UtilizationCardDetailsDesc>
      <UtilizationCardDetailsLine1>Available</UtilizationCardDetailsLine1>
      <UtilizationCardDetailsLine2>of 1300 Gbps</UtilizationCardDetailsLine2>
    </UtilizationCardDetailsDesc>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Utilization Card Details Line1,2 is working properly', () => {
  const component = renderer.create(
    <div>
      <UtilizationCardDetailsLine1>Available</UtilizationCardDetailsLine1>
      <UtilizationCardDetailsLine2>of 1300 Gbps</UtilizationCardDetailsLine2>
    </div>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
