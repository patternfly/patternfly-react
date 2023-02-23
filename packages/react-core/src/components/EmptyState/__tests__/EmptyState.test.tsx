import React from 'react';

import { render, screen } from '@testing-library/react';

import AddressBookIcon from '@patternfly/react-icons/dist/esm/icons/address-book-icon';
import { EmptyState, EmptyStateVariant } from '../EmptyState';
import { EmptyStateBody } from '../EmptyStateBody';
import { EmptyStateActions } from '../EmptyStateActions';
import { EmptyStateIcon } from '../EmptyStateIcon';
import { Button } from '../../Button';
import { EmptyStateHeader } from '../EmptyStateHeader';
import { EmptyStateFooter } from '../EmptyStateFooter';

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
      <EmptyState variant={EmptyStateVariant.large}>
        <EmptyStateHeader titleText="EmptyState large" />
      </EmptyState>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Main variant small', () => {
    const { asFragment } = render(
      <EmptyState variant={EmptyStateVariant.small}>
        <EmptyStateHeader titleText="EmptyState small" />
      </EmptyState>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Main variant xs', () => {
    const { asFragment } = render(
      <EmptyState variant={EmptyStateVariant.xs}>
        <EmptyStateHeader titleText="EmptyState small" />
      </EmptyState>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Body', () => {
    render(<EmptyStateBody className="custom-empty-state-body" data-testid="body-test-id" />);
    expect(screen.getByTestId('body-test-id')).toHaveClass('custom-empty-state-body pf-c-empty-state__body');
  });

  xtest('Actions', () => {
    render(<EmptyStateActions className="custom-empty-state-secondary" data-testid="actions-test-id" />);
    expect(screen.getByTestId('actions-test-id')).toHaveClass('pf-c-empty-state__actions');
  });

  test('Icon', () => {
    render(<EmptyStateIcon icon={AddressBookIcon} data-testid="icon-test-id" />);
    expect(screen.getByTestId)
    expect(screen.getByTestId('icon-test-id').parentNode).toHaveClass('pf-c-empty-state__icon');
  });

  test('Wrap icon in a div', () => {
    const { container } = render(
      <EmptyStateIcon icon={AddressBookIcon} className="custom-empty-state-icon" id="empty-state-icon-id" />
    );

    expect(container.querySelector('div')).toHaveClass('pf-c-empty-state__icon custom-empty-state-icon');
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  test('Full height', () => {
    const { asFragment } = render(
      <EmptyState isFullHeight variant={EmptyStateVariant.large}>
        <EmptyStateHeader titleText="EmptyState large" />
      </EmptyState>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // TODO rewrite tests for EmptyStateHeader -- icon and title to use React testing library
  // https://github.com/patternfly/patternfly-react/wiki/React-Testing-Library-Basics,-Best-Practices,-and-Guidelines
  test('Header', () => {
    const { container } = render(<EmptyStateHeader titleText='Empty state' icon={AddressBookIcon} />);

    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(container.querySelector('h1')?.textContent).toBe('Empty state');
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  //TODO write tests for EmptyStateFooter
});
