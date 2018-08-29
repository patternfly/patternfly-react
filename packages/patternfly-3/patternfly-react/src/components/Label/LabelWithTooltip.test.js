import React from 'react';
import { shallow } from 'enzyme';
import LabelWithTooltip from './LabelWithTooltip';
import { noop } from '../../common/helpers';

test('snapshot test', () => {
  const view = shallow(
    <LabelWithTooltip
      key={11}
      category={{ label: 'food', id: 1 }}
      value={{ label: 'Salad', id: 11 }}
      onDeleteClick={noop}
      truncate={noop}
    />
  );
  expect(view).toMatchSnapshot();
});
