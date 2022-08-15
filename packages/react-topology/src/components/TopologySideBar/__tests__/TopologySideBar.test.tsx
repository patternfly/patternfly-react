import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TopologySideBar } from '../index';

describe('TopologySideBar', () => {
  test('should display topology sidebar correctly', () => {
    render(
      <TopologySideBar className="my-test-class" show header={<span id="test-header-id">Header</span>}>
        <div id="test-canvas" />
      </TopologySideBar>
    );
    expect(screen.getByText('Header')).toBeInTheDocument();
  });

  test('should display topology sidebar w/ close correctly', async () => {
    const mockClose = jest.fn();
    const user = userEvent.setup();

    render(
      <TopologySideBar className="my-test-class" show onClose={mockClose}>
        <div id="test-canvas" />
      </TopologySideBar>
    );

    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(mockClose).toHaveBeenCalled();
  });

  test('should hide the sidebar correctly', () => {
    render(
      <TopologySideBar className="my-test-class" show={false} header={<span id="test-header-id">Header</span>}>
        <div id="test-canvas">test canvas content</div>
      </TopologySideBar>
    );
    expect(screen.queryByText('test canvas content')).toBeNull();
  });
});
