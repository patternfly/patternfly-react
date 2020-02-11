import * as React from 'react';
import { mount } from 'enzyme';
import { TopologySideBar } from './index';

describe('TopologySideBar', () => {
  test('should display topology sidebar correctly', () => {
    const view = mount(
      <TopologySideBar className="my-test-class" show header={<span id="test-header-id">Header</span>}>
        <div id="test-canvas" />
      </TopologySideBar>
    );
    expect(view).toMatchSnapshot();
    expect(view.find('.pf-topology-side-bar__header #test-header-id').length).toBe(1);
  });

  test('should display topology sidebar w/ close correctly', () => {
    const mockClose = jest.fn();
    const view = mount(
      <TopologySideBar className="my-test-class" show onClose={mockClose}>
        <div id="test-canvas" />
      </TopologySideBar>
    );
    expect(view).toMatchSnapshot();
    view.find('button.pf-topology-side-bar__dismiss').simulate('click');
    expect(mockClose).toBeCalled();
  });

  test('should hide the sidebar correctly', () => {
    const view = mount(
      <TopologySideBar className="my-test-class" show={false} header={<span id="test-header-id">Header</span>}>
        <div id="test-canvas" />
      </TopologySideBar>
    );
    expect(view).toMatchSnapshot();
    expect(view.find('#test-canvas').length).toBe(0);
  });
});
