import * as React from 'react';
import { shallow } from 'enzyme';
import { ToggleGroupItemElement, ToggleGroupItemVariant } from '../ToggleGroupItemElement';

test('text variant', () => {
  const view = shallow(<ToggleGroupItemElement variant={ToggleGroupItemVariant.text}>Test</ToggleGroupItemElement>);
  expect(view).toMatchSnapshot();
});

test('icon variant', () => {
  const view = shallow(<ToggleGroupItemElement variant={ToggleGroupItemVariant.icon}>ICON</ToggleGroupItemElement>);
  expect(view).toMatchSnapshot();
});

test('empty', () => {
  const view = shallow(<ToggleGroupItemElement />);
  expect(view).toMatchSnapshot();
});
