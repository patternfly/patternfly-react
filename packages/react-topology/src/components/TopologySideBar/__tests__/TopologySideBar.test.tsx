import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

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

  test('should display topology sidebar w/ close correctly', () => {
    const mockClose = jest.fn();

    render(
      <TopologySideBar className="my-test-class" show onClose={mockClose} data-testid="test-id">
        <div id="test-canvas" />
      </TopologySideBar>
    );

    userEvent.click(screen.getByRole('button', { name: 'Close' }));
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
