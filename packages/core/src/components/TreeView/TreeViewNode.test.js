import React from 'react';
import { shallow, mount } from 'enzyme';

import TreeViewNode from './TreeViewNode';
import { basicData } from './__mocks__/data';

const props = {
  node: basicData[0],
  key: 1,
  index: 1,
  level: 1
};

let e;
beforeEach(() => {
  e = { stopPropagation: jest.fn() };
});

describe('#onKeyPress', () => {
  test('hitting the space key toggles expanded', () => {
    const wrapper = shallow(<TreeViewNode {...props} />);
    wrapper.instance().onKeyPress({ ...e, key: ' ' });

    expect(wrapper.state('expanded')).toBe(true);
  });

  test('hitting the enter key triggers the selectNode callback', () => {
    const selectNode = jest.fn();
    const wrapper = mount(<TreeViewNode {...props} selectNode={selectNode} />);

    wrapper.instance().onKeyPress({ ...e, key: 'Enter' });

    expect(selectNode).toHaveBeenLastCalledWith(props.node);
  });

  test('hitting the enter key focuses the node', () => {
    const wrapper = mount(<TreeViewNode {...props} />);
    const nodeRef = wrapper.instance().nodeRef.current;
    const spy = jest.spyOn(nodeRef, 'focus');

    wrapper.instance().onKeyPress({ ...e, key: 'Enter' });

    expect(spy).toHaveBeenCalled();
  });
});

describe('#toggleExpandedState', () => {
  test('toggles the expanded state property', () => {
    const wrapper = shallow(<TreeViewNode {...props} />);

    wrapper.instance().toggleExpandedState();

    expect(wrapper.state('expanded')).toBe(true);
  });
});
