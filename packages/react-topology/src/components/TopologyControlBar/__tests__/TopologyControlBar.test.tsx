import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TopologyControlBar, createTopologyControlButtons, defaultControlButtonsOptions } from '../TopologyControlBar';

describe('TopologyControlBar', () => {
  test('should display the default controls correctly', () => {
    const controlButtons = createTopologyControlButtons();
    const onButtonClick = jest.fn();
    const { asFragment } = render(
      <TopologyControlBar
        className="default-test-class"
        id="default-test-id"
        controlButtons={controlButtons}
        onButtonClick={onButtonClick}
      />
    );

    userEvent.click(screen.getByText('Zoom In'));
    expect(onButtonClick).toHaveBeenCalledTimes(1);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should accept button options correctly', () => {
    const zoomInCallback = jest.fn();
    const controlButtons = createTopologyControlButtons({
      ...defaultControlButtonsOptions,
      zoomInCallback,
      zoomInAriaLabel: 'test-zoom-in-aria-label',
      zoomInIcon: <span>test zoom in</span>,
      zoomInTip: 'test zoom in tooltip',
      fitToScreenHidden: true,
      resetViewDisabled: true,
      legend: false
    });
    const { asFragment } = render(
      <TopologyControlBar className="default-test-class" id="default-test-id" controlButtons={controlButtons} />
    );

    userEvent.click(screen.getByText('test zoom in'));
    expect(zoomInCallback).toHaveBeenCalledTimes(1);
    expect(asFragment()).toMatchSnapshot();
  });
});
