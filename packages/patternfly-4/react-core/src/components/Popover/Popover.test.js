import React from 'react';
import { mount } from 'enzyme';
import { Popover } from './index';
import { Button } from '@patternfly/react-core';

test('popover renders close-button, header and body', () => {
  const view = mount(<Popover header="popover header">popover body</Popover>);
  expect(view).toMatchSnapshot();
});

test('popover is calling onClose when clicking the close button', () => {
  const onClose = jest.fn();
  const view = mount(
    <Popover header="popover header" onClose={onClose}>
      popover body
    </Popover>
  );
  expect(onClose.mock.calls).toHaveLength(0);
  view.find(Button).simulate('click');
  expect(onClose.mock.calls).toHaveLength(1);
});
