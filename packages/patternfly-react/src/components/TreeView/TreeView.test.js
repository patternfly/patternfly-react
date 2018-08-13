import React from 'react';
import { mount, shallow } from 'enzyme';

import { TreeView } from './index';
import { basicData } from './__mocks__/data';

test('TreeView renders properly', () => {
  const component = mount(<TreeView nodes={basicData} />);

  expect(component.render()).toMatchSnapshot();
});

describe('keyboard navigation', () => {
  let wrapper;
  let visibleNodes;
  beforeEach(() => {
    wrapper = mount(<TreeView nodes={basicData} />);
    visibleNodes = wrapper.find('TreeViewNode').filterWhere(
      n =>
        !n
          .find('li')
          .first()
          .hasClass('node-hidden')
    );
  });

  test('the arrow down key focuses the next visible node', () => {
    const firstNode = visibleNodes.at(0);
    const nextNode = visibleNodes.at(1).instance().nodeRef.current;

    const spy = jest.spyOn(nextNode, 'focus');

    firstNode.prop('onFocus')(firstNode.instance().nodeRef.current);
    wrapper.find({ role: 'tree' }).simulate('keyDown', { key: 'ArrowDown' });

    expect(spy).toHaveBeenCalled();
  });

  test('the arrow up key focuses the previous visible node', () => {
    const firstNode = visibleNodes.at(1);
    const previousNode = visibleNodes.at(0).instance().nodeRef.current;

    const spy = jest.spyOn(previousNode, 'focus');

    firstNode.prop('onFocus')(firstNode.instance().nodeRef.current);
    wrapper.find({ role: 'tree' }).simulate('keyDown', { key: 'ArrowUp' });

    expect(spy).toHaveBeenCalled();
  });

  test('pressing an alpha key moves focus to the next node whose text starts with that letter', () => {
    const firstNode = visibleNodes.at(0);
    const nextNode = visibleNodes.at(1).instance().nodeRef.current;

    const spy = jest.spyOn(nextNode, 'focus');

    firstNode.prop('onFocus')(firstNode.instance().nodeRef.current);
    wrapper.find({ role: 'tree' }).simulate('keyPress', { key: 'P' });

    expect(spy).toHaveBeenCalled();
  });

  test('the home key focuses the first node', () => {
    const firstNode = visibleNodes.at(0).instance().nodeRef.current;
    const spy = jest.spyOn(firstNode, 'focus');

    wrapper.find({ role: 'tree' }).simulate('keyDown', { key: 'Home' });

    expect(spy).toHaveBeenCalled();
  });

  test('the end key focuses the last visible node', () => {
    const lastNode = visibleNodes.last().instance().nodeRef.current;
    const spy = jest.spyOn(lastNode, 'focus');

    wrapper.find({ role: 'tree' }).simulate('keyDown', { key: 'End' });

    expect(spy).toHaveBeenCalled();
  });
});

describe('clearExpandSiblings', () => {
  test('clears the expandSiblings state', () => {
    const wrapper = shallow(<TreeView nodes={basicData} />);
    wrapper.instance().clearExpandSiblings();
    expect(wrapper.state('expandSiblings')).toBe('');
  });
});
