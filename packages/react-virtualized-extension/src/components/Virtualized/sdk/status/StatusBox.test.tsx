import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { StatusBox } from './StatusBox';

describe('StatusBox', () => {
  it('should render correctly on 404', () => {
    render(
      <StatusBox loadError={{ status: 404, message: 'message' }} noData>
        <span>Content</span>
      </StatusBox>
    );
    expect(screen.getByText('404: Not Found')).toBeVisible();
    expect(screen.queryByText('Content')).toEqual(null);
  });

  it('should render correctly on 403', () => {
    render(
      <StatusBox loadError={{ status: 403, message: 'Error 403' }} noData>
        <span>Content</span>
      </StatusBox>
    );
    expect(screen.getByText('Restricted Access')).toBeVisible();
    expect(screen.getByText('Error 403')).toBeVisible();
    expect(screen.queryByText('Content')).toEqual(null);
  });

  it('should render correctly on other error', () => {
    render(
      <StatusBox loadError={{ status: 500, message: 'Server error' }} emptyStateDescription="No data to display" noData>
        <span>Content</span>
      </StatusBox>
    );
    expect(screen.getByText('Server error')).toBeVisible();
    expect(screen.getByText('No data to display')).toBeVisible();
    expect(screen.queryByText('Content')).toEqual(null);
  });

  it('should render correctly loading state', () => {
    render(
      <StatusBox loaded={false} noData>
        <span>Content</span>
      </StatusBox>
    );
    expect(screen.getByRole('progressbar')).toBeVisible();
    expect(screen.queryByText('Content')).toEqual(null);
  });

  it('should render correctly with no data, filters and custom no data empty state', () => {
    render(
      <StatusBox CustomNoDataEmptyState={() => <div>Custom no data</div>} loaded noData>
        <span>Content</span>
      </StatusBox>
    );
    expect(screen.getByText('Custom no data')).toBeVisible();
    expect(screen.queryByText('Content')).toEqual(null);
  });

  it('should render correctly with no data and custom empty state', () => {
    render(
      <StatusBox CustomEmptyState={() => <div>Custom</div>} loaded noData>
        <span>Content</span>
      </StatusBox>
    );
    expect(screen.getByText('Custom')).toBeVisible();
    expect(screen.queryByText('Content')).toEqual(null);
  });

  it('should render correctly with no data and custom empty state description', () => {
    render(
      <StatusBox emptyStateDescription="Empty description" loaded noData>
        <span>Content</span>
      </StatusBox>
    );
    expect(screen.getByText('Empty description')).toBeVisible();
    expect(screen.queryByText('Content')).toEqual(null);
  });

  it('should render correctly with with data', () => {
    render(
      <StatusBox loaded noData={false}>
        <span>Content</span>
      </StatusBox>
    );
    expect(screen.getByText('Content')).toBeVisible();
  });
});
