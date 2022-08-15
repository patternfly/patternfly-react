import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TopologyControlBar, createTopologyControlButtons, defaultControlButtonsOptions } from '../TopologyControlBar';

describe('TopologyControlBar', () => {
  test('should display the default controls correctly', async () => {
    const controlButtons = createTopologyControlButtons();
    const onButtonClick = jest.fn();
    const user = userEvent.setup();

    const { asFragment } = render(
      <TopologyControlBar
        className="default-test-class"
        id="default-test-id"
        controlButtons={controlButtons}
        onButtonClick={onButtonClick}
      />
    );

    await user.click(screen.getByText('Zoom In'));
    expect(onButtonClick).toHaveBeenCalledTimes(1);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should accept button options correctly', async () => {
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
    const user = userEvent.setup();

    const { asFragment } = render(
      <TopologyControlBar className="default-test-class" id="default-test-id" controlButtons={controlButtons} />
    );

    await user.click(screen.getByText('test zoom in'));
    expect(zoomInCallback).toHaveBeenCalledTimes(1);
    expect(asFragment()).toMatchSnapshot();
  });
});
