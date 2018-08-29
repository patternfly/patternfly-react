import React from 'react';
import { mount } from 'enzyme';
import { ResizeSensor, mockDetach } from 'css-element-queries';
import CardHeightMatching from './CardHeightMatching';
import * as helpers from '../../common/helpers';

jest.mock('css-element-queries');

jest.spyOn(helpers, 'debounce').mockImplementation(v => v);
const mockQuerySelectorAll = jest.fn();
HTMLElement.prototype.querySelectorAll = mockQuerySelectorAll;

const mockElement = {
  scrollHeight: 0,
  style: {
    height: 0
  }
};

const props = {
  selector: ['first', 'second'],
  children: 'children'
};

beforeEach(() => {
  mockDetach.mockClear();
  ResizeSensor.mockClear();
  helpers.debounce.mockClear();
  mockQuerySelectorAll.mockReturnValue([mockElement]);
});

test('creates a ResizeSensor for each selector', () => {
  mount(<CardHeightMatching {...props} />);
  expect(ResizeSensor).toHaveBeenCalledTimes(props.selector.length);
  expect(ResizeSensor).toBeCalledWith(expect.arrayContaining([mockElement]), expect.any(Function));
});

test('allows selector to be a string', () => {
  mount(<CardHeightMatching {...props} selector="selector" />);
  expect(ResizeSensor).toHaveBeenCalledTimes(1);
});

test('debounces resize events', () => {
  mount(<CardHeightMatching {...props} />);
  expect(helpers.debounce).toBeCalledWith(expect.any(Function), 200);
});

test('sets max height on mount', () => {
  const firstElement = {
    ...mockElement,
    scrollHeight: 0
  };
  const secondElement = {
    ...mockElement,
    scrollHeight: 10
  };
  mockQuerySelectorAll.mockReturnValue([firstElement, secondElement]);
  jest.useFakeTimers();
  mount(<CardHeightMatching {...props} />);
  jest.runAllTimers();
  expect(firstElement.style.height).toBe(`${secondElement.scrollHeight}px`);
  expect(secondElement.style.height).toBe(`${secondElement.scrollHeight}px`);
  jest.useRealTimers();
});

test('sets max height on update', () => {
  const firstElement = {
    ...mockElement,
    scrollHeight: 0
  };
  const secondElement = {
    ...mockElement,
    scrollHeight: 10
  };
  mockQuerySelectorAll.mockReturnValue([firstElement, secondElement]);
  jest.useFakeTimers();
  const view = mount(<CardHeightMatching {...props} />);
  jest.runAllTimers();
  secondElement.scrollHeight = 20;
  view.setProps(props);
  jest.runAllTimers();
  expect(firstElement.style.height).toBe(`${secondElement.scrollHeight}px`);
  expect(secondElement.style.height).toBe(`${secondElement.scrollHeight}px`);
  jest.useRealTimers();
});

test('detaches on unmount', () => {
  const view = mount(<CardHeightMatching {...props} />);
  view.unmount();
  expect(mockDetach).toHaveBeenCalledTimes(props.selector.length);
});

test('handles resize trigger without a container', () => {
  let debounceHandler;
  helpers.debounce.mockImplementationOnce(handler => {
    debounceHandler = handler;
    return handler;
  });
  jest.useFakeTimers();
  const view = mount(<CardHeightMatching {...props} />);
  jest.runAllTimers();
  view.unmount();
  mockQuerySelectorAll.mockClear();
  debounceHandler();
  expect(mockQuerySelectorAll).not.toBeCalled();
  jest.useRealTimers();
});

test('sets height on update', () => {
  let debounceHandler;
  helpers.debounce.mockImplementationOnce(handler => {
    debounceHandler = handler;
    return handler;
  });
  jest.useFakeTimers();
  const view = mount(<CardHeightMatching {...props} />);
  jest.runAllTimers();
  view.unmount();
  mockQuerySelectorAll.mockClear();
  debounceHandler();
  expect(mockQuerySelectorAll).not.toBeCalled();
  jest.useRealTimers();
});
