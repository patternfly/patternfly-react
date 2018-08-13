import React from 'react';
import { shallow, mount } from 'enzyme';

import TreeViewNode from './TreeViewNode';
import { basicData } from './__mocks__/data';
import { KEYS } from '../../common/helpers';

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

  test('hitting the ArrowRight key expands the node', () => {
    const wrapper = shallow(<TreeViewNode {...props} />);
    wrapper.instance().onKeyDown({ ...e, key: KEYS.ARROW_RIGHT });
    expect(wrapper.state('expanded')).toBe(true);
  });

  test('hitting the LeftArrow key collapses the node', () => {
    const wrapper = shallow(<TreeViewNode {...props} />);
    wrapper.instance().onKeyDown({ ...e, key: KEYS.ARROW_LEFT });
    expect(wrapper.state('expanded')).toBe(false);
  });
});

describe('#toggleExpandedState', () => {
  test('toggles the expanded state property', () => {
    const wrapper = shallow(<TreeViewNode {...props} />);

    wrapper.instance().toggleExpandedState();

    expect(wrapper.state('expanded')).toBe(true);
  });
});
