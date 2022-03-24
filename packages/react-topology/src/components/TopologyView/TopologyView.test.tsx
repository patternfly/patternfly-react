import * as React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { TopologyView } from './index';

describe('TopologyView', () => {
  test('should display an empty topology correctly', () => {
    const view = render(<TopologyView className="my-test-class" id="simple-test-id" />);
    expect(view.container).toMatchSnapshot();
  });

  test('should display topology correctly', () => {
    const view = render(
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
    expect(view.container).toMatchSnapshot();
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

  test('should display resizable topology sidebar correctly', () => {
    const view = mount(
      <TopologyView
        className="my-test-class"
        id="simple-test-id"
        contextToolbar={<div id="test-context-bar" />}
        viewToolbar={<div id="test-view-bar" />}
        controlBar={<div id="test-control-bar" />}
        sideBar={<div>Test SideBar</div>}
        sideBarOpen={false}
        sideBarResizable
      >
        <div id="test-canvas" />
      </TopologyView>
    );
    expect(view).toMatchSnapshot();
    expect(view.find('div.pf-c-drawer').length).toBe(1);
    expect(view.find('div.pf-c-drawer.pf-m-expanded').length).toBe(0);
  });
  test('should display topology w/ open resizable sidebar correctly', () => {
    const view = mount(
      <TopologyView
        className="my-test-class"
        id="simple-test-id"
        sideBarResizable
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
    expect(view.find('div.pf-c-drawer').length).toBe(1);
    expect(view.find('div.pf-c-drawer.pf-m-expanded').length).toBe(1);
  });
});
