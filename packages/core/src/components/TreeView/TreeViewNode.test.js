import React from 'react';
import { shallow, mount } from 'enzyme';

import TreeViewNode from './TreeViewNode';
import { basicData } from './__mocks__/data';

const props = {
  node: basicData[0],
  key: 1,
  index: 1,
  level: 1,
  focusedNodeId: '',
  setSize: basicData.length
};

let e;
beforeEach(() => {
  e = { stopPropagation: jest.fn() };
});

describe('#onKeyPress', () => {
  test('hitting the enter or space key triggers the selectNode callback', () => {
    const selectNode = jest.fn();
    const wrapper = mount(<TreeViewNode {...props} selectNode={selectNode} />);

    wrapper.instance().onKeyDown({ ...e, key: 'Enter' });
    wrapper.instance().onKeyDown({ ...e, key: ' ' });
    expect(selectNode).toHaveBeenCalledTimes(2);
    expect(selectNode).toHaveBeenLastCalledWith(props.node);
  });

  test('hitting the enter key focuses the node', () => {
    const wrapper = mount(<TreeViewNode {...props} />);
    const nodeRef = wrapper.instance().nodeRef.current;
    const spy = jest.spyOn(nodeRef, 'focus');

    wrapper.instance().onKeyDown({ ...e, key: 'Enter' });

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
