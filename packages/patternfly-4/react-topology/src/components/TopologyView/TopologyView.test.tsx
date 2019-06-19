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
});
