import React from 'react';

import { render, screen } from '@testing-library/react';

import AddressBookIcon from '@patternfly/react-icons/dist/esm/icons/address-book-icon';
import { EmptyState, EmptyStateVariant } from '../EmptyState';
import { EmptyStateBody } from '../EmptyStateBody';
import { EmptyStateSecondaryActions } from '../EmptyStateSecondaryActions';
import { EmptyStateIcon } from '../EmptyStateIcon';
import { EmptyStatePrimary } from '../EmptyStatePrimary';
import { Button } from '../../Button';
import { Title, TitleSizes } from '../../Title';

describe('EmptyState', () => {
  test('Main', () => {
    render(
      <EmptyState data-testid="empty-state-test-id">
        <Title headingLevel="h5" size="lg">
          HTTP Proxies
        </Title>
        <EmptyStateBody>
          Defining HTTP Proxies that exist on your network allows you to perform various actions through those proxies.
        </EmptyStateBody>
        <Button variant="primary">New HTTP Proxy</Button>
        <EmptyStateSecondaryActions>
          <Button variant="link" aria-label="learn more action">
            Learn more about this in the documentation.
          </Button>
        </EmptyStateSecondaryActions>
      </EmptyState>
    );
    expect(screen.getByTestId('empty-state-test-id').outerHTML).toMatchSnapshot();
  });

  test('Main variant large', () => {
    render(
      <EmptyState variant={EmptyStateVariant.large} data-testid="empty-state-test-id">
        <Title headingLevel="h3" size={TitleSizes.md}>
          EmptyState large
        </Title>
      </EmptyState>
    );
    expect(screen.getByTestId('empty-state-test-id').outerHTML).toMatchSnapshot();
  });

  test('Main variant small', () => {
    render(
      <EmptyState variant={EmptyStateVariant.small} data-testid="empty-state-test-id">
        <Title headingLevel="h3" size={TitleSizes.md}>
          EmptyState small
        </Title>
      </EmptyState>
    );
    expect(screen.getByTestId('empty-state-test-id').outerHTML).toMatchSnapshot();
  });

  test('Main variant xs', () => {
    render(
      <EmptyState variant={EmptyStateVariant.xs} data-testid="empty-state-test-id">
        <Title headingLevel="h3" size={TitleSizes.md}>
          EmptyState small
        </Title>
      </EmptyState>
    );
    expect(screen.getByTestId('empty-state-test-id').outerHTML).toMatchSnapshot();
  });

  test('Body', () => {
    render(<EmptyStateBody data-testid="body-test-id" />);
    expect(screen.getByTestId('body-test-id').className).toContain('pf-c-empty-state__body');
  });

  test('Secondary Action', () => {
    render(<EmptyStateSecondaryActions data-testid="actions-test-id" />);
    expect(screen.getByTestId('actions-test-id').className).toContain('pf-c-empty-state__secondary');
  });

  test('Icon', () => {
    render(<EmptyStateIcon icon={AddressBookIcon} data-testid="icon-test-id" />);
    expect(screen.getByTestId('icon-test-id').outerHTML).toContain('pf-c-empty-state__icon');
  });

  test('Primary div', () => {
    render(
      <EmptyStatePrimary data-testid="primary-test-id">
        <Button variant="link">Link</Button>
      </EmptyStatePrimary>
    );
    expect(screen.getByTestId('primary-test-id').className).toContain('pf-c-empty-state__primary');
  });

  test('Full height', () => {
    render(
      <EmptyState isFullHeight variant={EmptyStateVariant.large} data-testid="empty-state-test-id">
        <Title headingLevel="h3" size={TitleSizes.md}>
          EmptyState large
        </Title>
      </EmptyState>
    );
    expect(screen.getByTestId('empty-state-test-id').outerHTML).toMatchSnapshot();
  });
});
