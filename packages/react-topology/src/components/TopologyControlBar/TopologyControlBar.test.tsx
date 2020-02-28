import * as React from 'react';
import { mount } from 'enzyme';
import {
  TopologyControlBar,
  createTopologyControlButtons,
  defaultControlButtonsOptions,
  ZOOM_IN
} from './TopologyControlBar';

describe('TopologyControlBar', () => {
  test('should display the default controls correctly', () => {
    const controlButtons = createTopologyControlButtons();
    const mockfn = jest.fn();
    const view = mount(
      <TopologyControlBar
        className="default-test-class"
        id="default-test-id"
        controlButtons={controlButtons}
        onButtonClick={mockfn}
      />
    );
    expect(view).toMatchSnapshot();
    view
      .find(`#${ZOOM_IN}`)
      .at(0)
      .simulate('click');
    expect(mockfn.mock.calls).toHaveLength(1);
  });

  test('should accept button options correctly', () => {
    const mockfn = jest.fn();
    const controlButtons = createTopologyControlButtons({
      ...defaultControlButtonsOptions,
      zoomInCallback: mockfn,
      zoomInAriaLabel: 'test-zoom-in-aria-label',
      zoomInIcon: <span>test zoom in</span>,
      zoomInTip: 'test zoom in tooltip',
      fitToScreenHidden: true,
      resetViewDisabled: true,
      legend: false
    });
    const view = mount(
      <TopologyControlBar className="default-test-class" id="default-test-id" controlButtons={controlButtons} />
    );
    expect(view).toMatchSnapshot();
    view
      .find(`#${ZOOM_IN}`)
      .at(0)
      .simulate('click');
    expect(mockfn.mock.calls).toHaveLength(1);
  });
});
