import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { TopologyView } from '../index';

describe('TopologyView', () => {
  test('should display an empty topology correctly', () => {
    const { asFragment } = render(<TopologyView className="my-test-class" id="simple-test-id" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should display topology correctly', () => {
    const { asFragment } = render(
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
    expect(asFragment()).toMatchSnapshot();
  });

  test('should display topology sidebar correctly', () => {
    render(
      <TopologyView
        className="my-test-class"
        id="simple-test-id"
        contextToolbar={<div id="test-context-bar" />}
        viewToolbar={<div id="test-view-bar" />}
        controlBar={<div id="test-control-bar" />}
        sideBar={<div>Test SideBar</div>}
        sideBarOpen={false}
        data-testid="test-id"
      >
        <div id="test-canvas" />
      </TopologyView>
    );

    const topologyViewHtml = screen.getByTestId('test-id').outerHTML;

    expect(topologyViewHtml).toContain('pf-topology-container__with-sidebar');
    expect(topologyViewHtml).not.toContain('pf-topology-container__with-sidebar--open');
  });
  test('should display topology w/ open sidebar correctly', () => {
    render(
      <TopologyView
        className="my-test-class"
        id="simple-test-id"
        contextToolbar={<div id="test-context-bar" />}
        viewToolbar={<div id="test-view-bar" />}
        controlBar={<div id="test-control-bar" />}
        sideBar={<div>Test SideBar</div>}
        sideBarOpen
        data-testid="test-id"
      >
        <div id="test-canvas" />
      </TopologyView>
    );

    expect(screen.getByTestId('test-id').outerHTML).toContain('pf-topology-container__with-sidebar--open');
  });

  test('should display resizable topology sidebar correctly', () => {
    render(
      <TopologyView
        className="my-test-class"
        id="simple-test-id"
        contextToolbar={<div id="test-context-bar" />}
        viewToolbar={<div id="test-view-bar" />}
        controlBar={<div id="test-control-bar" />}
        sideBar={<div>Test SideBar</div>}
        sideBarOpen={false}
        sideBarResizable
        data-testid="test-id"
      >
        <div id="test-canvas" />
      </TopologyView>
    );

    const topologyViewHtml = screen.getByTestId('test-id').outerHTML;

    expect(topologyViewHtml).toContain('pf-c-drawer');
    expect(topologyViewHtml).not.toContain('pf-c-drawer pf-m-expanded');
  });
  test('should display topology w/ open resizable sidebar correctly', () => {
    render(
      <TopologyView
        className="my-test-class"
        id="simple-test-id"
        sideBarResizable
        contextToolbar={<div id="test-context-bar" />}
        viewToolbar={<div id="test-view-bar" />}
        controlBar={<div id="test-control-bar" />}
        sideBar={<div>Test SideBar</div>}
        sideBarOpen
        data-testid="test-id"
      >
        <div id="test-canvas" />
      </TopologyView>
    );

    const topologyViewHtml = screen.getByTestId('test-id').outerHTML;

    expect(topologyViewHtml).toContain('pf-c-drawer');
    expect(topologyViewHtml).toContain('pf-c-drawer pf-m-expanded');
  });
});
