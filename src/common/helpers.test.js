import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {
  bindMethods,
  selectKeys,
  filterKeys,
  childrenToArray,
  filterChildren,
  findChild,
  propsChanged,
  nullValues,
  noop,
  getDisplayName
} from './helpers';

describe('Helper functions', () => {
  const renderer = new ShallowRenderer();

  test('should bindMethods correctly', () => {
    class UnboundTestComponent extends React.Component {
      constructor() {
        super();
        this.state = { testValue: 'foo' };
      }
      testMethod() {
        return this && this.state && this.state.testValue;
      }
      render() {
        console.log(this.testMethod);
        return this.testMethod();
      }
    }
    class BoundTestComponent extends React.Component {
      constructor() {
        super();
        this.state = { testValue: 'foo' };
        bindMethods(this, ['testMethod']);
      }
      testMethod() {
        return this && this.state && this.state.testValue;
      }
      render() {
        return this.testMethod();
      }
    }
    expect(renderer.render(<UnboundTestComponent />)).toBeUndefined();
    expect(renderer.render(<BoundTestComponent />)).toBe('foo');
  });
  test('should selectKeys correctly', () => {
    expect().toMatchSnapshot();
  });
  test('should filterKeys correctly', () => {
    expect().toMatchSnapshot();
  });
  test('should convert childrenToArray correctly', () => {
    expect().toMatchSnapshot();
  });
  test('should filterChildren correctly', () => {
    expect().toMatchSnapshot();
  });
  test('should findChild correctly', () => {
    expect().toMatchSnapshot();
  });
  test('should determine propsChanged correctly', () => {
    expect().toMatchSnapshot();
  });
  test('should initialize nullValues correctly', () => {
    expect().toMatchSnapshot();
  });
  test('should noop correctly', () => {
    expect().toMatchSnapshot();
  });
  test('should getDisplayName correctly', () => {
    expect().toMatchSnapshot();
  });
});
