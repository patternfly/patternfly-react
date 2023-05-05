import React from 'react';

import { render, screen } from '@testing-library/react';

import AddressBookIcon from '@patternfly/react-icons/dist/esm/icons/address-book-icon';

import { EmptyState, EmptyStateVariant } from '../EmptyState';
import { EmptyStateBody } from '../EmptyStateBody';
import { EmptyStateActions } from '../EmptyStateActions';
import { Button } from '../../Button';
import { EmptyStateHeader } from '../EmptyStateHeader';
import { EmptyStateFooter } from '../EmptyStateFooter';
import { EmptyStateIcon } from '../../../../dist/esm';

describe('EmptyState', () => {
  test('Main', () => {
    const { asFragment } = render(
      <EmptyState>
        <EmptyStateHeader titleText="HTTP Proxies" />
        <EmptyStateBody>
          Defining HTTP Proxies that exist on your network allows you to perform various actions through those proxies.
        </EmptyStateBody>
        <EmptyStateFooter>
          <EmptyStateActions>
            <Button variant="primary">New HTTP Proxy</Button>
          </EmptyStateActions>
          <EmptyStateActions>
            <Button variant="link" aria-label="learn more action">
              Learn more about this in the documentation.
            </Button>
          </EmptyStateActions>
        </EmptyStateFooter>
      </EmptyState>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Main variant large', () => {
    const { asFragment } = render(
      <EmptyState variant={EmptyStateVariant.lg}>
        <EmptyStateHeader titleText="EmptyState large" />
      </EmptyState>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Main variant small', () => {
    const { asFragment } = render(
      <EmptyState variant={EmptyStateVariant.sm}>
        <EmptyStateHeader titleText="EmptyState small" />
      </EmptyState>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Main variant xs', () => {
    const { asFragment } = render(
      <EmptyState variant={EmptyStateVariant.xs}>
        <EmptyStateHeader titleText="EmptyState extra small" />
      </EmptyState>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Body', () => {
    render(<EmptyStateBody className="custom-empty-state-body" data-testid="body-test-id" />);
    expect(screen.getByTestId('body-test-id')).toHaveClass('pf-v5-c-empty-state__body custom-empty-state-body');
  });

  test('Actions', () => {
    render(<EmptyStateActions className="custom-empty-state-secondary" data-testid="actions-test-id" />);
    expect(screen.getByTestId('actions-test-id')).toHaveClass('pf-v5-c-empty-state__actions');
  });

  test('Full height', () => {
    const { asFragment } = render(
      <EmptyState isFullHeight variant={EmptyStateVariant.lg}>
        <EmptyStateHeader titleText="EmptyState large" />
      </EmptyState>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Header with icon', () => {
    const { asFragment } = render(<EmptyStateHeader icon={<EmptyStateIcon icon={AddressBookIcon} />} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Header with title text renders heading level 1 by default', () => {
    render(<EmptyStateHeader titleText="Empty state" />);
    expect(screen.getByRole('heading', { level: 1, name: 'Empty state' })).toHaveClass(
      'pf-v5-c-empty-state__title-text'
    );
  });

  test('Header renders custom class passed via titleClassName', () => {
    render(<EmptyStateHeader titleText="Empty state" titleClassName={'testTitleClassName'} />);
    expect(screen.getByRole('heading', { level: 1, name: 'Empty state' })).toHaveClass('testTitleClassName');
  });

  test('Header renders the title as other heading levels when one is passed using headingLevel', () => {
    render(<EmptyStateHeader titleText="Empty state" headingLevel="h3" />);
    expect(screen.getByRole('heading', { level: 3, name: 'Empty state' })).toHaveClass(
      'pf-v5-c-empty-state__title-text'
    );
  });

  test('Headers render children', () => {
    render(<EmptyStateHeader>Title text</EmptyStateHeader>);
    expect(screen.getByText('Title text')).toBeVisible();
  });

  test('Footer', () => {
    render(<EmptyStateFooter className="custom-empty-state-footer" data-testid="actions-test-id" />);
    expect(screen.getByTestId('actions-test-id')).toHaveClass('custom-empty-state-footer');
  });
});
