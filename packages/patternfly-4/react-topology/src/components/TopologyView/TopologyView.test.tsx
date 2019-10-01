import * as React from 'react';
import { mount } from 'enzyme';
import { TopologyView } from './index';

describe('TopologyView', () => {
  test('should display an empty topology correctly', () => {
    const view = mount(<TopologyView className="my-test-class" id="simple-test-id" />);
    expect(view).toMatchSnapshot();
  });

  test('should display topology correctly', () => {
    const view = mount(
      <TopologyView
        className="my-test-class"
        id="simple-test-id"
        contextToolbar={<div id="test-context-bar" />}
        viewToolbar={<div id="test-view-bar" />}
        controlBar={<div id="test-control-bar" />}
      >
        <div id="test-canvas" />
      </TopologyView>
    );
    expect(view).toMatchSnapshot();
  });

  test('should display topology sidebar correctly', () => {
    const view = mount(
      <TopologyView
        className="my-test-class"
        id="simple-test-id"
        contextToolbar={<div id="test-context-bar" />}
        viewToolbar={<div id="test-view-bar" />}
        controlBar={<div id="test-control-bar" />}
        sideBar={<div>Test SideBar</div>}
        sideBarOpen={false}
      >
        <div id="test-canvas" />
      </TopologyView>
    );
    expect(view).toMatchSnapshot();
    expect(view.find('div.pf-topology-container__with-sidebar').length).toBe(1);
    expect(view.find('div.pf-topology-container__with-sidebar.pf-topology-container__with-sidebar--open').length).toBe(
      0
    );
  });
  test('should display topology w/ open sidebar correctly', () => {
    const view = mount(
      <TopologyView
        className="my-test-class"
        id="simple-test-id"
        contextToolbar={<div id="test-context-bar" />}
        viewToolbar={<div id="test-view-bar" />}
        controlBar={<div id="test-control-bar" />}
        sideBar={<div>Test SideBar</div>}
        sideBarOpen
      >
        <div id="test-canvas" />
      </TopologyView>
    );
    expect(view).toMatchSnapshot();
    expect(view.find('div.pf-topology-container__with-sidebar.pf-topology-container__with-sidebar--open').length).toBe(
      1
    );
  });
});
