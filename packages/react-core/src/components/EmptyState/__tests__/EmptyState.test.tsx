import React from 'react';

import { render, screen } from '@testing-library/react';

import AddressBookIcon from '@patternfly/react-icons/dist/esm/icons/address-book-icon';

import { EmptyState, EmptyStateVariant } from '../EmptyState';
import { EmptyStateBody } from '../EmptyStateBody';
import { EmptyStateActions } from '../EmptyStateActions';
import { Button } from '../../Button';
import { EmptyStateHeader } from '../EmptyStateHeader';
import { EmptyStateFooter } from '../EmptyStateFooter';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

describe('EmptyState', () => {
  test('Main', () => {
    const { asFragment } = render(
      <EmptyState titleText="HTTP Proxies">
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
      <EmptyState titleText="EmptyState large" variant={EmptyStateVariant.lg}></EmptyState>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Main variant small', () => {
    const { asFragment } = render(
      <EmptyState titleText="EmptyState small" variant={EmptyStateVariant.sm}></EmptyState>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Main variant xs', () => {
    const { asFragment } = render(
      <EmptyState titleText="EmptyState extra small" variant={EmptyStateVariant.xs}></EmptyState>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Body', () => {
    render(<EmptyStateBody className="custom-empty-state-body" data-testid="body-test-id" />);
    expect(screen.getByTestId('body-test-id')).toHaveClass(`${styles.emptyStateBody} custom-empty-state-body`);
  });

  test('Actions', () => {
    render(<EmptyStateActions className="custom-empty-state-secondary" data-testid="actions-test-id" />);
    expect(screen.getByTestId('actions-test-id')).toHaveClass(styles.emptyStateActions);
  });

  test('Full height', () => {
    const { asFragment } = render(
      <EmptyState titleText="EmptyState large" isFullHeight variant={EmptyStateVariant.lg}></EmptyState>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Header with icon', () => {
    const { asFragment } = render(<EmptyStateHeader titleText="Empty state" icon={AddressBookIcon} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Header with title text renders heading level 1 by default', () => {
    render(<EmptyStateHeader titleText="Empty state" />);
    expect(screen.getByRole('heading', { level: 1, name: 'Empty state' })).toHaveClass(styles.emptyStateTitleText);
  });

  test('Header renders custom class passed via titleClassName', () => {
    render(<EmptyStateHeader titleText="Empty state" titleClassName={'testTitleClassName'} />);
    expect(screen.getByRole('heading', { level: 1, name: 'Empty state' })).toHaveClass('testTitleClassName');
  });

  test('Header renders the title as other heading levels when one is passed using headingLevel', () => {
    render(<EmptyStateHeader titleText="Empty state" headingLevel="h3" />);
    expect(screen.getByRole('heading', { level: 3, name: 'Empty state' })).toHaveClass(styles.emptyStateTitleText);
  });

  test('title is not rendered when titleText is not passed', () => {
    render(<EmptyStateHeader headingLevel="h3" />);
    expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument();
  });

  test('Footer', () => {
    render(<EmptyStateFooter className="custom-empty-state-footer" data-testid="actions-test-id" />);
    expect(screen.getByTestId('actions-test-id')).toHaveClass('custom-empty-state-footer');
  });
});
